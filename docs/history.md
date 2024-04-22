
# history

- 类型：`SwicoHistoryType`

history用来进行路由的命令式跳转， 任何时候你需要进行路由跳转都应该使用此API。

关于路由配置相关请阅读：[路由]

history的值是一个对象，包含多个方法和属性。它的类型定义如下：

```typescript
type SwicoHistoryType = {
  push: (to: string | SwicoHistoryOptionType) => void;
  replace: SwicoHistoryType['push'];
  go: (delta: number) => void;
  forward: () => void;
  back: () => void;
  location: SwicoLocationType;
};
```

## push

- 类型：`(to: string | SwicoHistoryOptionType) => void`

其中`SwicoHistoryOptionType`类型定义如下：

```typescript
type SwicoHistoryOptionType = {
  query?: Record<string, any>;
  params?: Record<string, any>;
  hash?: string;
  path?: string;
  name?: string;
};
```

用于跳转至新的路由。

接收一个`to`参数：

- 当参数值类型为string时，表示对应的路由完整`path`
- 当为对象时，其类型为`SwicoHistoryOptionType`，见下方说明：

  | 参数           | 类型                 | 说明                                                                             |
  |--------------|--------------------|--------------------------------------------------------------------------------|
  | query | Record<string,any> | searchParams的序列化对象。<br/>如欲访问路由地址为`/news?a=1&b=2`，则param值应为`{a:1,b:2}`          |
  | params | Record<string,any> | 路由动态参数组成的对象。<br/>如欲跳转页面路由地址为`/news/123`，其路由path为`/news/:id`，则params应为`{id:123}` |
  | hash | string             | 路由hash字符串                                                                      |
  | name | string             | 路由唯一标识值                                                                        |
  | path | string             | 配置的路由地址（不带任何参数）<br/>`注：当name有值时，path值无效`                                         |


<CodeGroup>
  <CodeGroupItem title="react">

```tsx
import { history } from 'swico'

const Example = () => {
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
  import { history } from 'swico'

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


## replace

- 类型：`(to: string | SwicoHistoryOptionType) => void`

用于替换当前路由为新的路由。其参数类型与push相同，用法请参考`push`。


## go

- 类型：`(delta: number) => void`

用于跳转至当前历史记录的指定位置的路由。

接收一个参数`delta`，类型为`number`。只能为整数。访问的是基于当前路由的相对位置的路由。如`go(-1)` 表示访问上一个路由，`go(1)` 表示前进一个路由 。

## forward

- 类型：`() => void`

用于前进一个路由，与`history.go(1)`等价

## back

- 类型：`() => void`

用于访问上一个路由，与`history.go(-1)`等价

## location

- 类型：`SwicoLocationType`

类型定义如下：

```typescript
type SwicoLocationType = {
  query?: Record<string, any>;
  params?: Record<string, any>;
  hash: string;
  name: string; 
  path: string; 
  pathname: string; 
  search: string;
};
```

用于获取当前页面路由的相关参数：

| 参数       | 类型                 | 说明                                                                           |
  |----------|--------------------|------------------------------------------------------------------------------|
| query    | Record<string,any> | searchParams的序列化对象。<br/>如当前页面地址为`/news?a=1&b=2`，则query值为`{a:1,b:2}`          |
| params   | Record<string,any> | 路由动态参数组成的对象。<br/>如当前页面地址为`/news/123`，其路由path为`/news/:id`，则params值为`{id:123}` |
| hash     | string             | 路由hash字符串                                                                    |
| name     | string             | 路由唯一标识值                                                                      |
| path     | string             | 配置的路由地址（不带任何参数）                                                              |
| pathname | string             | 带base的完整path值                                                                |
| search   | string             | 路由查询字符串,如`?a=1&b=2`                                                          |

> path和pathname的区别：
> 
> 二者的区别主要在于路由base值的设置（见：[路由 > 基本配置 > base]）。
> 
> 例如当base值为`/base`，访问的当前路由地址为`/base/news/list?id=1`，则path值为`/news/list`,而pathname为`/base/news/list`




[路由]:/router.md
[路由 > 基本配置 > base]:/router.md#base
