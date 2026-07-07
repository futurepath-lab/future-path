# 数据结构化迁移方案

当前网站的职业库、城市库、专业介绍和评分逻辑主要写在 `script.js` 中。这样适合原型，但不适合大规模维护。下一步应把内容数据逐步迁移到独立 JSON 或数据库。

## 迁移目标

1. 内容可以由非程序人员维护。
2. 职业、城市、专业信息有统一字段。
3. 每条内容都能标记来源和可信等级。
4. 推荐算法读取结构化数据，而不是从描述文字中猜测。
5. 后续可以接入管理后台和真实岗位数据。

## 推荐数据文件

正式版可以先拆成这些文件：

- `data/questions.json`：测试题库。
- `data/careers.json`：职业库。
- `data/cities.json`：城市库。
- `data/majors.json`：专业库。
- `data/scoring-model.json`：评分权重和解释规则。
- `data/content-sources.json`：内容来源和审核记录。

## 职业数据结构

```json
{
  "id": "ux-researcher",
  "title": "用户体验研究员",
  "family": "技术产品与数据",
  "tags": ["研究", "用户", "产品"],
  "summary": "适合把人的真实需求、行为和痛点转化成产品或服务改进方向。",
  "weights": {
    "research": 3,
    "empathy": 3,
    "social": 2,
    "structure": 1
  },
  "roles": ["用户访谈", "问卷研究", "可用性测试", "用户画像", "洞察报告"],
  "skills": ["访谈方法", "问卷设计", "基础统计", "产品思维", "报告表达"],
  "barrier": {
    "level": 3,
    "label": "中等门槛",
    "reasons": ["需要研究方法", "需要沟通和报告能力"]
  },
  "dropout_points": ["反馈和业务目标可能冲突", "研究结论需要反复解释和推动"],
  "evidence": ["一份访谈报告", "一个用户旅程图", "一次可用性测试记录"],
  "major_plan": {
    "primary": ["心理学", "社会学", "人机交互"],
    "secondary": ["传播学", "信息管理"],
    "supporting": ["统计学", "产品设计"]
  },
  "city_ids": ["shanghai", "shenzhen", "singapore", "vancouver"],
  "first_project": "访谈 5 位同学，分析他们选择学习 App 的真实原因。",
  "source_quality": "expert_review_needed"
}
```

## 城市数据结构

```json
{
  "id": "shanghai",
  "name": "上海",
  "region": "east_china",
  "country": "中国",
  "cluster": "金融、品牌、消费、国际企业、专业服务集中",
  "industries": ["finance", "brand", "commerce", "global", "creative"],
  "traits": ["social", "creative", "leadership", "mobility"],
  "cost_level": 5,
  "pace_level": 5,
  "stable_path_level": 3,
  "climate": "湿润温和",
  "culture": "商业感、国际感和生活方式丰富。",
  "sights": ["外滩", "武康路", "上海博物馆"],
  "image": "./assets/images/city-shanghai.jpg",
  "data_status": {
    "industry": "heuristic",
    "job_density": "not_connected",
    "cost": "manual_estimate"
  }
}
```

## 专业数据结构

```json
{
  "id": "data-science",
  "name": "数据科学",
  "category": "技术与数据",
  "intro": "训练用数据、统计和计算工具理解现实问题。",
  "fit_traits": ["research", "tech", "structure"],
  "courses": ["统计学", "Python", "数据库", "机器学习", "数据可视化"],
  "connected_careers": ["data-analyst", "fintech-risk", "product-manager"],
  "college_path": {
    "year1": ["学习编程和数学基础", "做一个公开数据分析"],
    "year2": ["学习数据库和统计建模", "完成课程项目"],
    "year3": ["找数据分析或产品实习", "积累作品集"],
    "year4": ["选择行业方向", "准备毕业项目或求职案例"]
  },
  "misunderstandings": ["只学工具不理解业务", "只看模型不看数据质量"],
  "try_project": "找一个公开数据集，做一页图表报告解释三个关键发现。"
}
```

## 内容可信等级

每条内容建议增加 `source_quality` 字段：

- `heuristic`：当前根据经验判断生成。
- `desk_research`：经过公开资料查证。
- `expert_reviewed`：经过老师、职业规划师或从业者审核。
- `data_connected`：已接入岗位、薪资、产业或官方统计数据。

## 迁移顺序

1. 先迁出职业库，因为它决定推荐结果的主体。
2. 再迁出城市库，因为城市数据需要逐步替换成真实指标。
3. 再迁出专业库，补充大学路径和课程信息。
4. 最后迁出评分模型，让权重可以配置和版本管理。

## 第一阶段完成标准

第一阶段不需要完全接数据库，但至少要完成：

1. 有清晰的数据结构文档。
2. 每个职业都有族群、门槛、劝退点和验证证据。
3. 每个城市都有产业、成本、节奏和调研提醒。
4. 反馈日志可以导出，用于后续调参。
