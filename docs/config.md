

# 配置

secywo提供配置文件方便开发者可对部分项目配置进行修改扩展，例如Alias映射，本地请求代理等。

配置文件存在于项目根目录的`config`文件夹下，可包含以下三种文件：

-   `secywo.ts` ：通用公共配置
-   `secywo.dev.ts`： 开发环境专属配置，若与 `secywo.ts` 存在配置项冲突，以当前配置项为准
-   `secywo.prod.ts`： 生产环境专属配置，若与 `secywo.ts` 存在配置项冲突，以当前配置项为准

配置代码示例：

```typescript title="config/secywo.ts"
export default {
    alias: {
        apiPath: 'src/api'
    },
    define: {
        FOO: 'foo'
    }
  
};
```

```typescript title="config/secywo.dev.ts"
export default {
    proxy: {
        '/api/report': {
            target: 'http://localhost:4000', // 跨域目标主机，自行修改
            ws: true, // 代理 websockets
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // 重写地址
            }
        }
    }
};
```


```typescript title="config/secywo.prod.ts"
export default {
    //插件
    plugins: [
        //优化moment包体积，构建时忽略外国语言包
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
    ],
    console: true //生产环境保留console
};
```

:triangular_flag_on_post:：我们推荐你使用模板内置包`secywo-template-cli`提供的`defineConfig`方法来自定义配置，以便支持ts类型提示：


```typescript title="config/secywo.dev.ts"
import { defineConfig } from 'secywo-template-cli';

//第一个参数指定环境，可选值有base,dev,prod
export default defineConfig('dev', {
    proxy: {
        '/api/report': {
            target: 'http://localhost:4000', // 跨域目标主机，自行修改
            ws: true, // 代理 websockets
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // 重写地址
            }
        }
    }
});
```
下面是可用配置项的介绍：

## alias

配置导入别名，对 import 语句的 source 做映射。

例如：
```typescript
alias: {
    apiPath: path.join('.', '/src/api')
},
```
则你在项目代码中使用`import 'apiPath/test' `等价于引入`项目根路径/scr/api/test`。

配置此项后，你需要在`tsconfig.json > compilerOptions > paths `属性中添加声明，以支持 ts 类型提示。

```typescript title="tsconfig.json"
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

> secywo默认已配置`@`映射为`/src`路径

> 此配置项仅`secywo.ts`可用



## console

默认值：`true`

生产环境是否在浏览器控制台中显示代码中console 打印的信息。


> 此配置项仅`secywo.prod.ts`可用


## copy

打包构建时将指定目录文件（夹）复制到指定路径。

当值为`字符串数组`时，默认拷贝到产物dist目录，如：

```typescript
copy: ['foo.json', 'src/bar.json']
```

会产生如下产物的结构：

```text
+ dist
  - bar.json
  - foo.json
+ src
  - bar.json
- foo.json
```

当值为`对象数组`时，支持复制到指定目标路径。 其中相对路径默认为项目根目录，不支持根路径写法。

比如：

```typescript
copy: [
  { from: 'from', to: 'dist/output' },
  { from: 'file.json', to: 'dist' }
]
```

此时将产生如下产物结构：

```text
+ dist
  + output
    - foo.json
  - file.json
+ from
  - foo.json
- file.json
```

> secywo默认已内置在构建产物时对项目根路径下public文件夹复制到构建产物dist目录下

> 此配置项仅`secywo.prod.ts`可用


## define

设置项目开发代码中可全局访问的变量值。 

例如：
```typescript
define: { FOO: 'bar' }
```

那么代码里的 `console.log(hello, FOO)` 会被编译成 `console.log(hello, 'bar')`。

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

```typescript title="typings/global.d.ts"
declare const FOO: string;
```

> 注意：设置的每个变量值会进行一次JSON.stringify转换。如果你设置的变量值为引用类型，请记得取值时进行类型转换

> 此配置项仅`secywo.ts`可用


## devtool

默认值：

开发环境：`cheap-module-source-map`（Vue模板），`eval-cheap-module-source-map`（React模板）

生产环境：`nosources-source-map`

devtool用于设置SourceMap源码映射类型，主要用于代码运行报错时的错误定位排查。

更多可选值说明参考 [devtool文档](https://webpack.docschina.org/configuration/devtool/)


## plugins

默认值：`[]`

Webpack Plugin 的相关配置，用于根据业务需要额外的一些 plugin 设置。

示例：

```typescript
plugins: [
    //优化moment包体积，构建时忽略外国语言包
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
]
```

## proxy

配置本地开发时，Webpack DevServer的请求代理。

示例：

```typescript
proxy: {
    '/api/report': {
        target: 'http://localhost:4000', // 跨域目标主机，自行修改
        ws: true, // 代理 websockets
        changeOrigin: true,
        pathRewrite: {
            '^/api': '' // 重写地址
        }
    }
}
```

详见 [devServer Proxy文档](https://webpack.docschina.org/configuration/dev-server/#devserverproxy)

> 此配置项仅`secywo.dev.ts`可用

## publicPath

默认值：`/`

配置 Webpack 的`output > publicPath` 选项，表示当前项目访问地址的前缀路径。

通常在当项目被部署到到服务器`非根路径`下的情况下使用。 比如项目被部署的服务器路径为`/test`，那么通过浏览器访问项目首页的地址默认为`www.xxx.com/test/index.html`。当不设置publicPath时，
项目构建后index.html中所引用的js，css，图片等静态资源地址依然是基于根路径，这种情况下访问上面首页地址后，将无法正确引用静态资源。 此时需要设置publicPath为`/test/`。

更多细节参考 [publicPath说明](https://webpack.docschina.org/configuration/output/#outputpublicpath)。

> :triangular_flag_on_post:：secywo默认会将此属性值挂载到全局，项目代码中可通过`window.publicPath`访问。

> 此配置项仅`secywo.ts`可用

::: warning 注意

当配置此项后，通常前端路由也需要同步调整修改，例如`React-Router`的`basename`选项。
:::


