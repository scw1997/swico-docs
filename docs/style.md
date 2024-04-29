# 样式


## React模板


 在React模板中样式文件支持 `css` 和 `less` 文件的引入，并且对以`.module.(css|less)`命名结尾的样式文件默认开启[CSS Modules](https://github.com/webpack-contrib/css-loader#modules)特性。不支持sass/scss文件。


标准CSS使用示例：

<CodeGroup>
  <CodeGroupItem title="index.tsx">

  ```tsx title="src/pages/index.tsx"
  import './index.less';
  
  const Index= () => {
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
  
  const Index= () => {
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

## Vue模板


  在Vue模板中同样也支持外部样式文件 `css` 和 `less` 文件的引入，不支持sass/scss文件。
  ::: warning 注意
  由于Vue单文件组件已内置`<style scoped>`和`<style module>`这种实现CSS模块化的特性，所以Vue模板暂不考虑支持外部样式文件 `CSS Modules` 特性。
  :::

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