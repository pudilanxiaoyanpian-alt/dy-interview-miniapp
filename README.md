# 胡老师面试助手抖音小程序改造

源页面：https://interview.puritynexus.com

## 目录

- `app.json`：全局页面与窗口配置
- `app.js`：小程序入口
- `app.ttss`：全局样式
- `pages/index/index.ttml`：首页结构
- `pages/index/index.ttss`：首页样式
- `pages/index/index.js`：首页数据与交互
- `images/logo.png`：从源站下载的品牌 logo

## 已迁移内容

- 顶部品牌栏与“免费体验”入口
- 首屏发布标识、主标题、简介文案、两个 CTA
- 四个核心功能卡片
- 页脚品牌、协议类链接与版权信息

## 待接入内容

- 登录、注册页面或宿主业务流程
- “关于我们 / 常见问题 / 隐私政策 / 服务条款”页面
- 真实接口、表单、授权和埋点能力

把原 Web 页面源码放进项目后，可以按页面逐个迁到 `pages/` 下。
