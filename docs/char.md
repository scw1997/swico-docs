
# 变量

Swico内置了以下Node环境变量和全局变量供开发者使用。

## Node环境变量

### ANALYSE

用于执行npm命令`swico build`时，是否开启分析模式。如果值为`true`，则会在打包构建完成后同时打开一个展示构建产物分析的页面。

```shell
cross-env ANALYZE=true swico build
```

### SWICO_ENV

用于判断当前环境。

当执行`swico dev`时，该环境变量会被自动设置为`dev`。

当执行`swico build`时，该环境变量会被自动设置为`prod`。


可在Swico配置文件中通过获取此变量值来生成不同环境的配置。

使用示例：

```ts
// config/swico.ts
import { defineConfig } from 'swico';
const env = process.env.SWICO_ENV;

export default defineConfig('base', {
    template: 'react',
    router: {
        // 不同环境配置不同路由
        routes:env==='dev'? devRoutes : prodRoutes
    }
});

```

### SWICO_DEV_RESTART <Badge type="tip" text="v1. 1. 0" />

用于当前本地开发服务器更新重启的判断标志，**仅限框架内部使用**。

### SWICO_DEV_PORT <Badge type="tip" text="v1. 1. 0" />

用于缓存当前本地开发服务器启动时所用的端口号，**仅限框架内部使用**。

### SWICO_DEV_ROUTER_BASE <Badge type="tip" text="v1. 1. 0" />

用于获取当前本地开发服务器当前所设置的路由RouterBase值，**仅限框架内部使用**。

## 全局变量

全局变量可在业务代码中直接使用

### SWICO_ENV <Badge type="tip" text="v2.7.0" />

用于判断当前是开发环境还是生产环境。可能的值有`dev`、`prod`。

### SWICO_ROUTER_BASE <Badge type="tip" text="v2.7.0" />

获取当前环境所设置的router > base值。默认为`/`。


### SWICO_PUBLIC_PATH <Badge type="tip" text="v2.7.0" />

获取当前环境所设置的publicPath值。默认为`/`。

### SWICO_STATIC_PUBLIC_PATH <Badge type="tip" text="v2.9.0" />

获取当前环境的静态资源路径前缀值。通常在引用`public`文件夹下静态资源时使用。

开发环境为`/`，生产环境为`SWICO_PUBLIC_PATH`。


基本示例：

::: code-group

```tsx [react]
const Index = () => {
    console.log('Swico全局变量', SWICO_PUBLIC_PATH, SWICO_ROUTER_BASE, SWICO_ENV,SWICO_STATIC_PUBLIC_PATH);
    return (
      <div>
        SWICO_ROUTER_BASE：{SWICO_ROUTER_BASE}
        SWICO_PUBLIC_PATH：{SWICO_PUBLIC_PATH}
        SWICO_ENV：{SWICO_ENV}
        SWICO_STATIC_PUBLIC_PATH：{SWICO_STATIC_PUBLIC_PATH}
      </div>
    );
};
```

```vue [vue]
<script setup>
console.log('Swico全局变量', SWICO_PUBLIC_PATH, SWICO_ROUTER_BASE, SWICO_ENV,SWICO_STATIC_PUBLIC_PATH);

const publicPath = SWICO_PUBLIC_PATH;
const routerBase = SWICO_ROUTER_BASE;
const env = SWICO_ENV;
</script>

<template>
    <div>
        SWICO_ROUTER_BASE：{{ SWICO_ROUTER_BASE }} 
        SWICO_PUBLIC_PATH：{{ SWICO_PUBLIC_PATH }} 
        SWICO_ENV：{{ SWICO_ENV }}
        SWICO_STATIC_PUBLIC_PATH：{SWICO_STATIC_PUBLIC_PATH}
    </div>
</template>
```
:::


:::danger 警告
如果项目中需要通过Swico配置项来设置新的Node环境变量或全局变量，请避免与上述变量命名冲突。
:::


