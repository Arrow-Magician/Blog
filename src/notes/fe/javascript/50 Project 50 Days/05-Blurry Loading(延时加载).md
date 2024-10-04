---
title: 05-Blurry Loading(延时加载)
order: 5
---

# 05-Blurry Loading(延时加载)

## 效果

![image-20240312175514752](md_img/image-20240312175514752.png)

## 代码

```html
<link rel="stylesheet" href="style.css" />

<section class="bg"></section>
<div class="loading-text">0%</div>

<script src="./script.js"></script>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.bg {
  background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80s')
    no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  /* 高斯模糊效果 */
  filter: blur(0px);
}

.loading-text {
  font-size: 50px;
  color: #fff;
}
```

```js
const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let timer = setInterval(blurring, 30);

function blurring() {
  load++
  if (load > 99) {
    clearInterval(timer)
  }
  loadingText.innerText = `${load}%`
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
```

## 解析

### scale函数的作用

```js
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
```

这个函数用于将一个数值从一个范围线性地映射到另一个范围。即，把数字的透明度与背景中的高斯模糊以一个线性的方式或变清晰或变模糊。

#### 什么是线性映射？

我们可以想象有一把尺子，上面刻着从0到100的刻度。现在把这个尺子的刻度转换成一个新的尺子，上面只有从0到1的刻度。该怎么做呢？

线性映射就是这样一个转换过程。它就像是把原来的尺子“压缩”或者“拉长”成一个新的尺子。在这个过程中，每个刻度都按照同样的比例移动。

比如，原来的尺子上的50刻度，在新的尺子上会变成多少呢？因为50是原来尺子的一半（因为100的一半是50），所以在新尺子上，它也会是一半，也就是0.5。

同样地，原来的尺子上的25刻度，在新尺子上会变成0.25（因为25是100的四分之一），而75刻度会变成0.75（因为75是100的四分之三）。

#### 函数解析

函数接受五个参数：

- `num`：要映射的原始数值。
- `in_min` 和 `in_max`：原始数值的范围（即`num`所在的范围）。
- `out_min` 和 `out_max`：映射后的目标范围。

以下是其数学表达式的逐步解释：

1. `num - in_min`：首先，从原始数值中减去其范围的最小值，得到该数值在原始范围内的相对位置。
2. `(out_max - out_min)`：计算目标范围的大小。
3. `(num - in_min) * (out_max - out_min) / (in_max - in_min)`：这里将相对位置与目标范围的大小相乘，并除以原始范围的大小，得到在目标范围内的相对位置。
4. `+ out_min`：最后，加上目标范围的最小值，得到映射后的数值。

还是以上面的尺子为例子：

1. `num - in_min`：这个操作是在找出 `num` 在第一把尺子上的相对位置。比如，如果 `num` 是50，而 `in_min` 是0，那么 `num - in_min` 就是50，表示50在第一把尺子上是从起点开始的第50个单位。
2. `(out_max - out_min)`：这个操作是计算第二把尺子的总长度，即从0到1的长度，也就是1。
3. `(num - in_min) * (out_max - out_min) / (in_max - in_min)`：这里，我们首先把 `num` 在第一把尺子上的相对位置（步骤1的结果）乘以第二把尺子的总长度（步骤2的结果），然后再除以第一把尺子的总长度（即100）。这个操作实际上是在按照第一把尺子和第二把尺子的比例关系，找出 `num` 在第二把尺子上的相对位置。
4. `+ out_min`：最后，我们把这个相对位置加上第二把尺子的起点（也就是0），得到 `num` 在第二把尺子上的确切位置。

那么，如果我们想知道第一把尺子上的50刻度在第二把尺子上是多少，我们可以这样计算：

```txt
((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min

scale(50, 0, 100, 0, 1) = ((50 - 0) * (1 - 0)) / (100 - 0) + 0  
                        = (50 * 1) / 100 + 0  
                        = 50 / 100  
                        = 0.5
```

所以，第一把尺子上的50刻度在第二把尺子上对应的是0.5刻度。