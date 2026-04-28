Page({
  data: {
    brand: "胡老师面试助手",
    badgeMain: "V1.0 全新发布",
    badgeSub: "限时免费体验",
    titlePrefix: "全方位求职",
    titleHighlight: "AI",
    titleSuffix: "私教",
    titleSecondLine: "助你斩获理想 Offer",
    description: "数十位大厂资深面试官经验打造，提供专业全面的岗位分析、简历分析、全真模拟面试、1v1 真人辅导，全方位提高你的行业竞争力。",
    features: [
      {
        code: "JD",
        tone: "indigo",
        title: "360° 岗位解析",
        description: "深度拆解目标公司与岗位，SWOT 竞争分析，预测面试问题，制定专属备考策略。"
      },
      {
        code: "CV",
        tone: "purple",
        title: "AI 简历诊断",
        description: "深度解析简历结构，针对目标岗位给出修改建议，量化成果表达，提升简历竞争力。"
      },
      {
        code: "MI",
        tone: "blue",
        title: "全真模拟面试",
        description: "实时语音对话，多风格 AI 面试官针对性追问，还原真实面试压力与节奏。"
      },
      {
        code: "5D",
        tone: "green",
        title: "五维能力复盘",
        description: "面试后即刻生成业务能力、沟通表达、逻辑思维等 5 维雷达图分析与提升建议。"
      }
    ],
    footerLinks: [
      "关于我们",
      "常见问题",
      "隐私政策",
      "服务条款"
    ]
  },

  onPrimaryTap() {
    tt.showToast({
      title: "登录功能待接入",
      icon: "none"
    });
  },

  onFeatureTap() {
    tt.pageScrollTo({
      selector: "#features",
      duration: 260
    });
  },

  onFooterLinkTap(event) {
    const { name } = event.currentTarget.dataset;

    tt.showToast({
      title: `${name}待接入`,
      icon: "none"
    });
  }
});
