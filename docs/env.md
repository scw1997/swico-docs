

# 环境变量

Swico内置了以下环境变量：


## ANALYSE

用于执行`swico build`时，是否开启分析模式。如果值为`true`，则会在打包构建完成后同时打开一个展示构建产物分析的页面。

```shell
cross-env ANALYZE=true swico build
```


## SWICO_ENV

用于判断当前环境，该变量不可自行修改。

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
    define: async () => {
        return {
            //通过define设置变量使得可从业务代码中判断环境
            ENV: env
        };
    },
    router: {
        // 不同环境配置不同路由
        routes:env==='dev'? devRoutes : prodRoutes
    }
});

```
