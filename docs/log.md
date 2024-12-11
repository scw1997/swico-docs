

# 更新日志

[//]: # (- :lipstick: 优化)
[//]: # (- :new: 新增)
[//]: # (- :wrench: 修复)
[//]: # (:wastebasket:废弃/删除)
[//]: # (:hammer_and_wrench:重构)

## v1. 3. 2 <Badge type="info">2024-12-11</Badge>

- :lipstick: 优化部分文本输出格式

## v1. 3. 1 <Badge type="info">2024-12-10</Badge>

- :wastebasket: 删除部分console打印

## v1. 3. 0 <Badge type="info">2024-12-10</Badge>

- :new: 路由 [router > routes] 配置项新增`custom`属性。
- :wrench: 修复调整生产环境swico配置时开发服务器仍会重启的问题。
- :lipstick: 优化开发环境部分全局文件修改时的编译性能。
- :lipstick: 优化vue模板的项目依赖问题



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