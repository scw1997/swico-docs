

# 快速上手
## 环境准备
请确保系统已安装`Node 18`及以上的版本（[Node中文官网]）。

:bulb:  推荐使用`nvm`来管理Node版本，推荐安装[nvm-windows]。

```shell:no-line-numbers
$ nvm install 18.19.0
$ nvm use 18
$ node -v
v18.19.0
```

## 创建项目

全局安装`swico-cli`，这是swico项目的官方脚手架工具。详见：[API > 脚手架]    
```shell:no-line-numbers
npm i swico-cli -g
```

安装完成后进入任意路径，创建指定名称的Swico App项目：
```shell:no-line-numbers
swico create [project-name]
```
此命令执行后会引导开发者选择指定开发模板和包管理工具，随后等待模板初始化完成即可创建成功。

成功后进入项目：
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
[API > 脚手架]:/cli
