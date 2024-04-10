# 路由

路由是在Swico配置文件中通过`router`字段设置的。
 
其中React模板的内置路由系统基于[React-Router6]，而Vue模板则基于[Vue-Router4]。尽管二者之间存在不少差异，但基于二次封装，最大化统一了两种模板相关的API。


## 基本配置

下面是两种模板的默认路由配置：

<CodeGroup>
  <CodeGroupItem title="react">

```ts title="config/swico.ts"
//swico 公共自定义配置

import { defineConfig } from 'swico';

export default defineConfig('base', {
    //...
    router: {
        type: 'browser',
        base: '/',
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

```ts title="config/swico.ts"
//swico 公共自定义配置

import { defineConfig } from 'swico';

export default defineConfig('base', {
   //...
    router: {
        type: 'browser',
        base: '/',
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
                        name: 'example-child',
                        component: 'example/Child', //==>pages/example/Child.vue
                       
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


### type

- 类型：`'browser'|'hash'`   
- 默认值：`'browser'`

设置路由类型。

### base

- 类型：`string`
- 默认值：`/`

设置路由前缀，一般以`/`开头。例如base值为`/test`且已配置path为`/home`的路由时，你需要通过`/test/home`访问该路由。

当项目涉及服务器非根路径部署时，你需要设置base为对应具体值。

> :warning: 注意：当type值为`hash`时，React-Router和Vue-Router在这种情况下对base值的处理逻辑有所差异。在Vue模板中，此时将会忽略base值的设置，而在React模板中会将base值添加到hash的头部来访问路由。
在这种场景下，Swico并没有进行任何兼容处理，而是保留各自原始逻辑。因此，绝大部分情况下建议使用`browser`路由

### routes

- 类型：`Array<ConfigRoutesItemType>`
- 默认值：`[]`

配置页面路由。

其中`ConfigRoutesItemType`类型定义如下：

```typescript
type ConfigRoutesItemType = {
    component?: string; 
    children?: ConfigRoutesItemType[]; 
    path: string; 
    redirect?: string; 
    name?: string;
    decorator?: string; 
    [key: string]: any;
};

```
下面是各个字段具体介绍

- `path`

  必填项，配置当前路由地址。如果是第一级（最外层）路由，应以`/`开头，其他子路由则不需要以`/`开头。path支持动态参数 如`:id` 的形式和通配符的形式，这方面[Vue-Router4]与[React-Router6]存在匹配规则差异，请自行查阅官方文档。
- `name`

  当前路由的命名，也是唯一标识。Swico推荐开发者都设置此项，方便路由跳转和项目日后维护。
- `redirect`

  当前路由地址重定向后的路由地址，为完整的`path`值。
- `component`

  当前路由地址对应的页面组件路径。值为相对于`src/pages`的相对路径，且不需要文件名后缀。不支持绝对路径。

  例如你想引用`src/pages/home.tsx`或者`src/pages/Home.vue`，则设置`home`或者`Home`即可。

  当`component`和`redirect`都未设置值时，Swico会将当前路由直接渲染成`Outlet`。当只需要访问子路由页面而不需要访问父路由页面时，这将会很有用。
- `children`

  当前路由的子路由列表设置，内部字段与外部一致。
  
  子路由页面组件被渲染的前提，需要父路由页面组件在内部引入`Outlet`。

  <CodeGroup>
    <CodeGroupItem title="react">
  
  ```tsx
  import { Outlet } from 'swico';

  const Example: React.FC = () => {
  return (
     <div>
        example示例页
        {/*子路由组件在此渲染*/}
        <Outlet />
    </div>
      );
  };

  export default Example;
  ```
    </CodeGroupItem>
  
    <CodeGroupItem title="vue">
  
  ```vue
  <script setup lang="ts">
  import { Outlet } from 'swico';
  </script>
  
  <template>
      <div>
          example示例页
          <!--   子路由组件在此渲染-->
          <Outlet />
      </div>
  </template>
    
  <style scoped lang="less"></style>
  ```
    </CodeGroupItem>
  </CodeGroup>
  
- `decorator`

  当前路由组件的包装组件的路径，值类型与`component`一致。你可以通过它来实现权限校验等功能。

  在decorator组件中`Outlet`表示的就是当前路由对应的页面组件：

  <CodeGroup>
    <CodeGroupItem title="react">

  ```tsx
  import { Outlet } from 'swico';

  const Decorator: React.FC = (props) => {
    const {isLogin} = props
    return (
     <div>
       {isLogin?<Outlet />:<span>未登录</span>}
        
    </div>
      );
  };

  export default Decorator;
  ```
    </CodeGroupItem>

    <CodeGroupItem title="vue">

  ```vue
  <script setup lang="ts">
  import { Outlet } from 'swico';
  defineProps<{isLogin:boolean}>()
  </script>
  
  <template>
      <div>
            <template v-if="isLogin">
                <Outlet />
            </template>
           <template v-else>未登录</template>
      </div>
  </template>
    
  <style scoped lang="less"></style>
  ```
    </CodeGroupItem>
  </CodeGroup>


## 路由跳转

Swico抛弃了类hooks的路由跳转方式，统一采用了`命令式跳转`。

这意味着无论你是在页面路由组件内部还是外部，你都只需要调用同一个api进行路由跳转。

模板中会存在一个`Swico`变量，它是跟随项目App的挂载自动注入到模板全局里的，里面包含一个`history`属性，通过它来进行路由跳转。

<CodeGroup>
  <CodeGroupItem title="react">

```tsx
const Example: React.FC = () => {
  //这里的Swico变量是自动注入到模板中的，无需引入
  const {history} = Swico
  const handleClick = ()=>{
      history.push('/test')
  }
  return (
   <div>
        <button onClick={handleClick}>点我跳转</button>
  </div>
    );
};

export default Example;
```
  </CodeGroupItem>

  <CodeGroupItem title="vue">

```vue
<script setup lang="ts">
  //这里的Swico变量是自动注入到模板中的，无需引入
  const {history} = Swico
  const handleClick = ()=>{
    history.push('/test')
  }
</script>

<template>
  <button @click="handleClick">点我跳转</button>
</template>

```
  </CodeGroupItem>
</CodeGroup>

`push`调用的参数除了string类型，还可以是一个对象：

```js
//推荐使用包含name的对象形式代替string形式

// {
//     path:'/test',
//     name:'test'        
// }

history.push({name:'test'}) //相当于push('/test')
history.push({name:'test',query:{a:'a',b:'b'}})  //相当于push('/test?a=a&b=b')
history.push({name:'test',hash:'hash'})  //相当于push('/test#/hash')

// {
//     path:'/test1/:id',
//     name:'test1'        
// }

history.push({name:'test1',params:{id:'123'}})  //相当于push('/test1/123')
```
除了push，还有`replace，go，back`等方法...


更多关于history的API介绍请参考：[API > Swico变量 > history]

::: warning 注意

Swico变量并非可以在项目代码的任何地方可以访问到，它只能在App初始化挂载后访问。大部分情况下建议不要在js/ts文件（不包括vue文件）的最顶层作用域进行Swico变量的声明或解构，否则很可能会报错未定义。

建议你只在需要使用Swico变量的位置进行Swico变量的声明或解构。

:::

## Link组件

<CodeGroup>
  <CodeGroupItem title="react">

```tsx
import {Link} from 'swico'
const Example: React.FC = () => {
  return (
   <div>
        <Link to={'/test'}>点我跳转到/test</Link>
  </div>
    );
};

export default Example;
```
  </CodeGroupItem>

  <CodeGroupItem title="vue">

```vue
<script setup lang="ts">
import {Link} from 'swico'
</script>

<template>
  <Link to='/test'>点我跳转到/test</Link>
</template>

```
  </CodeGroupItem>
</CodeGroup>

更多关于Link组件的属性介绍请参考：[API > Link组件]

## 路由参数
[Vue-Router4]:https://router.vuejs.org/zh/
[React-Router6]:https://reactrouter.com/en/v6.3.0
[API > Swico变量 > history]:/swico-var.md#history
[API > Link组件]:/link.md
