---
title: 48-Random Image Generator(随机图片显示)
---

# 48-Random Image Generator(随机图片显示)

## 效果

![image-20240407162546976](md_img/image-20240407162546976.png)

## 代码

```html
<h1 class="title">随机显示图片</h1>
<div class="container"></div>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.title {
  margin: 10px 0 0;
  text-align: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
}

.container img {
  object-fit: cover;
  margin: 10px;
  height: 300px;
  width: 300px;
  max-width: 100%;
}
```

```js
const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img')
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300
}
```

## 解析

### getRandomNr()函数

```js
function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300
}
```

获取随机数 [300,309]



### getRandomSize()函数

```js
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}
```

获取图片的随机大小值