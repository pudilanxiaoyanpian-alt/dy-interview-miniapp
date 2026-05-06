const EMPTY_FORM = {
  name: "",
  role: "",
  experience: "",
  resume: ""
};

const FOCUS_OPTIONS = [
  { key: "resume", label: "简历表达", active: true },
  { key: "position", label: "岗位匹配", active: true },
  { key: "interview", label: "面试问答", active: false },
  { key: "project", label: "项目复盘", active: false }
];

function normalizeFocusOptions(options) {
  return options.map((item) => ({
    ...item,
    className: item.active ? "chip-active" : ""
  }));
}

function getConsentViewState(consent) {
  return {
    consent,
    consentClass: consent ? "checkbox-on" : "",
    consentMark: consent ? "✓" : ""
  };
}

Page({
  data: {
    brand: "求职有谱儿",
    form: { ...EMPTY_FORM },
    focusOptions: normalizeFocusOptions(FOCUS_OPTIONS),
    ...getConsentViewState(false)
  },

  onInput(event) {
    const field = event.currentTarget.dataset.field;
    if (!field) return;

    this.setData({
      [`form.${field}`]: event.detail.value
    });
  },

  onToggleFocus(event) {
    const key = event.currentTarget.dataset.key;
    const focusOptions = this.data.focusOptions.map((item) => ({
      ...item,
      active: item.key === key ? !item.active : item.active
    }));

    this.setData({
      focusOptions: normalizeFocusOptions(focusOptions)
    });
  },

  onConsentTap() {
    this.setData(getConsentViewState(!this.data.consent));
  },

  onPrivacyTap() {
    tt.navigateTo({ url: "/pages/privacy/privacy" });
  },

  onTermsTap() {
    tt.navigateTo({ url: "/pages/terms/terms" });
  },

  onSubmit() {
    const form = this.data.form;
    const role = form.role.trim();
    const resume = form.resume.trim();

    if (!role) {
      tt.showToast({ title: "请填写目标岗位", icon: "none" });
      return;
    }

    if (!resume) {
      tt.showToast({ title: "请填写简历摘要", icon: "none" });
      return;
    }

    if (!this.data.consent) {
      tt.showToast({ title: "请先同意隐私政策和服务条款", icon: "none" });
      return;
    }

    const selectedFocus = this.data.focusOptions
      .filter((item) => item.active)
      .map((item) => item.label);

    tt.setStorageSync("assessmentDraft", {
      ...form,
      role,
      resume,
      selectedFocus,
      submittedAt: Date.now()
    });

    tt.navigateTo({
      url: `/pages/result/result?role=${encodeURIComponent(role)}`
    });
  }
});
