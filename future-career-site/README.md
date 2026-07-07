# Future Path

Future Path 是一个静态职业探索网站。用户完成一组选择题后，网站会根据兴趣、性格、生活偏好和迁移意愿，推荐职业方向、适合城市、能力路线和大学专业。

## 当前功能

- 34 道职业探索题。
- 居住城市与迁移意愿采集。
- JSON 优先的职业推荐候选池。
- 职业、城市、专业/技能详情页。
- 推荐理由、适配度排序、职业对比。
- 文本报告、反馈日志和浏览器本地保存。
- 数据目录搜索、筛选、详情跳转和数据质量面板。
- 隐私与免责声明入口。
- 浏览器可读的试用反馈指南。
- 可复制文本的试用反馈表单。
- 第一批用户反馈分析看板。

## 本地打开

直接打开：

```text
file:///C:/CODEX/20260627/future-career-site/index.html
```

也可以在项目目录启动任意静态服务器后访问 `index.html`。

## 数据维护

核心样本数据在：

```text
data/careers.sample.json
data/cities.sample.json
data/majors.sample.json
```

修改 JSON 后运行：

```bash
npm run prepare:deploy
```

其中 `build-data-bundle.js` 会生成浏览器读取的 `data/catalog-data.js`。

部署前体检：

```bash
npm run check
```

## 部署方式

这是纯静态网站，可以部署到 GitHub Pages、Vercel、Netlify 或任何静态文件服务器。

部署目录请选择本项目根目录：

```text
future-career-site/
```

入口文件：

```text
index.html
```

不需要安装依赖，也不需要构建命令。若平台要求构建命令，可以留空。

## GitHub Pages 自动部署

仓库根目录已提供：

```text
.github/workflows/deploy-future-career-site.yml
```

详细发布步骤见：

```text
docs/github-pages-publish-guide.md
```

使用方式：

1. 把仓库推送到 GitHub。
2. 在仓库 `Settings -> Pages` 中把 Source 设为 `GitHub Actions`。
3. 推送到 `main` 分支，或在 Actions 页面手动运行 `Deploy Future Career Site`。

工作流会自动执行：

```bash
npm run validate:data
npm run build:data
npm run build:preview
npm run audit:deploy
```

然后发布 `future-career-site/` 目录。

## 上线前提醒

当前职业、城市和专业数据仍以样本数据为主，其中很多内容属于经验判断。正式大规模使用前，应继续补充公开资料来源、岗位密度、城市成本数据和专家审核记录。
