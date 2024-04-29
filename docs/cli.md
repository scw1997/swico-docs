# 脚手架

`swico-cli` 是Swico的官方脚手架工具，通过它可以轻松创建swico项目。

## 安装使用

全局安装此脚手架：
```shell:no-line-numbers
npm i swico-cli -g
```

在当前路径下创建项目：

```shell:no-line-numbers
swico create [project-name]
```
如果当前路径下已存在同名项目，则会提示选择是否覆盖：

```shell:no-line-numbers
? The destination folder already exists, please select: 
> Overwritten
Cancel
```

创建命令执行后，会提供两个创建选项：

- 选择模板类型：

```shell:no-line-numbers
? Please select the template type:
> React18.2 + Typescript5
Vue3.4 + Typescript5
```

- 选择依赖包管理工具，暂且只支持`npm`和`pnpm`：
```shell:no-line-numbers
? Please select the npm type: 
> npm
pnpm
```

然后等待脚手架远程拉取模板并自动安装依赖后，项目即创建完成：

```shell:no-line-numbers
- pulling the built-in template...

√ Successfully pulled!

Installing dependencies...

added 967 packages, and audited 968 packages in 8s

290 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
√ Install finished!

Successfully Created!


.-')     (`\ .-') /`
( OO ).    `.( OO ),'
(_)---\_),--./  .--.  ,-.-')   .-----.  .-'),-----.
/    _ | |      |  |  |  |OO) '  .--./ ( OO'  .-.  '
\  :` `. |  |   |  |, |  |  \ |  |('-. /   |  | |  |
'..`''.)|  |.'.|  |_)|  |(_//_) |OO  )\_) |  |\|  |
.-._)   \|         | ,|  |_.'||  |`-'|   \ |  | |  |
\       /|   ,'.   |(_|  |  (_'  '--'\    `'  '-'  '
`-----' '--'   '--'  `--'     `-----'      `-----'

Now you can cd test and npm run start to start your Swico App!

```
## 不使用脚手架

Swico支持在不使用脚手架的情况下，提供基础模板的远程Git仓库。

开发者可直接通过git拉取基础模板后，手动安装依赖进行开发（但要注意部分模板配置可能需要开发者手动设置）：

- [Vue模板](https://gitee.com/fanlaBoy/swico-template-vue.git)
- [React模板](https://gitee.com/fanlaBoy/swico-template-react.git)