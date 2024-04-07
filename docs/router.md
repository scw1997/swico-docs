# 路由

路由是在Swico配置文件中设置的。
 
其中React模板的内置路由系统基于[React-Router6]，而Vue模板则基于[Vue-Router4]。尽管二者之间存在不少差异，但基于二次封装，我最大化统一了两种模板相关的API。


## 路由配置

下面是两种模板的默认路由配置：

<CodeGroup>
  <CodeGroupItem title="react">

```ts
//swico 公共自定义配置

import { defineConfig } from 'swico';

export default defineConfig('base', {
    //...
    router: {
        routes: [
            {
                path: '/',
                name: 'index',
                component: 'index' //==>pages/index.tsx
            },
            //示例页
            {
                path: '/example',
                name: 'example',
                component: 'example', //==>pages/example/index.tsx
                children: [
                    {
                        path: 'child',   //通过/example/child访问
                        name: 'example-child',
                        component: 'example/child' //==>pages/example/child.tsx
                    }
                ]
            },
            {
                path: '*', //注意此处与Vue模板的差异
                name: '404',
                component: '404',
            }
        ]
    }
    //...
});

```
  </CodeGroupItem>

  <CodeGroupItem title="vue">

```ts
//swico 公共自定义配置

import { defineConfig } from 'swico';

export default defineConfig('base', {
   //...
    router: {
        routes: [
            {
                path: '/',
                name: 'index',
                component: 'Index' //==>pages/Index.vue
            },
            //示例页
            {
                path: '/example',
                name: 'example',
                component: 'example/Example',//==>pages/example/Example.vue
                children: [
                    {
                        path: 'child',  //通过/example/child访问
                        component: 'example/Child', //==>pages/example/Child.vue
                        name: 'example-child'
                    }
                ]
            },
            {
                path: '/:pathMatch(.*)*', //注意此处与React模板的差异
                name: '404',
                component: '404'
            }
        ]
    }
    //...
});

```
  </CodeGroupItem>
</CodeGroup>


> 需要注意的是，虽然两种模板的路由配置的API属性进行了统一，但是由于React-Router和Vue-Router一些配置规则的差异，部分路由规则并没有得到完全统一兼容处理，例如针对包含动态参数的的路由地址匹配规则。
这种情况下请自行查阅官方文档。


[Vue-Router4]:https://router.vuejs.org/zh/
[React-Router6]:https://reactrouter.com/en/v6.3.0
