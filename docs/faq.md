# 常见问题

## swico和swico-cli这两个包之间的关系是什么？


:::tip
`swico-cli`包是脚手架工具，仅负责引导开发者创建Swico项目的部分。

`swico`包则是Swico的核心架构，负责项目的运行和打包。

:::

通常来说，swico-cli版本更新频率较低，而swico更新频率较高。

为避免二者版本混乱，`swico-cli与swico会一直保持版本同步`。即使有时候更新版本并不存在源码改动，仅仅只是同步二者间的版本号。



## 如何修改开发环境的端口号port？

暂不支持自行设置开发环境端口。

默认端口为`3000`，启动开发环境时，若默认端口已占用，Swico会自行寻找其他可用端口号。

## 为什么开发环境TS类型检查对Vue文件无效？

swico使用了Rspack提供的`ts-checker-rspack-plugin`进行TS类型检查，但是目前暂不支持Vue文件。



## 生产环境打包时不会进行TS类型检查吗？

不会。类型检查是属于开发环境的工作过程，并且类型信息在打包后也不复存在了，同时也是基于构建性能考虑。
