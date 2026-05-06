Page({
  data: {
    brand: "求职有谱儿",
    badgeMain: "企业认证已完成",
    badgeSub: "免费测评开放",
    titlePrefix: "简历诊断到面试陪练",
    titleHighlight: "AI",
    titleSuffix: "求职助手",
    titleSecondLine: "让准备更有谱儿",
    description: "围绕目标岗位，提供简历诊断、岗位拆解、模拟面试和能力复盘。第一版先提供本地测评闭环，方便导入抖音开发者工具预览和提审自测。",
    features: [
      {
        code: "JD",
        tone: "indigo",
        title: "岗位匹配分析",
        description: "围绕目标岗位拆解能力要求、项目关键词和常见追问，帮助你明确准备重点。"
      },
      {
        code: "CV",
        tone: "purple",
        title: "简历风险诊断",
        description: "检查简历表达、成果量化、岗位匹配度和信息完整度，输出可执行修改方向。"
      },
      {
        code: "MI",
        tone: "blue",
        title: "面试问题预演",
        description: "根据岗位和经历生成高频问题，帮助你提前组织自我介绍、项目复盘和追问回答。"
      },
      {
        code: "5D",
        tone: "green",
        title: "五维能力复盘",
        description: "从岗位匹配、经历表达、逻辑结构、业务理解、面试准备五个维度给出备考建议。"
      }
    ],
    footerLinks: [
      { name: "关于我们", path: "/pages/about/about" },
      { name: "常见问题", path: "/pages/faq/faq" },
      { name: "隐私政策", path: "/pages/privacy/privacy" },
      { name: "服务条款", path: "/pages/terms/terms" }
    ]
  },

  onPrimaryTap() {
    tt.navigateTo({
      url: "/pages/assessment/assessment"
    });
  },

  onFeatureTap() {
    tt.pageScrollTo({
      selector: "#features",
      duration: 260
    });
  },

  onFooterLinkTap(event) {
    const { path } = event.currentTarget.dataset;

    if (!path) return;

    tt.navigateTo({ url: path });
  }
});
