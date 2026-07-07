const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const repoRoot = path.resolve(root, "..");
const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "package.json",
  "README.md",
  ".nojekyll",
  "data/catalog-data.js",
  "data/catalog-preview.html",
  "data/careers.sample.json",
  "data/cities.sample.json",
  "data/majors.sample.json",
  "docs/deployment-checklist.md",
  "docs/github-pages-publish-guide.md",
  "docs/beta-feedback.html",
  "docs/beta-test-guide.html",
  "docs/feedback-analysis-board.md",
  "docs/privacy-and-disclaimer.html",
  "docs/privacy-and-disclaimer.md",
  path.join("..", ".github", "workflows", "deploy-future-career-site.yml"),
  path.join("..", ".gitignore")
];

function fail(message) {
  throw new Error(message);
}

function assertExists(relativePath) {
  const fullPath = path.resolve(root, relativePath);
  if (!fs.existsSync(fullPath)) fail(`Missing required file: ${relativePath}`);
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function getImageRefs() {
  const html = read("index.html");
  const script = read("script.js");
  const data = read("data/catalog-data.js");
  const combined = `${html}\n${script}\n${data}`;
  const matches = combined.matchAll(/\.\/assets\/images\/[^'"`)>\s]+/g);
  return [...new Set([...matches].map((match) => match[0]))];
}

function auditRequiredFiles() {
  requiredFiles.forEach(assertExists);
}

function auditRelativeReferences() {
  const html = read("index.html");
  if (!html.includes("./styles.css")) fail("index.html should load ./styles.css");
  if (!html.includes("./data/catalog-data.js")) fail("index.html should load ./data/catalog-data.js");
  if (!html.includes("./script.js")) fail("index.html should load ./script.js");
  if (!html.includes("./docs/privacy-and-disclaimer.html")) {
    fail("index.html should link to the browser-friendly privacy page.");
  }
  if (!html.includes("./docs/beta-test-guide.html")) {
    fail("index.html should link to the beta test guide.");
  }
  if (!html.includes("./docs/beta-feedback.html")) {
    fail("index.html should link to the beta feedback form.");
  }

  const absoluteRefPattern = /(src|href)="\/(?!\/)/;
  if (absoluteRefPattern.test(html)) {
    fail("index.html contains root-absolute src/href paths. Use ./ relative paths for static deployment.");
  }
}

function auditImages() {
  const refs = getImageRefs();
  if (refs.length === 0) fail("No image references found.");

  const missing = refs.filter((ref) => !fs.existsSync(path.join(root, ref)));
  if (missing.length > 0) fail(`Missing image files: ${missing.join(", ")}`);

  const imageDir = path.join(root, "assets", "images");
  const largeImages = fs
    .readdirSync(imageDir)
    .filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file))
    .map((file) => {
      const fullPath = path.join(imageDir, file);
      return { file, size: fs.statSync(fullPath).size };
    })
    .filter((item) => item.size > 3 * 1024 * 1024);

  if (largeImages.length > 0) {
    console.warn(
      `Warning: large images over 3MB: ${largeImages
        .map((item) => `${item.file} (${(item.size / 1024 / 1024).toFixed(1)}MB)`)
        .join(", ")}`
    );
  }
}

function auditWorkflow() {
  const workflow = fs.readFileSync(
    path.join(repoRoot, ".github", "workflows", "deploy-future-career-site.yml"),
    "utf8"
  );
  ["npm run validate:data", "npm run build:data", "npm run build:preview", "actions/deploy-pages@v4"].forEach(
    (needle) => {
      if (!workflow.includes(needle)) fail(`Deploy workflow is missing: ${needle}`);
    }
  );
}

function main() {
  auditRequiredFiles();
  auditRelativeReferences();
  auditImages();
  auditWorkflow();
  console.log("Deploy audit passed.");
}

main();
