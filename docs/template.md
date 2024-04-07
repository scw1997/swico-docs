
# 模板结构

Swico提供了两套前端开发模板可供选择，方便不同框架开发者使用：

- [Vue模板]：`Vue 3.4 + Vue Router 4.x + TypeScript 5.x`

- [React模板]：`React 18 + React Router 6.x + TypeScript 5.x`


两套模板结构和配置大同小异，主要针对React和Vue的特点做了细微区分。


```text
├── .husky 
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
│   ├── global.less
    └── loading
│       └── index.tsx
├── .eslintignore
├── .eslintrc
├── .npmrc
├── .prettierignore
├── .prettierrc.js
├── commitlint.config.js
├── package.json
└── tsconfig.json
```


下面是关于模板主要结构的介绍：

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
    
   详见：[模板结构 > commitlint.config.js](#commitlint-config-js)。


> 配置文档：[husky 官方文档](https://typicode.github.io/husky/#/)

> 为防止开发者误删husky配置文件，该文件会在每次项目启动后重新生成。

## config

swico配置文件目录，项目路由需要在此配置。此外你还可以进行功能扩展例如Alias映射，本地请求代理等。

详见：[API > 配置]

## dist

默认打包构建产物输出路径


## public

此目录下所有文件（夹）会完全按原有路径结构被复制到打包构建产物的根路径(dist)下。

可用于存放静态资源文件，并在项目代码中通过`根路径`引入该文件。

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


## layout

全局布局的组件文件存放目录。


- **在React模板中**:

  全局布局组件文件路径为`layout/index.tsx`
  ```tsx title="src/layout/index.tsx"
  import { FC } from 'react';
  import { Outlet } from 'swico';
  
  const Layout: FC = () => {
    //Outlet为整体路由页面渲染，可根据布局需要放置到layout里适当的位置
    return <Outlet />;
  };
  
  export default Layout;

  
  ```

- **在Vue模板中**:

  全局布局组件文件路径为`layout/Layout.vue`
  ```vue
  <script setup lang="ts">
  import { Outlet } from 'swico';
  </script>
  
  <template>
    <!--Outlet为整体路由页面渲染，可根据布局需要放置到layout里适当的位置-->
      <Outlet />
  </template>
  ```


## pages

页面相关文件存放路径。

- **在React模板中**:

  `pages`目录应该主要存放React TSX组件和样式文件。

  其中样式文件支持 `css` 和 `less` 文件的引入，并且对以`.module.(css|less)`命名结尾的样式文件默认开启[CSS Modules](https://github.com/webpack-contrib/css-loader#modules)特性。不支持sass/scss文件。


  标准CSS使用示例：

  <CodeGroup>
    <CodeGroupItem title="index.tsx">
  
  ```tsx title="src/pages/index.tsx"
  import './index.less';
  
  const Index: React.FC = () => {
      return (
          <div className={'welcome'}>
              <img alt="logo" src="/logo.png" />
              <h2 style="color: #3a95a7">欢迎使用 Swico</h2>
          </div>
      );
  };
  
  export default Index;
  
  ```
  
    </CodeGroupItem>
  
    <CodeGroupItem title="index.less">
  
  ```less title="src/pages/index.less"
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
  
  
  ```
    </CodeGroupItem>
  </CodeGroup>

  CSS Modules使用示例：
  
  <CodeGroup>
    <CodeGroupItem title="index.tsx">
  
  ```tsx title="src/pages/index.tsx"
  import style from './index.module.less';
  
  const Index: React.FC = () => {
      return (
          <div className={style.welcome}>
              <img alt="logo" src="/logo.png" />
              <h2 style="color: #3a95a7">欢迎使用 Swico</h2>
          </div>
      );
  };
  
  export default Index;
  
  ```
  
    </CodeGroupItem>
  
    <CodeGroupItem title="index.module.less">
  
  ```less title="src/pages/index.module.less"
  .welcome {
      inset: 0 0 0 0;
      position: absolute;
      width: 100%;
      height: max-content;
      margin: auto;
      text-align: center;
      :global{ //覆盖指定全局样式
        img {
          max-width: 100%;
        }
      }
  }
  
  
  ```
    </CodeGroupItem>
  </CodeGroup>

- **在Vue模板中**：

  `pages`目录应该主要存放单文件组件(SFC)。

  同样也支持外部样式文件 `css` 和 `less` 文件的引入，不支持sass/scss文件。

  > :warning: 由于Vue单文件组件已内置`<style scoped>`和`<style module>`这种实现CSS模块化的特性，所以Vue模板暂不考虑支持外部样式文件`CSS Modules`特性。

  示例：

  ```vue title="src/pages/Index.vue"
  <script setup lang="ts">
  
  </script>
  
  <template>
    <div class="welcome">
      <img alt="logo" src="/logo.png" />
      <h2 style="color: #3a95a7">Welcome to Swico</h2>
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

## typings

主要存放全局 TypeScript 类型声明文件(`.d.ts`)。

## index.ejs

项目的入口`index.html`模板文件，可根据需要自行修改，例如引入一些外部js资源等

```html title="src/index.ejs"
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
    <!-- swico配置文件中router->base配置项，可在代码中访问       -->
    window.routerBase = '<%= routerBase %>'
  </script>
</head>
<body>
<div id="root">
  <!-- 页面在这里渲染            -->
</div>
</body>
</html>

```

## global.ts

这里可以添加一些全局性的代码，会在全局页面渲染时执行。 

此外这里还可以定义一些全局配置性代码（需要默认导出）。 推荐使用`defineGlobal` api来获得更好的TypeScript类型提示

目前可支持的全局配置有：

- **onInit**（仅支持Vue模板）

  Vue模板挂载的App实例初始完成后的回调。返回两个参数：app实例和vue-router对象。

  可以在此对app和router进行api调用操作，比如添加插件或者设置vue-router路由守卫等。

  

  示例：
  ```ts title="src/global.ts"
  import { defineGlobal } from 'swico';
  import { createPinia } from 'pinia';
  
  export default defineGlobal({
      onInit: (app, router) => {
          //app为实例,router为vue-router的Router对象
          app.use(createPinia());
  
          router.beforeEach((to, from, next) => {})
      }
  });
  
  ```
> :warning: 注意：此文件不可删除，并且必须有默认导出。如果你不需要或者是React模板，则使默认导出为空对象即可


## global.less

全局样式文件，主要用于添加一些全局可用的通用样式。此文件是可选的


## loading

全局路由懒加载时的临时组件存放路径，主要用来配置加载动画。此文件是可选的

- **在React模板中：**
  具体路径为`loading/index.tsx`。以下为示例：

<CodeGroup>
  <CodeGroupItem title="loading/index.tsx">

  ```tsx
  import { Spin } from 'antd';
  import style from './style.module.less';
  export default () => (
    <div className={style.loadingContainer}>
      <Spin spinning tip={'正在加载'} />
    </div>
  );

  ```
  </CodeGroupItem>

  <CodeGroupItem title="style.module.less">

  ```less
   .loadingContainer {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ```
  </CodeGroupItem>
  
</CodeGroup>

> 注意：此功能暂时只支持React模板

## commitlint.config.js

git 提交格式规范校验规则配置文件。

用于配合`husky`的`commit-msg`操作钩子进行`git commit`的提交信息的格式校验。

```bash title=".husky/commit-msg"
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit $1
```

默认配置：

```javascript title="commitlint.config.js"
//默认配置
module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    // 定义规则类型
    rules: {
        // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
        'type-enum': [
            2,
            'always',
            [
                'add', // 新功能 feature
                'fix', // 修复 bug
                'docs', // 文档注释
                'config', // 架构配置修改
                'perf', // 性能优化
                'test', // 增加测试
                'revert', // 回退
                'others' // 其他
            ]
        ],
        // subject 大小写不做校验
        'subject-case': [0]
    }
};
```

基于上述默认配置，git 提交时填写提交内容的说明信息需遵循以下格式，否则会校验不通过报错而提交失败：

```ts
[type]: 说明信息  // 注意中间是英文冒号+空格
```

`type`的可选值如下：

- `config`: 项目构建配置的变动
- `docs`: 仅仅修改了文档等（不是指文案类的改动，而是指项目文档、代码注释等）
- `fix`: 修复 bug
- `add`: 增加新功能
- `perf`: 各种业务代码的修改，优化
- `revert`: 代码回滚
- `test`: 测试用例代码
- `others`:其他类型的更改（非即以上类型的改动）

提交示例：
```text
fix: 修复部分bug
```

参考文档：[commitlint 官方文档](https://commitlint.js.org/#/guides-local-setup)



[Vue模板]:https://gitee.com/fanlaBoy/swico-template-vue
[React模板]:https://gitee.com/fanlaBoy/swico-template-react
[API > 配置]:/config.md


