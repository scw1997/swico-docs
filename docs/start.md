

# 快速上手
## 环境准备
请确保系统已安装`Node 18`及以上的版本（[Node中文官网]）。

:triangular_flag_on_post:：推荐使用`nvm`来管理Node版本，windows下推荐安装[nvm-windows]。

```shell:no-line-numbers
$ nvm install 18.19.0
$ nvm use 18
$ node -v
v18.19.0
```

## 创建项目

使用`npm`全局安装`secywo`脚手架：    
```shell:no-line-numbers
npm i secywo -g
```

::: danger 警告
请不要指定安装使用v1.0之前的secywo版本，它们功能不完备且无法保证稳定性。
:::

进入任意路径，创建指定名称的Secywo App项目：
```shell:no-line-numbers
secywo create [project-name]
```
此命令执行后会引导开发者选择指定模板并远程拉取，随后会自动安装node_modules依赖。

创建成功示例：

```shell:no-line-numbers
√ Install finished!

Successfully Created!


  .-')      ('-.                            (`\ .-') /`
 ( OO ).  _(  OO)                            `.( OO ),'
(_)---\_)(,------.   .-----.   ,--.   ,--.,--./  .--.   .-'),-----.
/    _ |  |  .---'  '  .--./    \  `.'  / |      |  |  ( OO'  .-.  '
\  :` `.  |  |      |  |('-.  .-')     /  |  |   |  |, /   |  | |  |
 '..`''.)(|  '--.  /_) |OO  )(OO  \   /   |  |.'.|  |_)\_) |  |\|  |
.-._)   \ |  .--'  ||  |`-'|  |   /  /\_  |         |    \ |  | |  |
\       / |  `---.(_'  '--'\  `-./  /.__) |   ,'.   |     `'  '-'  '
 `-----'  `------'   `-----'    `--'      '--'   '--'       `-----'

Now you can cd [project-name] and npm run start to start your Secywo App!
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
