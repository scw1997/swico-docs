---
sidebar:
    - text: 概述
      link: /introduce
    - text: 快速上手
      link: /start      
    - text: 模板结构
      link: /template
      children:
        - text: .husky  
          link: template.html#husky

        - text: config
          link: template.html#config
        - text: dist
          link: template.html#dist
        - text: public
          link: template.html#public
        - text: pages
          link: template.html#pages
        - text: views
          link: template.html#views
        - text: router
          link: template.html#router
        - text: typings
          link: template.html#typings
        - text: index.ejs
          link: template.html#index-ejs
---

# 模板结构

secywo目前内置提供了两套前端开发模板可供选择，方便不同框架开发者使用：

- [Vue模板]：`Vue 3.4 + Vue Router 4.x + TypeScript 5.x`

- [React模板]：`React 18 + React Router 6.x + TypeScript 5.x`

> 你也可以在不安装secywo的情况下，单独拉取模板进行开发。

两套模板架构大同小异，主要针对React和Vue的特点做了细分。

```shell title="react模板"
├── .husky
├── config
├── dist
├── public
├── src
│   ├── pages
│   │   ├── index.tsx
│   │   └── index.less
│   │   └── 404.tsx
│   ├── router
│   │   └── index.ts
│   ├── typings
│   │   └── global.d.ts
│   ├── index.ejs
│   ├── index.tsx
│   ├── app.tsx
│   ├── app.less
├── .eslintignore
├── .eslintrc
├── .prettierignore
├── .prettierrc.js
├── commitlint.config.js
├── package.json
└── tsconfig.json
```

```shell title="vue模板"
├── .husky
├── config
├── dist
├── public
├── src
│   ├── views
│   │   ├── Index.vue
│   │   └── 404.vue
│   │   
│   ├── router
│   │   └── index.ts
│   ├── typings
│   │   └── global.d.ts
│   ├── index.ejs
│   ├── index.tsx
│   └── App.vue
│
├── .eslintignore
├── .eslintrc
├── .prettierignore
├── .prettierrc.js
├── commitlint.config.js
├── package.json
└── tsconfig.json
```

下面是模板具体目录结构的介绍：

## .husky
husky 配置文件路径，用于提供 git 提交前的操作钩子。如
`pre-commit`（提交前的操作），`commit-msg`（提交信息校验）。

pre-commit文件默认配置：

```bash
npm test
```

package.json：

```json
"scripts": {
  "test": "lint-staged",
},
        
        
"lint-staged": {
  "src/**/*.{js,ts,vue}": [
      "prettier --write",
      "eslint --fix"
  ],
  "src/**/*.{css,less,json,html,md}": "prettier --write"
},
```

此默认配置为git提交前调用`npm test`执行`lint-staged`终端命令，通过eslint + prettier进行代码格式校验和修复，若校验不通过则禁止提交

`commit-msg`配置介绍见[commitlint.config.js](#commitlint-config-js)

> 配置文档：[husky 官方文档](https://typicode.github.io/husky/#/)

> 为防止开发者误删husky配置文件，默认每次执行 npm run start 后自动生成.husky文件

## config

secywo提供配置文件方便开发者可对部分项目配置进行修改扩展，例如Alias映射，本地请求代理等。

详见：[API]

## commitlint.config.js

[Vue模板]:https://gitee.com/fanlaBoy/secywo-template-vue
[React模板]:https://gitee.com/fanlaBoy/secywo-template-react
[API]:/api.html


