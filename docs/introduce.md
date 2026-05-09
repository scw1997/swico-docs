# SWICO介绍

Swico，发音类似于“斯威扣”。

为个人独立开发的一款简易实用的前端框架，它基于前端工程化最新技术栈实现了前端开发从创建项目，获取模板，本地开发，Git提交校验到打包构建的完整过程。


## 主要特性 

- 构建工具基于[RsBuild 2]，底层基于Rust多线程驱动，显著提升编译和构建性能。

- 提供[Vue 3]和[React 19]两种开发模板选择，默认集成[TypeScript 5]。同时最大化统一这两种模板的开发API。

- 提供可配置化路由方案，基于[React-Router 7]和[Vue-Router 4]进行二次封装，支持路由嵌套，懒加载，动态参数，装饰校验等功能。

- 内置支持[ESLint] / [Prettier] 以及可选的 [Husky]等编码风格以及代码提交规范约束功能配置，保证代码风格统一以及 Git 提交规范。

- 提供配置文件可按需对架构配置进行修改扩展，例如Alias映射，本地请求代理等。


## 什么时候不选择SWICO

如果你即将开发的项目符合以下场景之一，SWICO可能不适合你：

- 需要支持 `React 17及以下版本`的React

- 需要支持 `Vue2及以下版本`的Vue

- 需要跑在 `Node 20.19+, 22.12+ 以外版本` 的环境中

- 需要支持IE浏览器

- 有很强的 RsBuild 自定义配置需求或意愿

- 需要选择不同的路由方案

- 需要支持SSR服务端渲染


[RsBuild 2]:https://v2.rsbuild.rs/zh/
[Vue 3]:https://cn.vuejs.org/
[Vue-Router 4]:https://router.vuejs.org/zh/
[React 19]:https://react.docschina.org/
[React-Router 7]:https://reactrouter.com/en/main
[TypeScript 5]:https://ts.nodejs.cn/
[ESLint]:https://eslint.org/docs/latest/
[Prettier]:https://www.prettier.cn/
[Husky]:https://typicode.github.io/husky/
