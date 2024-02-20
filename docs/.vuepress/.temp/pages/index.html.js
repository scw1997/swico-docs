import comp from "C:/Users/sunchuanwen/WebstormProjects/secywo-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"actions\":[{\"text\":\"开始上手\",\"link\":\"/getting-started.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"前沿技术栈\",\"details\":\"基于Webpack5 + Typescript5，提供Vue3.x和React18两种前端框架模板选择开发。\"},{\"title\":\"开箱即用\",\"details\":\"内置路由，本地开发服务器，打包构建，Git Lint等功能，完善开发流程。\"},{\"title\":\"代码风格约束\",\"details\":\"内置ESLint + Prettier + Husky三大前端编码风格以及代码提交规范约束插件，保证代码风格统一和质量以及 Git 提交规范。\"},{\"title\":\"可扩展\",\"details\":\"提供配置文件进行项目架构自定义配置API,例如alias映射，本地请求代理等\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
