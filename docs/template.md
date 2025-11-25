
# 模板结构

Swico提供了两套前端开发模板可供选择，方便不同框架开发者使用：

- Vue模板：`Vue 3.5 + Vue Router 4 + TypeScript 5`

- React模板：`React 19 + React Router 7 + TypeScript 5`


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
├── postcss.config.js
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

详见：[API > 配置项]

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

**注意：若swico配置项`publicPath`不为`/`（默认为/），则在`生产环境`下，需要在标签链接里添加上publicPath前缀才能正常访问该资源。**

例如以下Swico配置：

```ts
//config/swico.ts
import { defineConfig } from 'swico';
const { SWICO_ENV} = process.env;

export default defineConfig('base', {
    publicPath:'/test/',
    // 将表示当前所处环境的变量注入到项目中，可在业务代码中使用
    define:   { SWICO_ENV }
    
});

```

则生产环境访问logo.png文件时，需加上publicPath前缀：
::: code-group

```tsx{5} [react]

const Index = () => {
    //这里的SWICO_PUBLIC_PATH是Swico默认注入的全局变量
    const preFix = isProduction ? SWICO_PUBLIC_PATH : '/'
    return (
        <div className={'welcome'}>
            {/*public目录下有个logo.png文件*/}
            <img alt="logo" src=`${preFix}logo.png` />
            <h2 style={{ color: '#3a95a7' }}>欢迎使用 Swico</h2>
        </div>
    );
};
```

```vue{4} [vue]
<script setup>
//这里的SWICO_PUBLIC_PATH是Swico默认注入的全局变量
const preFix =  SWICO_ENV==='production' ? SWICO_PUBLIC_PATH : '/'
</script>

<template>
  <div class="welcome">
    <!--public目录下有个logo.png文件-->
    <img alt="logo" :src="`${preFix}logo.png`" />
    <h2 style="color: #3a95a7">Welcome to Swico!</h2>
  </div>
</template>
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

项目的入口`index.html`模板文件。

可根据需要自行调整修改，例如引入一些外部js资源。

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
  <link rel="shortcut icon" href="<%= SWICO_ENV==='prod'? SWICO_PUBLIC_PATH:'/' %>favicon.ico" />
  <Title>Swico App</Title>
</head>
<body>
  <!-- 页面在这里渲染    -->
</body>
</html>

```

## global.ts

用于定义一些全局配置性的参数或方法（`注意必须有默认导出`），也可添加一些在全局页面渲染时需要执行的逻辑。

推荐使用`defineGlobal` api来获得更好的TypeScript类型提示。




支持以下配置项：

### onInit

**对于React模板**：<Badge type="tip">v2.8.0</Badge>

**`onInit`为顶层Root元素render执行后的回调方法。**

该方法暂无传递参数。

**对于Vue模板**：

**`onInit`为顶层挂载的App实例即将初始化完成的回调方法。**

该方法传递两个参数：`app`（vue应用实例）和`router`（vue-router对象）。

可以在此对app和router进行api调用操作，比如添加插件，设置路由守卫等。



示例：

:::code-group
  ```ts [react]
  // src/global.ts

  import { defineGlobal } from 'swico';
  import { createPinia } from 'pinia';
  
  export default defineGlobal({
      onInit: () => {
         //将在root元素render后调用
      }
  });
  
  ```
  ```ts [vue]
  // src/global.ts

  import { defineGlobal } from 'swico';
  import { createPinia } from 'pinia';
  
  export default defineGlobal({
      onInit: (app, router) => {
          //将在当前顶层App实例即将渲染时调用
          //注入全局状态管理store
          app.use(createPinia());
          //设置路由守卫
          router.beforeEach((to, from, next) => {
              //
          })
      }
  });
  
  ```
## global.(css|less|scss)

全局样式文件，主要用于添加一些全局可用的通用样式。此文件是可选的。

::: warning 注意
如果同时存在global.css/less/scss文件，则生效优先级为`css > less > scss`。
:::

## loading

路由懒加载的占位组件，可用于配置路由页面加载渲染之前的显示效果。此文件是可选的。


- **在React模板中：**

此功能基于React内置的`lazy`和`Suspense` API实现。

组件路径为`src/loading/index.tsx`。

示例：
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

暂不支持

:::warning 官方解释
Vue3 Suspense目前为实验特性且未来很可能会发生变化，同时Vue Router 使用动态导入对懒加载组件（Swico路由配置默认为懒加载模式）进行了内置支持。这些与异步组件不同，目前他们不会触发 Suspense。

:::

## eslint/prettier

eslint配置文件：`eslint.config.mjs`

prettier配置文件：`.prettierignore，.prettierrc.js`

可根据需要自行修改默认配置。

需要说明的是，Swico默认只会在终端输出eslint error信息，并不会输出warning。

## postcss.config.js <Badge type="tip">v2.1.0</Badge>

css解析的配置文件。

可用于配置tailwind css，详见：[样式 > Tailwind CSS]。

默认配置：

```js
module.exports = {
    plugins: [
        ['autoprefixer']  //表示使用autoprefixer插件提高css兼容性
    ]
}
```

[API > 配置项]:/swico-config
[Git Hooks]:/git-hooks
[样式]:/style
[样式 > Tailwind CSS]:/style#tailwind-css
