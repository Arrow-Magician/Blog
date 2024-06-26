---
title: 04 - Hidden Search(隐藏搜索框)
order: 4
---

# 04 - Hidden Search(隐藏搜索框)

## 效果

![image-20240312165007390](md_img/image-20240312165007390.png)

## 代码

```html
<link rel="stylesheet" href="//at.alicdn.com/t/c/font_4463536_tgcfy7i49ue.css" />
<link rel="stylesheet" href="style.css" />

<div class="search active">
  <input type="text" class="input" placeholder="Search...." />
  <button class="btn">
    <i class="iconfont icon-sousuo"></i>
  </button>
</div>

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
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.search {
  position: relative;
  height: 50px;
}

.search .input {
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: 50px;
  transition: width 0.3s ease;
}

.btn {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

.btn:focus,
.input:focus {
  outline: none;
}

.btn i {
  font-size: 24px;
  font-weight: 700;
  color: #000;
}

.search.active .input {
  width: 200px;
}

.search.active .btn {
  transform: translateX(198px);
}
```

```js
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
```

