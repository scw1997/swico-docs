

# 快速上手
## 环境准备
请确保系统已安装`Node 18`及以上的版本（[Node中文官网]）。

:bulb:  推荐使用`nvm`来管理Node版本，windows下推荐安装[nvm-windows]。

```shell:no-line-numbers
$ nvm install 18.19.0
$ nvm use 18
$ node -v
v18.19.0
```

## 创建项目

全局安装`swico-cli`，这是swico项目的官方脚手架工具：    
```shell:no-line-numbers
npm i swico-cli -g
```

::: danger 警告
请不要指定安装使用v1.0之前的任意swico-cli版本，它们功能不完备且无法保证稳定性。
:::

安装完成后进入任意路径，创建指定名称的Swico App项目：
```shell:no-line-numbers
swico create [project-name]
```
此命令执行后会引导开发者选择指定开发模板和包管理工具，并远程拉取模板，随后会自动安装node_modules依赖。

创建成功示例：

```shell:no-line-numbers
? Please select the template type: React18.2 + Typescript5
? Please select the npm type: npm
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
创建项目成功后，进入项目：
```shell:no-line-numbers
cd [project-name]
```

## 启动项目

```shell:no-line-numbers
npm run start
```
## 打包构建

```shell:no-line-numbers
npm run build
```
打包构建并打开构建产物依赖分析页面:
```shell:no-line-numbers
npm run build:analyze
```


[nvm-windows]:https://github.com/coreybutler/nvm-windows
[Node中文官网]:https://www.nodejs.com.cn/
