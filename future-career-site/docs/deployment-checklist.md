# 部署检查清单

## 1. 静态资源

- `index.html` 使用相对路径加载 `styles.css`、`script.js` 和 `data/catalog-data.js`。
- 图片位于 `assets/images/`，城市详情只开放已有真实图片的城市。
- `.nojekyll` 已加入，方便 GitHub Pages 直接发布静态资源。
- 页面底部提供隐私与免责声明、试用反馈指南和反馈表单入口。

## 2. 数据生成

部署前运行：

```bash
npm run check
npm run prepare:deploy
```

通过标准：

- 数据校验无 error。
- `data/catalog-data.js` 已更新。
- `data/catalog-preview.html` 可打开。
- 部署体检显示 `Deploy audit passed.`。

## 3. 推荐可信度

当前数据质量面板会显示：

- 职业来源等级。
- 城市岗位密度是否接入。
- 生活成本是否为人工估计。
- 待审核项。

正式公开推广前，建议至少把高频职业升级到 `desk_research` 或 `expert_reviewed`。

## 4. 部署平台建议

### GitHub Pages

- 发布目录：`future-career-site/`
- 入口：`index.html`
- Source：`GitHub Actions`
- Workflow：`.github/workflows/deploy-future-career-site.yml`
- 详细步骤：`docs/github-pages-publish-guide.md`

### Vercel / Netlify

- Framework preset：Other / Static
- Build command：`npm run prepare:deploy`
- Publish directory：`future-career-site`

## 5. 发布后手动测试

- 首页能显示并开始测试。
- 34 道题能完成。
- 推荐结果能逐个切换。
- 职业、城市、专业详情能打开。
- 数据目录搜索、筛选、打开详情能工作。
- 保存报告、下载文本报告、下载反馈日志能工作。
- 页面底部的隐私与免责声明、试用反馈指南、反馈表单能打开。
- 手机宽度下文字和按钮不重叠。
