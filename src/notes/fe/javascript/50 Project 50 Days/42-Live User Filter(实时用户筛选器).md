---
title: 42-Live User Filter(实时用户筛选器)
---

# 42-Live User Filter(实时用户筛选器)

## 效果

![image-20240327171218207](md_img/image-20240327171218207.png)

## 代码

```html
<div class="container">
  <header class="header">
    <h4 class="title">实时用户筛选器</h4>
    <small class="subtitle">通过名字或地址搜索</small>
    <input type="text" id="filter" placeholder="搜索" />
  </header>

  <ul id="result" class="user-list">
    <li>
      <h3>Loading...</h3>
    </li>
  </ul>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #f8f9fd;
}

.container {
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}

.title {
  margin: 0;
}

.subtitle {
  display: inline-block;
  margin: 5px 0 20px;
  opacity: 0.8;
}

.header {
  background-color: #3e57db;
  color: #fff;
  padding: 30px 20px;
}

.header input {
  background-color: rgba(0, 0, 0, 0.3);
  border: 0;
  border-radius: 50px;
  color: #fff;
  font-size: 14px;
  padding: 10px 15px;
  width: 100%;
}

.header input:focus {
  outline: none;
}

.user-list {
  background-color: #fff;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
}

.user-list li {
  display: flex;
  padding: 20px;
}

.user-list img {
  border-radius: 50%;
  object-fit: cover;
  height: 50px;
  width: 50px;
}

.user-list .user-info {
  margin-left: 10px;
}

.user-list .user-info h4 {
  margin: 0 0 10px;
}

.user-list .user-info p {
  font-size: 12px;
}

.user-list li:not(:last-of-type) {
  border-bottom: 1px solid #eee;
}

.user-list li.hide {
  display: none;
}
```

```js
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => {
  filterData(e.target.value)
})

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const { results } = await res.json()

  result.innerHTML = ''

  results.forEach((user) => {
    const li = document.createElement('li')

    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `
    result.appendChild(li)
  })
}
```

