# 脚手架

[swico-cli] 是Swico的官方脚手架工具，通过它可以轻松创建swico项目。




## 安装使用

全局安装此脚手架：
```shell:no-line-numbers
npm i swico-cli -g
```

::: warning swico-cli版本
`强烈建议安装swico-cli v2版本`，其项目模板打包工具基于Rspack,编译性能相比v1有了显著提升。

如果你需要使用webpack打包工具，请安装`1.7.3`版本，这是v1最完善的版本。

:::

指定在当前路径下创建的项目名称：

```shell:no-line-numbers
swico create [project-name]
```


创建命令执行后，会提供以下选项：

- 选择模板类型：

```shell:no-line-numbers
? Please select the template type:
> React18.2 + Typescript5
Vue3.4 + Typescript5
```

- 选择是否需要配置Git Hooks：

```shell:no-line-numbers
? Do you need Git Hooks:
> Yes
No
```

- 选择依赖包管理工具，目前支持`npm`和`pnpm`：

```shell:no-line-numbers
? Please select the npm type: 
> npm
pnpm

```

如果当前路径下已存在同名项目，则会提示选择是否覆盖：

```shell:no-line-numbers
? The destination folder already exists, please select: 
> Overwritten
Cancel
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


[swico-cli]:https://github.com/scw1997/swico-cli