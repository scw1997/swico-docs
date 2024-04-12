# Swico变量

模板中会存在一个`Swico`变量，它是跟随项目App的挂载自动注入到模板全局里的。


::: warning 注意

Swico变量并非可以在项目代码的任何地方可以访问到，它只能在App初始化挂载后访问（即Vue的app.mount()调用后或React的root.render()调用后）。大部分情况下建议不要在js/ts文件（不包括vue文件）的最顶层作用域进行Swico变量的声明或解构，否则很可能会报错未定义。

建议你只在需要使用Swico变量的位置进行Swico变量的声明或解构。

:::

Swcio变量的值是一个对象，它包含以下属性：


## history

- 类型：`SwicoHistoryType`

history用来进行路由的命令式跳转，也是Swico提供的唯一的路由跳转API。

关于路由配置相关请阅读：[路由]

history的值是一个对象，包含多个方法。它的类型定义如下：

```typescript
declare type SwicoHistoryType = {
    push: (to: string | SwicoHistoryOptionType) => void;
    replace: SwicoHistoryType['push'];
    go: (delta: number) => void;
    forward:()=>void;
    back: () => void;
};

declare type SwicoHistoryOptionType = {
    query?: Record<string, any>;
    params?: Record<string, any>;
    hash?: string;
    path?: string;
    name?: string;
};
```

### push

- 类型：`(to: string | SwicoHistoryOptionType) => void`

用于跳转至新的路由。

接收一个`to`参数：

- 当参数值类型为string时，表示对应的路由完整`path`
- 当为对象时，其类型参见上述`SwicoHistoryOptionType`。

  其中`query`表示searchParams的序列化对象，`params`为路由动态参数组成的对象，`hash`为hash字符串，`path`为不带任何参数的路由完整path，`name`为路由唯一标识值。

<CodeGroup>
  <CodeGroupItem title="react">

```tsx
const Example = () => {
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

参数值为对象时：

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


### replace

- 类型：`(to: string | SwicoHistoryOptionType) => void`

用于替换当前路由为新的路由。其参数类型与push相同，用法请参考`push`。


### go

- 类型：`(delta: number) => void`

用于跳转至当前历史记录的指定位置的路由。

接收一个参数`delta`，类型为`number`。只能为整数。访问的是基于当前路由的相对位置的路由。如`go(-1)` 表示访问上一个路由，`go(1)` 表示前进一个路由 。

### forward

- 类型：`() => void`

用于前进一个路由，与`history.go(1)`等价

### back

- 类型：`() => void`

用于访问上一个路由，与`history.go(-1)`等价

[路由]:/router.md
