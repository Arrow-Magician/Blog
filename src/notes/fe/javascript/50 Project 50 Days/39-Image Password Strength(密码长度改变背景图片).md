---
title: 39-Image Password Strength(密码长度改变背景图片)
---

# 39-Image Password Strength(密码长度改变背景图片)

## 效果

![image-20240325160024341](md_img/image-20240325160024341.png)

## 代码

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.8.11/tailwind.min.css"
integrity="sha512-KO1h5ynYuqsFuEicc7DmOQc+S9m2xiCKYlC3zcZCSEw0RGDsxcMnppRaMZnb0DdzTDPaW22ID/gAGCZ9i+RT/w==" crossorigin="anonymous" />

<div class="background"></div>
<div class="bg-white rounded p-10 text-center shadow-md">
  <h1 class="text-3xl">密码长度</h1>
  <p class="text-sm text-gray-700">改变密码来观看效果</p>
  <div class="my-4 text-left">
    <label for="email" class="text-gray-900">邮箱:</label>
    <input
           type="text"
           class="border block w-full p-2 mt-2 rounded"
           placeholder="请输入邮箱"
           />
  </div>
  <div class="my-4 text-left">
    <label for="email" class="text-gray-900">密码:</label>
    <input
           type="password"
           class="border block w-full p-2 mt-2 rounded"
           placeholder="请输入密码"
           id="password"
           />
  </div>

  <button class="bg-black text-white py-2 mt-4 inline-block w-full rounded">
    登录
  </button>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.background {
  background: url('https://images.unsplash.com/photo-1556745757-8d76bdb6984b')
    no-repeat center center/cover;
  position: absolute;
  top: -20px;
  bottom: -20px;
  left: -20px;
  right: -20px;
  z-index: -1;
  filter: blur(20px);
}

.bg-white {
  width: 500px;
}

.bg-white .text-3xl {
  font-weight: 700;
}
```

```js
const password = document.getElementById('password')
const background = document.querySelector('.background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})
```

