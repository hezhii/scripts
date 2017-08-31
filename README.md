# 脚本工具

这个仓库中是我用到过的一些脚本工具，我将它们统一放到这个仓库下进行管理。

## 安装

直接将 Git 仓库克隆到本地就可以了，如果是 node 脚本，可能需要安装依赖。

```bash
$ git clone git@github.com:hezhii/scripts.git
```

## 索引

1. [百度主动推送](#1)
2. [sshfs 挂载远程目录](#2)
3. [node.js 守护进程](#3)
4. [应用开机启动](#4)

<h3 id="1">百度主动推送</h3>

[source](https://github.com/hezhii/scripts/blob/master/nodejs/baidu-push.js)

这个脚本会抓取指定网站的站点地图，并解析其中的 url，然后将解析出来的 url 主动推送到百度。通过下面的方式使用：

```bash
$ cd nodejs
$ npm install
$ URL=<your_site_url> <TOKEN=baidu_token> node baidu_push.js
```

<h3 id="2">sshfs 挂载远程目录</h3>

[source](https://github.com/hezhii/scripts/blob/master/shell/mount.sh)

此脚本用于将远程服务器上的目录挂载到本地目录。使用前需要先在本地安装 sshfs，然后修改脚本中的 sourcePath 和 mountPoint，这两个变量分别对应了远程服务器上的源目录和欲挂载到本地的挂载点。然后通过 `chmod` 命令添加脚本的可执行权限，最后通过下面的命令启动：

```bash
$ cd shell
$ ./mount.sh <host> <port>
```

<h3 id="3">node.js 守护进程</h3>

[source](https://github.com/hezhii/scripts/blob/master/shell/nodejs_daemon.sh)

这个脚本作为一个 node.js 应用的守护进程。当应用关闭后，会重新启动该应用。使用前需要修改脚本中被守护应用的进程名以及重新启动时的命令并添加执行权限，修改完成后通过下面的命令启动：

```bash
$ cd shell
$ ./nodejs_daemon.sh
```

<h3 id="4">应用开机启动</h3>

[source](https://github.com/hezhii/scripts/blob/master/shell/start_work.sh)

这个脚本用来帮助我批量的打开应用。