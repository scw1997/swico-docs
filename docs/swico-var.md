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

history的值是一个对象，包含多个方法。它的类型定义如下：

```typescript
declare type SwicoHistoryType = {
    push: (to: string | SwicoHistoryOptionType) => void;
    replace: SwicoHistoryType['push'];
    go: (delta: number) => void;
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

关于路由配置相关请阅读：[路由]
### push

- 类型：`(to: string | SwicoHistoryOptionType) => void`

用于跳转至新的路由。

接收一个`to`参数：

- 当参数值类型为string时，表示对应的路由完整`path`
- 当为对象时，其类型参见上述`SwicoHistoryOptionType`。其中`query`表示searchParams的序列化对象，`params`为路由动态参数的对象，`hash`为hash字符串.`path`为不带任何参数的路由完整path,`name`为路由唯一标识。

[路由]:/router.md
