

# 常见问题


##  是否支持Linux平台？

尚未测试Linux

## Git Hooks相关配置和流程是必需的吗，是否可去除？

目前是内置必需的，未来会考虑设置为模板可选项。


## 如何修改开发环境的端口号port？

暂不支持自行设置开发环境端口。

默认端口为`3000`，启动开发环境时，若默认端口已占用，Swico会自行寻找其他可用端口号。


[//]: # (## vue报错 "export 'XXX' &#40;imported as 'XXX'&#41; was not found in 'vue...'")

[//]: # ()
[//]: # (这种通常是Vue包中部分ts类型引入报错，如`Slot`，`Component`。主要是因为在 Vue 3 中，XXX 不再作为默认导出或命名导出存在于 vue 包中。)

[//]: # ()
[//]: # (可尝试不通过解构如`import { XXX } from 'vue'`这样方式引入，而是通过`vue.XXX`。)

[//]: # ()
[//]: # (示例:)

[//]: # ()
[//]: # (```typescript)

[//]: # (import vue from 'vue')

[//]: # ()
[//]: # (//...)

[//]: # (type CompType = vue.Component)

[//]: # (//...)

[//]: # (```)
