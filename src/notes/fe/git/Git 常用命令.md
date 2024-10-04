---
title: Git 常用命令
order: 2
---

# Git 常用命令

## 账户配置

1. 配置全局账户，对所有 Git 仓库有效

```bash
git config --global user.name 你的用户名
git config --global user.email 你的邮箱
```

2. 配置局部账户，只对当前 Git 仓库有效

```bash
git config --local user.name 你的用户名
git config --local user.email 你的邮箱
```

3. 查看全局配置

```bash
git config --global --list
```

4. 查看局部配置

```bash
git config --local --list
```

## 本地操作

### 初始化本地仓库

```bash
git init
```

### 查看状态

+ 详细信息

```bash
git status
```

+ 简略信息

```bash
git status -s
```

### 查看版本

```bash
git -v
```

### 查看暂存区文件列表

```bash
git ls-files
```

### 添加到暂存区

+ 将当前目录及其子目录下所有变更添加到暂存区

```bash
git add .
```

+ 将本地仓库所有变更添加到暂存区

```bash
git add -A
```

+ 指定文件添加暂存区

```bash
git add 文件路径
```

### 从暂存区移除文件

```bash
git rm --cached 文件标识
```

### 提交到本地仓库

+ 提交当前目录及其子目录的变更信息

```bash
git commit -m '版本说明'
```

+ 提交所有变更

```bash
git commit
# 或者
git commit -m '版本说明' -a
```

### 查看日志信息

+ 查看极简日志信息

```bash
git log --oneline
```

+ 查看详细日志信息

```bash
git log
```

+ 查看简要日志信息

```bash
git reflog
```

### 分支命令

#### 创建分支

+ 创建分支

```bash
git branch 分支名字
```

+ 查看本地分支（简略版）

```bash
git branch
```

+ 查看本地分支（详细版）

```bash
git branch -v
```

#### 切换分支

```bash
git checkout 分支名字
```

#### 删除本地分支

+ 安全删除本地分支

```bash
git branch -d 分支名字
```

+ 强制删除本地分支

```bash
git branch -D 分支名字
```

#### 合并分支

+ 把分支提交历史记录合并到当前所在分支

```bash
git merge 分支名字
```

## 远程仓库交互

### git remote

+ 添加远程仓库地址

```bash
git remote add 远程仓库别名 远程仓库地址
```

+ 查看所有远程仓库地址别名

```bash
git remote -v
```

+ 删除远程仓库别名

```bash
git remote remove 别名
```

+ 修改远程仓库别名

```bash
git remote rename 旧名 新名
```

### git clone

+ 克隆远程仓库到本地

```bash
git clone 地址
```

+ 克隆远程仓库指定分支到本地

```bash
git clone -b 远程仓库分支名字 地址
```

### git pull

+ 拉取远程分支，并与本地分支合并

```bash
git pull 远程仓库别名 分支名字
```

### git push

+ 推送本地分支

```bash
git push 远程仓库别名 分支名字
```

+ 推送本地指定分支到仓库指定分支

```bash
git push 远程仓库别名 本地分支名字:远程分支名字
```

+ 直接使用仓库地址推送

```bash
git push git@github.com:<USERNAME>/<REPO>.git master:main
```











