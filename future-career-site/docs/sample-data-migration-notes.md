# 第一批样本数据迁移说明

本次先迁出 12 个职业、9 个城市、50 个专业与技能模块，用来验证数据结构是否适合后续扩展。

## 新增文件

- `data/careers.sample.json`
- `data/cities.sample.json`
- `data/majors.sample.json`

这些文件已经开始接入页面运行逻辑。它们的作用是验证内容模型，并逐步替换 `script.js` 中的内嵌数据。

## 已迁移样本

### 职业

1. 用户体验研究员
2. 数据分析师
3. 产品经理
4. 软件开发工程师
5. 金融科技/风险分析师
6. 教育科技产品/顾问
7. 临床/咨询心理相关方向
8. 品牌内容策划
9. 公共管理/非营利项目运营
10. 城市规划/交通研究助理
11. 供应链/跨境电商运营
12. 游戏/互动体验设计师

这些字段大多可以直接从现有 `careers` 数组迁移：

- `title`
- `tags`
- `summary`
- `weights`
- `roles`
- `skills`
- `major_plan`
- `city_ids`
- `first_project`

需要人工补充或审核的字段：

- `family`
- `barrier`
- `dropout_points`
- `evidence`
- `source_quality`

### 城市

1. 上海
2. 深圳
3. 杭州
4. 北京
5. 新加坡
6. 成都
7. 广州
8. 香港
9. 温哥华

这些字段可以从现有 `locationProfiles` 和城市详情迁移：

- `name`
- `cluster`
- `industries`
- `traits`
- `cost_level`
- `pace_level`
- `stable_path_level`
- `climate`
- `culture`
- `sights`
- `image`

未来需要真实数据源补充的字段：

- `job_density`
- 行业岗位数量
- 薪资区间
- 房租和生活成本
- 招录或考试竞争比例

### 专业与技能模块

1. 心理学
2. 数据科学
3. 计算机科学
4. 统计学
5. 信息管理
6. 产品设计
7. 经济学
8. 工商管理
9. 公共管理
10. 传播学
11. 供应链管理
12. 城市规划
13. 游戏设计
14. 教育学

随后补齐了推荐系统中被引用的专业与技能模块，例如社会学、人机交互、商业分析、信息系统、Python、SQL、数据可视化、项目管理、用户研究、软件工程、人工智能、金融工程、应用心理学、公共卫生、广告学、城市规划、国际贸易、电子商务、交互设计、GIS 等。

这些字段部分来自现有专业详情逻辑，部分为本次补充：

- `intro`
- `fit_traits`
- `courses`
- `connected_careers`
- `college_path`
- `misunderstandings`
- `try_project`

未来需要补充：

- 不同国家或地区大学专业名称差异
- 典型课程大纲
- 适合申请的院系或方向
- 真实毕业去向样本

## 当前可信等级

第一批样本统一视为 `heuristic`，即经验判断。

正式上线前建议逐步升级：

1. 用公开资料查证，升级为 `desk_research`。
2. 请老师、职业规划师或从业者审核，升级为 `expert_reviewed`。
3. 接入岗位、薪资、城市产业等数据，升级为 `data_connected`。

## 下一步建议

1. 再迁移 5-8 个职业，覆盖创意、公共服务、城市研究、供应链和游戏互动方向。
2. 使用 `node future-career-site/tools/validate-data.js` 检查样本数据字段、id 和引用关系。
3. 写一个数据加载函数，让页面可以读取 sample JSON。
4. 等 sample JSON 能稳定渲染后，再逐步替换 `script.js` 中的内嵌职业库。

## 校验脚本

已新增：

```bash
node future-career-site/tools/validate-data.js
```

当前校验会检查：

- JSON 是否能正常解析。
- 职业、城市、专业是否有重复 `id`。
- 必填字段是否存在。
- trait 权重是否使用合法维度。
- 职业引用的城市和专业是否已经在 sample 数据中。
- 专业引用的职业是否已经在 sample 数据中。

因为目前只是 sample 数据，未迁入的引用会显示为 warning，不会阻止通过。等未来迁移成完整数据集后，可以把这些 warning 升级成 error。

## 数据包构建

为了让本地 `index.html` 在不启动服务器的情况下读取 sample JSON，新增：

```bash
node future-career-site/tools/build-data-bundle.js
```

它会生成：

```text
future-career-site/data/catalog-data.js
```

网页会通过 `window.FuturePathCatalog` 读取这个数据包，并在结果页的“数据目录”按钮中展示样本数据。

## 当前接入范围

第二阶段第一轮接入后，页面已经会优先使用 JSON 数据包中的职业画像字段：

- 职业族群
- 学习门槛
- 典型岗位
- 劝退点
- 验证证据
- 数据来源等级
- 职业标签
- 画像权重
- 推荐简介
- 推荐岗位
- 推荐城市
- 能力与专业
- 入门项目

推荐列表、适配度排序、职业详情页和职业对比页都会优先读取这些 JSON 字段。第二阶段收尾后，主推荐候选池也已经改为 JSON 优先；如果某个职业还没有迁入 sample JSON，页面会回退到原有内嵌职业数据，保证网站仍然可用。

第二阶段第二轮接入后，页面也会优先使用 JSON 数据包中的城市和专业字段：

- 城市详情：产业、成本、节奏、景点、文化和数据来源。
- 专业详情：课程、适合倾向、连接职业、大学四年路径、常见误区和数据来源。

如果某个城市或专业还没有迁入 sample JSON，页面同样会回退到原有内嵌内容。

第二阶段收尾后，数据目录增加了：

- 搜索与类型筛选。
- 专业/技能分类筛选。
- 职业、城市、专业卡片直达详情页。
- 数据质量面板，用来显示职业来源等级、城市岗位数据连接状态和待审核项。
