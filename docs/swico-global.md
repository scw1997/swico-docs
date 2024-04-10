# Global配置

Global配置是在模板的`src/global.ts`文件中用于定义一些全局配置性的参数或方法（需要默认导出）

推荐使用`defineGlobal` api来获得更好的TypeScript类型提示。


支持的可配置项如下：

## Vue模板

### onInit

  Vue模板挂载的App实例初始完成后的回调。
  
   返回两个参数：`app`（vue应用实例）和`router`（vue-router对象）。

  可以在此对app和router进行api调用操作，比如添加插件，设置路由守卫等。

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

## React模板

暂无可支持的配置项
