# Link

Link组件是一个带路由跳转功能的 `<a>` 元素。

::: code-group

```tsx [react]
import { Link } from 'swico'
const Example = () => {
  return (
   <div>
        <Link to={'/test'}>点我跳转到/test</Link>
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
  <Link to='/test'>点我跳转到/test</Link>
</template>

```


该组件支持以下props：
## to

- 类型：`string`

必传项，欲跳转的路由path地址。

## replace

- 类型：`boolean`
- 默认值：`false`

是否替换当前路由。

当为`true`时，跳转行为等价于`history.replace()`。

当为`false`时，跳转行为等价于`history.push()`。
## className/class

- 类型：`string`

样式类名。React模板中为`className`，Vue模板中为`class`。

## style

- 类型：`string`

style属性设置。

