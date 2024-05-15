# Hooks

## useLocation


- 类型：`() => SwicoLocationType`

其中`SwicoLocationType`类型请参考：[API > history > location]


`useLocation`用于页面组件内部的路由参数获取：

::: code-group

```tsx [react]
import { useLocation } from 'swico'

const Example = () => {
  const location = useLocation()
  console.log('location',location)
  //...  
};

export default Example;
```


```vue [vue]
<script setup lang="ts">
import { useLocation } from 'swico'

const location = useLocation()

console.log('location',location)
</script>

```
:::

假设当前页面对应的swico路由配置为：

```js title="swico.ts"
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

## useNav

- 类型：`UseNavType`

其中`UseNavType`类型定义如下：

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

（1）当参数`to`类型为`string`时，该参数表示路由地址：

此时，`nav(to)`可以看作等价于命令式跳转的`history.push(to)`：

::: code-group

```tsx [react]
import { useNav } from 'swico'

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

（2）当参数`to`类型为`number`时，表示跳转至历史记录的哪个位置：

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

（3）当参数`to`类型为`SwicoHistoryOptionType`时，可以通过具体参数对象配置跳转的路由地址：

`SwicoHistoryOptionType`参数类型说明请参考：[API > history > push]

此时，`nav(to)`同样可以看作等价于命令式跳转的`history.push(to)`：

```typescript
// ...
const nav = useNav()
// ...

//推荐使用包含name的对象形式代替string形式

// {
//     path:'/test',
//     name:'test'        
// }

nav({name:'test'}) //相当nav('/test')
nav({name:'test',query:{a:'a',b:'b'}})  //相当于nav('/test?a=a&b=b')
nav({name:'test',hash:'hash'})  //相当于nav('/test#/hash')

// {
//     path:'/test1/:id',
//     name:'test1'        
// }

nav({name:'test1',params:{id:'123'}})  //相当于nav('/test1/123')
```

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


[API > history > push]:/history.md#push
[API > history > location]:/history.md#location
