# SECYWO介绍

Secywo，发音类似于“`塞C沃`”。

为个人独立开发的一款简单实用的前端脚手架，它基于前端工程化最新技术栈实现了前端开发从创建项目，获取模板，本地开发，Git提交校验到打包构建的完整过程。


## 主要特性

- 构建工具基于[Webpack5]，并配合[esbuild-loader]和[swc-loader]提升编译构建速率。

- 提供[Vue3]（内置[Vue-Router4]）和[React18]（内置[React-Router6]）两种开发模板选择，并且默认集成[TypeScript5]。

- 内置[ESLint] + [Prettier] + [Husky]三大前端编码风格以及代码提交规范约束插件，保证代码风格统一和质量以及 Git 提交规范和校验。

- 提供配置文件可对部分项目配置进行修改扩展，例如Alias映射，本地请求代理等。

>:warning: 暂无计划提供纯JavaScript开发模板

## 什么时候不选择SECYWO

如果你即将开发的项目符合以下场景之一，SECYWO可能不适合你：

- 需要支持 `React 17` 及其以下的React

- 需要支持 `Vue2` 及其以下的Vue

- 需要跑在 `Node 18` 以下的环境中

- 需要支持IE浏览器

- 有很强的 Webpack 自定义配置需求或意愿

- 需要选择不同的路由方案

- 需要支持SSR服务端渲染



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
