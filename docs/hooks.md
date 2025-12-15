# Hooks

Swico提供了以下Hooks API


## useLocation


- 类型：`() => SwicoLocationType`

其中SwicoLocationType类型请参考：[API > history > location]


useLocation用于页面组件内部的路由参数获取：

::: code-group

```tsx [react]
import { useLocation } from 'swico/react'

const Example = () => {
  const location = useLocation()
  console.log('location',location)
  //...  
};

export default Example;
```


```vue [vue]
<script setup lang="ts">
import { useLocation } from 'swico/vue'

const location = useLocation()

console.log('location',location)
</script>

```
:::

假设swico路由部分配置为：

```js
// config/swico.ts

//... 
router:{
   base:'/base',
   routes:[
       //...
     {
       name:'news-detail',
       path:'/news/:id',
     }
    //...
   ] 
}
//... 
```

访问`/base/news/123?a=1&b=2#hash`，则通过`useLocation()`获取到的值为：
```js
{
  name:'news-detail',
  path:'/news/123',
  pathname:'/base/news/123',
  params:{
      id:'123'
  },
  query:{
      a:'1',
      b:'2'
  },  
  hash:'#hash',
  search:'?a=1&b=2'
}
```
:::warning 注意

Vue模板不要在**全局layout组件的顶层**获取useLocation的返回值对象里属性，初次渲染由于还没有初始化路由，无法正常拿到返回值对象的正确值。

```vue [vue]
<!--src/layout/Layout.vue-->

<script setup lang="ts">
    import { Outlet, Link, useLocation, history } from 'swico/vue';
    import { watch,ref } from 'vue';
    const location = useLocation();
    //无法获取到正确属性值 //# [!code --]
    console.log('location.name',location.name);//# [!code --]

    //正确方式 //# [!code ++]
    const nameRef = ref('');//# [!code ++]
    watch(() => location.name, (name) => { //# [!code ++]
        console.log('location.name', name); //# [!code ++]
        nameRef.value = name //# [!code ++]
    });//# [!code ++]
</script>

<template>
<!--  <span>当前路由的name为：{{name}}</span>  //# [!code ++] -->  
  <span>当前路由的name为：{{nameRef}}</span>
  <Outlet />
</template>
```
:::

## useNav

- 类型：`UseNavType`

其中UseNavType类型定义如下：

```typescript
type UseNavType = () => {
    (to: string, options?: NavOptionsType): void;
    (to: number): void;
    (to: SwicoHistoryOptionType, options?: NavOptionsType): void;
};

```

`useNav`用于页面组件内部的路由跳转。

该hook返回一个函数，该函数调用支持`to`和`option`两个参数：

### to

- 类型：`string | number | SwicoHistoryOptionType`

**（1）当参数to类型为`string`时，该参数表示路由地址：**

此时，`nav(to)`可以看作等价于命令式跳转的`history.push(to)`：

::: code-group

```tsx [react]
import { useNav } from 'swico/react'

const Example = () => {
  const nav = useNav()  
  const handleClick = ()=>{
    nav('/test?a=1&b=2')
  }
  return (
     <div>
          <button onClick={handleClick}>点我跳转</button>
    </div>
    );
};

export default Example;
```

```vue
<script setup lang="ts">
import { useNav } from 'swico'

const nav = useNav()
const handleClick = ()=>{
  nav('/test?a=1&b=2')
}
</script>

<template>
  <button @click="handleClick">点我跳转</button>
</template>

```
:::

**（2）当参数to类型为`number`时，表示跳转至历史记录的哪个位置：**

此时，`nav(to)`可以看作等价于命令式跳转的`history.go(to)`：

```typescript
// ...
const nav = useNav()
// ...

// 向前进一级路由
nav(1) //相当于history.go(1)

// 返回上一级路由
nav(-1) //相当于history.go(-1)
```

**（3）当参数to类型为`SwicoHistoryOptionType`时，可以通过具体参数对象配置跳转的路由地址：**

SwicoHistoryOptionType参数类型说明请参考：[API > history > push]

此时，`nav(to)`同样可以看作等价于命令式跳转的`history.push(to)`：

```typescript
// ...
const nav = useNav()
// ...
//推荐使用包含name的对象形式代替string形式

// 假设有如下路由配置：
// {
//     path:'/test',
//     name:'test'        
// }

nav({name:'test'}) //相当nav('/test')
nav({name:'test',query:{a:'a',b:'b'}})  //相当于nav('/test?a=a&b=b')
nav({name:'test',hash:'hash'})  //相当于nav('/test#/hash')

// 假设有如下路由配置：
// {
//     path:'/test1/:id',
//     name:'test1'        
// }

nav({name:'test1',params:{id:'123'}})  //相当于nav('/test1/123')
```
:::tip to的属性值变化 <Badge type="tip">v2.9.0</Badge>

自`v2.9.0`开始，在执行nav跳转时,参数`to`中的`state`参数会默认携带一个`navType`属性值，表示当前跳转行为的类型。

navType值可能为`push`或`replace`。可在跳转后的目标页面中通过此属性判断当前页面是否为replace跳转行为。

**若当前页面并非由前一个路由通过push或replace跳转所至，则state不会存在此属性值。**
:::

### options

- 类型：`NavOptionsType`

其类型定义如下：

```typescript
type NavOptionsType = {
    replace: boolean;
};
```

options表示跳转时的额外参数对象设置，目前支持以下属性：

- **replace**  

  类型：`boolean`

   表示当前跳转路由是否为替换路由的模式。

  `nav(to,{replace:true})`可看作等价于命令式跳转的`history.replace(to)`


[API > history > push]:/history#push
[API > history > location]:/history#location
