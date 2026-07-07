const questions = [
  {
    category: "兴趣驱动",
    dimension: "RIASEC: 研究型 / 艺术型 / 社会型",
    title: "如果你有一整天自由时间，你最容易投入哪类事情？",
    options: [
      { title: "研究一个问题", desc: "查资料、比较信息、找规律。", scores: { research: 3, tech: 1 } },
      { title: "做一个作品", desc: "写作、设计、拍摄、搭建或创作。", scores: { creative: 3, autonomy: 1 } },
      { title: "和别人一起行动", desc: "组织活动、聊天、帮助别人解决问题。", scores: { social: 3, leadership: 1 } },
      { title: "探索城市或自然", desc: "走出去观察新环境，体验不同生活方式。", scores: { mobility: 3, adventure: 1 } }
    ]
  },
  {
    category: "问题解决",
    dimension: "工作方式",
    title: "面对一个复杂任务时，你通常更喜欢怎么开始？",
    options: [
      { title: "先拆成步骤", desc: "列清单、排优先级、逐步推进。", scores: { structure: 3, leadership: 1 } },
      { title: "先找背后的原因", desc: "弄懂机制，再决定怎么做。", scores: { research: 3, tech: 1 } },
      { title: "先问真实用户", desc: "理解人的需要，再设计方案。", scores: { social: 2, creative: 1, empathy: 2 } },
      { title: "先快速试一个版本", desc: "边做边改，不怕试错。", scores: { autonomy: 2, adventure: 2, creative: 1 } }
    ]
  },
  {
    category: "能量来源",
    dimension: "Big Five: 外向性 / 开放性",
    title: "你更容易在哪种环境里发挥稳定？",
    options: [
      { title: "安静、专注、少干扰", desc: "可以长时间深入思考。", scores: { research: 2, structure: 2 } },
      { title: "开放、沟通多、有反馈", desc: "能和不同人快速交换想法。", scores: { social: 3, leadership: 1 } },
      { title: "变化快、机会多", desc: "新任务会让你更有动力。", scores: { adventure: 3, autonomy: 1 } },
      { title: "审美好、表达自由", desc: "重视风格、故事和体验。", scores: { creative: 3, empathy: 1 } }
    ]
  },
  {
    category: "优势线索",
    dimension: "可迁移技能",
    title: "朋友或同学最可能因为什么来找你帮忙？",
    options: [
      { title: "讲清楚一个难概念", desc: "把复杂内容解释得容易懂。", scores: { research: 2, social: 1, empathy: 1 } },
      { title: "做计划和推进事情", desc: "安排时间、协调分工、盯进度。", scores: { leadership: 3, structure: 2 } },
      { title: "提出新点子", desc: "想到不同角度和表达方式。", scores: { creative: 3, autonomy: 1 } },
      { title: "处理电脑或工具问题", desc: "愿意尝试软件、数据或自动化。", scores: { tech: 3, research: 1 } }
    ]
  },
  {
    category: "职业价值观",
    dimension: "价值排序",
    title: "未来工作中，你最不想牺牲什么？",
    options: [
      { title: "成长速度", desc: "希望不断学习新东西。", scores: { adventure: 2, tech: 1, research: 1 } },
      { title: "稳定感", desc: "希望规则清楚、收入和节奏可预期。", scores: { structure: 3, riskAware: 2 } },
      { title: "自由度", desc: "希望能选择方法、时间或地点。", scores: { autonomy: 3, creative: 1 } },
      { title: "意义感", desc: "希望工作能真实影响别人。", scores: { empathy: 3, social: 1 } }
    ]
  },
  {
    category: "生活地点",
    dimension: "城市适配",
    title: "如果可以选择工作城市，你更偏好哪一种？",
    options: [
      { title: "国际化大城市", desc: "机会密集、节奏快、文化多元。", scores: { mobility: 2, adventure: 2, social: 1 } },
      { title: "生活舒适的中型城市", desc: "节奏适中，有自然环境和安全感。", scores: { structure: 1, empathy: 1, riskAware: 2 } },
      { title: "科技和创新中心", desc: "产业集中，适合学习和试新东西。", scores: { tech: 3, research: 1 } },
      { title: "文化艺术氛围强的地方", desc: "展览、音乐、设计和表达空间多。", scores: { creative: 3, autonomy: 1 } }
    ]
  },
  {
    category: "学习方式",
    dimension: "成长路径",
    title: "你更愿意怎样学习一个新领域？",
    options: [
      { title: "系统课程", desc: "从基础理论到练习逐步学。", scores: { structure: 2, research: 2 } },
      { title: "项目实践", desc: "做一个真实作品或解决真实问题。", scores: { autonomy: 2, tech: 1, creative: 1 } },
      { title: "和人讨论", desc: "通过访谈、交流、反馈理解它。", scores: { social: 2, empathy: 2 } },
      { title: "实地体验", desc: "去现场观察行业、城市或人群。", scores: { mobility: 2, adventure: 2 } }
    ]
  },
  {
    category: "压力情境",
    dimension: "抗压偏好",
    title: "压力变大时，哪种情况你更能接受？",
    options: [
      { title: "任务很多但标准清楚", desc: "只要知道目标，就能硬推进。", scores: { structure: 3, leadership: 1 } },
      { title: "问题难但很有挑战", desc: "愿意花时间攻克复杂问题。", scores: { research: 2, tech: 2 } },
      { title: "沟通复杂但能帮助人", desc: "愿意处理人的情绪和需求。", scores: { empathy: 3, social: 1 } },
      { title: "不确定但空间很大", desc: "可以接受变化，甚至被变化激发。", scores: { adventure: 3, autonomy: 1 } }
    ]
  },
  {
    category: "团队角色",
    dimension: "岗位倾向",
    title: "一个团队项目里，你最自然会承担什么角色？",
    options: [
      { title: "分析者", desc: "收集信息、判断方案是否合理。", scores: { research: 3, structure: 1 } },
      { title: "创造者", desc: "负责内容、视觉、故事或体验。", scores: { creative: 3 } },
      { title: "连接者", desc: "让成员协作顺畅，理解用户需求。", scores: { social: 2, empathy: 2, leadership: 1 } },
      { title: "实现者", desc: "把想法变成工具、流程或产品。", scores: { tech: 2, structure: 1, autonomy: 1 } }
    ]
  },
  {
    category: "流动性",
    dimension: "地理与文化适应",
    title: "你对未来工作的地点变化怎么看？",
    options: [
      { title: "很期待", desc: "跨城市、跨国家会让我兴奋。", scores: { mobility: 3, adventure: 2 } },
      { title: "可以，但要有计划", desc: "愿意变化，但需要安全边界。", scores: { mobility: 1, structure: 2, riskAware: 1 } },
      { title: "更喜欢固定地点", desc: "稳定环境能让我更安心。", scores: { structure: 3, riskAware: 2 } },
      { title: "看工作意义", desc: "如果值得，我可以适应不同地点。", scores: { empathy: 2, autonomy: 1 } }
    ]
  },
  {
    category: "技术关系",
    dimension: "数字能力",
    title: "你和技术、数据、工具的关系更接近哪一种？",
    options: [
      { title: "喜欢深入掌握", desc: "愿意理解原理并长期练习。", scores: { tech: 3, research: 1 } },
      { title: "当作表达工具", desc: "用它做设计、视频、内容或作品。", scores: { creative: 2, tech: 1 } },
      { title: "当作解决问题的工具", desc: "用它提高效率、分析情况。", scores: { tech: 2, structure: 1, leadership: 1 } },
      { title: "更关注人的部分", desc: "技术可以辅助，但人和社会更吸引我。", scores: { social: 2, empathy: 2 } }
    ]
  },
  {
    category: "长期动力",
    dimension: "职业锚",
    title: "哪一种未来画面最能让你觉得值得努力？",
    options: [
      { title: "成为某个领域的专家", desc: "拥有深度判断力和专业影响力。", scores: { research: 3, structure: 1 } },
      { title: "创造被很多人使用的东西", desc: "产品、内容、服务或工具。", scores: { creative: 2, tech: 1, autonomy: 1 } },
      { title: "带领团队完成重要项目", desc: "影响组织方向和资源分配。", scores: { leadership: 3, social: 1 } },
      { title: "在不同地方生活和工作", desc: "体验多元文化，持续打开眼界。", scores: { mobility: 3, adventure: 1 } }
    ]
  },
  {
    category: "信息偏好",
    dimension: "认知风格",
    title: "做决定前，你最希望先获得哪类信息？",
    options: [
      { title: "数据和证据", desc: "样本、趋势、概率和可比较指标。", scores: { research: 2, tech: 1, structure: 1 } },
      { title: "真实人的故事", desc: "当事人的体验、痛点和动机。", scores: { empathy: 2, social: 1, creative: 1 } },
      { title: "成功案例", desc: "看别人怎么做，再迁移到自己身上。", scores: { leadership: 1, structure: 1, social: 1 } },
      { title: "未来可能性", desc: "想象趋势、机会和新场景。", scores: { adventure: 2, autonomy: 1, creative: 1 } }
    ]
  },
  {
    category: "工作产出",
    dimension: "成果类型",
    title: "你最希望自己的工作成果以什么形式被看见？",
    options: [
      { title: "一份清晰的判断", desc: "报告、模型、策略或研究结论。", scores: { research: 3, structure: 1 } },
      { title: "一个可用的产品", desc: "网站、应用、工具或系统。", scores: { tech: 2, creative: 1, autonomy: 1 } },
      { title: "一场顺利的合作", desc: "团队、客户、用户都被协调好。", scores: { social: 2, leadership: 2 } },
      { title: "一次有感染力的表达", desc: "内容、影像、演讲或品牌活动。", scores: { creative: 3, social: 1 } }
    ]
  },
  {
    category: "行业亲近感",
    dimension: "主题兴趣",
    title: "下面哪类社会议题或行业最容易吸引你继续了解？",
    options: [
      { title: "AI、数据、工程与自动化", desc: "新技术如何改变效率和生活。", scores: { tech: 3, research: 1 } },
      { title: "教育、心理、医疗与公共服务", desc: "人的成长、健康与支持系统。", scores: { empathy: 3, social: 1 } },
      { title: "消费、媒体、设计与文化", desc: "审美、表达和人们如何选择。", scores: { creative: 3, social: 1 } },
      { title: "气候、城市、交通与国际发展", desc: "环境、空间和跨地区协作。", scores: { mobility: 2, research: 1, adventure: 1 } }
    ]
  },
  {
    category: "风险偏好",
    dimension: "稳定性需求",
    title: "如果一个机会很有潜力但不太确定，你会怎样判断？",
    options: [
      { title: "先看最坏情况", desc: "能承受损失，才会继续。", scores: { riskAware: 3, structure: 1 } },
      { title: "先做小规模试验", desc: "用低成本行动验证它。", scores: { autonomy: 2, research: 1, adventure: 1 } },
      { title: "找有经验的人聊", desc: "通过人脉和反馈降低不确定。", scores: { social: 2, empathy: 1, leadership: 1 } },
      { title: "如果足够兴奋就上", desc: "机会窗口比完美计划更重要。", scores: { adventure: 3, mobility: 1 } }
    ]
  },
  {
    category: "专业选择",
    dimension: "大学准备",
    title: "如果现在要选一个大学课程主题，你会更想选哪个？",
    options: [
      { title: "统计、计算机或信息系统", desc: "掌握数据、编程和系统能力。", scores: { tech: 3, research: 1 } },
      { title: "心理、社会学或教育", desc: "理解人的行为、关系和成长。", scores: { empathy: 2, social: 2 } },
      { title: "商业、经济或管理", desc: "理解组织、市场和资源配置。", scores: { leadership: 2, structure: 1, research: 1 } },
      { title: "设计、传媒或文学艺术", desc: "训练表达、审美和叙事能力。", scores: { creative: 3, autonomy: 1 } }
    ]
  },
  {
    category: "理想组织",
    dimension: "组织文化",
    title: "你更希望未来加入哪类组织？",
    options: [
      { title: "专业门槛高的机构", desc: "重视资质、严谨度和长期积累。", scores: { research: 2, structure: 2, riskAware: 1 } },
      { title: "快速成长的创新团队", desc: "变化多、责任大、上手机会多。", scores: { adventure: 2, tech: 1, autonomy: 1 } },
      { title: "使命感强的组织", desc: "关注教育、健康、公益或可持续发展。", scores: { empathy: 3, social: 1 } },
      { title: "重视审美和品牌的团队", desc: "强调内容、设计、体验和文化表达。", scores: { creative: 3, social: 1 } }
    ]
  },
  {
    category: "工作场景",
    dimension: "线上 / 线下 / 户外",
    title: "你更能接受哪种日常工作场景？",
    options: [
      { title: "大部分时间面对电脑", desc: "写代码、做分析、整理资料或处理系统。", scores: { tech: 2, research: 2, structure: 1 } },
      { title: "经常和人面对面沟通", desc: "访谈、咨询、教学、协调或服务。", scores: { social: 2, empathy: 2, leadership: 1 } },
      { title: "需要在现场观察和走动", desc: "城市、展览、空间、供应链或社区现场。", scores: { mobility: 2, research: 1, adventure: 1 } },
      { title: "以创作室或工作坊为主", desc: "做内容、设计、影像、活动或原型。", scores: { creative: 3, autonomy: 1 } }
    ]
  },
  {
    category: "稳定路径",
    dimension: "公共部门 / 市场化",
    title: "如果未来有一条稳定但竞争激烈的路径，你会怎么想？",
    options: [
      { title: "很适合我", desc: "愿意长期准备，接受规则明确的筛选。", scores: { structure: 3, riskAware: 3 } },
      { title: "可以作为备选", desc: "希望保留稳定路径，但也想看看市场机会。", scores: { riskAware: 2, research: 1, structure: 1 } },
      { title: "不太想被固定路径限制", desc: "更希望靠项目、能力和机会成长。", scores: { autonomy: 3, adventure: 1 } },
      { title: "看它是否有社会意义", desc: "如果能服务真实人群，我愿意投入。", scores: { empathy: 3, social: 1 } }
    ]
  },
  {
    category: "生活成本",
    dimension: "城市现实约束",
    title: "选择城市时，你对生活成本的敏感度如何？",
    options: [
      { title: "非常敏感", desc: "房租、通勤和日常开销会明显影响选择。", scores: { riskAware: 3, structure: 2 } },
      { title: "可以接受高成本换机会", desc: "只要成长和资源足够好，我愿意承受。", scores: { adventure: 2, mobility: 2 } },
      { title: "更看重生活质量", desc: "希望有自然环境、节奏舒适和稳定生活。", scores: { empathy: 1, riskAware: 2, mobility: 1 } },
      { title: "先看职业是否值得", desc: "如果方向匹配，城市成本可以再计算。", scores: { research: 2, autonomy: 1 } }
    ]
  },
  {
    category: "家庭距离",
    dimension: "迁移心理成本",
    title: "如果一个机会很好，但离家比较远，你最真实的反应是？",
    options: [
      { title: "会明显犹豫", desc: "家庭距离和熟悉环境对我很重要。", scores: { riskAware: 3, structure: 1 } },
      { title: "可以试一段时间", desc: "愿意短期尝试，但需要退路。", scores: { mobility: 2, riskAware: 1, research: 1 } },
      { title: "反而会期待", desc: "新城市和新文化会给我动力。", scores: { mobility: 3, adventure: 2 } },
      { title: "取决于同行的人和支持系统", desc: "如果有人支持，我更容易适应。", scores: { social: 2, empathy: 1 } }
    ]
  },
  {
    category: "专业耐心",
    dimension: "长期训练",
    title: "面对一个需要几年积累的专业，你更接近哪种状态？",
    options: [
      { title: "愿意慢慢打基础", desc: "长期训练让我觉得踏实。", scores: { research: 2, structure: 3 } },
      { title: "需要看到阶段成果", desc: "每隔一段时间要有作品或反馈。", scores: { creative: 1, autonomy: 2, research: 1 } },
      { title: "如果能帮助别人就能坚持", desc: "意义感会支撑我持续学习。", scores: { empathy: 3, social: 1 } },
      { title: "更喜欢快速变化的领域", desc: "太慢的路径会让我失去动力。", scores: { adventure: 3, tech: 1 } }
    ]
  },
  {
    category: "竞争环境",
    dimension: "岗位竞争偏好",
    title: "你更愿意进入哪种竞争环境？",
    options: [
      { title: "规则明确的考试或筛选", desc: "标准清楚，我可以按目标准备。", scores: { structure: 3, riskAware: 2 } },
      { title: "作品和项目说话", desc: "希望用真实成果证明自己。", scores: { creative: 2, tech: 1, autonomy: 1 } },
      { title: "靠沟通和资源整合", desc: "愿意通过合作、关系和组织能力创造机会。", scores: { social: 2, leadership: 2 } },
      { title: "去新兴赛道抢机会", desc: "即使不确定，也愿意早点进入。", scores: { adventure: 3, mobility: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "用户 / 产品 / 数据",
    title: "如果要改进一个 App，你最想负责哪一部分？",
    options: [
      { title: "找真实用户聊天", desc: "理解他们为什么用、哪里卡住、真正需要什么。", scores: { empathy: 3, research: 2, social: 1 } },
      { title: "写需求和排优先级", desc: "把问题变成版本计划，协调不同角色推进。", scores: { leadership: 2, structure: 2, tech: 1 } },
      { title: "看数据找异常", desc: "用指标判断哪里掉队、哪里值得优化。", scores: { tech: 2, research: 3, structure: 1 } },
      { title: "设计页面和表达", desc: "让体验更顺、更有吸引力。", scores: { creative: 3, empathy: 1, autonomy: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "商业结果 / 公共价值",
    title: "一个项目最后最让你有成就感的结果是什么？",
    options: [
      { title: "用户真的变多了", desc: "增长、转化、收入或留存明显改善。", scores: { leadership: 2, tech: 1, adventure: 1 } },
      { title: "一个群体被更好地支持", desc: "教育、健康、社区或弱势群体获得实际帮助。", scores: { empathy: 3, social: 1, structure: 1 } },
      { title: "结论足够可靠", desc: "证据扎实，能经得起追问和复核。", scores: { research: 3, riskAware: 2 } },
      { title: "表达产生影响力", desc: "内容、视觉或活动让更多人愿意理解和参与。", scores: { creative: 3, social: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "规则密度",
    title: "面对大量规则、合同、政策或流程时，你的反应更接近哪一种？",
    options: [
      { title: "愿意细读并找风险点", desc: "越复杂越需要严谨判断。", scores: { riskAware: 3, research: 2, structure: 1 } },
      { title: "想把流程做得更顺", desc: "不一定迷恋规则，但想减少混乱。", scores: { structure: 3, leadership: 1, empathy: 1 } },
      { title: "会觉得束缚", desc: "更想要开放、创造和快速尝试。", scores: { autonomy: 3, creative: 1, adventure: 1 } },
      { title: "要看服务对象是谁", desc: "如果能保护人或改善服务，我可以接受。", scores: { empathy: 2, riskAware: 1, social: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "表达类型",
    title: "如果让你做一次公开表达，你更想做哪一种？",
    options: [
      { title: "数据报告", desc: "用图表和证据讲清楚判断。", scores: { research: 3, tech: 2 } },
      { title: "品牌故事", desc: "用文案、视觉和节奏打动人。", scores: { creative: 3, social: 1 } },
      { title: "政策/公益提案", desc: "说明问题、对象、资源和影响。", scores: { structure: 2, empathy: 2, leadership: 1 } },
      { title: "产品演示", desc: "展示一个工具如何解决真实问题。", scores: { tech: 2, leadership: 2, autonomy: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "助人边界",
    title: "如果未来工作需要长期面对别人的困难，你觉得自己更适合？",
    options: [
      { title: "深度陪伴和倾听", desc: "愿意理解情绪、关系和长期变化。", scores: { empathy: 4, research: 1, riskAware: 1 } },
      { title: "设计支持系统", desc: "更想做课程、服务流程或工具，帮助更多人。", scores: { empathy: 2, structure: 2, tech: 1 } },
      { title: "协调资源解决问题", desc: "把人、钱、机构和行动组织起来。", scores: { leadership: 3, social: 2 } },
      { title: "保持距离做研究", desc: "关心问题，但更希望通过资料和数据理解。", scores: { research: 3, structure: 1, riskAware: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "行业现实接受度",
    title: "下面哪种职业劝退点你相对更能接受？",
    options: [
      { title: "技术学习曲线陡", desc: "前期可能枯燥，需要不断调试和练习。", scores: { tech: 3, research: 1, structure: 1 } },
      { title: "创意反复被修改", desc: "作品要面对反馈、数据和甲方意见。", scores: { creative: 3, social: 1, autonomy: 1 } },
      { title: "公共项目推进慢", desc: "流程复杂，成果需要较长时间才显现。", scores: { empathy: 2, structure: 2, riskAware: 1 } },
      { title: "商业压力很直接", desc: "结果、客户、成本和竞争都会很现实。", scores: { leadership: 2, adventure: 2, structure: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "空间 / 城市 / 产业",
    title: "如果做一个城市相关项目，你更想从哪个角度切入？",
    options: [
      { title: "交通和空间数据", desc: "分析路线、拥堵、换乘和区域差异。", scores: { research: 3, tech: 2, mobility: 1 } },
      { title: "地方文化和体验", desc: "设计路线、活动、展览或城市品牌。", scores: { creative: 3, mobility: 2, social: 1 } },
      { title: "社区和公共服务", desc: "关注居民需求、资源分配和项目运营。", scores: { empathy: 3, structure: 2, leadership: 1 } },
      { title: "产业和供应链", desc: "研究城市靠什么产业运转，机会在哪里。", scores: { research: 2, structure: 2, tech: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "金钱 / 风险 / 伦理",
    title: "如果进入金融、法律或风控相关方向，你最能接受哪种日常？",
    options: [
      { title: "盯数据模型和异常", desc: "在大量指标中找风险信号。", scores: { tech: 2, research: 3, riskAware: 2 } },
      { title: "读规则和写判断", desc: "根据法规、证据和边界做结论。", scores: { riskAware: 3, structure: 2, research: 2 } },
      { title: "和客户/团队解释方案", desc: "把复杂判断讲清楚，推动别人理解。", scores: { social: 2, leadership: 2, structure: 1 } },
      { title: "不太想长期做这类", desc: "太规则密集会消耗我，更想做开放探索。", scores: { autonomy: 3, creative: 1, adventure: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "作品证据",
    title: "如果一个月后要拿出一个作品，你更愿意交付什么？",
    options: [
      { title: "一个可运行的小工具", desc: "网页、脚本、数据看板或交互原型。", scores: { tech: 3, autonomy: 1, structure: 1 } },
      { title: "一份研究报告", desc: "访谈、数据、文献和结论清楚完整。", scores: { research: 3, structure: 2 } },
      { title: "一套内容/活动方案", desc: "主题、受众、传播和视觉方向明确。", scores: { creative: 3, social: 1, leadership: 1 } },
      { title: "一个服务流程", desc: "面向学生、患者、员工或社区的支持方案。", scores: { empathy: 3, structure: 2, social: 1 } }
    ]
  },
  {
    category: "职业分化",
    dimension: "工作关系",
    title: "你更希望自己未来主要和什么打交道？",
    options: [
      { title: "系统和工具", desc: "代码、数据、模型、流程和自动化。", scores: { tech: 3, research: 1, structure: 1 } },
      { title: "人和组织", desc: "用户、团队、客户、学生或社区。", scores: { social: 3, empathy: 2 } },
      { title: "内容和审美", desc: "文字、影像、视觉、体验和故事。", scores: { creative: 3, autonomy: 1 } },
      { title: "规则和资源", desc: "政策、预算、风险、合同或跨机构协作。", scores: { riskAware: 2, structure: 2, leadership: 1 } }
    ]
  }
];

const traitLabels = {
  research: "研究分析",
  creative: "创意表达",
  social: "沟通协作",
  tech: "技术工具",
  structure: "规划执行",
  empathy: "共情服务",
  leadership: "组织领导",
  autonomy: "自主探索",
  mobility: "地域适应",
  adventure: "变化承受",
  riskAware: "风险意识"
};

const careers = [
  {
    title: "用户体验研究员",
    tags: ["研究", "用户", "产品"],
    weights: { research: 3, empathy: 3, social: 2, structure: 1 },
    reason: "适合把人的真实需求、行为和痛点转化成产品或服务改进方向。",
    roles: "用户访谈、问卷研究、可用性测试、用户画像、洞察报告",
    places: "新加坡、上海、深圳、阿姆斯特丹、温哥华",
    skills: "访谈方法、问卷设计、基础统计、产品思维、报告表达",
    majors: "心理学、社会学、传播学、人机交互、信息管理",
    firstProject: "访谈 5 位同学，分析他们选择学习 App 的真实原因。"
  },
  {
    title: "数据分析师",
    tags: ["数据", "商业", "逻辑"],
    weights: { research: 3, tech: 3, structure: 2, riskAware: 1 },
    reason: "适合从复杂信息中找规律，用证据支持业务和管理决策。",
    roles: "商业分析、运营分析、市场分析、数据可视化、指标体系搭建",
    places: "深圳、杭州、北京、新加坡、伦敦、多伦多",
    skills: "Excel、SQL、Python、统计基础、业务理解、可视化表达",
    majors: "统计学、数据科学、商业分析、信息系统、经济学",
    firstProject: "找一个公开数据集，做一页图表报告解释三个关键发现。"
  },
  {
    title: "产品经理",
    tags: ["产品", "协调", "创新"],
    weights: { leadership: 2, social: 2, tech: 1, structure: 2, empathy: 2 },
    reason: "适合连接用户、技术和商业，把想法推进成真实产品。",
    roles: "需求分析、产品设计、原型制作、项目协调、增长策略",
    places: "北京、上海、深圳、杭州、旧金山、新加坡",
    skills: "产品文档、原型设计、沟通协调、基础数据分析、行业理解",
    majors: "计算机、信息管理、工商管理、工业设计、心理学",
    firstProject: "选一个常用 App，写一份改版需求文档和低保真原型。"
  },
  {
    title: "品牌内容策划",
    tags: ["创意", "传播", "审美"],
    weights: { creative: 3, social: 2, empathy: 1, autonomy: 2 },
    reason: "适合用故事、视觉和内容表达价值，影响人的感受与选择。",
    roles: "内容策划、新媒体运营、品牌文案、活动创意、社群内容",
    places: "上海、成都、广州、东京、首尔、巴黎",
    skills: "写作、视觉审美、社媒运营、消费者洞察、内容数据复盘",
    majors: "传播学、广告学、市场营销、设计、中文或外语",
    firstProject: "为一个你喜欢的品牌设计 7 天内容发布计划。"
  },
  {
    title: "教育科技产品/顾问",
    tags: ["教育", "技术", "服务"],
    weights: { empathy: 3, social: 2, tech: 1, research: 1, structure: 1 },
    reason: "适合把学习需求、技术工具和教育资源连接起来。",
    roles: "课程设计、学习顾问、教育产品运营、培训项目管理",
    places: "香港、新加坡、北京、上海、波士顿、墨尔本",
    skills: "教学设计、学习科学、沟通表达、基础产品工具、用户反馈分析",
    majors: "教育学、教育技术、心理学、英语、信息管理",
    firstProject: "设计一个 30 分钟微课程，并邀请 3 位同学体验反馈。"
  },
  {
    title: "可持续发展/ESG 项目专员",
    tags: ["社会影响", "项目", "跨文化"],
    weights: { empathy: 2, research: 2, mobility: 2, leadership: 1, structure: 1 },
    reason: "适合处理环境、社区、企业责任和组织协作之间的现实问题。",
    roles: "ESG 项目、公益项目、政策研究、社区合作、影响力评估",
    places: "哥本哈根、温哥华、阿姆斯特丹、香港、杭州",
    skills: "环境基础、项目管理、英文研究、跨文化沟通、报告写作",
    majors: "环境科学、公共政策、社会学、国际关系、经济学",
    firstProject: "分析一个城市的垃圾分类、交通或碳排放案例。"
  },
  {
    title: "软件开发工程师",
    tags: ["技术", "建造", "系统"],
    weights: { tech: 4, research: 2, structure: 2, autonomy: 1 },
    reason: "适合把抽象问题变成稳定、可复用的工具、系统或应用。",
    roles: "前端开发、后端开发、移动开发、AI 应用开发、测试工程",
    places: "深圳、杭州、北京、新加坡、西雅图、柏林",
    skills: "编程基础、算法、工程实践、调试能力、版本管理",
    majors: "计算机科学、软件工程、人工智能、信息系统",
    firstProject: "做一个能解决自己真实需求的小网站或自动化脚本。"
  },
  {
    title: "国际项目协调员",
    tags: ["跨文化", "组织", "沟通"],
    weights: { mobility: 3, social: 2, leadership: 2, structure: 2 },
    reason: "适合在多地区、多团队之间推进合作和资源整合。",
    roles: "国际合作、项目运营、供应链协调、活动执行、客户成功",
    places: "香港、新加坡、迪拜、伦敦、上海、吉隆坡",
    skills: "英语沟通、项目管理、跨文化理解、文档能力、会议推动",
    majors: "国际关系、工商管理、外语、物流管理、公共管理",
    firstProject: "模拟一次跨国项目会议，整理目标、风险和行动清单。"
  },
  {
    title: "临床/咨询心理相关方向",
    tags: ["心理", "助人", "专业"],
    weights: { empathy: 4, research: 2, structure: 1, riskAware: 1 },
    reason: "适合长期理解人的情绪、行为与关系，并通过专业训练提供支持。",
    roles: "心理咨询助理、心理测评、学校心理支持、员工援助项目",
    places: "香港、北京、上海、伦敦、墨尔本、温哥华",
    skills: "心理学基础、伦理意识、倾听能力、研究方法、长期督导",
    majors: "心理学、应用心理学、教育心理学、社会工作",
    firstProject: "阅读一本心理学入门书，整理 10 个概念和现实例子。"
  },
  {
    title: "城市规划/交通研究助理",
    tags: ["城市", "数据", "公共政策"],
    weights: { research: 3, mobility: 2, structure: 2, tech: 1 },
    reason: "适合研究城市空间、交通系统和人的移动方式。",
    roles: "交通分析、城市研究、GIS 分析、政策评估、规划咨询",
    places: "香港、新加坡、上海、伦敦、鹿特丹、东京",
    skills: "GIS、数据分析、政策阅读、空间观察、报告写作",
    majors: "城市规划、交通工程、地理信息科学、公共政策、土木工程",
    firstProject: "观察一条通勤路线，记录拥堵、换乘和体验问题。"
  },
  {
    title: "金融科技/风险分析师",
    tags: ["金融", "数据", "风险"],
    weights: { research: 3, tech: 2, structure: 2, riskAware: 3 },
    reason: "适合在高信息密度环境中识别风险、建立规则并支持决策。",
    roles: "风控分析、量化研究助理、信贷分析、反欺诈策略、合规科技",
    places: "香港、上海、深圳、新加坡、纽约、伦敦",
    skills: "统计、SQL/Python、金融基础、风险建模、合规意识",
    majors: "金融工程、统计学、经济学、数据科学、信息系统",
    firstProject: "用公开金融数据做一个简单风险指标或趋势分析。"
  },
  {
    title: "医疗健康运营/数字健康产品",
    tags: ["健康", "产品", "服务"],
    weights: { empathy: 3, structure: 2, tech: 1, social: 1, riskAware: 1 },
    reason: "适合把患者需求、医疗流程和数字工具结合起来改善体验。",
    roles: "医院运营、健康产品运营、患者体验、健康管理项目",
    places: "上海、北京、广州、香港、新加坡、波士顿",
    skills: "流程分析、健康行业知识、用户沟通、数据意识、项目管理",
    majors: "公共卫生、健康管理、护理、信息管理、医学相关专业",
    firstProject: "分析一次就医流程，画出用户旅程图和改进点。"
  },
  {
    title: "游戏/互动体验设计师",
    tags: ["互动", "创意", "技术"],
    weights: { creative: 3, tech: 2, empathy: 1, autonomy: 2 },
    reason: "适合设计规则、反馈和沉浸体验，让用户在互动中获得乐趣。",
    roles: "游戏策划、关卡设计、交互设计、叙事设计、原型制作",
    places: "上海、深圳、成都、东京、首尔、蒙特利尔",
    skills: "交互原型、用户体验、游戏机制、脚本工具、审美表达",
    majors: "数字媒体、交互设计、计算机、动画、心理学",
    firstProject: "设计一个 5 分钟可玩的纸面游戏或网页小游戏原型。"
  },
  {
    title: "创业/自由职业探索者",
    tags: ["自主", "商业", "试验"],
    weights: { autonomy: 4, adventure: 3, creative: 2, leadership: 1 },
    reason: "适合用小规模试验寻找市场需求，并逐渐建立自己的服务或产品。",
    roles: "独立创作者、咨询服务、个人品牌、微型创业、自由项目制",
    places: "上海、深圳、杭州、成都、曼谷、里斯本、柏林",
    skills: "问题验证、销售表达、内容生产、财务意识、客户管理",
    majors: "工商管理、市场营销、设计、计算机、传播学",
    firstProject: "用一周时间测试一个小服务，真实获得 3 个潜在用户反馈。"
  },
  {
    title: "法律合规/政策研究助理",
    tags: ["规则", "研究", "风险"],
    weights: { research: 3, structure: 3, riskAware: 3 },
    reason: "适合在规则密集的环境中做严谨判断，帮助组织降低风险。",
    roles: "合规助理、政策研究、法务支持、知识产权助理、监管分析",
    places: "北京、上海、深圳、香港、新加坡、布鲁塞尔",
    skills: "法律基础、政策阅读、证据整理、文书写作、风险判断",
    majors: "法学、公共政策、国际关系、经济学、知识产权",
    firstProject: "选择一个热门政策，整理背景、影响人群、机会和风险。"
  },
  {
    title: "人力资源/组织发展专员",
    tags: ["组织", "沟通", "心理"],
    weights: { social: 3, empathy: 2, structure: 2, leadership: 1 },
    reason: "适合理解人的动机和组织协作问题，帮助团队更稳定地运转。",
    roles: "招聘、培训、组织发展、员工关系、人才数据分析",
    places: "上海、北京、深圳、杭州、香港、新加坡",
    skills: "访谈沟通、组织行为学、数据意识、劳动法规、培训设计",
    majors: "人力资源管理、心理学、工商管理、社会学、劳动关系",
    firstProject: "设计一份校园社团招聘流程，并写出筛选标准和面试问题。"
  },
  {
    title: "供应链/跨境电商运营",
    tags: ["商业", "数据", "跨文化"],
    weights: { structure: 3, tech: 1, mobility: 2, leadership: 1 },
    reason: "适合处理流程、库存、平台和跨地区协作之间的复杂关系。",
    roles: "跨境电商运营、供应链计划、物流协调、平台运营、采购分析",
    places: "深圳、广州、义乌、杭州、宁波、新加坡、吉隆坡",
    skills: "Excel/SQL、平台规则、物流基础、英语沟通、成本分析",
    majors: "物流管理、国际贸易、电子商务、工商管理、数据分析",
    firstProject: "选一个商品，拆解从生产、物流到线上销售的完整链路。"
  },
  {
    title: "文旅策划/城市品牌运营",
    tags: ["文化", "创意", "城市"],
    weights: { creative: 3, social: 2, mobility: 2, empathy: 1 },
    reason: "适合把地方文化、用户体验和商业活动连接起来。",
    roles: "文旅策划、城市品牌、展览活动、目的地营销、文化项目运营",
    places: "成都、杭州、长沙、西安、厦门、京都、巴黎",
    skills: "内容策划、活动执行、地方文化研究、用户体验、商业提案",
    majors: "旅游管理、传播学、文化产业管理、设计、历史或中文",
    firstProject: "为一座城市设计一条半日主题路线，并说明目标人群。"
  },
  {
    title: "科研助理/实验室项目协调",
    tags: ["研究", "专业", "严谨"],
    weights: { research: 4, structure: 2, riskAware: 1 },
    reason: "适合长期积累专业知识，在证据、实验和文献中形成判断。",
    roles: "科研助理、实验室协调、文献综述、研究数据整理、项目申报支持",
    places: "北京、上海、香港、波士顿、剑桥、苏黎世",
    skills: "文献检索、实验/数据记录、统计基础、英文阅读、学术写作",
    majors: "生物、化学、物理、计算机、心理学、统计学",
    firstProject: "围绕一个研究问题读 5 篇论文，写一页文献摘要。"
  },
  {
    title: "农业科技/食品产业分析",
    tags: ["产业", "数据", "可持续"],
    weights: { research: 2, tech: 1, structure: 2, riskAware: 1 },
    reason: "适合关注真实产业链，把食品安全、农业技术和市场需求结合起来。",
    roles: "食品产品分析、农业科技运营、供应链研究、质量管理、市场研究",
    places: "济南、青岛、成都、杭州、广州、瓦赫宁根、墨尔本",
    skills: "产业研究、质量意识、数据分析、供应链基础、食品科学常识",
    majors: "食品科学、农业经济、供应链管理、生物技术、数据分析",
    firstProject: "选择一种食品，分析原料、加工、渠道和消费者需求。"
  },
  {
    title: "建筑/空间体验设计",
    tags: ["空间", "创意", "城市"],
    weights: { creative: 2, structure: 2, empathy: 1, mobility: 1 },
    reason: "适合把人的行为、审美和空间功能结合起来，设计更好用的环境。",
    roles: "建筑设计助理、室内设计、展陈设计、空间研究、服务空间策划",
    places: "上海、深圳、成都、香港、东京、鹿特丹、米兰",
    skills: "空间观察、绘图软件、模型表达、用户动线、材料与审美",
    majors: "建筑学、室内设计、城市设计、环境设计、工业设计",
    firstProject: "观察一个咖啡店或图书馆，画出动线并提出 3 个改进点。"
  },
  {
    title: "公共管理/非营利项目运营",
    tags: ["公共服务", "组织", "社会影响"],
    weights: { empathy: 3, structure: 2, leadership: 2, riskAware: 1 },
    reason: "适合在公共议题中协调资源，推动教育、社区、公益或治理项目。",
    roles: "公益项目、社区运营、公共事务、基金会项目、社会创新项目",
    places: "广州、成都、上海、北京、香港、台北、温哥华",
    skills: "项目管理、公共沟通、预算意识、影响力评估、政策理解",
    majors: "公共管理、社会工作、社会学、公共政策、教育学",
    firstProject: "选择一个社区问题，设计目标、对象、资源和评估指标。"
  }
];

const locationProfiles = {
  北京: {
    cluster: "政策、科研、互联网总部、文化机构集中",
    pace: "机会密集但竞争强",
    note: "适合愿意进入专业门槛较高、资源密集环境的人。",
    industries: ["policy", "research", "tech", "culture", "education"],
    traits: ["research", "structure", "riskAware"],
    costLevel: 5,
    paceLevel: 5,
    stablePath: 5,
    goodFor: ["科研助理", "政策研究", "产品经理", "法律合规", "教育科技"],
    challenges: ["竞争强", "生活成本高", "通勤压力可能较大"]
  },
  上海: {
    cluster: "金融、品牌、消费、国际企业、专业服务集中",
    pace: "国际化程度高",
    note: "适合重视商业视野、审美表达和跨文化机会的人。",
    industries: ["finance", "brand", "commerce", "global", "creative"],
    traits: ["social", "creative", "leadership", "mobility"],
    costLevel: 5,
    paceLevel: 5,
    stablePath: 3,
    goodFor: ["品牌内容策划", "金融科技", "产品经理", "国际项目", "法律合规"],
    challenges: ["生活成本高", "行业节奏快", "同类人才密集"]
  },
  深圳: {
    cluster: "硬件、软件、跨境电商、创新创业活跃",
    pace: "节奏快、试错多",
    note: "适合技术、产品、供应链和创业倾向较强的人。",
    industries: ["tech", "hardware", "startup", "supplyChain", "commerce"],
    traits: ["tech", "adventure", "autonomy", "leadership"],
    costLevel: 4,
    paceLevel: 5,
    stablePath: 2,
    goodFor: ["软件开发", "产品经理", "供应链/跨境电商", "创业探索"],
    challenges: ["节奏快", "变化大", "需要较强自我驱动"]
  },
  杭州: {
    cluster: "互联网、数字经济、电商和内容生态较强",
    pace: "创新机会多",
    note: "适合技术产品、数据、电商和内容运营方向。",
    industries: ["tech", "data", "commerce", "content", "brand"],
    traits: ["tech", "creative", "autonomy", "research"],
    costLevel: 4,
    paceLevel: 4,
    stablePath: 2,
    goodFor: ["数据分析", "产品经理", "品牌内容", "跨境电商", "软件开发"],
    challenges: ["互联网岗位竞争强", "部分行业加班明显", "生活成本上升"]
  },
  广州: {
    cluster: "贸易、消费、公共服务、文创和供应链基础强",
    pace: "生活气息较浓",
    note: "适合商业运营、公共服务、文旅和跨境贸易方向。",
    industries: ["commerce", "supplyChain", "publicService", "culture", "brand"],
    traits: ["social", "structure", "empathy", "leadership"],
    costLevel: 3,
    paceLevel: 3,
    stablePath: 4,
    goodFor: ["供应链/跨境电商", "公共管理", "品牌内容", "文旅策划"],
    challenges: ["行业分布较广，需要主动聚焦方向", "部分传统行业成长速度较慢"]
  },
  成都: {
    cluster: "文旅、游戏、内容、生活服务和公共项目活跃",
    pace: "生活舒适度高",
    note: "适合创意、文旅、游戏、公益和消费服务方向。",
    industries: ["culture", "game", "tourism", "content", "publicService"],
    traits: ["creative", "empathy", "autonomy", "social"],
    costLevel: 3,
    paceLevel: 3,
    stablePath: 3,
    goodFor: ["文旅策划", "游戏/互动体验", "公共管理", "品牌内容"],
    challenges: ["高端总部岗位相对少", "需要用作品和项目证明能力"]
  },
  香港: {
    cluster: "金融、法律、国际教育、专业服务和跨境合作集中",
    pace: "国际化、高密度",
    note: "适合跨文化、金融、法律、研究和国际项目方向。",
    industries: ["finance", "law", "global", "education", "research"],
    traits: ["mobility", "riskAware", "research", "social"],
    costLevel: 5,
    paceLevel: 5,
    stablePath: 3,
    goodFor: ["金融科技", "法律合规", "国际项目", "教育科技"],
    challenges: ["生活成本高", "语言和专业门槛高", "节奏紧凑"]
  },
  新加坡: {
    cluster: "金融科技、教育科技、国际组织和区域总部集中",
    pace: "规则清楚、国际化",
    note: "适合英文沟通、跨文化协作和高标准专业服务方向。",
    industries: ["finance", "tech", "education", "global", "policy"],
    traits: ["mobility", "structure", "riskAware", "tech"],
    costLevel: 5,
    paceLevel: 4,
    stablePath: 4,
    goodFor: ["金融科技", "教育科技", "国际项目", "数据分析"],
    challenges: ["生活成本高", "语言要求高", "准入和签证条件需要提前确认"]
  },
  温哥华: {
    cluster: "教育、可持续发展、游戏、健康和多元文化环境突出",
    pace: "生活节奏相对平衡",
    note: "适合重视生活质量、教育健康和跨文化环境的人。",
    industries: ["education", "sustainability", "game", "health", "global"],
    traits: ["empathy", "creative", "mobility", "riskAware"],
    costLevel: 5,
    paceLevel: 2,
    stablePath: 3,
    goodFor: ["教育科技", "可持续发展", "心理健康", "游戏/互动体验"],
    challenges: ["生活成本高", "岗位市场相对小", "需要长期身份和语言规划"]
  },
  青岛: {
    cluster: "海洋产业、制造、食品、贸易和文旅资源较强",
    pace: "生活环境较舒适",
    note: "适合产业研究、食品、供应链和文旅方向。",
    industries: ["manufacturing", "food", "supplyChain", "tourism", "commerce"],
    traits: ["structure", "research", "riskAware", "mobility"],
    costLevel: 2,
    paceLevel: 2,
    stablePath: 4,
    goodFor: ["农业食品", "供应链", "文旅策划", "产业分析"],
    challenges: ["新兴互联网岗位较少", "职业上升路径需要筛选平台"]
  },
  巴黎: {
    cluster: "文化、艺术、时尚、品牌和国际机构资源集中",
    pace: "审美和文化资源密集",
    note: "适合品牌、设计、文化传播和国际交流方向。",
    industries: ["creative", "brand", "culture", "global", "tourism"],
    traits: ["creative", "mobility", "social", "autonomy"],
    costLevel: 5,
    paceLevel: 3,
    stablePath: 2,
    goodFor: ["品牌内容", "文旅策划", "设计传播", "国际项目"],
    challenges: ["语言门槛高", "生活成本高", "文化适应需要时间"]
  },
  东京: {
    cluster: "设计、游戏、制造、消费品牌和城市服务成熟",
    pace: "秩序感强",
    note: "适合设计、互动体验、消费品牌和城市研究方向。",
    industries: ["creative", "game", "manufacturing", "brand", "urban"],
    traits: ["creative", "structure", "tech", "research"],
    costLevel: 4,
    paceLevel: 4,
    stablePath: 3,
    goodFor: ["游戏/互动体验", "建筑空间", "品牌内容", "城市研究"],
    challenges: ["语言和职场文化门槛高", "细节要求高", "适应期可能较长"]
  }
};

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
  scores: createEmptyScores(),
  profile: {
    homeCity: "",
    mobilityChoice: "regional"
  },
  feedback: createEmptyFeedback(),
  recommendationIndex: 0,
  currentRecommendations: []
};

const intro = document.querySelector("#intro");
const profileStep = document.querySelector("#profileStep");
const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");
const startButton = document.querySelector("#startButton");
const profileBackButton = document.querySelector("#profileBackButton");
const profileContinueButton = document.querySelector("#profileContinueButton");
const homeCityInput = document.querySelector("#homeCity");
const backButton = document.querySelector("#backButton");
const restartButton = document.querySelector("#restartButton");
const saveReportButton = document.querySelector("#saveReportButton");
const downloadReportButton = document.querySelector("#downloadReportButton");
const downloadFeedbackButton = document.querySelector("#downloadFeedbackButton");
const printReportButton = document.querySelector("#printReportButton");
const compareCareersButton = document.querySelector("#compareCareersButton");
const methodologyButton = document.querySelector("#methodologyButton");
const catalogButton = document.querySelector("#catalogButton");
const saveStatus = document.querySelector("#saveStatus");
const detailBackButton = document.querySelector("#detailBackButton");
const careerDetailView = document.querySelector("#careerDetailView");
const careerDetail = document.querySelector("#careerDetail");
const progressText = document.querySelector("#progressText");
const progressPercent = document.querySelector("#progressPercent");
const progressBar = document.querySelector("#progressBar");
const questionCategory = document.querySelector("#questionCategory");
const questionTitle = document.querySelector("#questionTitle");
const options = document.querySelector("#options");

startButton.addEventListener("click", showProfileStep);
profileBackButton.addEventListener("click", backToIntro);
profileContinueButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", goBack);
restartButton.addEventListener("click", resetQuiz);
saveReportButton.addEventListener("click", saveReport);
downloadReportButton.addEventListener("click", downloadReport);
downloadFeedbackButton.addEventListener("click", downloadFeedbackLog);
printReportButton.addEventListener("click", printReport);
compareCareersButton.addEventListener("click", showCareerComparison);
methodologyButton.addEventListener("click", showRecommendationMethodology);
catalogButton.addEventListener("click", showDataCatalog);
detailBackButton.addEventListener("click", backToResults);

function createEmptyScores() {
  return Object.fromEntries(Object.keys(traitLabels).map((key) => [key, 0]));
}

function createEmptyFeedback() {
  return {
    rejectedTitles: new Set(),
    penalties: {},
    preferences: {
      stable: 0,
      nearby: 0,
      lowerBarrier: 0,
      moreCreative: 0
    }
  };
}

function showProfileStep() {
  intro.classList.add("hidden");
  profileStep.classList.remove("hidden");
  homeCityInput.focus();
}

function backToIntro() {
  profileStep.classList.add("hidden");
  intro.classList.remove("hidden");
}

function startQuiz() {
  state.profile.homeCity = homeCityInput.value.trim();
  state.profile.mobilityChoice =
    document.querySelector('input[name="mobilityChoice"]:checked')?.value || "regional";

  intro.classList.add("hidden");
  profileStep.classList.add("hidden");
  results.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
}

function goBack() {
  if (state.index === 0) {
    quiz.classList.add("hidden");
    profileStep.classList.remove("hidden");
    return;
  }

  state.index -= 1;
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.index];
  const percent = Math.round(((state.index + 1) / questions.length) * 100);

  progressText.textContent = `第 ${state.index + 1} / ${questions.length} 题`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  questionCategory.textContent = `${question.category} · ${question.dimension}`;
  questionTitle.textContent = question.title;
  options.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    const isSelected = state.answers[state.index] === optionIndex;
    button.className = `option-button${isSelected ? " selected" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${option.title}</strong><span>${option.desc}</span>`;
    button.addEventListener("click", () => selectOption(optionIndex));
    options.appendChild(button);
  });
}

function selectOption(optionIndex) {
  state.answers[state.index] = optionIndex;

  if (state.index === questions.length - 1) {
    recomputeScores();
    showResults();
    return;
  }

  state.index += 1;
  renderQuestion();
}

function recomputeScores() {
  state.scores = createEmptyScores();

  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;

    const selected = questions[questionIndex].options[answerIndex];
    Object.entries(selected.scores).forEach(([key, value]) => {
      state.scores[key] += value;
    });
  });
}

function showResults() {
  quiz.classList.add("hidden");
  results.classList.remove("hidden");

  state.recommendationIndex = 0;
  renderScores();
  refreshRecommendations("");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getTopTraits(count) {
  return Object.entries(state.scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);
}

function getTopCareers(count) {
  return getRecommendationCareerPool()
    .map((career) => {
      const enrichedCareer = getCatalogBackedCareer(career);
      const baseMatch = getCareerBaseMatch(enrichedCareer);
      const fitScores = {
        career: getCareerFitPercent(enrichedCareer, baseMatch),
        location: getLocationFitPercent(enrichedCareer),
        learning: getLearningFitPercent(enrichedCareer)
      };
      fitScores.overall = getOverallFitScore(fitScores);
      const adjustedMatch = fitScores.overall + getFeedbackAdjustment(enrichedCareer);
      return {
        ...enrichedCareer,
        match: adjustedMatch,
        fitScores
      };
    })
    .sort((a, b) => b.match - a.match)
    .slice(0, count);
}

function getRecommendationCareerPool() {
  const catalogCareers = getCatalog().careers || [];
  if (catalogCareers.length === 0) return careers;

  const catalogTitles = new Set(catalogCareers.map((career) => career.title));
  const catalogPool = catalogCareers.map(createCareerFromCatalog);
  const fallbackPool = careers
    .filter((career) => !catalogTitles.has(career.title))
    .map((career) => ({ ...career, dataSource: "embedded" }));

  return [...catalogPool, ...fallbackPool];
}

function getOverallFitScore(fitScores) {
  return Math.round(fitScores.career * 0.52 + fitScores.location * 0.24 + fitScores.learning * 0.24);
}

function getFeedbackAdjustment(career) {
  let adjustment = state.feedback.penalties[career.title] || 0;
  const prefs = state.feedback.preferences;

  if (state.feedback.rejectedTitles.has(career.title)) adjustment -= 999;
  if (prefs.stable > 0) adjustment += ((career.weights.structure || 0) + (career.weights.riskAware || 0)) * prefs.stable * 2;
  if (prefs.nearby > 0) adjustment += getNearbyPreferenceBonus(career) * prefs.nearby;
  if (prefs.lowerBarrier > 0) adjustment += getLowerBarrierBonus(career) * prefs.lowerBarrier;
  if (prefs.moreCreative > 0) adjustment += ((career.weights.creative || 0) + (career.weights.autonomy || 0)) * prefs.moreCreative * 2;

  return adjustment;
}

function getNearbyPreferenceBonus(career) {
  const homeCity = normalizeCity(state.profile.homeCity);
  if (!homeCity) return career.places.split("、").some((place) => !isInternationalPlace(place)) ? 4 : -4;
  if (career.places.includes(homeCity)) return 14;
  if (career.places.split("、").some((place) => getRegion(place) === getRegion(homeCity))) return 8;
  return -6;
}

function getLowerBarrierBonus(career) {
  const demandingTraits = ["tech", "research", "riskAware"];
  const demandingWeight = demandingTraits.reduce((total, trait) => total + (career.weights[trait] || 0), 0);
  const socialCreativeWeight = (career.weights.social || 0) + (career.weights.creative || 0) + (career.weights.empathy || 0);
  return socialCreativeWeight * 2 - demandingWeight;
}

function getCareerBaseMatch(career) {
  return Object.entries(career.weights).reduce(
    (total, [trait, weight]) => total + (state.scores[trait] || 0) * weight,
    0
  );
}

function getCareerFitPercent(career, baseMatch = getCareerBaseMatch(career)) {
  const maxTraitScore = Math.max(...Object.values(state.scores), 1);
  const maxPossible = Object.values(career.weights).reduce((total, weight) => total + weight * maxTraitScore, 0) || 1;
  const focusBonus = getTopTraits(3).some(([trait]) => career.weights[trait]) ? 5 : -3;
  return clampPercent(Math.round(42 + (baseMatch / maxPossible) * 52 + focusBonus));
}

function getCareerIndustryHints(career) {
  const text = `${career.title} ${career.tags.join(" ")} ${career.roles} ${career.skills} ${career.majors}`;
  const rules = [
    { pattern: /数据|软件|人工智能|技术|产品|用户体验|互联网|信息系统/, industry: "tech" },
    { pattern: /数据|统计|商业分析|研究/, industry: "data" },
    { pattern: /金融|金融科技|经济/, industry: "finance" },
    { pattern: /品牌|广告|传播|市场|内容|文案/, industry: "brand" },
    { pattern: /创意|设计|文化|数字媒体|动画/, industry: "creative" },
    { pattern: /文旅|旅游|城市品牌/, industry: "tourism" },
    { pattern: /游戏|互动|体验/, industry: "game" },
    { pattern: /教育|学习|课程/, industry: "education" },
    { pattern: /心理|健康|公共卫生|医学/, industry: "health" },
    { pattern: /法律|合规|知识产权|规则|风险/, industry: "law" },
    { pattern: /公共|政策|公益|社会影响|城市|社区/, industry: "publicService" },
    { pattern: /跨文化|国际|外语|贸易|全球/, industry: "global" },
    { pattern: /供应链|物流|贸易|跨境|电商/, industry: "supplyChain" },
    { pattern: /农业|食品|制造|产业/, industry: "manufacturing" },
    { pattern: /可持续|环境|气候/, industry: "sustainability" }
  ];

  return [...new Set(rules.filter((rule) => rule.pattern.test(text)).map((rule) => rule.industry))];
}

function getCityCareerAffinity(city, career) {
  const profile = locationProfiles[city];
  if (!profile) return 0;

  const careerIndustries = getCareerIndustryHints(career);
  const industryOverlap = profile.industries.filter((industry) => careerIndustries.includes(industry)).length;
  const traitOverlap = profile.traits.reduce((total, trait) => total + (career.weights[trait] || 0), 0);
  const goodForText = profile.goodFor.join(" ");
  const titleHit = goodForText.includes(career.title.slice(0, 2)) ? 3 : 0;

  return industryOverlap * 6 + traitOverlap * 2 + titleHit;
}

function getCityLifestyleFit(profile) {
  let score = 0;

  score += profile.traits.reduce((total, trait) => total + Math.min(state.scores[trait] || 0, 12) * 0.9, 0);

  if (state.scores.riskAware >= 10) {
    score += profile.stablePath >= 4 ? 8 : -3;
    score -= profile.costLevel >= 5 ? 5 : 0;
  }

  if (state.scores.mobility >= 9 || state.profile.mobilityChoice === "global") {
    score += profile.paceLevel >= 4 ? 5 : 1;
  }

  if (state.scores.adventure >= 9) {
    score += profile.paceLevel >= 4 ? 5 : -1;
  }

  if (state.scores.creative >= 9 && profile.industries.some((item) => ["creative", "brand", "culture", "game", "tourism", "content"].includes(item))) {
    score += 8;
  }

  if (state.scores.tech >= 9 && profile.industries.some((item) => ["tech", "data", "hardware", "startup"].includes(item))) {
    score += 8;
  }

  if (state.scores.empathy >= 9 && profile.industries.some((item) => ["education", "health", "publicService"].includes(item))) {
    score += 6;
  }

  return score;
}

function getCityFitScore(city, career) {
  const profile = locationProfiles[city];
  if (!profile) return 42;

  const homeCity = normalizeCity(state.profile.homeCity);
  let score = 46 + getCityCareerAffinity(city, career) + getCityLifestyleFit(profile);

  if (homeCity && city === homeCity) score += state.profile.mobilityChoice === "near" ? 22 : 10;
  if (homeCity && getRegion(city) === getRegion(homeCity)) score += 8;
  if (homeCity && state.profile.mobilityChoice === "near" && getRegion(city) !== getRegion(homeCity)) score -= 18;

  if (state.profile.mobilityChoice === "global") {
    score += isInternationalPlace(city) ? 8 : 2;
  } else if (state.profile.mobilityChoice === "national") {
    score += isInternationalPlace(city) ? -5 : 5;
  } else if (state.profile.mobilityChoice === "regional") {
    score += isInternationalPlace(city) ? -8 : 3;
  } else if (state.profile.mobilityChoice === "near") {
    score += isInternationalPlace(city) ? -18 : 2;
  }

  if (state.scores.riskAware >= 10 && profile.costLevel >= 5) score -= 5;
  if (state.scores.adventure >= 10 && profile.stablePath >= 4 && profile.paceLevel <= 3) score -= 2;

  return Math.max(35, Math.min(98, Math.round(score)));
}

function getStructuredCityProfile(city, career) {
  const profile = locationProfiles[city];
  if (!profile) {
    return {
      opportunityLevel: 2,
      opportunityText: "机会密度待调研",
      industryStrength: 1,
      industryText: "产业匹配需要进一步确认",
      competitionText: "竞争情况需要结合真实岗位数量判断",
      researchTasks: ["搜索该城市相关岗位数量", "比较生活成本和通勤", "访谈在当地学习或工作的人"]
    };
  }

  const industryStrength = getCityIndustryStrength(city, career);
  const opportunityLevel = getCityOpportunityLevel(profile, industryStrength);
  const competitionText = getCityCompetitionText(profile, industryStrength);

  return {
    opportunityLevel,
    opportunityText: getOpportunityText(opportunityLevel),
    industryStrength,
    industryText: getIndustryStrengthText(industryStrength),
    competitionText,
    researchTasks: getCityResearchTasks(city, career, profile, opportunityLevel)
  };
}

function getCityIndustryStrength(city, career) {
  const profile = locationProfiles[city];
  if (!profile) return 1;

  const careerIndustries = getCareerIndustryHints(career);
  const overlap = profile.industries.filter((industry) => careerIndustries.includes(industry)).length;
  const goodForHit = profile.goodFor.some((item) => career.title.includes(item) || item.includes(career.title.slice(0, 2)));

  if (overlap >= 3 || (overlap >= 2 && goodForHit)) return 5;
  if (overlap >= 2) return 4;
  if (overlap >= 1 || goodForHit) return 3;
  return 2;
}

function getCityOpportunityLevel(profile, industryStrength) {
  let level = industryStrength;

  if (profile.paceLevel >= 4) level += 1;
  if (profile.stablePath >= 4 && industryStrength >= 3) level += 1;
  if (profile.costLevel >= 5 && industryStrength <= 3) level -= 1;

  return Math.max(1, Math.min(5, level));
}

function getOpportunityText(level) {
  if (level >= 5) return "高：机会密集，但通常竞争也强";
  if (level >= 4) return "较高：值得优先查岗位和实习";
  if (level >= 3) return "中等：适合作为备选或区域选择";
  return "较低：需要先确认岗位密度";
}

function getIndustryStrengthText(level) {
  if (level >= 5) return "强匹配：城市产业和职业方向高度重合";
  if (level >= 4) return "较强匹配：有清晰产业基础";
  if (level >= 3) return "中等匹配：存在相关机会";
  return "弱匹配：更适合继续调研后再判断";
}

function getCityCompetitionText(profile, industryStrength) {
  if (profile.costLevel >= 5 && profile.paceLevel >= 4) return "竞争压力偏高，建议重点比较薪资、房租、通勤和成长速度。";
  if (profile.stablePath >= 4 && industryStrength >= 3) return "稳定路径较多，但也要查看考试、编制或国企岗位的真实竞争比例。";
  if (profile.paceLevel <= 2) return "节奏较平衡，但高成长岗位可能更分散，需要主动筛选平台。";
  return "竞争压力中等，建议用岗位数量和入门门槛继续验证。";
}

function getCityResearchTasks(city, career, profile, opportunityLevel) {
  const tasks = [
    `用“${city} ${career.title} 招聘/实习”搜索 10 个岗位，记录共同要求。`,
    `比较${city}的房租、通勤和生活节奏，判断自己能否长期适应。`,
    `找 1 位在${city}学习或工作的人，询问这个方向的真实机会。`
  ];

  if (profile.stablePath >= 4) {
    tasks.push("如果考虑稳定路径，单独查看招录人数、报名人数和专业限制。");
  }

  if (opportunityLevel <= 2) {
    tasks.push("把它暂时作为备选城市，先和一个机会更密集的城市对比。");
  }

  return tasks.slice(0, 4);
}

function getLocationFitPercent(career) {
  const homeCity = normalizeCity(state.profile.homeCity);
  const mobilityChoice = state.profile.mobilityChoice;
  const places = career.places.split("、");
  const domesticCount = places.filter((place) => !isInternationalPlace(place)).length;
  const internationalCount = places.length - domesticCount;
  const knownPlaceScores = places
    .filter((place) => locationProfiles[place])
    .map((place) => getCityFitScore(place, career))
    .sort((a, b) => b - a);
  const cityFitAverage =
    knownPlaceScores.length > 0
      ? knownPlaceScores.slice(0, 4).reduce((total, value) => total + value, 0) / Math.min(knownPlaceScores.length, 4)
      : 50;
  let score = cityFitAverage * 0.75 + 18 + Math.min(places.length, 6) * 1.5;

  if (homeCity && places.includes(homeCity)) score += mobilityChoice === "near" ? 24 : 14;
  if (homeCity && places.some((place) => getRegion(place) === getRegion(homeCity))) score += 12;
  if (homeCity && !places.some((place) => getRegion(place) === getRegion(homeCity))) score -= mobilityChoice === "near" ? 18 : 6;

  if (mobilityChoice === "near") {
    score += domesticCount > 0 ? 4 : -16;
    score -= internationalCount * 4;
  } else if (mobilityChoice === "regional") {
    score += domesticCount * 2;
    score -= Math.max(0, internationalCount - 1) * 2;
  } else if (mobilityChoice === "national") {
    score += domesticCount * 3;
    score -= internationalCount > domesticCount ? 4 : 0;
  } else if (mobilityChoice === "global") {
    score += internationalCount * 4 + (career.weights.mobility || 0) * 3;
  }

  if (state.scores.mobility >= state.scores.riskAware + 3) score += internationalCount * 2 + (career.weights.mobility || 0) * 3;
  if (state.scores.riskAware >= state.scores.mobility + 3) score -= internationalCount * 3;
  if (state.scores.riskAware >= 10 && places.some(isHighCostPlace)) score -= 5;
  if (career.weights.mobility && internationalCount > 0) score += career.weights.mobility * 2;
  if (!homeCity && mobilityChoice === "near") score -= 5;

  return clampPercent(Math.round(score));
}

function getLearningFitPercent(career) {
  const majorPlan = getMajorPlan(career);
  const majorText = [...majorPlan.primary, ...majorPlan.secondary, ...majorPlan.supporting].join("、");
  let score = 46;

  const categories = [
    { pattern: /计算机|软件|人工智能|信息系统|数据|统计|商业分析/, traits: ["tech", "research", "structure"], difficulty: 5 },
    { pattern: /心理|教育|社会|社会工作|公共卫生|医学|护理/, traits: ["empathy", "social", "research"], difficulty: 4 },
    { pattern: /传播|广告|市场|设计|中文|外语|数字媒体|文化|动画/, traits: ["creative", "social", "autonomy"], difficulty: 3 },
    { pattern: /金融|经济|工商|管理|国际贸易|物流|供应链|人力资源|公共管理/, traits: ["structure", "leadership", "research"], difficulty: 4 },
    { pattern: /环境|公共政策|国际关系|城市|建筑|交通|地理/, traits: ["research", "mobility", "structure"], difficulty: 4 },
    { pattern: /法学|知识产权|法律/, traits: ["research", "riskAware", "structure"], difficulty: 5 }
  ];

  const matched = categories.find((category) => category.pattern.test(majorText)) || {
    traits: ["research", "structure", "autonomy"],
    difficulty: 3
  };

  score += matched.traits.reduce((total, trait) => total + (state.scores[trait] || 0), 0) * 1.8;
  score += getTopTraits(4).filter(([trait]) => matched.traits.includes(trait)).length * 4;
  score += (state.scores.structure || 0) >= 8 ? 5 : -2;
  score += (state.scores.research || 0) >= 8 && matched.traits.includes("research") ? 4 : 0;
  score -= matched.difficulty * 2;
  score -= career.weights.tech >= 3 && state.scores.tech < 6 ? 8 : 0;
  score -= career.weights.research >= 3 && state.scores.research < 6 ? 7 : 0;
  score -= career.weights.empathy >= 3 && state.scores.empathy < 6 ? 6 : 0;
  score -= state.scores.adventure >= 12 && matched.difficulty >= 5 ? 4 : 0;

  return clampPercent(Math.round(score));
}

function clampPercent(value) {
  return Math.max(45, Math.min(96, value));
}

function getCareerContextBonus(career) {
  const homeCity = normalizeCity(state.profile.homeCity);
  const mobilityChoice = state.profile.mobilityChoice;
  let bonus = 0;

  if (homeCity && career.places.includes(homeCity)) {
    bonus += mobilityChoice === "near" ? 12 : 5;
  }

  if (mobilityChoice === "global" && hasInternationalPlace(career.places)) {
    bonus += 5;
  }

  if (mobilityChoice === "near" && !homeCity && state.scores.riskAware > state.scores.mobility) {
    bonus += career.weights.structure ? 3 : 0;
  }

  return bonus;
}

function getCareerFitReasons(career) {
  const weightedTraits = Object.entries(career.weights)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([trait]) => trait);

  const reasons = weightedTraits.map((trait) => {
    const score = state.scores[trait] || 0;
    return `你的“${traitLabels[trait]}”倾向较${score >= 8 ? "突出" : "明显"}，这和该方向需要的能力比较接近。`;
  });

  if (career.tags.includes("跨文化") && state.profile.mobilityChoice === "global") {
    reasons.push("你愿意探索国内外机会，和这个方向的跨地区协作特点匹配。");
  }

  if (career.tags.includes("风险") && state.scores.riskAware >= 5) {
    reasons.push("你的风险意识较强，适合需要规则判断、合规意识或稳定推进的岗位。");
  }

  return reasons.slice(0, 4);
}

function getLocationAdvice(career) {
  const homeCity = normalizeCity(state.profile.homeCity);
  const mobilityChoice = state.profile.mobilityChoice;
  const allPlaces = career.places.split("、");
  let places = allPlaces;

  if (mobilityChoice === "near" && homeCity) {
    places = prioritizeHomeRegion(allPlaces, homeCity).slice(0, 4);
  } else if (mobilityChoice === "regional" && homeCity) {
    places = prioritizeHomeRegion(allPlaces, homeCity).slice(0, 5);
  } else if (mobilityChoice === "national") {
    places = allPlaces.filter((place) => !isInternationalPlace(place)).slice(0, 5);
  } else if (mobilityChoice === "global") {
    places = allPlaces.slice(0, 6);
  }

  if (places.length === 0) places = allPlaces.slice(0, 4);
  places = [...places].sort((a, b) => getCityFitScore(b, career) - getCityFitScore(a, career));

  const reasons = places.slice(0, 3).map((place) => {
    const profile = locationProfiles[place];
    if (!profile) {
      return `${place}和该方向有一定相关机会，适合作为进一步调研对象。`;
    }

    const affinity = getCityCareerAffinity(place, career);
    const fitLabel = affinity >= 18 ? "产业匹配度很高" : affinity >= 10 ? "产业匹配度较好" : "可以作为拓展选择";
    return `${place}：${profile.cluster}；${fitLabel}；${profile.pace}。${profile.note}`;
  });

  if (homeCity && places.includes(homeCity)) {
    reasons.unshift(`你目前在${homeCity}，如果希望降低迁移成本，可以先从本地实习、项目和访谈开始。`);
  }

  if (mobilityChoice === "near") {
    reasons.push("你更希望离家近，所以这里优先保留迁移成本较低的地点；远方城市可以作为长期备选。");
  } else if (mobilityChoice === "global") {
    reasons.push("你愿意探索国内外机会，所以推荐会保留国际化城市，但仍需要进一步确认签证、语言和生活成本。");
  }

  return {
    places: places.join("、"),
    reasons: [...new Set(reasons)].slice(0, 4)
  };
}

function normalizeCity(value) {
  if (!value) return "";
  const compact = value.replace(/\s/g, "");
  const knownCities = Object.keys(locationProfiles);
  return knownCities.find((city) => compact.includes(city)) || compact;
}

function hasInternationalPlace(placeText) {
  return placeText.split("、").some(isInternationalPlace);
}

function isInternationalPlace(place) {
  const domesticPlaces = ["北京", "上海", "深圳", "杭州", "广州", "成都", "香港", "青岛", "济南", "义乌", "宁波", "厦门", "长沙", "西安"];
  return !domesticPlaces.includes(place);
}

function isHighCostPlace(place) {
  return ["北京", "上海", "深圳", "香港", "新加坡", "伦敦", "纽约", "旧金山", "温哥华", "东京", "巴黎"].includes(place);
}

function hasVerifiedCityPhoto(place) {
  return [
    "北京",
    "上海",
    "深圳",
    "广州",
    "杭州",
    "成都",
    "香港",
    "新加坡",
    "温哥华",
    "青岛",
    "巴黎",
    "东京"
  ].includes(place);
}

function prioritizeHomeRegion(places, homeCity) {
  const region = getRegion(homeCity);
  return [...places].sort((a, b) => {
    const aScore = getPlacePriority(a, homeCity, region);
    const bScore = getPlacePriority(b, homeCity, region);
    return bScore - aScore;
  });
}

function getPlacePriority(place, homeCity, region) {
  if (place === homeCity) return 5;
  if (getRegion(place) === region) return 3;
  if (!isInternationalPlace(place)) return 1;
  return 0;
}

function getRegion(place) {
  const regions = {
    east: ["上海", "杭州", "宁波", "苏州", "南京", "济南", "青岛", "山东", "浙江", "江苏"],
    south: ["深圳", "广州", "香港", "厦门", "广东", "福建"],
    west: ["成都", "重庆", "西安", "四川", "陕西"],
    north: ["北京", "天津", "河北"]
  };

  return Object.entries(regions).find(([, cities]) => cities.includes(place))?.[0] || "other";
}

function renderScores() {
  const scoreGrid = document.querySelector("#scoreGrid");
  const maxScore = Math.max(...Object.values(state.scores), 1);
  scoreGrid.innerHTML = "";

  getTopTraits(6).forEach(([key, value]) => {
    const card = document.createElement("div");
    card.className = "score-card";
    card.innerHTML = `
      <strong>${traitLabels[key]}</strong>
      <p>${getTraitText(key)}</p>
      <div class="score-meter"><div style="width: ${(value / maxScore) * 100}%"></div></div>
    `;
    scoreGrid.appendChild(card);
  });
}

function renderCareers(topCareers) {
  const careerList = document.querySelector("#careerList");
  careerList.innerHTML = "";

  if (topCareers.length === 0) {
    careerList.innerHTML = `<article class="career-card"><h4>暂时没有可展示的推荐</h4><p>你可以重新测试，或减少“不感兴趣”的反馈。</p></article>`;
    return;
  }

  const career = topCareers[state.recommendationIndex] || topCareers[0];
  const index = state.recommendationIndex;
  const card = document.createElement("article");
  card.className = "career-card";
  const careerTitle = career.title;
  const careerReasons = getCareerFitReasons(career);
  const explanation = getRecommendationExplanation(career, topCareers, index);
  const locationAdvice = getLocationAdvice(career);
  const majorPlan = getMajorPlan(career);
  card.innerHTML = `
    <div class="career-card-top">
      <span>推荐 ${index + 1} / ${topCareers.length} · 综合适配度 ${career.fitScores.overall}%</span>
      <div class="career-nav">
        <button type="button" data-career-nav="prev" ${index === 0 ? "disabled" : ""}>上一个职业</button>
        <button type="button" data-career-nav="next" ${index === topCareers.length - 1 ? "disabled" : ""}>下一个职业</button>
      </div>
    </div>
    <div class="career-title-row">
      <div>
        <h4>${index + 1}. ${career.title}</h4>
        <p>${career.reason}</p>
      </div>
      <button class="primary-button detail-button hero-detail-button" type="button" data-career-title="${careerTitle}">了解更多</button>
    </div>
    <div class="career-meta">
      ${career.dataSource === "catalog" ? "<span>JSON 数据</span>" : ""}
      ${career.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    <div class="fit-score-grid">
      ${renderFitScore("职业匹配度", career.fitScores.career)}
      ${renderFitScore("地区适配度", career.fitScores.location)}
      ${renderFitScore("学习可行度", career.fitScores.learning)}
    </div>
    ${renderRecommendationExplanation(explanation)}
    <div class="reason-box">
      <strong>为什么你可能适合</strong>
      <ul>${careerReasons.map((reason) => `<li>${reason}</li>`).join("")}</ul>
    </div>
    <div class="career-detail">
      <div><strong>适合岗位</strong><p>${career.roles}</p></div>
      <div>
        <strong>适合地区</strong>
        <p>${locationAdvice.places}</p>
          <div class="mini-actions">
            ${locationAdvice.places
              .split("、")
              .filter(hasVerifiedCityPhoto)
              .slice(0, 4)
              .map((place) => `<button type="button" data-city="${place}" data-career-title="${careerTitle}">${place} · 了解更多</button>`)
              .join("")}
          </div>
          <small class="city-photo-note">仅展示已有真实照片的城市详情。</small>
        </div>
      <div>
        <strong>能力与专业</strong>
        <p>${career.skills}</p>
      </div>
    </div>
    <div class="major-plan">
      ${renderMajorGroup("主攻专业", majorPlan.primary, careerTitle)}
      ${renderMajorGroup("辅修专业", majorPlan.secondary, careerTitle)}
      ${renderMajorGroup("补充了解", majorPlan.supporting, careerTitle)}
    </div>
    <div class="reason-box location-reason">
      <strong>为什么推荐这些地区</strong>
      <ul>${locationAdvice.reasons.map((reason) => `<li>${reason}</li>`).join("")}</ul>
    </div>
    <p class="starter-project"><strong>入门项目：</strong>${career.firstProject}</p>
    <div class="feedback-panel">
      <strong>调整推荐</strong>
      <div>
        <button type="button" data-feedback="reject" data-career-title="${career.title}">不感兴趣</button>
        <button type="button" data-feedback="nearby" data-career-title="${career.title}">地点太远</button>
        <button type="button" data-feedback="lowerBarrier" data-career-title="${career.title}">专业门槛太高</button>
        <button type="button" data-feedback="stable" data-career-title="${career.title}">想看更稳定方向</button>
        <button type="button" data-feedback="moreCreative" data-career-title="${career.title}">想看更自由/创意方向</button>
      </div>
    </div>
  `;
  careerList.appendChild(card);

  careerList.querySelectorAll("[data-career-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.careerNav;
      state.recommendationIndex += direction === "next" ? 1 : -1;
      state.recommendationIndex = Math.max(0, Math.min(state.recommendationIndex, topCareers.length - 1));
      refreshRecommendations("");
      document.querySelector("#careerList")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /*
  topCareers.forEach((career, index) => {
    const card = document.createElement("article");
    card.className = "career-card";
    const careerIndex = careers.findIndex((item) => item.title === career.title);
    const careerReasons = getCareerFitReasons(career);
    const locationAdvice = getLocationAdvice(career);
    const majorPlan = getMajorPlan(career);
    card.innerHTML = `
      <h4>${index + 1}. ${career.title}</h4>
      <p>${career.reason}</p>
      <div class="career-meta">${career.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="fit-score-grid">
        ${renderFitScore("职业匹配度", career.fitScores.career)}
        ${renderFitScore("地区适配度", career.fitScores.location)}
        ${renderFitScore("学习可行度", career.fitScores.learning)}
      </div>
      <div class="reason-box">
        <strong>为什么你可能适合</strong>
        <ul>${careerReasons.map((reason) => `<li>${reason}</li>`).join("")}</ul>
      </div>
      <div class="career-detail">
        <div><strong>适合岗位</strong><p>${career.roles}</p></div>
        <div>
          <strong>适合地区</strong>
          <p>${locationAdvice.places}</p>
          <div class="mini-actions">
            ${locationAdvice.places
              .split("、")
              .slice(0, 4)
              .map((place) => `<button type="button" data-city="${place}" data-career-index="${careerIndex}">${place} · 了解更多</button>`)
              .join("")}
          </div>
        </div>
        <div>
          <strong>能力与专业</strong>
          <p>${career.skills}</p>
        </div>
      </div>
      <div class="major-plan">
        ${renderMajorGroup("主攻专业", majorPlan.primary, careerIndex)}
        ${renderMajorGroup("辅修专业", majorPlan.secondary, careerIndex)}
        ${renderMajorGroup("补充了解", majorPlan.supporting, careerIndex)}
      </div>
      <div class="reason-box location-reason">
        <strong>为什么推荐这些地区</strong>
        <ul>${locationAdvice.reasons.map((reason) => `<li>${reason}</li>`).join("")}</ul>
      </div>
      <p class="starter-project"><strong>入门项目：</strong>${career.firstProject}</p>
      <div class="feedback-panel">
        <strong>调整推荐</strong>
        <div>
          <button type="button" data-feedback="reject" data-career-title="${career.title}">不感兴趣</button>
          <button type="button" data-feedback="nearby" data-career-title="${career.title}">地点太远</button>
          <button type="button" data-feedback="lowerBarrier" data-career-title="${career.title}">专业门槛太高</button>
          <button type="button" data-feedback="stable" data-career-title="${career.title}">想看更稳定方向</button>
          <button type="button" data-feedback="moreCreative" data-career-title="${career.title}">想看更自由/创意方向</button>
        </div>
      </div>
      <button class="secondary-button detail-button" type="button" data-career-index="${careerIndex}">了解更多</button>
    `;
    careerList.appendChild(card);
  });
  */

  careerList.querySelectorAll(".detail-button[data-career-title]").forEach((button) => {
    button.addEventListener("click", () => {
      showCareerDetail(findCareerByTitle(button.dataset.careerTitle));
    });
  });

  careerList.querySelectorAll("[data-city]").forEach((button) => {
    button.addEventListener("click", () => {
      showCityDetail(button.dataset.city, findCareerByTitle(button.dataset.careerTitle));
    });
  });

  careerList.querySelectorAll("[data-major]").forEach((button) => {
    button.addEventListener("click", () => {
      showMajorDetail(button.dataset.major, findCareerByTitle(button.dataset.careerTitle));
    });
  });

  careerList.querySelectorAll("[data-feedback]").forEach((button) => {
    button.addEventListener("click", () => {
      applyRecommendationFeedback(button.dataset.feedback, button.dataset.careerTitle);
    });
  });
}

function applyRecommendationFeedback(type, careerTitle) {
  recordRecommendationFeedback(type, careerTitle);

  if (type === "reject") {
    state.feedback.rejectedTitles.add(careerTitle);
  } else if (type === "nearby") {
    state.feedback.preferences.nearby += 1;
    state.feedback.penalties[careerTitle] = (state.feedback.penalties[careerTitle] || 0) - 8;
  } else if (type === "lowerBarrier") {
    state.feedback.preferences.lowerBarrier += 1;
    state.feedback.penalties[careerTitle] = (state.feedback.penalties[careerTitle] || 0) - 6;
  } else if (type === "stable") {
    state.feedback.preferences.stable += 1;
  } else if (type === "moreCreative") {
    state.feedback.preferences.moreCreative += 1;
  }

  refreshRecommendations("已根据你的反馈调整推荐，并已记录这次反馈用于后续优化。");
}

function recordRecommendationFeedback(type, careerTitle) {
  const feedbackLog = getStoredFeedbackLog();
  const currentCareer = state.currentRecommendations.find((career) => career.title === careerTitle);
  const event = {
    id: `feedback-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    type,
    label: getFeedbackLabel(type),
    careerTitle,
    careerFamily: currentCareer ? getStructuredCareerProfile(currentCareer).family : "未知职业族群",
    currentRank: state.currentRecommendations.findIndex((career) => career.title === careerTitle) + 1,
    currentScores: currentCareer?.fitScores || null,
    topTraits: getTopTraits(4).map(([trait, value]) => ({
      trait,
      label: traitLabels[trait],
      value
    })),
    profile: {
      homeCity: state.profile.homeCity || "",
      mobilityChoice: state.profile.mobilityChoice
    },
    visibleRecommendations: state.currentRecommendations.slice(0, 5).map((career, index) => ({
      rank: index + 1,
      title: career.title,
      overall: career.fitScores.overall
    }))
  };

  feedbackLog.push(event);
  localStorage.setItem("futurePathFeedbackLog", JSON.stringify(feedbackLog.slice(-200)));
}

function getStoredFeedbackLog() {
  try {
    const stored = JSON.parse(localStorage.getItem("futurePathFeedbackLog") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function getFeedbackLabel(type) {
  const labels = {
    reject: "不感兴趣",
    nearby: "地点太远",
    lowerBarrier: "专业门槛太高",
    stable: "想看更稳定方向",
    moreCreative: "想看更自由/创意方向"
  };

  return labels[type] || type;
}

function refreshRecommendations(message) {
  const topTraits = getTopTraits(4);
  const topCareers = getTopCareers(5);
  state.currentRecommendations = topCareers;
  state.recommendationIndex = Math.min(state.recommendationIndex, Math.max(topCareers.length - 1, 0));
  const homeText = state.profile.homeCity ? `结合你目前在${state.profile.homeCity}的背景，` : "";
  const currentCareer = topCareers[state.recommendationIndex];

  document.querySelector("#summaryText").textContent =
    `${message ? `${message} ` : ""}${homeText}你的突出倾向是${topTraits.map(([key]) => traitLabels[key]).join("、")}。` +
    `推荐已按综合适配度排序，当前展示第 ${state.recommendationIndex + 1} 个：${currentCareer?.title || "暂无推荐"}。`;

  renderCareers(topCareers);
  renderNextSteps(topTraits, topCareers);
}

function renderFitScore(label, value) {
  return `
    <div class="fit-score">
      <div>
        <strong>${label}</strong>
        <span>${value}%</span>
      </div>
      <div class="fit-meter"><i style="width: ${value}%"></i></div>
    </div>
  `;
}

function renderRecommendationExplanation(explanation) {
  return `
    <div class="match-explanation">
      <div class="section-heading compact-heading">
        <span>匹配解释</span>
        <h3>${explanation.headline}</h3>
      </div>
      <div class="match-explanation-grid">
        <div>
          <strong>拉高分数的因素</strong>
          <ul>${explanation.strengths.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div>
          <strong>需要补足的部分</strong>
          <ul>${explanation.gaps.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="match-formula" aria-label="综合适配度计算权重">
        <span style="width: 52%">职业 52%</span>
        <span style="width: 24%">地区 24%</span>
        <span style="width: 24%">学习 24%</span>
      </div>
      <p>${explanation.rankNote}</p>
    </div>
  `;
}

function getRecommendationExplanation(career, topCareers, index) {
  const topWeightedTraits = Object.entries(career.weights)
    .map(([trait, weight]) => ({
      trait,
      weight,
      score: state.scores[trait] || 0,
      label: traitLabels[trait] || trait
    }))
    .sort((a, b) => b.weight * b.score - a.weight * a.score);
  const strongMatches = topWeightedTraits.filter((item) => item.score >= 7).slice(0, 3);
  const weakerMatches = topWeightedTraits.filter((item) => item.weight >= 2 && item.score < 7).slice(0, 2);
  const locationAdvice = getLocationAdvice(career);
  const firstCity = locationAdvice.places.split("、")[0];
  const cityScore = getCityFitScore(firstCity, career);
  const majorPlan = getMajorPlan(career);
  const primaryMajors = majorPlan.primary.slice(0, 2).join("、");
  const strengths = [];
  const gaps = [];

  strongMatches.forEach((item) => {
    strengths.push(`你的“${item.label}”得分较高，而这个方向对它的依赖也很强。`);
  });

  if (career.fitScores.location >= 78 && firstCity) {
    strengths.push(`${firstCity}等推荐城市与该方向的产业机会较接近，地区适配度达到 ${career.fitScores.location}%。`);
  } else if (firstCity) {
    strengths.push(`${firstCity}可以作为起点，但仍建议继续比较岗位密度、成本和长期生活节奏。`);
  }

  if (career.fitScores.learning >= 78) {
    strengths.push(`学习可行度较好，${primaryMajors || "相关专业"}能比较自然地连接到这个方向。`);
  }

  weakerMatches.forEach((item) => {
    gaps.push(`“${item.label}”目前不是最突出的倾向，进入这个方向时要刻意练习。`);
  });

  if (career.fitScores.learning < 72) {
    gaps.push(`学习路径有一定门槛，可以先从${career.firstProject}开始验证兴趣。`);
  } else {
    gaps.push(`还需要把兴趣变成作品或项目证据，只看测试结果还不够。`);
  }

  if (career.fitScores.location < 72) {
    gaps.push("地区选择需要更谨慎，建议优先确认实习数量、通勤成本和城市适应度。");
  }

  const previous = topCareers[index - 1];
  const next = topCareers[index + 1];
  let rankNote = "它排在前面，是因为职业匹配、地区机会和学习可行度三项比较均衡。";

  if (index === 0 && next) {
    const delta = Math.max(1, Math.round(career.fitScores.overall - next.fitScores.overall));
    rankNote = `它暂时排第 1，是因为综合适配度比下一项“${next.title}”高 ${delta} 分左右，尤其在${getBestFitDimension(career.fitScores)}上更占优势。`;
  } else if (previous) {
    const delta = Math.max(1, Math.round(previous.fitScores.overall - career.fitScores.overall));
    rankNote = `它和上一项“${previous.title}”只差约 ${delta} 分，可以一起调研；当前更值得看它在${getBestFitDimension(career.fitScores)}上的优势。`;
  }

  return {
    headline: `${getBestFitDimension(career.fitScores)}最突出`,
    strengths: strengths.slice(0, 4),
    gaps: gaps.slice(0, 3),
    rankNote
  };
}

function getBestFitDimension(fitScores) {
  const dimensions = [
    ["职业匹配", fitScores.career],
    ["地区适配", fitScores.location],
    ["学习可行", fitScores.learning]
  ];
  return dimensions.sort((a, b) => b[1] - a[1])[0][0];
}

function renderNextSteps(topTraits, topCareers) {
  const nextSteps = document.querySelector("#nextSteps");
  if (topCareers.length === 0) {
    nextSteps.innerHTML = `
      <div class="action-summary">
        <strong>暂时没有可生成计划的职业</strong>
        <span>可以重新测试，或减少“不感兴趣”的反馈后再查看。</span>
      </div>
    `;
    return;
  }

  const strongest = traitLabels[topTraits[0][0]];
  const primaryCareer = topCareers[0];
  const secondCareer = topCareers[1];
  const thirdCareer = topCareers[2];
  const locationAdvice = getLocationAdvice(primaryCareer);
  const cities = locationAdvice.places.split("、").slice(0, 2);
  const majorPlan = getMajorPlan(primaryCareer);
  const primaryMajors = majorPlan.primary.slice(0, 2).join("、");
  const plan = getSevenDayPlan(primaryCareer, strongest, cities, primaryMajors);

  nextSteps.innerHTML = `
    <div class="action-summary">
      <strong>本周先验证：${primaryCareer.title}</strong>
      <span>核心优势：${strongest} · 推荐城市：${cities.join(" / ") || "继续调研"}</span>
    </div>

    <div class="week-plan">
      ${plan.map((item) => `
        <article>
          <span>Day ${item.day}</span>
          <strong>${item.title}</strong>
          <p>${item.task}</p>
        </article>
      `).join("")}
    </div>

    <div class="month-route">
      <strong>30 天验证路线</strong>
      <ol>
        <li>第 1 周：完成上面的 7 天计划，判断自己是否愿意继续投入。</li>
        <li>第 2 周：把“${primaryCareer.title}”和“${secondCareer?.title || "第二推荐职业"}”各查 5 个真实岗位，比较能力要求。</li>
        <li>第 3 周：围绕${primaryMajors || "主攻专业"}看 2 门公开课或专业介绍，记录最难和最感兴趣的部分。</li>
        <li>第 4 周：比较${cities.join("、") || "两个推荐城市"}的实习机会、生活成本和长期发展，再决定下一步重点。</li>
      </ol>
    </div>

    <div class="fit-checklist">
      <strong>继续深入的判断清单</strong>
      <label><input type="checkbox" /> 我愿意继续查这个职业的真实岗位。</label>
      <label><input type="checkbox" /> 我对入门项目不排斥，甚至有点想试。</label>
      <label><input type="checkbox" /> 我能接受它需要补的能力短板。</label>
      <label><input type="checkbox" /> 我愿意把它和${thirdCareer?.title || "另一个备选方向"}再对比一次。</label>
    </div>
  `;
}

function getSevenDayPlan(career, strongest, cities, primaryMajors) {
  const project = career.firstProject;
  const cityText = cities.join("、") || "推荐城市";
  const majorText = primaryMajors || "相关专业";
  const type = getCareerPlanType(career);
  const typedTask = {
    tech: "用表格、简单代码或原型工具做一个最小版本，不追求完整，先证明你能把问题跑通。",
    creative: "做一页内容/视觉/活动方案，重点写清楚受众、表达方式和你想传递的感受。",
    people: "设计 5 个访谈问题，找同学、老师或目标用户聊一次，记录真实需求和情绪。",
    public: "找一个真实公共议题或城市问题，整理背景、相关人群、可能方案和风险。",
    business: "拆解一个公司、产品或岗位，写出用户、收入、成本、流程和竞争压力。"
  };

  return [
    {
      day: 1,
      title: "看真实岗位",
      task: `搜索 5 个“${career.title}”相关岗位，圈出反复出现的 5 个能力关键词。`
    },
    {
      day: 2,
      title: "拆能力地图",
      task: `把岗位要求分成“我已有”“可训练”“暂时不确定”三类，特别标出和${strongest}有关的部分。`
    },
    {
      day: 3,
      title: "了解专业入口",
      task: `查看${majorText}的课程介绍，判断自己是否能接受它的基础训练方式。`
    },
    {
      day: 4,
      title: "做一个小作品",
      task: `${project}${typedTask[type] ? ` ${typedTask[type]}` : ""}`
    },
    {
      day: 5,
      title: "比较城市机会",
      task: `比较${cityText}的岗位数量、生活成本、通勤、语言环境和你离家的心理成本。`
    },
    {
      day: 6,
      title: "找人验证",
      task: "找 1 位学长学姐、老师或从业者请教：这个方向最真实的日常、门槛和劝退点是什么。"
    },
    {
      day: 7,
      title: "做继续/暂停判断",
      task: "写 150 字复盘：我喜欢它的什么、担心什么、下周还愿不愿意继续投入 3 小时。"
    }
  ];
}

function getCareerPlanType(career) {
  const text = `${career.title} ${career.tags.join(" ")} ${career.roles}`;
  if (/数据|软件|技术|产品|人工智能|金融科技/.test(text)) return "tech";
  if (/品牌|内容|文旅|设计|创意|游戏|互动/.test(text)) return "creative";
  if (/教育|心理|健康|用户|人力/.test(text)) return "people";
  if (/公共|政策|可持续|法律|城市|社会影响/.test(text)) return "public";
  return "business";
}

function getCatalog() {
  return window.FuturePathCatalog || { careers: [], cities: [], majors: [] };
}

function getCatalogCareerByTitle(title) {
  return getCatalog().careers.find((career) => career.title === title);
}

function getCatalogCityByName(name) {
  return getCatalog().cities.find((city) => city.name === name);
}

function getCatalogMajorByName(name) {
  return getCatalog().majors.find((major) => major.name === name);
}

function getCatalogCityNameById(id) {
  return getCatalog().cities.find((city) => city.id === id)?.name;
}

function createCareerFromCatalog(catalogCareer) {
  const majorPlan = catalogCareer.major_plan || {};
  const majors = [
    ...(majorPlan.primary || []),
    ...(majorPlan.secondary || []),
    ...(majorPlan.supporting || [])
  ];
  const places = catalogCareer.city_ids
    .map(getCatalogCityNameById)
    .filter(Boolean);

  return {
    title: catalogCareer.title,
    tags: catalogCareer.tags,
    weights: catalogCareer.weights,
    reason: catalogCareer.summary,
    roles: catalogCareer.roles.join("、"),
    places: places.join("、"),
    skills: catalogCareer.skills.join("、"),
    majors: majors.join("、"),
    firstProject: catalogCareer.first_project,
    catalogId: catalogCareer.id,
    dataSource: "catalog"
  };
}

function getCatalogBackedCareer(career) {
  const catalogCareer = getCatalogCareerByTitle(career.title);
  if (!catalogCareer) return career;

  const catalogPlaces = catalogCareer.city_ids
    .map(getCatalogCityNameById)
    .filter(Boolean);
  const majorPlan = catalogCareer.major_plan || {};
  const majors = [
    ...(majorPlan.primary || []),
    ...(majorPlan.secondary || []),
    ...(majorPlan.supporting || [])
  ];

  return {
    ...career,
    ...createCareerFromCatalog(catalogCareer),
    places: catalogPlaces.length > 0 ? catalogPlaces.join("、") : career.places,
    majors: majors.length > 0 ? majors.join("、") : career.majors
  };
}

function getStructuredCareerProfile(career) {
  const catalogCareer = getCatalogCareerByTitle(career.title);

  if (catalogCareer) {
    return {
      family: catalogCareer.family,
      barrierLevel: catalogCareer.barrier.level,
      barrierText: `${catalogCareer.barrier.label}：${catalogCareer.barrier.reasons.join("、")}`,
      sampleRoles: catalogCareer.roles.slice(0, 4),
      dropoutPoints: catalogCareer.dropout_points.slice(0, 3),
      evidence: catalogCareer.evidence.slice(0, 3),
      sourceQuality: catalogCareer.source_quality,
      sourceText: getSourceQualityText(catalogCareer.source_quality)
    };
  }

  const text = `${career.title} ${career.tags.join(" ")} ${career.roles} ${career.skills} ${career.majors}`;
  const planType = getCareerPlanType(career);
  const familyRules = [
    { pattern: /软件|数据|人工智能|金融科技|技术|产品/, family: "技术产品与数据" },
    { pattern: /品牌|内容|文旅|游戏|互动|设计|空间|建筑/, family: "创意内容与体验" },
    { pattern: /教育|心理|健康|医疗|人力|用户/, family: "人与服务系统" },
    { pattern: /公共|政策|可持续|法律|合规|城市|非营利/, family: "公共政策与规则治理" },
    { pattern: /供应链|跨境|电商|创业|商业|农业|食品|产业/, family: "商业运营与产业" },
    { pattern: /科研|实验室|研究/, family: "科研与专业研究" }
  ];
  const family = familyRules.find((rule) => rule.pattern.test(text))?.family || "综合探索方向";
  const barrierLevel = getCareerBarrierLevel(text, career);
  const evidence = getCareerEvidenceSuggestions(planType, career);
  const dropoutPoints = getCareerDropoutPoints(text, barrierLevel);

  return {
    family,
    barrierLevel,
    barrierText: getBarrierText(barrierLevel),
    sampleRoles: career.roles.split("、").slice(0, 4),
    dropoutPoints,
    evidence,
    sourceQuality: "heuristic",
    sourceText: "启发式生成"
  };
}

function getSourceQualityText(value) {
  const labels = {
    heuristic: "JSON 样本：经验判断",
    desk_research: "JSON 样本：公开资料查证",
    expert_reviewed: "JSON 样本：专家审核",
    data_connected: "JSON 样本：已接入数据"
  };

  return labels[value] || "数据来源待确认";
}

function getCareerBarrierLevel(text, career) {
  let level = 2;

  if (/软件|人工智能|算法|金融科技|风控|法律|合规|心理|临床|科研|实验室|医学|建筑/.test(text)) {
    level += 2;
  }

  if (/数据|统计|GIS|工程|政策|公共卫生|供应链/.test(text)) {
    level += 1;
  }

  if (/品牌|内容|文旅|运营|人力|公共管理|创业/.test(text)) {
    level += 0;
  }

  if ((career.weights.tech || 0) >= 3 || (career.weights.research || 0) >= 4 || (career.weights.riskAware || 0) >= 3) {
    level += 1;
  }

  return Math.max(1, Math.min(5, level));
}

function getBarrierText(level) {
  if (level >= 5) return "高门槛：需要长期专业训练或较强工具基础";
  if (level >= 4) return "较高门槛：需要系统学习和项目积累";
  if (level >= 3) return "中等门槛：适合用课程加项目逐步验证";
  return "入门较友好：可以先从小项目和访谈开始";
}

function getCareerEvidenceSuggestions(planType, career) {
  const suggestions = {
    tech: ["一个可运行的小工具/数据看板", "3-5 个真实岗位能力对照表", "一页项目复盘，写清问题、方法和结果"],
    creative: ["一组内容、视觉或活动方案", "一个明确目标受众的作品集片段", "一次根据反馈修改后的版本"],
    people: ["一份访谈记录或服务流程图", "一个课程/咨询/用户支持小方案", "对伦理、边界和隐私的基本说明"],
    public: ["一页政策/公共议题分析", "利益相关方和风险清单", "一个可执行的小型项目方案"],
    business: ["一个产品/公司/产业链拆解", "成本、用户、渠道和风险分析", "一次真实用户或客户反馈"]
  };

  return suggestions[planType] || [career.firstProject, "真实岗位调研表", "一页行动复盘"];
}

function getCareerDropoutPoints(text, barrierLevel) {
  const points = [];

  if (/软件|数据|人工智能|金融科技|GIS/.test(text)) {
    points.push("工具和技术学习曲线较陡，前期容易卡在基础练习。");
  }
  if (/品牌|内容|文旅|游戏|设计|空间/.test(text)) {
    points.push("作品会频繁面对反馈和修改，需要接受审美与商业目标之间的拉扯。");
  }
  if (/心理|教育|健康|医疗|人力|用户/.test(text)) {
    points.push("长期面对人的需求和情绪，需要边界感、耐心和专业伦理。");
  }
  if (/法律|合规|政策|公共|可持续|非营利/.test(text)) {
    points.push("推进节奏可能较慢，规则、材料和多方协调会消耗精力。");
  }
  if (/创业|供应链|跨境|电商|商业|产业/.test(text)) {
    points.push("结果压力更直接，需要面对成本、客户、库存或市场波动。");
  }
  if (barrierLevel >= 4) {
    points.push("专业门槛较高，建议先用 1-2 个小项目确认自己是否愿意长期投入。");
  }

  return points.slice(0, 3);
}

function showCareerComparison() {
  const recommendations =
    state.currentRecommendations.length > 0 ? state.currentRecommendations : getTopCareers(5);
  const comparedCareers = recommendations.slice(0, 3);

  if (comparedCareers.length === 0) return;

  careerDetail.innerHTML = `
    <div class="detail-hero comparison-hero">
      <p class="eyebrow">Career Compare</p>
      <h2>前 3 个职业方向对比</h2>
      <p>这里不是替你直接做决定，而是把每个方向的优势、短板、城市和入门路径放在一起看。你可以先选一个最想试的，再保留一个备选方向。</p>
    </div>

    <div class="comparison-grid">
      ${comparedCareers.map((career, index) => renderCareerComparisonCard(career, index, comparedCareers)).join("")}
    </div>

    <section class="detail-panel wide-panel comparison-advice">
      <div class="section-heading">
        <span>怎么用这个对比</span>
        <h3>先选一个小实验，不要急着选终身职业</h3>
      </div>
      <ol class="path-list">
        <li>如果第 1 名和第 2 名差距小于 5 分，把它们都当成候选，不要过早排除。</li>
        <li>优先选择“入门项目”最想立刻尝试的方向，因为行动意愿比抽象喜欢更可靠。</li>
        <li>把推荐城市当作调研线索，继续查岗位数量、生活成本、语言要求和实习机会。</li>
      </ol>
    </section>
  `;

  careerDetail.querySelectorAll("[data-compare-career]").forEach((button) => {
    button.addEventListener("click", () => {
      const career = careers.find((item) => item.title === button.dataset.compareCareer);
      if (career) showCareerDetail(career);
    });
  });

  results.classList.add("hidden");
  careerDetailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showRecommendationMethodology() {
  careerDetail.innerHTML = `
    <div class="detail-hero methodology-hero">
      <p class="eyebrow">Recommendation Method</p>
      <h2>这个推荐是怎么来的</h2>
      <p>当前版本是探索型推荐系统。它会综合你的回答、职业权重、城市画像和学习路径，给出几个值得优先调研的方向，但不会把结果当成最终定论。</p>
    </div>

    <div class="detail-grid">
      <section class="detail-panel">
        <div class="section-heading">
          <span>用户信号</span>
          <h3>先理解你更像哪类探索者</h3>
        </div>
        <ul class="compact-list">
          <li>34 道题覆盖兴趣、性格、价值观、城市偏好、学习方式和职业分化。</li>
          <li>系统会记录研究分析、创意表达、技术工具、沟通协作、规划执行、共情服务等倾向。</li>
          <li>新加入的职业分化题用于拉开相近职业的差距，比如产品、用户研究、数据分析之间的差别。</li>
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>职业匹配</span>
          <h3>职业不是标签，而是一组能力要求</h3>
        </div>
        <ul class="compact-list">
          <li>每个职业都有不同能力权重，例如软件开发更看重技术工具，心理方向更看重共情和长期训练。</li>
          <li>系统会比较你的高分倾向和职业权重是否重合。</li>
          <li>相近职业会通过成果类型、工作对象、风险偏好和劝退点进一步区分。</li>
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>地区适配</span>
          <h3>城市要看产业，也要看生活约束</h3>
        </div>
        <ul class="compact-list">
          <li>城市推荐会考虑产业画像、工作节奏、生活成本、国际化程度和你的迁移意愿。</li>
          <li>如果你填了当前居住城市，系统会优先考虑离家成本和同区域机会。</li>
          <li>城市详情会给出岗位机会、产业强度和竞争提醒；当前是启发式调研线索，不是官方统计。</li>
          <li>城市详情只开放已有真实图片的城市，避免图片和地点不匹配。</li>
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>学习可行</span>
          <h3>看你是否能开始准备</h3>
        </div>
        <ul class="compact-list">
          <li>学习可行度会结合主攻专业、辅修专业、补充知识和职业门槛。</li>
          <li>技术、法律、心理、医学等方向会有更高的长期训练要求。</li>
          <li>网站会给出入门项目，用小行动验证兴趣，而不是只看抽象测试结果。</li>
        </ul>
      </section>

      <section class="detail-panel wide-panel">
        <div class="section-heading">
          <span>综合分数</span>
          <h3>当前权重</h3>
        </div>
        <div class="match-formula methodology-formula" aria-label="综合适配度计算权重">
          <span style="width: 52%">职业匹配 52%</span>
          <span style="width: 24%">地区适配 24%</span>
          <span style="width: 24%">学习可行 24%</span>
        </div>
        <p class="methodology-note">这个权重是当前原型版本的经验设置。正式大规模使用前，应通过真实用户反馈、岗位数据和专家校对继续修正。</p>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>可信边界</span>
          <h3>它不能替你做最终决定</h3>
        </div>
        <ul class="compact-list">
          <li>推荐结果是探索建议，不是性格定型。</li>
          <li>职业选择仍需要真实岗位调研、访谈、实习或项目验证。</li>
          <li>城市和专业信息需要结合最新政策、产业、学校课程和个人家庭情况。</li>
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>第一阶段下一步</span>
          <h3>把推荐继续做可靠</h3>
        </div>
        <ul class="compact-list">
          <li>给职业库增加职业族群、劝退点、门槛等级和真实岗位样例。</li>
          <li>把职业库、城市库、专业库逐步拆成结构化数据。</li>
          <li>收集用户反馈，记录推荐准不准，以及为什么不准。</li>
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>反馈机制</span>
          <h3>让推荐越来越准</h3>
        </div>
        <ul class="compact-list">
          <li>当你点击“不感兴趣、地点太远、专业门槛太高”等按钮时，系统会记录一次本地反馈。</li>
          <li>反馈日志包含反馈类型、对应职业、当时推荐排名、主要倾向和地点偏好。</li>
          <li>当前只保存在你的浏览器本地；正式上线后才应在获得用户同意后写入数据库。</li>
        </ul>
      </section>
    </div>
  `;

  results.classList.add("hidden");
  careerDetailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDataCatalog() {
  const catalog = window.FuturePathCatalog;

  if (!catalog) {
    careerDetail.innerHTML = `
      <div class="detail-hero methodology-hero">
        <p class="eyebrow">Data Catalog</p>
        <h2>数据目录暂时无法读取</h2>
        <p>请确认 <code>data/catalog-data.js</code> 已生成并在页面中加载。</p>
      </div>
    `;
  } else {
    const majorCategories = [...new Set(catalog.majors.map((major) => major.category))].sort((a, b) =>
      a.localeCompare(b, "zh-CN")
    );
    careerDetail.innerHTML = `
      <div class="detail-hero methodology-hero">
        <p class="eyebrow">Data Catalog</p>
        <h2>样本数据目录</h2>
        <p>这是第二阶段的数据接入实验。推荐列表、职业详情、城市详情和专业详情已经开始优先读取 JSON 数据包。</p>
        <div class="career-meta">
          <span>${catalog.careers.length} 个职业</span>
          <span>${catalog.cities.length} 个城市</span>
          <span>${catalog.majors.length} 个专业与技能模块</span>
          <span>校验通过</span>
        </div>
      </div>

      ${renderDataQualityPanel(catalog)}

      <div class="catalog-toolbar">
        <label>
          <span>搜索目录</span>
          <input id="catalogSearch" type="search" placeholder="输入职业、城市、专业或关键词" />
        </label>
        <div class="catalog-filter-buttons" aria-label="数据类型筛选">
          <button type="button" class="active" data-catalog-filter="all">全部</button>
          <button type="button" data-catalog-filter="career">职业</button>
          <button type="button" data-catalog-filter="city">城市</button>
          <button type="button" data-catalog-filter="major">专业/技能</button>
        </div>
        <label>
          <span>专业分类</span>
          <select id="catalogCategory">
            <option value="all">全部分类</option>
            ${majorCategories.map((category) => `<option value="${category}">${category}</option>`).join("")}
          </select>
        </label>
        <strong id="catalogCount"></strong>
      </div>

      <div class="catalog-section">
        <div class="section-heading">
          <span>Careers</span>
          <h3>职业样本</h3>
        </div>
        <div class="catalog-grid">
          ${catalog.careers.map(renderCatalogCareer).join("")}
        </div>
      </div>

      <div class="catalog-section">
        <div class="section-heading">
          <span>Cities</span>
          <h3>城市样本</h3>
        </div>
        <div class="catalog-grid">
          ${catalog.cities.map(renderCatalogCity).join("")}
        </div>
      </div>

      <div class="catalog-section">
        <div class="section-heading">
          <span>Majors</span>
          <h3>专业样本</h3>
        </div>
        <div class="catalog-grid">
          ${catalog.majors.map(renderCatalogMajor).join("")}
        </div>
      </div>
    `;
    attachCatalogFilters();
  }

  results.classList.add("hidden");
  careerDetailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCatalogCareer(career) {
  const searchText = [career.title, career.family, career.summary, ...career.tags, ...career.roles, ...career.skills].join(" ");
  return `
    <article class="catalog-card" data-catalog-card data-catalog-type="career" data-catalog-category="" data-catalog-search="${searchText}">
      <strong>${career.title}</strong>
      <p>${career.summary}</p>
      <div class="career-meta">
        <span>${career.family}</span>
        <span>门槛 ${career.barrier.level}/5</span>
      </div>
      <button class="catalog-open-button" type="button" data-catalog-open="career" data-catalog-value="${career.title}">打开详情</button>
    </article>
  `;
}

function renderCatalogCity(city) {
  const searchText = [city.name, city.region, city.cluster, city.climate, city.culture, ...city.industries, ...city.traits].join(" ");
  return `
    <article class="catalog-card" data-catalog-card data-catalog-type="city" data-catalog-category="" data-catalog-search="${searchText}">
      <strong>${city.name}</strong>
      <p>${city.cluster}</p>
      <div class="career-meta">
        <span>成本 ${city.cost_level}/5</span>
        <span>节奏 ${city.pace_level}/5</span>
      </div>
      <button class="catalog-open-button" type="button" data-catalog-open="city" data-catalog-value="${city.name}">打开详情</button>
    </article>
  `;
}

function renderCatalogMajor(major) {
  const searchText = [major.name, major.category, major.intro, ...major.fit_traits, ...major.courses, ...major.connected_careers].join(" ");
  return `
    <article class="catalog-card" data-catalog-card data-catalog-type="major" data-catalog-category="${major.category}" data-catalog-search="${searchText}">
      <strong>${major.name}</strong>
      <p>${major.intro}</p>
      <div class="career-meta">
        <span>${major.category}</span>
        <span>${major.connected_careers.length} 个连接职业</span>
      </div>
      <button class="catalog-open-button" type="button" data-catalog-open="major" data-catalog-value="${major.name}">打开详情</button>
    </article>
  `;
}

function renderDataQualityPanel(catalog) {
  const careerQuality = countBy(catalog.careers, (career) => career.source_quality || "unknown");
  const cityIndustryQuality = countBy(catalog.cities, (city) => city.data_status?.industry || "unknown");
  const cityJobDensity = countBy(catalog.cities, (city) => city.data_status?.job_density || "unknown");
  const cityCostQuality = countBy(catalog.cities, (city) => city.data_status?.cost || "unknown");
  const heuristicCareers = catalog.careers.filter((career) => career.source_quality === "heuristic");
  const notConnectedCities = catalog.cities.filter((city) => city.data_status?.job_density !== "data_connected");

  return `
    <section class="data-quality-panel">
      <div class="section-heading">
        <span>Quality</span>
        <h3>数据质量面板</h3>
      </div>
      <div class="quality-grid">
        ${renderQualityCard("职业来源等级", [
          `经验判断：${careerQuality.heuristic || 0}`,
          `公开资料查证：${careerQuality.desk_research || 0}`,
          `专家审核：${careerQuality.expert_reviewed || 0}`,
          `已接入数据：${careerQuality.data_connected || 0}`
        ])}
        ${renderQualityCard("城市产业与岗位", [
          `产业判断：${cityIndustryQuality.heuristic || 0} 个经验判断`,
          `岗位密度：${cityJobDensity.not_connected || 0} 个未接入`,
          `生活成本：${cityCostQuality.manual_estimate || 0} 个人工估计`
        ])}
        ${renderQualityCard("当前待审核", [
          `${heuristicCareers.length} 个职业需要资料查证`,
          `${notConnectedCities.length} 个城市缺岗位密度数据`,
          `${catalog.majors.length} 个专业/技能需要后续课程来源标注`
        ])}
      </div>
      <div class="quality-warning">
        <strong>上线前提醒：</strong>
        当前推荐适合做探索和启发，不应包装成确定性职业测评。下一轮应优先把高频推荐职业升级到公开资料查证或专家审核。
      </div>
    </section>
  `;
}

function renderQualityCard(title, items) {
  return `
    <article class="quality-card">
      <strong>${title}</strong>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function countBy(items, getKey) {
  return items.reduce((counts, item) => {
    const key = getKey(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function attachCatalogFilters() {
  const searchInput = document.querySelector("#catalogSearch");
  const categorySelect = document.querySelector("#catalogCategory");
  const filterButtons = [...document.querySelectorAll("[data-catalog-filter]")];
  const cards = [...document.querySelectorAll("[data-catalog-card]")];
  const countLabel = document.querySelector("#catalogCount");
  let activeType = "all";

  function updateCatalogFilter() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    let visibleCount = 0;

    cards.forEach((card) => {
      const typeMatch = activeType === "all" || card.dataset.catalogType === activeType;
      const categoryMatch =
        category === "all" || (card.dataset.catalogType === "major" && card.dataset.catalogCategory === category);
      const searchMatch = !query || card.dataset.catalogSearch.toLowerCase().includes(query);
      const isVisible = typeMatch && categoryMatch && searchMatch;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    countLabel.textContent = `${visibleCount} 条结果`;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeType = button.dataset.catalogFilter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      updateCatalogFilter();
    });
  });

  searchInput.addEventListener("input", updateCatalogFilter);
  categorySelect.addEventListener("change", () => {
    if (categorySelect.value !== "all") {
      activeType = "major";
      filterButtons.forEach((item) => item.classList.toggle("active", item.dataset.catalogFilter === "major"));
    }
    updateCatalogFilter();
  });

  document.querySelectorAll("[data-catalog-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.catalogOpen;
      const value = button.dataset.catalogValue;

      if (type === "career") {
        const career = findCareerByTitle(value);
        if (career) showCareerDetail(career);
      } else if (type === "city") {
        showCityDetail(value, getDefaultCareerForCity(value));
      } else if (type === "major") {
        showMajorDetail(value, getDefaultCareerForMajor(value));
      }
    });
  });

  updateCatalogFilter();
}

function findCareerByTitle(title) {
  const localCareer = careers.find((career) => career.title === title);
  if (localCareer) return getCatalogBackedCareer(localCareer);

  const catalogCareer = getCatalogCareerByTitle(title);
  if (!catalogCareer) return null;
  return createCareerFromCatalog(catalogCareer);
}

function getDefaultCareerForCity(cityName) {
  const city = getCatalogCityByName(cityName);
  const catalogCareer = city
    ? getCatalog().careers.find((career) => career.city_ids.includes(city.id))
    : null;

  return findCareerByTitle(catalogCareer?.title) || state.currentRecommendations[0] || getTopCareers(1)[0] || careers[0];
}

function getDefaultCareerForMajor(majorName) {
  const major = getCatalogMajorByName(majorName);
  const catalogCareer = major?.connected_careers?.[0]
    ? getCatalog().careers.find((career) => career.id === major.connected_careers[0])
    : null;

  return findCareerByTitle(catalogCareer?.title) || state.currentRecommendations[0] || getTopCareers(1)[0] || careers[0];
}

function renderCareerComparisonCard(career, index, comparedCareers) {
  const explanation = getRecommendationExplanation(career, comparedCareers, index);
  const locationAdvice = getLocationAdvice(career);
  const majorPlan = getMajorPlan(career);
  const structuredProfile = getStructuredCareerProfile(career);
  const topStrength = explanation.strengths[0] || "综合表现比较均衡，值得进一步调研。";
  const topGap = explanation.gaps[0] || "需要通过真实项目继续验证兴趣和能力。";
  const bestCity = locationAdvice.places.split("、")[0] || "待调研城市";
  const primaryMajors = majorPlan.primary.slice(0, 2).join("、") || "相关专业";

  return `
    <article class="comparison-card">
      <div class="comparison-rank">#${index + 1}</div>
      <h3>${career.title}</h3>
      <p>${career.reason}</p>

      <div class="comparison-score">
        <strong>${career.fitScores.overall}%</strong>
        <span>综合适配度</span>
      </div>

      <dl class="comparison-list">
        <div>
          <dt>职业族群</dt>
          <dd>${structuredProfile.family}</dd>
        </div>
        <div>
          <dt>学习门槛</dt>
          <dd>${structuredProfile.barrierText}</dd>
        </div>
        <div>
          <dt>数据来源</dt>
          <dd>${structuredProfile.sourceText}</dd>
        </div>
        <div>
          <dt>最适合你的原因</dt>
          <dd>${topStrength}</dd>
        </div>
        <div>
          <dt>最大短板</dt>
          <dd>${topGap}</dd>
        </div>
        <div>
          <dt>优先城市</dt>
          <dd>${bestCity}，以及 ${locationAdvice.places}</dd>
        </div>
        <div>
          <dt>主攻专业</dt>
          <dd>${primaryMajors}</dd>
        </div>
        <div>
          <dt>入门项目</dt>
          <dd>${career.firstProject}</dd>
        </div>
        <div>
          <dt>先验证什么</dt>
          <dd>${structuredProfile.evidence[0]}</dd>
        </div>
      </dl>

      <button class="secondary-button comparison-detail-button" type="button" data-compare-career="${career.title}">查看完整介绍</button>
    </article>
  `;
}

function buildReportSnapshot() {
  const topTraits = getTopTraits(6);
  const recommendations = state.currentRecommendations.length > 0 ? state.currentRecommendations : getTopCareers(5);

  return {
    savedAt: new Date().toLocaleString("zh-CN"),
    profile: {
      homeCity: state.profile.homeCity || "未填写",
      mobilityChoice: getMobilityChoiceText(state.profile.mobilityChoice)
    },
    topTraits: topTraits.map(([key, value]) => ({
      name: traitLabels[key],
      score: value
    })),
    recommendations: recommendations.map((career, index) => ({
      rank: index + 1,
      title: career.title,
      overall: career.fitScores.overall,
      careerFit: career.fitScores.career,
      locationFit: career.fitScores.location,
      learningFit: career.fitScores.learning,
      roles: career.roles,
      places: getLocationAdvice(career).places,
      skills: career.skills,
      majors: career.majors,
      firstProject: career.firstProject
    }))
  };
}

function getMobilityChoiceText(value) {
  const labels = {
    near: "更希望离家近一些",
    regional: "可以去同一大区或相邻省市",
    national: "全国范围都可以考虑",
    global: "国内外都愿意探索"
  };

  return labels[value] || labels.regional;
}

function formatReportText(report) {
  const lines = [
    "Future Path 职业探索报告",
    `生成时间：${report.savedAt}`,
    "",
    "基本信息",
    `当前居住地：${report.profile.homeCity}`,
    `地点意愿：${report.profile.mobilityChoice}`,
    "",
    "突出倾向",
    ...report.topTraits.map((trait) => `- ${trait.name}：${trait.score}`),
    "",
    "职业推荐"
  ];

  report.recommendations.forEach((career) => {
    lines.push(
      "",
      `${career.rank}. ${career.title}`,
      `综合适配度：${career.overall}%`,
      `职业匹配度：${career.careerFit}%`,
      `地区适配度：${career.locationFit}%`,
      `学习可行度：${career.learningFit}%`,
      `适合岗位：${career.roles}`,
      `适合地区：${career.places}`,
      `能力要求：${career.skills}`,
      `相关专业：${career.majors}`,
      `入门项目：${career.firstProject}`
    );
  });

  return lines.join("\n");
}

function saveReport() {
  const report = buildReportSnapshot();
  localStorage.setItem("futurePathReport", JSON.stringify(report));
  saveStatus.textContent = `已保存到本地浏览器：${report.savedAt}`;
}

function downloadReport() {
  const report = buildReportSnapshot();
  const text = formatReportText(report);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `future-path-report-${date}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  saveStatus.textContent = "文本报告已开始下载。";
}

function downloadFeedbackLog() {
  const feedbackLog = getStoredFeedbackLog();

  if (feedbackLog.length === 0) {
    saveStatus.textContent = "当前还没有反馈日志。你可以先点击一次“调整推荐”按钮。";
    return;
  }

  const blob = new Blob([JSON.stringify(feedbackLog, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `future-path-feedback-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  saveStatus.textContent = `已导出 ${feedbackLog.length} 条本地反馈日志。`;
}

function printReport() {
  saveStatus.textContent = "请选择打印窗口中的“另存为 PDF”。";
  window.print();
}

function getMajorPlan(career) {
  const majors = career.majors
    .split(/[、，,]/)
    .map((major) => major.trim())
    .filter(Boolean);

  return {
    primary: majors.slice(0, 2),
    secondary: majors.slice(2, 4),
    supporting: majors.slice(4, 6)
  };
}

function renderMajorGroup(label, majors, careerTitle) {
  if (majors.length === 0) return "";

  return `
    <div>
      <strong>${label}</strong>
      <div class="major-chips">
        ${majors
          .map((major) => `<button type="button" data-major="${major}" data-career-title="${careerTitle}">${major} · 了解更多</button>`)
          .join("")}
      </div>
    </div>
  `;
}

function getTraitText(key) {
  const texts = {
    research: "喜欢追问原因，适合处理信息密度高、需要证据判断的问题。",
    creative: "重视表达、审美和体验，适合内容、设计、品牌或互动产品。",
    social: "能从互动中获得能量，适合连接人、团队、客户和用户。",
    tech: "愿意使用工具和系统解决问题，适合技术、数据和数字产品方向。",
    structure: "擅长让事情有秩序地推进，适合项目、运营、管理和流程类工作。",
    empathy: "容易理解他人处境，适合教育、心理、医疗、咨询和用户研究。",
    leadership: "倾向于协调资源并推动结果，适合管理、项目和商业角色。",
    autonomy: "需要较高自主空间，适合项目制、创作型、创新型或创业方向。",
    mobility: "对跨城市或跨文化环境适应度较高，适合国际化和流动性强的机会。",
    adventure: "能接受变化和不确定，适合成长快、边界新的行业和岗位。",
    riskAware: "重视安全边界和长期稳定，适合需要谨慎判断与风险控制的环境。"
  };

  return texts[key];
}

function showCareerDetail(career) {
  career = getCatalogBackedCareer(career);
  const detail = buildCareerDetail(career);
  const locationAdvice = getLocationAdvice(career);
  const visual = getCareerVisual(career);
  const famousPeople = getFamousPeople(career);
  const majorPlan = getMajorPlan(career);
  const structuredProfile = getStructuredCareerProfile(career);

  careerDetail.innerHTML = `
    <div class="detail-hero visual-hero">
      <div class="visual-art" role="img" aria-label="${career.title}相关场景" style="background-image: url('${visual.image}')"></div>
      <div>
        <p class="eyebrow">Career Detail</p>
        <h2>${career.title}</h2>
        <p>${visual.intro}</p>
        <div class="career-meta">
          <span>${structuredProfile.family}</span>
          <span>${structuredProfile.barrierText}</span>
          ${career.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="detail-grid">
      <section class="detail-panel wide-panel">
        <div class="section-heading">
          <span>职业画像</span>
          <h3>先看门槛、岗位和劝退点</h3>
        </div>
        <div class="career-profile-grid">
          <div>
            <strong>典型入门岗位</strong>
            <ul class="compact-list">
              ${structuredProfile.sampleRoles.map((role) => `<li>${role}</li>`).join("")}
            </ul>
          </div>
          <div>
            <strong>可能劝退点</strong>
            <ul class="compact-list">
              ${structuredProfile.dropoutPoints.map((point) => `<li>${point}</li>`).join("")}
            </ul>
          </div>
          <div>
            <strong>建议先拿出的证据</strong>
            <ul class="compact-list">
              ${structuredProfile.evidence.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div>
            <strong>数据来源</strong>
            <p>${structuredProfile.sourceText}</p>
          </div>
        </div>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>代表人物</span>
          <h3>可以参考的真实样本</h3>
        </div>
        <ul class="compact-list">
          ${famousPeople.map((person) => `<li>${person}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>专业选择</span>
          <h3>主攻、辅修和补充了解</h3>
        </div>
        <div class="major-plan detail-major-plan">
          ${renderMajorGroup("主攻专业", majorPlan.primary, career.title)}
          ${renderMajorGroup("辅修专业", majorPlan.secondary, career.title)}
          ${renderMajorGroup("补充了解", majorPlan.supporting, career.title)}
        </div>
      </section>

      <section class="detail-panel wide-panel">
        <div class="section-heading">
          <span>日常工作</span>
          <h3>这个方向每天可能在做什么</h3>
        </div>
        <div class="timeline-list">
          ${detail.dailyWork.map((item) => `<div><strong>${item.title}</strong><p>${item.text}</p></div>`).join("")}
        </div>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>能力路线</span>
          <h3>从基础到进阶</h3>
        </div>
        <ol class="path-list">
          ${detail.skillPath.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>大学准备</span>
          <h3>专业与课程</h3>
        </div>
        <p>${career.majors}</p>
        <ul class="compact-list">
          ${detail.courses.map((course) => `<li>${course}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>地点适配</span>
          <h3>适合城市与理由</h3>
        </div>
        <p>${locationAdvice.places}</p>
        <div class="mini-actions detail-mini-actions">
          ${locationAdvice.places
            .split("、")
            .filter(hasVerifiedCityPhoto)
            .slice(0, 5)
            .map((place) => `<button type="button" data-city="${place}" data-career-title="${career.title}">${place} · 了解更多</button>`)
            .join("")}
        </div>
        <small class="city-photo-note">未核验实景图的城市暂不开放详情，避免图片和城市不匹配。</small>
        <ul class="compact-list">
          ${locationAdvice.reasons.map((reason) => `<li>${reason}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>30 天计划</span>
          <h3>先做出一个小证据</h3>
        </div>
        <ol class="path-list">
          ${detail.monthPlan.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
    </div>
  `;

  careerDetail.querySelectorAll("[data-city]").forEach((button) => {
    button.addEventListener("click", () => showCityDetail(button.dataset.city, career));
  });

  careerDetail.querySelectorAll("[data-major]").forEach((button) => {
    button.addEventListener("click", () => showMajorDetail(button.dataset.major, career));
  });

  results.classList.add("hidden");
  careerDetailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCityDetail(city, career) {
  const profile = getCityDetail(city);
  const locationAdvice = getLocationAdvice(career);
  const fitReason = locationAdvice.reasons.find((reason) => reason.startsWith(`${city}：`)) || `${city}可以作为这个方向的备选地点，建议进一步查看行业岗位和生活成本。`;
  const cityScore = getCityFitScore(city, career);
  const industryNames = profile.industries.map(getIndustryLabel);
  const traitNames = profile.traits.map((trait) => traitLabels[trait] || trait);
  const cityStructure = getStructuredCityProfile(city, career);

  careerDetail.innerHTML = `
    <div class="detail-hero visual-hero">
      <div class="visual-art" role="img" aria-label="${city}城市风貌" style="background-image: url('${profile.image}')"></div>
      <div>
        <p class="eyebrow">City Detail</p>
        <h2>${city}</h2>
        <p>${profile.intro}</p>
        <div class="career-meta">
          <span>${profile.climate}</span>
          <span>${profile.pace}</span>
          <span>地区适配度 ${cityScore}%</span>
        </div>
      </div>
    </div>

    <div class="detail-grid">
      <section class="detail-panel">
        <div class="section-heading">
          <span>为什么适合你</span>
          <h3>结合职业方向来看</h3>
        </div>
        <p>${fitReason.replace(`${city}：`, "")}</p>
        <p>${profile.fit}</p>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>产业画像</span>
          <h3>这里更容易遇到什么机会</h3>
        </div>
        <div class="city-fact-grid">
          <div class="city-fact"><strong>主要产业</strong><p>${industryNames.join("、")}</p></div>
          <div class="city-fact"><strong>适合倾向</strong><p>${traitNames.join("、")}</p></div>
          <div class="city-fact"><strong>生活成本</strong><p>${getLevelText(profile.costLevel, "cost")}</p></div>
          <div class="city-fact"><strong>工作节奏</strong><p>${getLevelText(profile.paceLevel, "pace")}</p></div>
          <div class="city-fact"><strong>数据来源</strong><p>${profile.sourceText}</p></div>
        </div>
      </section>

      <section class="detail-panel wide-panel">
        <div class="section-heading">
          <span>机会画像</span>
          <h3>把城市当作调研对象</h3>
        </div>
        <div class="city-opportunity-grid">
          <div>
            <strong>岗位机会</strong>
            <p>${cityStructure.opportunityText}</p>
          </div>
          <div>
            <strong>产业强度</strong>
            <p>${cityStructure.industryText}</p>
          </div>
          <div>
            <strong>竞争提醒</strong>
            <p>${cityStructure.competitionText}</p>
          </div>
        </div>
        <ul class="compact-list city-research-list">
          ${cityStructure.researchTasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>地理气候</span>
          <h3>生活体感</h3>
        </div>
        <p>${profile.geo}</p>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>风土人情</span>
          <h3>城市气质</h3>
        </div>
        <p>${profile.culture}</p>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>适合岗位</span>
          <h3>可以优先调研</h3>
        </div>
        <ul class="compact-list">
          ${profile.goodFor.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>需要注意</span>
          <h3>提前确认现实约束</h3>
        </div>
        <ul class="compact-list">
          ${profile.challenges.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>可以看看</span>
          <h3>著名地点</h3>
        </div>
        <ul class="compact-list">
          ${profile.sights.map((sight) => `<li>${sight}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;

  results.classList.add("hidden");
  careerDetailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMajorDetail(major, career) {
  const profile = getMajorDetail(major);
  const collegePath = profile.collegePath || null;
  const misunderstandings = profile.misunderstandings || [];

  careerDetail.innerHTML = `
    <div class="detail-hero visual-hero">
      <div class="visual-art" role="img" aria-label="${major}学习场景" style="background-image: url('${profile.image}')"></div>
      <div>
        <p class="eyebrow">Major Detail</p>
        <h2>${major}</h2>
        <p>${profile.intro}</p>
        <div class="career-meta">
          <span>${profile.style}</span>
          <span>${profile.output}</span>
          <span>关联：${career.title}</span>
          <span>${profile.sourceText}</span>
        </div>
      </div>
    </div>

    <div class="detail-grid">
      <section class="detail-panel">
        <div class="section-heading">
          <span>学什么</span>
          <h3>核心内容</h3>
        </div>
        <ul class="compact-list">
          ${profile.courses.map((course) => `<li>${course}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>适合谁</span>
          <h3>学习性格</h3>
        </div>
        <p>${profile.fit}</p>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>能连接到哪里</span>
          <h3>职业方向</h3>
        </div>
        <p>${profile.paths}</p>
      </section>

      <section class="detail-panel">
        <div class="section-heading">
          <span>先试试看</span>
          <h3>入门体验</h3>
        </div>
        <p>${profile.tryIt}</p>
      </section>

      ${collegePath ? `
        <section class="detail-panel wide-panel">
          <div class="section-heading">
            <span>大学路径</span>
            <h3>大一到大四可以怎么准备</h3>
          </div>
          <div class="timeline-list">
            ${Object.entries(collegePath).map(([year, items]) => `
              <div>
                <strong>${getCollegeYearLabel(year)}</strong>
                <p>${items.join("；")}</p>
              </div>
            `).join("")}
          </div>
        </section>
      ` : ""}

      ${misunderstandings.length > 0 ? `
        <section class="detail-panel wide-panel">
          <div class="section-heading">
            <span>常见误区</span>
            <h3>提前避开这些坑</h3>
          </div>
          <ul class="compact-list">
            ${misunderstandings.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      ` : ""}
    </div>
  `;

  results.classList.add("hidden");
  careerDetailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToResults() {
  careerDetailView.classList.add("hidden");
  results.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildCareerDetail(career) {
  const profile = getCareerProfile(career);

  return {
    dailyWork: profile.dailyWork,
    skillPath: [
      `基础：${career.skills}`,
      `作品：${career.firstProject}`,
      `验证：找 3 位目标用户、老师或从业者获得反馈。`,
      `进阶：把项目整理成案例，说明问题、过程、结果和反思。`
    ],
    courses: profile.courses,
    locationReasons: profile.locationReasons,
    monthPlan: [
      "第 1 周：了解行业，记录 10 个真实岗位的要求。",
      "第 2 周：学习一项基础工具或方法，完成一个小练习。",
      `第 3 周：完成入门项目：${career.firstProject}`,
      "第 4 周：整理成一页作品，向老师、同学或从业者请教。"
    ]
  };
}

function getIndustryLabel(industry) {
  const labels = {
    tech: "科技与软件",
    data: "数据与分析",
    finance: "金融与金融科技",
    brand: "品牌与消费",
    commerce: "商业与电商",
    creative: "创意设计",
    culture: "文化内容",
    content: "内容生态",
    game: "游戏与互动",
    tourism: "文旅与城市体验",
    education: "教育与学习",
    health: "健康与心理",
    law: "法律与合规",
    global: "国际业务",
    publicService: "公共服务",
    policy: "政策与公共议题",
    research: "研究与智库",
    hardware: "硬件与智能制造",
    startup: "创新创业",
    supplyChain: "供应链与贸易",
    manufacturing: "制造与产业",
    food: "食品与消费品",
    sustainability: "可持续发展",
    urban: "城市服务"
  };

  return labels[industry] || industry;
}

function getLevelText(level, type) {
  if (type === "cost") {
    if (level >= 5) return "较高，需要认真预算";
    if (level >= 4) return "偏高，但机会密集";
    if (level >= 3) return "中等，选择空间较大";
    return "相对友好";
  }

  if (level >= 5) return "很快，竞争和变化都明显";
  if (level >= 4) return "较快，适合主动探索";
  if (level >= 3) return "中等，兼具机会和生活感";
  return "较平衡，适合长期积累";
}

function getCareerVisual(career) {
  const imageMap = [
    { test: ["技术", "数据"], image: "./assets/images/career-tech.jpg", intro: "这个方向的核心，是把复杂问题变成可理解、可验证、可运行的方案。适合愿意长期练习工具、模型和系统思维的人。" },
    { test: ["创意", "互动", "文化"], image: "./assets/images/career-creative.jpg", intro: "这个方向很看重感受、表达和对人的洞察。好的作品不是只好看，而是能让人愿意停下来、理解它、使用它。" },
    { test: ["教育", "心理", "健康"], image: "./assets/images/career-education.jpg", intro: "这个方向和人的成长、困难与支持系统有关。它需要耐心、边界感和持续学习，也很容易带来真实的意义感。" },
    { test: ["跨文化", "社会影响", "公共服务"], image: "./assets/images/career-collaboration.jpg", intro: "这个方向常常发生在不同人群、组织和地区之间。你需要把复杂目标翻译成可执行的合作。" },
    { test: ["规则", "风险"], image: "./assets/images/career-law.jpg", intro: "这个方向重视证据、规则和边界。适合谨慎、细致、愿意在复杂信息中保持判断力的人。" }
  ];

  const matched = imageMap.find((item) => item.test.some((tag) => career.tags.includes(tag)));
  return matched || {
    image: "./assets/images/career-general.jpg",
    intro: "这个方向需要把兴趣、能力和现实机会连接起来。它不一定只有一条路，早期最重要的是做小项目、看真实岗位、积累判断。"
  };
}

function getFamousPeople(career) {
  if (career.title.includes("用户体验")) return ["Don Norman：用户体验领域的重要学者，提出并推广了许多以人为中心的设计思想。", "Jakob Nielsen：可用性研究代表人物，长期推动产品易用性方法。", "Irene Au：曾在 Google、Yahoo 等公司领导用户体验设计团队。"];
  if (career.title.includes("数据") || career.title.includes("金融科技")) return ["Hans Rosling：用数据可视化解释全球发展趋势。", "Florence Nightingale：早期用统计图表推动公共卫生改革。", "Andrew Ng：人工智能教育与应用推广的重要人物。"];
  if (career.title.includes("产品经理")) return ["Julie Zhuo：曾任 Facebook 产品设计负责人，常分享产品与团队经验。", "Marty Cagan：产品管理领域知名作者，关注产品团队如何创造价值。", "Tony Fadell：参与 iPod 与 Nest 等产品，代表硬件与软件结合的产品思维。"];
  if (career.title.includes("品牌") || career.title.includes("文旅")) return ["David Ogilvy：广告与品牌传播领域代表人物。", "Virgil Abloh：把设计、品牌与文化表达结合的代表人物。", "原研哉：以设计视角影响品牌、生活方式与公共表达。"];
  if (career.title.includes("教育")) return ["Maria Montessori：蒙台梭利教育方法创始人。", "Sal Khan：Khan Academy 创始人，推动在线教育普及。", "Carol Dweck：成长型思维研究代表学者。"];
  if (career.title.includes("可持续") || career.title.includes("公共管理")) return ["Muhammad Yunus：社会创新和微型金融代表人物。", "Jane Jacobs：关注城市生活与社区活力的重要思想者。", "Gro Harlem Brundtland：可持续发展理念的重要推动者之一。"];
  if (career.title.includes("软件")) return ["Grace Hopper：计算机科学先驱，推动编程语言发展。", "Tim Berners-Lee：万维网发明者。", "Linus Torvalds：Linux 内核和 Git 的创建者。"];
  if (career.title.includes("心理")) return ["Carl Rogers：人本主义心理学代表人物。", "Aaron Beck：认知疗法重要创立者。", "Martin Seligman：积极心理学代表学者。"];
  if (career.title.includes("城市") || career.title.includes("建筑")) return ["Jane Jacobs：以城市观察影响现代城市规划。", "Jan Gehl：关注人的尺度与城市公共空间。", "Zaha Hadid：建筑设计领域具有代表性的建筑师。"];
  if (career.title.includes("法律")) return ["Ruth Bader Ginsburg：美国最高法院大法官，法律职业代表人物。", "何美欢：法学教育与商法领域有影响力的学者。", "Louis Brandeis：重视公共利益与法律责任的法官。"];
  if (career.title.includes("人力")) return ["Dave Ulrich：人力资源管理领域重要学者。", "Adam Grant：组织心理学者，研究工作动机与组织行为。", "Laszlo Bock：曾领导 Google 人力运营，推动数据化 HR 实践。"];
  return ["这个领域的代表人物往往来自真实项目，而不只是名气。建议你找 3 位从业者访谈，了解他们如何进入这个方向。", "也可以关注行业协会、大学实验室、头部公司和公开演讲中的实践者。"];
}

function createVisualDataUri(title, type) {
  const palettes = {
    career: ["#0f766e", "#c58a18", "#f7f4ee"],
    city: ["#2563eb", "#0f766e", "#f4f7fb"],
    major: ["#c2412d", "#334155", "#fff7e6"]
  };
  const [primary, secondary, background] = palettes[type] || palettes.career;
  const safeTitle = escapeSvgText(title);
  const subtitle = type === "city" ? "城市探索" : type === "major" ? "专业介绍" : "职业方向";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${background}"/>
          <stop offset="55%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#eef8f6"/>
        </linearGradient>
        <linearGradient id="shape" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${primary}" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="${secondary}" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)"/>
      <circle cx="1030" cy="130" r="220" fill="${primary}" opacity="0.12"/>
      <circle cx="180" cy="780" r="260" fill="${secondary}" opacity="0.16"/>
      <rect x="120" y="150" width="960" height="600" rx="42" fill="#ffffff" opacity="0.76"/>
      <path d="M170 610 C310 420, 420 690, 560 500 S850 350, 1030 560" fill="none" stroke="url(#shape)" stroke-width="34" stroke-linecap="round"/>
      <rect x="170" y="210" width="190" height="22" rx="11" fill="${primary}" opacity="0.24"/>
      <rect x="170" y="258" width="310" height="22" rx="11" fill="${secondary}" opacity="0.2"/>
      <rect x="170" y="306" width="250" height="22" rx="11" fill="${primary}" opacity="0.16"/>
      <circle cx="855" cy="285" r="74" fill="url(#shape)" opacity="0.88"/>
      <rect x="770" y="390" width="210" height="42" rx="21" fill="${primary}" opacity="0.18"/>
      <text x="170" y="704" fill="#1f2933" font-size="58" font-weight="800" font-family="Arial, Microsoft YaHei, sans-serif">${safeTitle}</text>
      <text x="174" y="760" fill="#667085" font-size="30" font-weight="700" font-family="Arial, Microsoft YaHei, sans-serif">${subtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeSvgText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getCityDetail(city) {
  const catalogCity = getCatalogCityByName(city);
  const base = locationProfiles[city] || {
    cluster: "产业机会需要进一步调研",
    pace: "城市节奏因行业而异",
    note: "适合作为备选地点，建议继续查看岗位密度、生活成本和语言要求。",
    industries: ["global"],
    traits: ["research", "mobility"],
    costLevel: 3,
    paceLevel: 3,
    stablePath: 3,
    goodFor: ["行业调研", "项目实习", "跨地区机会探索"],
    challenges: ["岗位密度需要确认", "生活成本需要比较", "语言和准入条件需要核实"]
  };

  const cityDetails = {
    北京: { climate: "四季分明", geo: "位于华北平原北部，冬季偏冷干燥，春秋短而清爽。", culture: "公共资源、文化机构和高校密集，城市气质偏宏大、专业和竞争。", sights: ["故宫", "国家博物馆", "798 艺术区"], image: "./assets/images/city-beijing.jpg" },
    上海: { climate: "湿润温和", geo: "位于长江入海口，冬季湿冷、夏季炎热，交通和商业资源高度集中。", culture: "商业感、国际感和生活方式丰富，适合接触品牌、金融和专业服务。", sights: ["外滩", "武康路", "上海博物馆"], image: "./assets/images/city-shanghai.jpg" },
    深圳: { climate: "温暖湿润", geo: "珠三角核心城市，靠近香港，全年温暖，产业更新速度快。", culture: "年轻、务实、效率高，适合愿意快速试错和进入产业一线的人。", sights: ["深圳湾", "华侨城", "南山科技园"], image: "./assets/images/city-shenzhen.jpg" },
    广州: { climate: "温暖湿润", geo: "位于珠江三角洲核心区域，商贸、港口和消费服务基础深厚。", culture: "城市生活气息浓，饮食文化、贸易传统和公共服务资源都很突出。", sights: ["珠江新城", "广州塔", "沙面"], image: "./assets/images/city-guangzhou.jpg" },
    杭州: { climate: "江南湿润", geo: "位于浙江北部，山水资源和数字经济产业并存。", culture: "兼具生活感与互联网气质，适合数字产品、电商、内容和创新服务。", sights: ["西湖", "良渚", "西溪湿地"], image: "./assets/images/city-hangzhou.jpg" },
    成都: { climate: "温和湿润", geo: "位于四川盆地，生活节奏相对舒展，文旅和消费场景丰富。", culture: "城市包容度高，创意、游戏、文旅和生活服务氛围明显。", sights: ["宽窄巷子", "东郊记忆", "成都博物馆"], image: "./assets/images/city-chengdu.jpg" },
    香港: { climate: "亚热带海洋性", geo: "山海城市，密度高、通勤快，连接内地与国际市场。", culture: "专业服务、金融、法律和国际教育资源强，适合跨文化路径。", sights: ["维多利亚港", "中环", "西九文化区"], image: "./assets/images/city-hongkong.jpg" },
    新加坡: { climate: "全年炎热湿润", geo: "热带城市国家，规则清晰，公共服务成熟，国际总部密集。", culture: "多语言、多族群，适合区域总部、金融科技、教育和国际项目。", sights: ["滨海湾", "新加坡国立大学", "植物园"], image: "./assets/images/city-singapore.jpg" },
    温哥华: { climate: "温和多雨", geo: "靠山临海，自然环境突出，生活节奏较平衡。", culture: "多元文化、教育和健康资源较好，适合重视生活质量的人。", sights: ["斯坦利公园", "格兰维尔岛", "英属哥伦比亚大学"], image: "./assets/images/city-vancouver.jpg" },
    青岛: { climate: "海洋性气候", geo: "位于山东半岛南部，临海城市特征明显，制造、贸易、食品和文旅基础较好。", culture: "城市兼具海滨生活、工业基础和旅游气质，节奏比一线城市更舒展。", sights: ["栈桥", "八大关", "五四广场"], image: "./assets/images/city-qingdao.jpg" },
    巴黎: { climate: "温和海洋性", geo: "位于法国北部塞纳河沿岸，文化、艺术、时尚和国际机构资源集中。", culture: "城市重视审美、历史和公共生活，适合文化、品牌、设计和国际交流方向。", sights: ["埃菲尔铁塔", "卢浮宫", "塞纳河"], image: "./assets/images/city-paris.jpg" },
    东京: { climate: "四季分明", geo: "位于日本关东平原，城市密度高，交通成熟，消费品牌、设计和科技产业都很发达。", culture: "秩序感强，细节意识突出，适合设计、游戏、制造、城市服务和消费品牌方向。", sights: ["东京塔", "涩谷", "上野公园"], image: "./assets/images/city-tokyo.jpg" }
  };

  const detail = cityDetails[city] || {
    climate: "气候需进一步查看",
    geo: "这个地点的气候、交通和生活成本建议结合真实居住体验继续调研。",
    culture: "城市气质会因行业和生活圈不同而变化，可以通过实习、短住或访谈确认。",
    sights: ["城市博物馆", "核心商圈", "大学或产业园区"],
    image: createVisualDataUri(`${city} 实景图待补充`, "city")
  };

  if (catalogCity) {
    return {
      ...base,
      ...detail,
      cluster: catalogCity.cluster,
      industries: catalogCity.industries,
      traits: catalogCity.traits,
      costLevel: catalogCity.cost_level,
      paceLevel: catalogCity.pace_level,
      stablePath: catalogCity.stable_path_level,
      climate: catalogCity.climate,
      culture: catalogCity.culture,
      sights: catalogCity.sights,
      image: catalogCity.image,
      intro: `${catalogCity.name}的优势在于${catalogCity.cluster}。${base.note}`,
      fit: `如果你考虑${catalogCity.name}，可以重点查看本地岗位密度、实习机会、生活成本和你能否适应这里的节奏。`,
      sourceText: "JSON 样本：城市画像"
    };
  }

  return {
    ...base,
    ...detail,
    intro: `${city}的优势在于${base.cluster}。${base.note}`,
    fit: `如果你考虑${city}，可以重点查看本地岗位密度、实习机会、生活成本和你能否适应这里的节奏。`,
    sourceText: "启发式生成"
  };
}

function getMajorDetail(major) {
  const image = "./assets/images/major-study.jpg";
  const catalogMajor = getCatalogMajorByName(major);

  if (catalogMajor) {
    return {
      image,
      intro: catalogMajor.intro,
      style: catalogMajor.category,
      output: "课程、项目、作品集",
      courses: catalogMajor.courses,
      fit: `适合${catalogMajor.fit_traits.map((trait) => traitLabels[trait] || trait).join("、")}倾向较明显，并愿意用项目验证兴趣的人。`,
      paths: `可连接到：${catalogMajor.connected_careers.join("、")}。`,
      tryIt: catalogMajor.try_project,
      collegePath: catalogMajor.college_path,
      misunderstandings: catalogMajor.misunderstandings,
      sourceText: "JSON 样本：专业画像"
    };
  }

  if (/计算机|软件|人工智能|信息系统|数据|统计|商业分析/.test(major)) {
    return {
      image,
      intro: `${major}偏向用模型、数据和系统解决问题，适合愿意长期练习逻辑和工具的人。`,
      style: "逻辑与工具",
      output: "代码、模型、分析报告",
      courses: ["编程或数据处理", "统计/算法基础", "数据库或系统设计", "真实项目实践"],
      fit: "适合喜欢拆解问题、能接受反复调试，并愿意通过项目积累能力的人。",
      paths: "可连接软件开发、数据分析、AI 应用、金融科技、产品技术等方向。",
      tryIt: "先用公开数据做一个小分析，或做一个解决自己需求的小网页工具。",
      sourceText: "启发式生成"
    };
  }

  if (/心理|教育|社会|社会工作|公共卫生/.test(major)) {
    return {
      image,
      intro: `${major}关注人的行为、成长、关系和支持系统，适合对人有耐心和好奇的人。`,
      style: "理解人与系统",
      output: "访谈、观察、服务方案",
      courses: ["心理学/教育学基础", "研究方法", "伦理与沟通", "案例分析"],
      fit: "适合愿意倾听、观察细节，并能在复杂的人际情境里保持边界感的人。",
      paths: "可连接教育科技、心理支持、用户研究、公共服务和组织发展。",
      tryIt: "做一次小访谈，记录一个人的学习或生活困难，并设计一个支持方案。",
      sourceText: "启发式生成"
    };
  }

  if (/传播|广告|市场|设计|中文|外语|数字媒体|文化/.test(major)) {
    return {
      image,
      intro: `${major}训练表达、审美、叙事和对受众的理解，适合喜欢把想法变成作品的人。`,
      style: "表达与审美",
      output: "内容、视觉、活动、品牌方案",
      courses: ["写作与传播", "视觉或影像基础", "用户/消费者洞察", "内容数据复盘"],
      fit: "适合关注细节、有表达欲，也愿意根据反馈不断修改作品的人。",
      paths: "可连接品牌策划、内容运营、文旅策划、交互设计和城市品牌。",
      tryIt: "为一个品牌或城市做一组 3 张海报/短文案，并解释目标受众。",
      sourceText: "启发式生成"
    };
  }

  if (/金融|经济|工商|管理|国际贸易|物流|供应链|人力资源/.test(major)) {
    return {
      image,
      intro: `${major}帮助你理解组织、市场、资源和流程，适合想进入商业或管理场景的人。`,
      style: "商业与组织",
      output: "商业分析、流程方案、运营计划",
      courses: ["经济/管理基础", "会计或金融常识", "运营与组织行为", "数据分析入门"],
      fit: "适合愿意理解现实约束、协调资源，并用结果检验方案的人。",
      paths: "可连接产品、运营、供应链、人力资源、金融科技和项目管理。",
      tryIt: "拆解一个商品或 App 的商业模式，写出用户、收入、成本和风险。",
      sourceText: "启发式生成"
    };
  }

  return {
    image,
    intro: `${major}可以作为进入相关职业的知识入口，关键是尽早用项目验证自己是否喜欢。`,
    style: "综合探索",
    output: "作品、报告、项目经历",
    courses: ["专业导论", "研究方法", "写作表达", "跨学科项目"],
    fit: "适合愿意持续探索，并把课堂知识转化成真实项目的人。",
    paths: "可根据兴趣连接研究、运营、产品、公共服务或创意方向。",
    tryIt: "找一门公开课或一本入门书，做一页笔记，再完成一个小案例。",
    sourceText: "启发式生成"
  };
}

function getCollegeYearLabel(year) {
  const labels = {
    year1: "大一",
    year2: "大二",
    year3: "大三",
    year4: "大四"
  };

  return labels[year] || year;
}

function getCareerProfile(career) {
  if (career.tags.includes("用户") || career.tags.includes("产品")) {
    return {
      dailyWork: [
        { title: "发现问题", text: "通过访谈、数据、竞品和业务反馈判断真正值得解决的问题。" },
        { title: "设计方案", text: "把洞察转化成需求、流程、原型或研究结论。" },
        { title: "推动验证", text: "和设计、技术、运营协作，用测试和数据判断方案是否有效。" }
      ],
      courses: ["心理学或用户研究方法", "产品设计与原型工具", "数据分析入门", "商业与组织基础"],
      locationReasons: ["互联网和数字服务产业集中的城市机会更多。", "国际化城市更容易接触多元用户样本。", "创新团队密集地区适合积累项目经验。"]
    };
  }

  if (career.tags.includes("技术") || career.tags.includes("数据")) {
    return {
      dailyWork: [
        { title: "理解问题", text: "确认业务目标、用户需求或系统限制，避免只解决表面问题。" },
        { title: "建模与实现", text: "用代码、数据表、图表或系统方案把问题变成可执行结果。" },
        { title: "测试和复盘", text: "检查结果是否可靠，并用清晰文档解释判断依据。" }
      ],
      courses: ["统计学或离散数学", "Python / SQL / 编程基础", "数据可视化或软件工程", "行业业务基础"],
      locationReasons: ["科技产业集中，实习和项目机会更多。", "大城市数据岗位密集，便于接触真实业务。", "英语环境城市适合进入跨国团队。"]
    };
  }

  if (career.tags.includes("创意") || career.tags.includes("互动")) {
    return {
      dailyWork: [
        { title: "观察受众", text: "理解用户、消费者或玩家真正被什么吸引。" },
        { title: "产出方案", text: "写文案、做原型、设计内容结构或视觉方向。" },
        { title: "看反馈迭代", text: "根据数据、评论和体验反馈调整表达方式。" }
      ],
      courses: ["传播学或设计基础", "视觉表达 / 写作 / 影像课程", "用户体验基础", "市场营销或文化研究"],
      locationReasons: ["文化消费活跃的城市更容易积累案例。", "创意产业集中的地区有更多品牌和内容机会。", "多元文化环境能提供更丰富的灵感来源。"]
    };
  }

  if (career.tags.includes("教育") || career.tags.includes("心理") || career.tags.includes("健康")) {
    return {
      dailyWork: [
        { title: "理解个体需求", text: "通过沟通、观察或数据记录理解人的困难和目标。" },
        { title: "设计支持方案", text: "制定课程、服务流程、干预方案或用户体验改进。" },
        { title: "持续跟进", text: "根据反馈调整方案，重视伦理、隐私和长期效果。" }
      ],
      courses: ["心理学或教育学基础", "研究方法与伦理", "沟通与咨询技巧", "公共卫生或学习科学"],
      locationReasons: ["教育、医疗和公共服务资源集中的城市更适合实习。", "国际化地区适合接触多元人群。", "生活节奏稳定的城市更利于长期专业训练。"]
    };
  }

  if (career.tags.includes("跨文化") || career.tags.includes("社会影响")) {
    return {
      dailyWork: [
        { title: "协调利益相关方", text: "让不同地区、组织或人群在同一目标下协作。" },
        { title: "推进项目节点", text: "整理资料、安排会议、跟踪风险和交付成果。" },
        { title: "形成公共表达", text: "把复杂议题写成报告、提案或对外沟通材料。" }
      ],
      courses: ["国际关系或公共政策", "项目管理", "跨文化沟通", "环境、城市或发展研究"],
      locationReasons: ["国际枢纽城市方便接触跨国机构。", "政策和公益资源密集地区适合项目实践。", "多语言环境能提升沟通竞争力。"]
    };
  }

  return {
    dailyWork: [
      { title: "定义目标", text: "明确要解决的问题、服务的人群和评估标准。" },
      { title: "组织资源", text: "协调团队、信息、工具和时间，把想法推进到结果。" },
      { title: "复盘优化", text: "用反馈和数据判断下一步应该强化什么。" }
    ],
    courses: ["管理学或商业基础", "项目管理", "数据分析入门", "沟通表达与写作"],
    locationReasons: ["产业机会密集的城市更容易试错。", "开放、多元的地区更适合探索型路径。", "生活成本可控的城市适合长期积累。"]
  };
}

function resetQuiz() {
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  state.scores = createEmptyScores();
  state.feedback = createEmptyFeedback();
  state.recommendationIndex = 0;
  state.currentRecommendations = [];
  careerDetailView.classList.add("hidden");
  profileStep.classList.add("hidden");
  quiz.classList.add("hidden");
  results.classList.add("hidden");
  intro.classList.remove("hidden");
}
