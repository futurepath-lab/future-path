const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const outputPath = path.join(dataDir, "catalog-preview.html");

function readJson(fileName) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, fileName), "utf8"));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function chips(items) {
  return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function renderCareer(career) {
  return `
    <article class="card">
      <div class="topline">
        <strong>${escapeHtml(career.title)}</strong>
        <em>${escapeHtml(career.family)}</em>
      </div>
      <p>${escapeHtml(career.summary)}</p>
      <div class="chips">${chips(career.tags)}</div>
      <dl>
        <div><dt>门槛</dt><dd>${career.barrier.level} / 5 · ${escapeHtml(career.barrier.label)}</dd></div>
        <div><dt>岗位</dt><dd>${escapeHtml(career.roles.slice(0, 4).join("、"))}</dd></div>
        <div><dt>证据</dt><dd>${escapeHtml(career.evidence.slice(0, 2).join("；"))}</dd></div>
      </dl>
    </article>
  `;
}

function renderCity(city) {
  return `
    <article class="card">
      <div class="topline">
        <strong>${escapeHtml(city.name)}</strong>
        <em>${escapeHtml(city.region)}</em>
      </div>
      <p>${escapeHtml(city.cluster)}</p>
      <div class="chips">${chips(city.industries)}</div>
      <dl>
        <div><dt>成本</dt><dd>${city.cost_level} / 5</dd></div>
        <div><dt>节奏</dt><dd>${city.pace_level} / 5</dd></div>
        <div><dt>稳定路径</dt><dd>${city.stable_path_level} / 5</dd></div>
      </dl>
    </article>
  `;
}

function renderMajor(major) {
  return `
    <article class="card">
      <div class="topline">
        <strong>${escapeHtml(major.name)}</strong>
        <em>${escapeHtml(major.category)}</em>
      </div>
      <p>${escapeHtml(major.intro)}</p>
      <div class="chips">${chips(major.fit_traits)}</div>
      <dl>
        <div><dt>课程</dt><dd>${escapeHtml(major.courses.slice(0, 4).join("、"))}</dd></div>
        <div><dt>连接职业</dt><dd>${escapeHtml(major.connected_careers.slice(0, 3).join("、"))}</dd></div>
      </dl>
    </article>
  `;
}

function main() {
  const careers = readJson("careers.sample.json");
  const cities = readJson("cities.sample.json");
  const majors = readJson("majors.sample.json");
  const generatedAt = new Date().toLocaleString("zh-CN");

  const html = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Future Path 数据目录预览</title>
    <style>
      :root { --ink: #1f2933; --muted: #667085; --line: #e5e7eb; --teal: #0f766e; --bg: #f7f4ee; }
      * { box-sizing: border-box; }
      body { margin: 0; font-family: Arial, "Microsoft YaHei", sans-serif; color: var(--ink); background: var(--bg); }
      main { width: min(1180px, calc(100% - 32px)); margin: 0 auto; padding: 36px 0 60px; }
      h1 { margin: 0 0 8px; font-size: clamp(34px, 5vw, 58px); line-height: 1.05; }
      h2 { margin: 32px 0 14px; font-size: 26px; }
      p { color: var(--muted); line-height: 1.7; }
      .stats { display: flex; flex-wrap: wrap; gap: 10px; margin: 22px 0; }
      .stats span, .chips span { border-radius: 999px; background: #e9f7f4; color: var(--teal); font-weight: 800; }
      .stats span { padding: 10px 14px; }
      .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
      .card { padding: 18px; border-radius: 8px; background: white; box-shadow: 0 12px 28px rgba(38, 35, 30, 0.09); }
      .topline { display: flex; gap: 10px; justify-content: space-between; align-items: start; }
      .topline strong { font-size: 20px; }
      .topline em { color: var(--muted); font-style: normal; font-size: 13px; text-align: right; }
      .chips { display: flex; flex-wrap: wrap; gap: 7px; margin: 12px 0; }
      .chips span { padding: 6px 9px; font-size: 12px; }
      dl { display: grid; gap: 8px; margin: 12px 0 0; }
      dt { color: var(--teal); font-size: 13px; font-weight: 900; }
      dd { margin: 3px 0 0; color: var(--muted); line-height: 1.55; }
      @media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <main>
      <h1>Future Path 数据目录预览</h1>
      <p>生成时间：${escapeHtml(generatedAt)}。这是 sample JSON 的静态预览页，用来检查内容结构是否清楚。</p>
      <div class="stats">
        <span>${careers.length} 个职业</span>
        <span>${cities.length} 个城市</span>
        <span>${majors.length} 个专业</span>
      </div>

      <h2>职业样本</h2>
      <section class="grid">${careers.map(renderCareer).join("")}</section>

      <h2>城市样本</h2>
      <section class="grid">${cities.map(renderCity).join("")}</section>

      <h2>专业样本</h2>
      <section class="grid">${majors.map(renderMajor).join("")}</section>
    </main>
  </body>
</html>`;

  fs.writeFileSync(outputPath, html, "utf8");
  console.log(`Wrote ${outputPath}`);
}

main();
