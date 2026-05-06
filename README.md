# 求职有谱儿抖音小程序

AppID：`ttdff9a944419e627e01`

源页面：https://interview.puritynexus.com

## 当前定位

求职有谱儿是面向求职准备场景的小程序，第一版提供首页介绍、免费测评、本地测评结果、关于我们、常见问题、隐私政策和服务条款。

当前版本不依赖后端接口，不上传用户填写内容，适合先导入抖音开发者工具进行预览、自测和提审前检查。

## 页面结构

- `pages/index/index`：首页和功能介绍
- `pages/assessment/assessment`：免费测评表单
- `pages/result/result`：本地测评结果页
- `pages/about/about`：关于我们
- `pages/faq/faq`：常见问题
- `pages/privacy/privacy`：隐私政策
- `pages/terms/terms`：服务条款

## 配置文件

- `app.json`：全局页面、窗口、隐私检查和网络超时配置
- `project.config.json`：抖音开发者工具项目配置，已写入 AppID
- `app.js`：全局品牌和 AppID
- `app.ttss`：全局样式

## 导入抖音开发者工具

1. 从 GitHub 拉取仓库或在云端下载代码包。
2. 打开抖音开发者工具。
3. 选择导入项目。
4. 项目目录选择仓库根目录。
5. AppID 使用 `ttdff9a944419e627e01`。
6. 编译并检查首页、免费测评、测评结果、关于我们、FAQ、隐私政策和服务条款。

## 提审前仍需在平台后台完成

- 小程序名称、头像、简介和认证主体信息确认。
- 服务类目选择和资质材料确认。
- 用户隐私保护协议配置。
- 若后续接入真实后端接口，需配置 HTTPS 安全域名。
- 使用抖音开发者工具上传版本，并在开放平台版本管理中提交审核。
