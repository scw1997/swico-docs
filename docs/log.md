

# 更新日志

[//]: # (- :lipstick: 优化)
[//]: # (- :new: 新增)
[//]: # (- :wrench: 修复)
[//]: # (:wastebasket:废弃/删除)
[//]: # (:hammer_and_wrench:重构)

## v2. 9. 0 <Badge type="info">2025-12-11</Badge>

- :new: 路由跳转时，跳转目标页面的state参数新增`navType`属性值表示跳转类型。
- :new: swico入口新增暴露部分`ConfigRoutesItemType`等必要的TS类型。
- :new: 新增全局变量`SWICO_STATIC_PUBLIC_PATH`。
- :wrench: 修复Vue模板下路由跳转时，若没有找到与所传name匹配的页面时控制台没有警告报错信息的问题。
- :wrench: 修复swico配置文件路径`config`路径下引用swico/react和swico/vue时的ts报错。
- :lipstick: `index.ejs`文件中去除IE兼容meta标签，调整模板语言默认识别为中文。
- :lipstick: React模板下global.ts配置对象中的`onInit`方法调用时机调整，与Vue模板保持一致。
- :lipstick: 说明文档同步调整优化。

## v2. 8. 0 <Badge type="info">2025-11-25</Badge>

- :new: 新增支持不同模板swico API特性可通过`swico/react`或`swico/vue`来代替`swico`引入，从而获得更好的TS类型提示。
- :new: React模板global.ts文件新增支持`onInit`配置项
- :lipstick: 同步调整swico-cli创建项目时模板中默认为通过`swico/react`或`swico/vue`来引入API特性
- :lipstick: 优化.swico输出性能，不再生成额外的Link，Loading和config文件
- :lipstick: 优化挂载根节点元素动态生成，不再设置id属性避免可能的元素全局id污染

## v2. 7. 1 <Badge type="info">2025-11-17</Badge>

- :wrench: 修复Vue模板中无法正常渲染Link组件的问题
- :lipstick: Vue模板默认eslint配置微调，避免与prettier冲突

## v2. 7. 0 <Badge type="info">2025-11-12</Badge>
- :new: 新增支持访问`SWICO_ENV`等多个全局变量，方便项目业务代码中快速访问使用。
- :hammer_and_wrench: 顶层挂载节点id由`root`调整为`swico-root`
- :wrench: 官方文档架构调整，多处说明文本缺失/歧义/不规范/错误优化修复。
- :lipstick: **.swico**输出文件逻辑优化，部分架构调整。
- :wastebasket: `index.ejs`文件调整，不再默认挂载任何全局变量至window对象，改为由上述第1条代替。

## v2. 6. 0 <Badge type="info">2025-11-12</Badge>

:::danger 警告
误发！存在严重bug，请勿安装此版本！
:::


## v2. 5. 0 <Badge type="info">2025-11-07</Badge>

- :wrench: 紧急修复同时启动react和vue项目时，Link组件TS类型检查混乱异常报错的问题
- :lipstick: swico包引用入口逻辑大量优化
- :lipstick: 调整生成的.swico路径部分文件名称
- :lipstick: 模板默认eslint配置微调

## v2. 4. 0 <Badge type="info">2025-11-06</Badge>

- :new: Rspack，React，Vue等部分依赖升级为最新版本
- :hammer_and_wrench: 重构`Link`组件，`to` prop新增支持`SwicoHistoryOption`类型 
- :hammer_and_wrench: 调整swico-cli的脚本命令name统一用`swico-cli`，避免与swico冲突
- :lipstick: 优化swico-cli创建项目时，将指定的项目名称同步至package.json中

## v2. 3. 0 <Badge type="info">2025-09-24</Badge>

- :wrench: 修复部分情况下本地启动无法正常显示页面，报404错误的问题
- :wrench: 修复swico-cli创建项目时，已存在同名项目，选择Cancel却依然继续创建的问题

## v2. 2. 0 <Badge type="info">2025-09-23</Badge>

- :new: Swico新增`responseHeaders`配置项
- :new: 升级Rspack 1.5版本
- :wrench: 修复hook useNav()没有传name和pathname时的异常路由跳转问题
- :wrench: 修复部分情况下路由匹配信息异常的问题
- :lipstick: 文档调整，增加注意事项说明

## v2. 1. 0 <Badge type="info">2025-07-02</Badge>

- :new: 文档新增支持`TailWind CSS 4.x`配置说明。
- :lipstick: `postcss`配置文件独立出来，可自定义配置。
- :wrench: 修复开发/生成环境编译用时的显示误差问题。
- :wrench: 修复内部部分配置项获取的逻辑错误。


## v2. 0. 0 <Badge type="info">2025-05-12</Badge>

- :hammer_and_wrench: 全面接入`Rspack 1`打包工具及其生态，重构部分打包逻辑，提升编译和打包效率，不再采用Webpack。
- :new: 升级React 19，React Router 7，Vue 3.5，ESLint 9，TypeScript 5.8架构以及相关部分依赖版本。
- :lipstick: 调整终端信息输出。
- :lipstick: 优化初始模板配置页面。
- :wrench: 修复Swico配置项`console`无效的问题。
- :wastebasket: 去除部分无用第三方依赖包。


## v1. 7. 3 <Badge type="info">2025-04-11</Badge>

- :wrench: 修复React模板中全局loading组件部分场景下的加载报错问题。

## v1. 7. 2 <Badge type="info">2025-04-10</Badge>

- :wrench: 修复1.5.0版本后global全局样式文件部分情况下删除仍会报错的问题。

## v1. 7. 1 <Badge type="info">2025-04-09</Badge>

- :wrench: 修复模板中的swico依赖版本与swico-cli版本不同步的问题。

## v1. 7. 0 <Badge type="info">2025-04-09</Badge>


- :new: 同步swico-cli最新版，创建项目时新增支持Git Hooks配置可选。
- :new: 新增npm scrip命令`lint:fix`用于代码格式化修复。


## v1. 6. 1 <Badge type="info">2025-03-12</Badge>


- :wrench: 修复1.6.0版本下vue模板启动时的配置文件丢失导致报错无法启动的bug。


## v1. 6. 0 <Badge type="info">2025-03-12</Badge>

- :wastebasket: 移除swico配置文件中的`npmType`属性，现已废弃。
- :wrench: 修复pnpm模式下多项目同时启动时的依赖共享引发的配置报错问题。
- :lipstick: 优化运行时配置`.swico`相关文件的模块引用逻辑。
- :lipstick: 优化开发环境启动逻辑。
- :lipstick: 最新版本文档同步调整。



## v1. 5. 0 <Badge type="info">2025-02-12</Badge>

- :hammer_and_wrench: 重构pnpm逻辑，项目模板全面重新支持pnpm。
- :hammer_and_wrench: 重构模板依赖结构和scirpt脚本，重构webpack依赖引用逻辑，降低架构冗余性。
- :lipstick: 优化swico-cli创建项目时交互，新增git和husky初始化逻辑。
- :lipstick: 优化开发环境终端输出信息展示。
- :wrench: 修复hook useNav中多余的custom参数类型bug。

## v1. 4. 0 <Badge type="info">2025-02-05</Badge>

- :wastebasket: 移除创建项目时对`pnpm`的支持（存在较多问题待解决），目前默认为`npm`。
- :wrench: 修复创建项目后未能生成默认`.gitignore`文件的问题。
- :lipstick: 优化部分输出文本。

## v1. 3. 3 <Badge type="info">2024-12-18</Badge>

- :wrench: 修复开发环境部分场景下无法提示编译成功的问题。

## v1. 3. 2 <Badge type="info">2024-12-11</Badge>

- :lipstick: 优化部分文本输出格式。

## v1. 3. 1 <Badge type="info">2024-12-10</Badge>

- :wastebasket: 删除部分console打印。

## v1. 3. 0 <Badge type="info">2024-12-10</Badge>

- :new: 路由 [router > routes] 配置项新增`custom`属性。
- :wrench: 修复调整生产环境swico配置时开发服务器仍会重启的问题。
- :lipstick: 优化开发环境部分全局文件修改时的编译性能。
- :lipstick: 优化vue模板的项目依赖问题。



## v1. 2. 0 <Badge type="info">2024-08-05</Badge>

- :lipstick: 优化了部分静态资源的hash逻辑。
- :wastebasket: 去掉Swico配置项中生产环境`devtool`的默认值，现为空。
- :wrench: 修复了部分配置文件删除后未重新编译的问题。


## v1. 1. 1 <Badge type="info">2024-07-01</Badge>

- :lipstick: GIT地址迁移，README文档同步调整。

## v1. 1. 0 <Badge type="info">2024-06-13</Badge>

- :new: 新增支持`scss`样式文件引入。
- :new: 新增三个内置环境变量：`SWICO_PORT`，`SWICO_RESTART`，`SWICO_ROUTER_BASE`。
- :lipstick: 优化开发环境下，路由配置`base`值改变时的终端输出显示。
- :wrench: 修复开发环境下，`loading组件`和`global全局样式文件`删除/新增后，编译延迟导致显示错误的问题。

## v1. 0. 1 <Badge type="info">2024-05-27</Badge>

- :wrench: 修复全局样式文件`global.less`修改后多余重启开发服务的问题。

## v1. 0. 0 <Badge type="info">2024-05-25</Badge>


Swico 首个正式版本发布。


[router > routes]:/router.html#routes
