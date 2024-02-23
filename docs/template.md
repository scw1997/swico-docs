
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

默认配置：

```bash title=".husky/pre-commit"
npm test
```

```json title="package.json"
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

在git提交前，husky会在命令行执行`.husky/pre-commit`文件里定义的终端命令。

以上述默认配置为例，husky会调用`pre-commit`里面的`npm test`进而调用`lint-staged`脚本命令， 通过ESLint + Prettier进行代码格式校验和一键修复，若校验不通过或者一键修复后仍存在问题则禁止提交。

`commit-msg`配置介绍见[commitlint.config.js](#commitlint-config-js)

> 配置文档：[husky 官方文档](https://typicode.github.io/husky/#/)

> 为防止开发者误删husky配置文件，该文件会在每次项目启动后重新生成

## config

secywo提供配置文件方便开发者可对部分项目配置进行修改扩展，例如Alias映射，本地请求代理等。

详见：[API > 配置]

## commitlint.config.js

[Vue模板]:https://gitee.com/fanlaBoy/secywo-template-vue
[React模板]:https://gitee.com/fanlaBoy/secywo-template-react
[API > 配置]:/config.md#alias


