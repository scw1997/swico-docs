# SWICO介绍

Swico，发音类似于“斯威扣”。

为个人独立开发的一款实用的前端框架，它基于前端工程化最新技术栈实现了前端开发从创建项目，获取模板，本地开发，Git提交校验到打包构建的完整过程。


## 主要特性 

- 构建工具基于[Webpack5]，并配合[esbuild-loader]和[swc-loader]提升编译构建速率。

- 提供[Vue3]和[React18]两种开发模板选择，默认集成[TypeScript5]。同时最大化统一这两种模板的开发API。

- 提供可配置化路由方案，基于[React-Router6]和[Vue-Router4]进行二次封装，支持路由嵌套，懒加载，动态参数，装饰校验等功能。

- 内置[ESLint] + [Prettier] + [Husky]三大前端编码风格以及代码提交规范约束插件，保证代码风格统一以及 Git 提交规范。

- 提供配置文件可对部分项目配置进行修改扩展，例如Alias映射，本地请求代理等。


## 什么时候不选择SWICO

如果你即将开发的项目符合以下场景之一，SWICO可能不适合你：

- 需要支持 `React 17` 及其以下的React

- 需要支持 `Vue2` 及其以下的Vue

- 需要跑在 `Node 18` 以下的环境中

- 需要支持IE浏览器

- 有很强的 Webpack 自定义配置需求或意愿

- 需要选择不同的路由方案

- 需要支持SSR服务端渲染（:bulb:后续版本可能考虑支持）



[Webpack5]: https://www.webpackjs.com/
[esbuild-loader]:https://www.npmjs.com/package/esbuild-loader
[swc-loader]:https://www.npmjs.com/package/swc-loader
[Vue3]:https://cn.vuejs.org/
[Vue-Router4]:https://router.vuejs.org/zh/
[React18]:https://react.docschina.org/
[React-Router6]:https://reactrouter.com/en/v6.3.0
[Typescript5]:https://ts.nodejs.cn/
[ESLint]:https://zh-hans.eslint.org/docs/latest/use/getting-started
[Prettier]:https://www.prettier.cn/
[Husky]:https://typicode.github.io/husky/
