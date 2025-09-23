
# history

- 类型：`SwicoHistoryType`

history是swico提供的一个API，用来进行路由的**命令式跳转**。

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

:::danger 警告

注意：`React模板下不要在全局layout组件的顶层访问history`，初次渲染由于还没有初始化路由，无法正常拿到history对象。

```tsx
//src/layout/index.ts
import { history,Outlet } from 'swico'
export default ()=>{
    
    //错误方式
    const { query,name } = history.location //# [!code --]
  
    //正确方式
    useEffect(() => {
          const { query,name } = history.location //# [!code ++]
    }, []);
    
    return <div>
      
        <Outlet />
    </div>
}
```

:::

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
  state?: Record<string, any>;
};
```

用于跳转至新的路由。

接收一个参数：

- **当调用参数值类型为string时，表示对应的路由完整path值**
  ```typescript
  import { history } from 'swico'
  
  // ...
  const jumpLogin = ()=>{
    history.push('/login')
  }
  // ...
  ```
- **当调用参数值为对象时，其类型为`SwicoHistoryOptionType`，见下方说明**：

  | 参数     | 类型                 | 说明                                                                                |
  |--------|--------------------|-----------------------------------------------------------------------------------|
  | query  | Record<string,any> | searchParams的序列化对象。<br/>例如欲访问路由地址为`/news?a=1&b=2`，则param值应为`{a:1,b:2}`。           |
  | params | Record<string,any> | 路由动态参数组成的对象。<br/>例如欲跳转页面路由地址为`/news/123`，其路由path为`/news/:id`，则params应为`{id:123}`。 |
  | hash   | string             | 路由hash字符串。                                                                        |
  | name   | string             | 路由唯一标识值。                                                                          |
  | path   | string             | 配置的路由地址（不带任何参数）<br/>`注：当name有值时，path值无效`。                                         |
  | state  | Record<string,any>             | 需要给目标路由传递的状态参数，可在目标路由组件内获取。**只在目标路由会话窗口有效**                                       |

  ```js
  //推荐使用包含name的对象形式代替string形式
  // 假设有如下路由配置：
  // {
  //     path:'/test',
  //     name:'test'        
  // }
  
  history.push({name:'test'}) //相当于push('/test')
  history.push({name:'test',query:{a:'a',b:'b'}})  //相当于push('/test?a=a&b=b')
  history.push({name:'test',hash:'hash'})  //相当于push('/test#/hash')
  
  // 假设有如下路由配置：
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

接收一个参数delta，类型为number，只能为整数。

访问的是基于当前路由的相对位置的路由。如`go(-1)` 表示访问上一个路由，`go(1)` 表示前进一个路由 。

## forward

- 类型：`() => void`

用于前进一个路由，与history.go(1)等价。

## back

- 类型：`() => void`

用于访问上一个路由，与history.go(-1)等价。

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
  state?: Record<string, any>;
  custom?: any;
};
```

用于获取当前页面路由的相关参数：

| 参数       | 类型                 | 说明                                                                                                               |
  |----------|--------------------|------------------------------------------------------------------------------------------------------------------|
| query    | Record<string,any> | searchParams的序列化对象。<br/>如当前页面地址为`/news?a=1&b=2`，则query值为`{a:1,b:2}`。                                             |
| params   | Record<string,any> | 路由动态参数组成的对象。<br/>如当前页面地址为`/news/123`，其路由path为`/news/:id`，则params值为`{id:123}`。<br/>**注意：Vue模板下获取的params对象格式略有差异** |
| hash     | string             | 路由hash字符串。                                                                                                       |
| name     | string             | 路由唯一标识值。                                                                                                         |
| path     | string             | 配置的路由地址（不带任何参数）                                                                                                  |
| pathname | string             | 带base的完整path值。                                                                                                   |
| search   | string             | 路由查询字符串,如`?a=1&b=2`。                                                                                             |
| state    | Record<string,any> | 当前路由的状态参数，一般在跳转至当前路由时设置，**只在当前会话窗口有效**。                                                                          |                                     |
| custom   | any                | 当前路由的自定义数据，不可修改。                                                                                                 |        
```typescript
import { history } from 'swico'
const { location } = history

console.log('location',location)
```

以React模板为例，假设swico路由部分配置为：

```js 
// swico.ts
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

访问`/base/news/123?a=1&b=2#hash`，则通过`history.location`获取到的值为：
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



### history.location中的path和pathname的区别

二者的区别主要在于路由base值的设置（见：[路由 > 基本配置 > base]）。
 
例如当base值为/base，访问的当前路由地址为/base/news/list?id=1，则path值为/news/list，而pathname为/base/news/list。



[路由]:/router
[路由 > 基本配置 > base]:/router#base
