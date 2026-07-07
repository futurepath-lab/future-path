const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");

const files = {
  schema: "catalog-schema.json",
  careers: "careers.sample.json",
  cities: "cities.sample.json",
  majors: "majors.sample.json"
};

function readJson(fileName) {
  const filePath = path.join(dataDir, fileName);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function fail(message) {
  throw new Error(message);
}

function assertArray(value, label) {
  if (!Array.isArray(value)) fail(`${label} must be an array`);
}

function assertNonEmptyString(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    fail(`${label} must be a non-empty string`);
  }
}

function assertRequiredFields(item, required, label) {
  required.forEach((field) => {
    if (!(field in item)) fail(`${label} is missing required field: ${field}`);
  });
}

function assertUniqueIds(items, label) {
  const seen = new Set();
  items.forEach((item) => {
    assertNonEmptyString(item.id, `${label}.id`);
    if (seen.has(item.id)) fail(`${label} has duplicate id: ${item.id}`);
    seen.add(item.id);
  });
}

function assertTraitWeights(weights, validTraits, label) {
  if (!weights || typeof weights !== "object" || Array.isArray(weights)) {
    fail(`${label}.weights must be an object`);
  }

  Object.entries(weights).forEach(([trait, value]) => {
    if (!validTraits.includes(trait)) fail(`${label}.weights has unknown trait: ${trait}`);
    if (typeof value !== "number" || value < 0) fail(`${label}.weights.${trait} must be a non-negative number`);
  });
}

function assertTraitArray(traits, validTraits, label) {
  assertArray(traits, label);
  traits.forEach((trait) => {
    if (!validTraits.includes(trait)) fail(`${label} has unknown trait: ${trait}`);
  });
}

function assertSourceQuality(value, sourceQualityLevels, label) {
  if (!sourceQualityLevels.includes(value)) fail(`${label} has invalid source_quality: ${value}`);
}

function validateCareers(careers, schema, cityIds, majorNames) {
  assertArray(careers, "careers");
  assertUniqueIds(careers, "careers");

  careers.forEach((career) => {
    const label = `career:${career.id || "(missing id)"}`;
    assertRequiredFields(career, schema.career.required, label);
    assertNonEmptyString(career.title, `${label}.title`);
    assertArray(career.tags, `${label}.tags`);
    assertArray(career.roles, `${label}.roles`);
    assertArray(career.skills, `${label}.skills`);
    assertTraitWeights(career.weights, schema.traits, label);
    assertSourceQuality(career.source_quality, schema.sourceQualityLevels, label);

    if (!career.barrier || typeof career.barrier !== "object") fail(`${label}.barrier must be an object`);
    if (typeof career.barrier.level !== "number" || career.barrier.level < 1 || career.barrier.level > 5) {
      fail(`${label}.barrier.level must be 1-5`);
    }
    assertArray(career.barrier.reasons, `${label}.barrier.reasons`);
    assertArray(career.dropout_points, `${label}.dropout_points`);
    assertArray(career.evidence, `${label}.evidence`);
    assertArray(career.city_ids, `${label}.city_ids`);

    career.city_ids.forEach((cityId) => {
      if (!cityIds.has(cityId)) {
        console.warn(`Warning: ${label}.city_ids references city not in sample file: ${cityId}`);
      }
    });

    ["primary", "secondary", "supporting"].forEach((group) => {
      assertArray(career.major_plan[group], `${label}.major_plan.${group}`);
      career.major_plan[group].forEach((majorName) => {
        if (!majorNames.has(majorName)) {
          console.warn(`Warning: ${label}.major_plan.${group} references major not in sample file: ${majorName}`);
        }
      });
    });
  });
}

function validateCities(cities, schema) {
  assertArray(cities, "cities");
  assertUniqueIds(cities, "cities");

  cities.forEach((city) => {
    const label = `city:${city.id || "(missing id)"}`;
    assertRequiredFields(city, schema.city.required, label);
    assertNonEmptyString(city.name, `${label}.name`);
    assertArray(city.industries, `${label}.industries`);
    assertTraitArray(city.traits, schema.traits, `${label}.traits`);
    ["cost_level", "pace_level", "stable_path_level"].forEach((field) => {
      if (typeof city[field] !== "number" || city[field] < 1 || city[field] > 5) {
        fail(`${label}.${field} must be 1-5`);
      }
    });
    assertArray(city.sights, `${label}.sights`);
  });
}

function validateMajors(majors, schema, careerIds) {
  assertArray(majors, "majors");
  assertUniqueIds(majors, "majors");

  majors.forEach((major) => {
    const label = `major:${major.id || "(missing id)"}`;
    assertRequiredFields(major, schema.major.required, label);
    assertNonEmptyString(major.name, `${label}.name`);
    assertTraitArray(major.fit_traits, schema.traits, `${label}.fit_traits`);
    assertArray(major.courses, `${label}.courses`);
    assertArray(major.connected_careers, `${label}.connected_careers`);
    major.connected_careers.forEach((careerId) => {
      if (!careerIds.has(careerId)) {
        console.warn(`Warning: ${label}.connected_careers references career not in sample file: ${careerId}`);
      }
    });
    ["year1", "year2", "year3", "year4"].forEach((year) => {
      assertArray(major.college_path[year], `${label}.college_path.${year}`);
    });
    assertArray(major.misunderstandings, `${label}.misunderstandings`);
  });
}

function main() {
  const schema = readJson(files.schema);
  const careers = readJson(files.careers);
  const cities = readJson(files.cities);
  const majors = readJson(files.majors);

  const cityIds = new Set(cities.map((city) => city.id));
  const careerIds = new Set(careers.map((career) => career.id));
  const majorNames = new Set(majors.map((major) => major.name));

  validateCities(cities, schema);
  validateMajors(majors, schema, careerIds);
  validateCareers(careers, schema, cityIds, majorNames);

  console.log(`Data validation passed: ${careers.length} careers, ${cities.length} cities, ${majors.length} majors.`);
}

main();
