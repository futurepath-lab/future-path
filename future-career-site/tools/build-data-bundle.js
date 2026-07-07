const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const outputPath = path.join(dataDir, "catalog-data.js");

function readJson(fileName) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, fileName), "utf8"));
}

function main() {
  const catalog = {
    generatedAt: new Date().toISOString(),
    careers: readJson("careers.sample.json"),
    cities: readJson("cities.sample.json"),
    majors: readJson("majors.sample.json")
  };

  const content = `window.FuturePathCatalog = ${JSON.stringify(catalog, null, 2)};\n`;
  fs.writeFileSync(outputPath, content, "utf8");
  console.log(`Wrote ${outputPath}`);
}

main();
