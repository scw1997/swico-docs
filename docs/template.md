
# 模板结构

Swico提供了两套前端开发模板可供选择，方便不同框架开发者使用：

- Vue模板：`Vue 3.5 + Vue Router 4.x + TypeScript 5.x`

- React模板：`React 19 + React Router 7.x + TypeScript 5.x`


两套模板结构和配置大同小异，主要针对React和Vue的特点做了细微区分。


```text
├── .husky 
├── .swico
├── config  
├── dist  
├── public
├── src
│   ├── pages
│   │   ├── index.tsx或Index.vue
│   │   └── index.less
│   │   └── 404.tsx或404.vue
│   ├── layout
│   │   └── index.tsx或Layout.vue
│   ├── typings
│   │   └── global.d.ts
│   ├── index.ejs
│   ├── global.ts
│   ├── global.(css|less|scss)
│   └── loading
│       └── index.tsx
├── eslint.config.mjs
├── .prettierignore
├── .prettierrc.js
├── commitlint.config.js
├── package.json
└── tsconfig.json
```


下面是关于模板主要结构的介绍：

## .swico

Swico运行时配置文件，会在每次执行`swico start`和`swico build`命令时自动重新生成（默认已加入git忽略路径）。

::: warning 注意
开发环境运行过程中时不要手动删除此文件夹，会引发报错。
:::

## husky/commitlint

`.husky`和`commitlint.config.js`文件为Git Hooks相关的配置文件。

:::warning 注意
只有在通过swico-cli创建项目时选择`需要Git Hooks`才会生成此类文件。
:::

详见：[Git Hooks]

## config

swico配置文件目录，项目路由需要在此配置。此外你还可以进行功能扩展例如Alias映射，本地请求代理等。

详见：[API > Swico配置]

## dist

默认打包构建产物输出路径。


## public

此目录下所有文件（夹）会完全按原有路径结构被复制到打包构建产物的根路径(dist)下。

可用于存放静态资源文件，并在项目代码中通过`根路径`引入该文件。

示例：
::: code-group

```vue{4} [vue]
<template>
  <div class="welcome">
    <!--public目录下有个logo.png文件-->
    <img alt="logo" src="/logo.png" />
    <h2 style="color: #3a95a7">Welcome to Swico!</h2>
  </div>
</template>
```


```tsx{5} [react]
const Index = () => {
    return (
        <div className={'welcome'}>
            {/*public目录下有个logo.png文件*/}
            <img alt="logo" src="/logo.png" />
            <h2 style={{ color: '#3a95a7' }}>欢迎使用 Swico</h2>
        </div>
    );
};
```
:::

## layout

全局布局的组件文件存放目录。


- **在React模板中**:

  全局布局组件文件路径为`layout/index.tsx`
  ```tsx
  // src/layout/index.tsx
  
  import { FC } from 'react';
  import { Outlet } from 'swico';
  
  const Layout: FC = () => {
    //Outlet为整体路由页面渲染，可根据布局需要放到适当的位置
    return <Outlet />;
  };
  
  export default Layout;
  ```

- **在Vue模板中**:

  全局布局组件文件路径为`layout/Layout.vue`
  ```vue
  <!--src/layout/Layout.vue  -->
  
  <script setup lang="ts">
  
  import { Outlet } from 'swico';
  </script>
  
  <template>
    <!--Outlet为整体路由页面渲染，可根据布局需要放到适当的位置-->
      <Outlet />
  </template>
  ```


## pages

页面相关文件存放路径。

- **在React模板中**：应该主要存放React TSX组件和样式文件。

- **在Vue模板中**：应该主要存放单文件组件(.vue)。

页面的样式处理详见：[样式]

## typings

主要存放全局 TypeScript 类型声明文件(`.d.ts`)。

## index.ejs

项目的入口`index.html`模板文件，可根据需要自行修改，例如引入一些外部js资源等。

```html
<!--src/index.ejs-->

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
  <Title>Swico App</Title>
  <script>
    // swico配置文件中router->base配置项
    window.SWICO_ROUTER_BASE = '<%= routerBase %>'
    // swico配置文件中publicPath配置项
    window.SWICO_PUBLIC_PATH = '<%= publicPath %>'
  </script>
</head>
<body>
<!--切勿删除此元素节点-->
<div id="root">
  <!-- 页面在这里渲染    -->
</div>


</body>
</html>

```
::: danger 警告
切勿删除`id="root"`的div元素，它是模板中挂载整个项目App的容器元素。
:::

## global.ts

这里主要用于定义一些全局配置性的参数或方法，需要默认导出（配置详细介绍见：[API > Global配置]）。

还可以添加一些全局性的代码，会在全局页面渲染时执行。 

::: warning 注意
 此文件不可删除，并且必须有默认导出。如果你不需要，则使默认导出为空对象即可。
:::

## global.(css|less|scss)

全局样式文件，主要用于添加一些全局可用的通用样式。此文件是可选的。

::: warning 注意
如果同时存在global.css/less/scss文件，则生效优先级为`css > less > scss`。
:::

## loading

全局路由懒加载时用来配置加载动画的组件文件，此文件是可选的。

- **在React模板中：**

  具体路径为`src/loading/index.tsx`。以下为示例：


::: code-group

  ```tsx [src/loading/index.tsx]
  import { Spin } from 'antd';
  import style from './style.module.less';
  export default () => (
    <div className={style.loadingContainer}>
      <Spin spinning tip={'正在加载'} />
    </div>
  );

  ```

  ```less [style.module.less]
   .loadingContainer {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ```
:::

- **在Vue模板中：**

  Vue3的`Suspense`目前只能用于异步组件，对于路由中的懒加载组件，这些与异步组件不同，**目前他们不会触发 `<Suspense>`**。

  但是，它们仍然可以有异步组件作为后代，你可以在路由组件的后代组件中使用 `<Suspense>`。

## eslint/prettier

eslint配置文件：`eslint.config.mjs`

prettier配置文件：`.prettierignore，.prettierrc.js`

可根据需要自行修改默认配置。

需要说明的是，Swico默认只会在终端输出eslint error信息，并不会输出warning。



[API > Swico配置]:/swico-config
[Git Hooks]:/git-hooks
[样式]:/style
[API > Global配置]:/swico-global
