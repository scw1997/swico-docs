# 脚手架

[swico-cli] 是Swico的官方脚手架工具，通过它可以轻松创建swico项目。




## 安装使用

全局安装此脚手架：
```shell:no-line-numbers
npm i swico-cli -g
```

::: danger 警告
请不要指定安装使用v1.0之前的任意`swico-cli`版本，其创建的Swico项目功能不完备且无法保证稳定性。
:::

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


[swico-cli]:https://github.com/scw1997/swico-cli