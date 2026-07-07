# GitHub Pages 发布步骤

这份指南用于把 `future-career-site` 发布成一个真实网址。

## 当前本地状态

当前工作区里有一个 `.git` 文件夹，但它不是有效 Git 仓库。因此建议新建一个干净的 GitHub 仓库，再把需要的文件上传进去。

需要上传的内容：

```text
.github/
.gitignore
future-career-site/
```

不需要上传：

```text
.venv/
.agents/
HKUST/
Codex环境配置说明.md
```

## 方法 A：用 GitHub 网页上传

1. 在 GitHub 新建仓库，例如 `future-path`。
2. 上传 `.github` 文件夹、`.gitignore` 和 `future-career-site` 文件夹。
3. 进入仓库 `Settings -> Pages`。
4. 在 `Build and deployment` 里把 Source 设为 `GitHub Actions`。
5. 打开 `Actions` 页面，运行 `Deploy Future Career Site`。
6. 等工作流成功后，GitHub Pages 会给出公开网址。

## 方法 B：用命令行上传

在一个新的干净文件夹中执行：

```bash
git init
git branch -M main
git remote add origin https://github.com/YOUR_NAME/YOUR_REPO.git
```

然后把以下内容复制进这个新仓库：

```text
.github/
.gitignore
future-career-site/
```

提交并推送：

```bash
git add .github .gitignore future-career-site
git commit -m "Deploy Future Path static site"
git push -u origin main
```

然后到 GitHub：

1. 打开 `Settings -> Pages`。
2. Source 选择 `GitHub Actions`。
3. 打开 `Actions`，确认 `Deploy Future Career Site` 成功。

## 发布后检查

打开 GitHub Pages 给出的链接后，逐项检查：

- 首页能打开。
- 可以进入测试。
- 34 道题能完成。
- 推荐结果能展示。
- 数据目录能搜索和筛选。
- 职业、城市、专业详情能打开。
- 图片正常显示。
- 手机端按钮和文字不重叠。

## 常见问题

### 页面是 404

检查 `Settings -> Pages` 是否选择了 `GitHub Actions`，并确认 Actions 工作流成功。

### 页面没有样式或脚本

确认上传的是整个 `future-career-site` 文件夹，且 `styles.css`、`script.js`、`data/catalog-data.js` 都存在。

### 数据目录不是最新

在本地运行：

```bash
cd future-career-site
npm run prepare:deploy
```

再重新提交生成后的 `data/catalog-data.js` 和 `data/catalog-preview.html`。
