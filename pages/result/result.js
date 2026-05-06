Page({
  data: {
    brand: "求职有谱儿",
    role: "目标岗位",
    score: 82,
    selectedFocus: [],
    dimensions: [
      { name: "岗位匹配", value: 78, note: "需要把经历和岗位关键词再对齐" },
      { name: "简历表达", value: 84, note: "建议增加量化结果和业务影响" },
      { name: "项目复盘", value: 76, note: "准备 STAR 结构和关键取舍" },
      { name: "面试准备", value: 80, note: "补齐自我介绍与追问素材" },
      { name: "沟通逻辑", value: 86, note: "回答结构整体清晰，可继续压缩表达" }
    ],
    actions: [
      "把简历中每段经历改成：背景、动作、结果、数据四部分",
      "围绕目标岗位准备 8 个高频问题和 3 个项目追问",
      "用 60 秒版本重写自我介绍，突出岗位匹配度",
      "记录一次模拟面试复盘，标出卡顿点和补强动作"
    ]
  },

  onLoad(options) {
    const draft = tt.getStorageSync("assessmentDraft") || {};
    const role = draft.role || decodeURIComponent(options.role || "目标岗位");
    const focusCount = Array.isArray(draft.selectedFocus) ? draft.selectedFocus.length : 0;
    const resumeLength = draft.resume ? draft.resume.length : 0;
    const score = Math.min(92, 72 + focusCount * 3 + Math.min(8, Math.floor(resumeLength / 80)));

    this.setData({
      role,
      score,
      selectedFocus: draft.selectedFocus || []
    });
  },

  onRestart() {
    tt.redirectTo({ url: "/pages/assessment/assessment" });
  },

  onHome() {
    tt.switchTab ? tt.switchTab({ url: "/pages/index/index" }) : tt.reLaunch({ url: "/pages/index/index" });
  }
});
