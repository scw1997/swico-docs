# Link

Swico提供了一个Link组件，它的本质是一个带路由跳转功能的 `<a>` 元素。

::: code-group

```tsx [react]
import { Link } from 'swico'
const Example = () => {
  return (
   <div>
        <Link to={'/test'}>点我跳转到地址：/test</Link>
       <Link to={{name:'test',query:{a:'1'}}}>点我跳转到地址：/test?a=1</Link>
  </div>
    );
};

export default Example;
```


```vue [vue]
<script setup lang="ts">
import { Link } from 'swico'
</script>

<template>
  <Link to="/test">点我跳转到地址：/test</Link>
  <Link :to="{name:'test',query:{a:'1'}}">点我跳转到地址：/test?a=1</Link>
</template>

```


该组件支持以下props：
## to

- 类型：`string | number | SwicoHistoryOptionType ` 

必传项，欲跳转的路由信息。参数说明请参考：[useNav > to](/hooks.html#to)


:::warning 注意
v2.5.0版本之前，to参数只支持string类型。
:::

## replace

- 类型：`boolean`
- 默认值：`false`

是否替换当前路由。

当为值true时，跳转行为等价于[history.replace()](/history.html#replace)。

当值为false时，跳转行为等价于[history.push()](/history.html#push)。
## className/class

- 类型：`string`

样式类名。React模板中为`className`，Vue模板中为`class`。

## style

- 类型：React模板中为`CSSProperties`，Vue模板中为`string`

行内样式style设置。


