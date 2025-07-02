# 样式
:::tip
从`v1.1.0`版本开始，Swico支持引入`scss`样式文件。
:::


## React模板

在React模板中样式文件支持 `.css`，`.less`和`.scss` 文件的引入，并且对以`.module.(css|less|scss)`命名结尾的样式文件默认开启[CSS Modules](https://rspack.dev/zh/guide/tech/css#css-modules)特性。


标准CSS使用示例：

::: code-group

  ```tsx [src/pages/index.tsx]
  import './index.less';
  
  const Index: React.FC = () => {
    return (
            <div className={'welcome'}>
              <img alt="logo" src="/logo.png" />
              <h2>Simpler, more practical</h2>
            </div>
    );
  };
  
  export default Index;

  
  ```


  ```less [src/pages/index.less]
  .welcome {
    display: flex;
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(
            to right,
            rebeccapurple,
            #5454f5,
            #6666f5,
            #a770db,
            #4269d9,
            #a43af1,
            violet
    );
    background-clip: text;
    color: transparent;
    font-style: italic;
    img {
      max-width: 100%;
    }
  }

  
  
  ```
:::

CSS Modules使用示例：

::: code-group

  ```tsx [src/pages/index.tsx]
  import style from './index.module.less';

  const Index: React.FC = () => {
    return (
            <div className={'welcome'}>
              <img alt="logo" src="/logo.png" />
              <h2>Simpler, more practical</h2>
            </div>
    );
  };

    export default Index;
  
  ```


  ```less [src/pages/index.module.less]
  .welcome {
    display: flex;
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(
            to right,
            rebeccapurple,
            #5454f5,
            #6666f5,
            #a770db,
            #4269d9,
            #a43af1,
            violet
    );
    background-clip: text;
    color: transparent;
    font-style: italic;
    :global{
      //覆盖样式
      img {
        max-width: 100%;
      }
    }
}
  
  
  ```
:::

## Vue模板


  在Vue模板中同样也支持外部样式文件`.css`，`.less`和`.scss` 的引入，
  ::: warning 注意
  由于Vue单文件组件已内置`<style scoped>`和`<style module>`这种实现CSS模块化的特性，所以Swico中Vue模板不支持引入`*.module.[css|less|scss]`文件。
  :::

  示例：

  ```vue
<!--src/pages/Index.vue-->

<script setup lang="ts"></script>

<template>
  <div class="welcome">
    <img alt="logo" src="/logo.png" />
    <h2>Simpler, more practical</h2>
  </div>
</template>

<style scoped lang="less">
  .welcome {
    display: flex;
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(
            to right,
            rebeccapurple,
            #5454f5,
            #6666f5,
            #a770db,
            #4269d9,
            #a43af1,
            violet
    );
    background-clip: text;
    color: transparent;
    font-style: italic;
    img {
      max-width: 100%;
    }
  }
</style>

  ```

## Tailwind CSS

从`v2.1.0`版本开始，Swico 支持Tailwind CSS 4.x配置，以下是配置说明：

1. 安装Tailwind相关依赖：

```bash
pnpm i tailwindcss @tailwindcss/postcss -D
```

2. 修改postcss.config.js配置

```bash
module.exports = {
    plugins: [
        ['autoprefixer']
        ['@tailwindcss/postcss'],   # [!code ++]
    ]
}
```

3. global.css文件入口引入tailwind

```css
/*  src/global.css    */
@import 'tailwindcss';
```
:::danger 注意

要使用tailwind css，只能在`src/global.css`文件中引入tailwind，global.less/scss不支持
:::

4. 在页面文件中使用

:::code-group 

```jsx [react]
<div className="bg-blue-500">测试tailwind样式</div>
```
```vue [vue]
<div class="bg-blue-500">测试tailwind样式</div>
```