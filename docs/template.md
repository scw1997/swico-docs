
# 模板结构

secywo目前内置提供了两套前端开发模板可供选择，方便不同框架开发者使用：

- [Vue模板]：`Vue 3.4 + Vue Router 4.x + TypeScript 5.x`

- [React模板]：`React 18 + React Router 6.x + TypeScript 5.x`

> 该模板支持在不安装secywo的情况下，独立拉取此模板进行开发。

两套模板结构和配置大同小异，主要针对React和Vue的特点做了细微区分。

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
husky 配置文件路径，提供 git 提交前的操作钩子。

- `pre-commit`

    用于配置git提交前的操作处理。
    
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
    
    以上述默认配置为例，在git提交前，husky会在命令行执行`.husky/pre-commit`文件里定义的终端命令即`npm test`进而调用`lint-staged`脚本命令， 该命令通过ESLint + Prettier进行代码格式校验和一键修复，若校验不通过或者一键修复后仍存在问题则禁止提交。

- `commit-msg`

    用于规范git提交时输入的注释信息。
    
    配置介绍见[commitlint.config.js](#commitlint-config-js)


> 配置文档：[husky 官方文档](https://typicode.github.io/husky/#/)

> 为防止开发者误删husky配置文件，该文件会在每次项目启动后重新生成

## config

secywo提供配置文件方便开发者可对部分项目配置进行修改扩展，例如Alias映射，本地请求代理等。

详见：[API > 配置]

## dist

默认打包构建产物输出路径


## public

此目录下所有文件（夹）会完全按原有路径结构被复制到打包构建产物的根路径(dist)下。

可用于存放静态资源文件，并在项目代码中通过`根路径`引入该文件

示例：
<CodeGroup>
  <CodeGroupItem title="vue">

```vue
<template>
  <div class="welcome">
    <!--public目录下有个logo.png文件-->
    <img alt="logo" src="/logo.png" />
    <h2 style="color: #3a95a7">Welcome to Secywo!</h2>
  </div>
</template>
```
  </CodeGroupItem>

  <CodeGroupItem title="react">

```tsx
const Index: React.FC = () => {
    return (
        <div className={'welcome'}>
            {/*public目录下有个logo.png文件*/}
            <img alt="logo" src="/logo.png" />
            <h2 style={{ color: '#3a95a7' }}>欢迎使用 Secywo</h2>
        </div>
    );
};
```
  </CodeGroupItem>
</CodeGroup>

## views

`Vue`模板的页面存放路径，它应该主要存放单文件组件(SFC)。

此外，模板也支持外部样式文件 `css` 和 `less` 文件的引入，暂不考虑支持`sass/scss`文件。

> :warning:：由于Vue单文件组件已内置`<style scoped>`和`<style module>`这种实现CSS模块化的特性，所以Vue模板暂不考虑支持外部样式文件`CSS Modules`特性

示例：

```vue title="src/views/Index.vue"
<script setup lang="ts">

</script>

<template>
  <div class="welcome">
    <img alt="logo" src="/logo.png" />
    <h2 style="color: #3a95a7">Welcome to Secywo!</h2>
  </div>
</template>

<style scoped lang="less">
.welcome {
  inset: 0 0 0 0;
  position: absolute;
  width: 100%;
  height: max-content;
  margin: auto;
  text-align: center;

  img {
    max-width: 100%;
  }
}

</style>
```

## pages

`React`模板的页面存放路径，它应该主要存放React TSX组件和样式文件。

其中样式文件支持 `css` 和 `less` 文件的引入，并且对以`module.(css|less)`
命名结尾的样式文件默认开启[CSS Modules](https://github.com/webpack-contrib/css-loader#modules)特性

示例：

```tsx title="src/pages/index.tsx"
import './index.less';

const Index: React.FC = () => {
    return (
        <div className={'welcome'}>
            <img alt="logo" src="/logo.png" />
            <h2 style="color: #3a95a7">欢迎使用 Secywo</h2>
        </div>
    );
};

export default Index;
```

## router

项目页面路由相关配置路径。

`Vue`和`React`模板已分别内置了基于 [Vue-Router 4](https://router.vuejs.org/zh/)和[React-Router 6](https://reactrouter.com/en/main/start/tutorial) 的基本路由配置：

<CodeGroup>
  <CodeGroupItem title="vue">

```ts title="src/router/index.ts"
import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    //示例页
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/example/Index.vue'),
      children: [
        {
          path: 'child-1', // 通过/example/child-1访问
          component: () => import('../views/example/Child1.vue')
        },
        {
          path: 'child-2', // 通过/example/child-2访问
          component: () => import('../views/example/Child2.vue')
        }
      ]
    }
  ]
});

export default router;
```
  </CodeGroupItem>

  <CodeGroupItem title="react">

```tsx title="src/router/index.ts"
import type { RouteProps } from 'react-router-dom';

export type RoutePageType = RouteProps & {
  lazyComponent?: () => Promise<{ default: React.FC }>;
  routes?: RoutePageType[];
};

const Router: RoutePageType[] = [
  {
    path: '/',
    lazyComponent: () => import('@/pages/index')
  },

  //示例页
  {
    path: '/example',
    lazyComponent: () => import('@/pages/example'),
    routes: [
      {
        path: 'child-1', // 通过/example/child-1访问
        element: <div>example-child-1</div>
      },
      {
        path: 'child-2', // 通过/example/child-2访问
        element: <div>example-child-2</div>
      }
    ]
  },
  {
    path: '/404',
    lazyComponent: () => import('@/pages/404')
  }
];

export default Router;
```
  </CodeGroupItem>
</CodeGroup>



## typings

主要存放全局 TypeScript 类型声明文件(`.d.ts`)。

默认配置：

<CodeGroup>
  <CodeGroupItem title="vue">

```typescript title="src/typings/global.d.ts"
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.webp';
declare module '*.less';
declare module '*.vue';

interface Window {
    publicPath: string;
}

```
  </CodeGroupItem>

  <CodeGroupItem title="react">

```typescript title="src/typings/global.d.ts"
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.webp';
declare module '*.less';

interface Window {
  publicPath: string;
}

```
  </CodeGroupItem>
</CodeGroup>


## index.ejs

项目的入口`index.html`模板文件，可根据需要自行修改：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
     <link rel="shortcut icon" href="/favicon.ico" />
    <Title>Secywo App</Title>
    <script>
        <!-- webpack publicPath配置项，可在代码中访问       -->
        window.publicPath = '<%= publicPath %>'
    </script>
</head>
<body>
<div id="root">
    <!-- 页面在这里渲染            -->
</div>
</body>
</html>

```



## commitlint.config.js

[Vue模板]:https://gitee.com/fanlaBoy/secywo-template-vue
[React模板]:https://gitee.com/fanlaBoy/secywo-template-react
[API > 配置]:/config.md#alias


