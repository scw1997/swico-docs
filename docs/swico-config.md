

# 配置

Swico提供配置文件方便开发者可对部分项目配置进行修改扩展，例如Alias映射，本地请求代理等。

配置文件存在于项目根目录的`config`文件夹下，可包含以下三种文件：

-   `swico.ts` ：通用公共配置。
-   `swico.dev.ts`： 开发环境专属配置，若与 `swico.ts` 存在配置项冲突，以当前配置项为准。
-   `swico.prod.ts`： 生产环境专属配置，若与 `swico.ts` 存在配置项冲突，以当前配置项为准。

配置代码示例：

```typescript
//config/swico.ts
export default {
    alias: {
        apiPath: 'src/api'
    },
    define: {
        FOO: 'foo'
    }
  
};
```

```typescript
// config/swico.dev.ts

export default {
  proxy: [
    {
      context: ['/api/report'],
      target: 'http://localhost:4000' // 跨域目标主机，自行修改
    }
  ]
};
```


```typescript
//config/swico.prod.ts
export default {
    //插件
    console: true //生产环境保留console
};
```

**推荐使用Swico提供的`defineConfig`方法来自定义配置，以便支持TypeScript类型提示**：


```typescript
// config/swico.dev.ts
import { defineConfig } from 'swico';

export default defineConfig('dev', {
  proxy: [
    {
      context: ['/api/report'],
      target: 'http://localhost:4000' // 跨域目标主机，自行修改
    }
  ]
});

```
下面是配置项的具体介绍：

## alias

- 仅`swico.ts`可用

配置导入别名，对 import 语句的 source 做映射。

例如：
```typescript
// config/swico.ts
import { defineConfig } from 'swico';

export default defineConfig('base', {
  alias: {
    apiPath: path.join('.', '/src/api')
  }
});

```
则你在项目代码中使用`import 'apiPath/test' `等价于引入`项目根路径/scr/api/test`。

配置此项后，你需要在`tsconfig.json > compilerOptions > paths`属性中添加声明，以支持 ts 类型提示。

tsconfig.json：
```json
{
    "compilerOptions": {
        "paths": {
            //...
            "apiPath/*": ["src/api/*"]
            //...
        }
    }
}
```
:::tip
swico默认已配置`@`映射为`/src`路径
:::

## console

- 默认值：`true`

- 仅`swico.prod.ts`可用

生产环境是否在浏览器控制台中显示代码中console 打印的信息。

```typescript
// config/swico.prod.ts
import { defineConfig } from 'swico';

export default defineConfig('prod', {
  console:false // 生产环境移除console信息
});

```

## copy

- 仅`swico.prod.ts`可用

打包构建时将指定目录文件（夹）复制到指定路径。

#### 当值为`字符串数组`时，默认拷贝到产物dist目录，如：


```typescript
// config/swico.prod.ts
import { defineConfig } from 'swico';

export default defineConfig('prod', {
  copy: ['test.json', 'src/img.png']
});

```

会产生如下产物的结构：

```text
+ dist
  - test.json
  - img.png
+ src
  - img.png
- test.json
```

#### 当值为`对象数组`时，支持复制到指定目标路径。 其中相对路径默认为项目根目录，不支持根路径写法。

比如：

```typescript
// config/swico.prod.ts
import { defineConfig } from 'swico';

export default defineConfig('prod', {
  copy: [
    { from: 'from', to: 'dist/output' },
    { from: 'test.json', to: 'dist' }
  ]
});

```

此时将产生如下产物结构：

```text
+ dist
  + output
    - img.png
  - test.json
+ from
  - img.png
- test.json
```

:::tip
Swico默认已内置在构建产物时对项目根路径下`public`文件夹复制到构建产物dist目录下
:::

## define

- 仅`swico.ts`可用

设置项目开发代码中可全局访问的变量值。 

例如：
```typescript
// config/swico.ts
import { defineConfig } from 'swico';

export default defineConfig('base', {
  define: { key: 'name' }
});

```

那么代码里的所有的变量名为`key`的值会被编译成`'name'`。

同时也支持通过函数返回一个对象或promise来设置变量值：

```typescript
define: () => {
    return {FOO:'foo'}
}
//或者
define: () => {
    return new Promise(resolve => {
        resolve({FOO:'foo'})
    })
}
```

此外，你需要在`typings`文件夹中或其他类型声明文件中声明已设置的变量类型，以支持 ts 类型检查和提示：

```typescript
// typings/global.d.ts

// ...
declare const FOO: string;
// ...
```

::: warning 注意
设置的每个变量值会进行一次`JSON.stringify`转换。如果你设置的变量值为引用类型，请记得取值时进行类型转换。
:::


## devtool

- 默认值：

    开发环境：`cheap-module-source-map`（Vue模板），`eval-cheap-module-source-map`（React模板）
        
    生产环境：`none`

devtool用于设置SourceMap源码映射类型，主要用于代码运行报错时的错误定位排查。

更多可选值说明参考： [devtool文档](https://rspack.dev/zh/config/devtool)。    


## externals

- 仅`swico.ts`可用

用于设置哪些第三方依赖不打包，转而在`index.ejs`中通过 `<script>` 或其他方式引入,有利于优化打包体积。

引用jquery示例：

```html
<!--index.ejs-->
<!--...-->
<script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous"
></script>
<!--...-->
```
此时，通过script引入的第三方jqury包会自动在window上挂载一个名为jQuery的全局变量，然后配置externals：

```typescript
// config/swico.ts
import { defineConfig } from 'swico';

export default defineConfig('prod', {
  externals: {
    jquery: 'jQuery'
  }
});
```
然后在代码中直接引用：

```typescript
import $ from 'jquery';

$('.my-element').animate(/* ... */);
```

更多详情请参考：[externals配置详情](https://rspack.dev/zh/config/externals)


## https

- 默认值：`false`

- 仅`swico.dev.ts`可用

开发环境是否使用https开发服务器。


## plugins

默认值：`[]`

Rspack Plugin 的相关配置，用于根据业务需要额外的一些 plugin 设置。

开发者可以根据需要自定义配置**Rsapck内置提供的plugin或者Rspack目前支持的Webpack Plugin**

示例：

```typescript
// config/swico.dev.ts
import { defineConfig } from 'swico';
import { rspack } from '@rspack/core';

const isDev = process.env.SWICO_ENV==='dev'

export default defineConfig('dev', {
  plugins: [isDev && new rspack.HotModuleReplacementPlugin()],
});

```

:::tip
关于支持的plugin详细信息请访问：[Rspack Plugin](https://rspack.dev/zh/plugins/)
:::

## proxy

- 仅`swico.dev.ts`可用

配置本地开发时，Webpack DevServer的请求代理。

示例：

```typescript
//config/swico.dev.ts
import { defineConfig } from 'swico';

export default defineConfig('dev', {
  proxy: [
    {
      context: ['/api/report'],
      target: 'http://localhost:4000' // 跨域目标主机，自行修改
    }
  ]
});

```

更多属性说明请参考：[devServer Proxy文档](https://rspack.dev/zh/config/dev-server#devserverproxy)。


## publicPath

- 默认值：`/`

- 仅`swico.ts`可用

配置 Webpack 的`output > publicPath` 选项，表示当前项目访问地址的前缀路径。

通常在当项目被部署到到服务器`非根路径`下的情况下使用。

比如项目被部署的服务器路径为`/test`，那么通过浏览器访问项目首页的地址默认为`www.xxx.com/test/index.html`。当不设置publicPath时，
项目构建后index.html中所引用的js，css，图片等静态资源地址依然是基于根路径，这种情况下访问上面首页地址后，将无法正确引用静态资源。 此时需要设置publicPath为`/test/`。

:::info
Swico默认会将此属性值通过项目入口文件 [index.ejs] 挂载到全局，项目代码中可通过`window.publicPath`访问。
:::

更多关于`publicPath`介绍请参考： [publicPath说明](https://rspack.dev/zh/guide/features/asset-base-path)。


## router

用于配置项目路由，详细配置说明请阅读：[路由]

## template

- 仅`swico.ts`可用

必填项，用于设置当前模板类型。

React/Vue模板已设置此项，通常不需要手动修改。

```typescript
template:'react' //vue
```


[index.ejs]:/template#index-ejs
[路由]:/router
