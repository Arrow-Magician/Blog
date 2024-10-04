---
title: 47-Testimonial Box Switcher(动态进度条切换卡片)
---

# 47-Testimonial Box Switcher(动态进度条切换卡片)

## 效果

![image-20240407160406042](md_img/image-20240407160406042.png)

## 代码

```html
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
      crossorigin="anonymous"
      />

<div class="testimonial-container">
  <div class="progress-bar"></div>
  <div class="fas fa-quote-left fa-quote"></div>
  <div class="fas fa-quote-right fa-quote"></div>
  <p class="testimonial">
    我曾与数百名HTML/CSS开发人员合作过，我不得不说这个家伙是最优秀的。这家伙是个了不起的开发者。他强调良好、干净的代码，并注重细节。我喜欢那些尊重经过深思熟虑的设计的每一个方面，并尽最大努力将其写入代码的开发人员。他超越并将艺术转化为像素-每次都没有故障。
  </p>
  <div class="user">
    <img
         src="https://randomuser.me/api/portraits/women/46.jpg"
         alt="user"
         class="user-image"
         />
    <div class="user-details">
      <h4 class="username">Miyah Myles</h4>
      <p class="role">Marketing</p>
    </div>
  </div>
</div>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px;
  margin: 0;
}

.testimonial-container {
  background-color: #476ce4;
  color: #fff;
  border-radius: 15px;
  margin: 20px auto;
  padding: 50px 80px;
  max-width: 768px;
  position: relative;
}

.fa-quote {
  color: rgba(255, 255, 255, 0.3);
  font-size: 28px;
  position: absolute;
  top: 50px;
}

.fa-quote-left {
  left: 40px;
}

.fa-quote-right {
  right: 40px;
}

.testimonial {
  line-height: 28px;
  text-align: justify;
}

.user {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user .user-image {
  border-radius: 50%;
  height: 75px;
  width: 75px;
  object-fit: cover;
}

.user .user-details {
  margin-left: 10px;
}

.user .username {
  margin: 0;
}

.user .role {
  font-weight: normal;
  margin: 10px 0;
}

.progress-bar {
  background-color: #fff;
  height: 4px;
  width: 100%;
  animation: grow 10s linear infinite;
  transform-origin: left;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}

@media (max-width: 768px) {
  .testimonial-container {
    padding: 20px 30px;
  }
  .fa-quote {
    display: none;
  }
}
```

```js
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah麦尔斯',
    position: '营销',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: '我曾与数百名HTML/CSS开发人员合作过，我不得不说这个家伙是最优秀的。这家伙是个了不起的开发者。他强调良好、干净的代码，并注重细节。我喜欢那些尊重经过深思熟虑的设计的每一个方面，并尽最大努力将其写入代码的开发人员。他超越并将艺术转化为像素-每次都没有故障。'
  },
  {
    name: '六月查',
    position: '软件工程师',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: '这个家伙是一个了不起的前端开发人员，他交付的任务正是我们需要的，帮你自己一个忙，雇佣他，你不会对交付的工作感到失望。他会加倍努力确保你对你的项目感到满意。我一定会再和他合作!'
  },
  {
    name: '伊达·尼斯卡宁',
    position: '数据输入',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: '这家伙工作很努力。与他的沟通也很好，他一直都很有反应，这在许多自由职业者身上是不容易找到的。我们一定和他再来一次。'
  },
  {
    name: '蕾妮·西姆斯',
    position: '接待员',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: '这家伙竭尽所能把工作做好。这是我第二次雇他，以后还会再雇他。'
  },
  {
    name: '乔纳森',
    position: '平面设计师',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: '我担心由于截止日期太紧，这个项目无法完成。但是这个家伙证明了我错了，他不仅交出了一份出色的工作，而且还设法在截止日期前一天交出了工作。当我要求修改时，他在几分钟内就修改好了。我期待着再次与他合作，我完全推荐他。再次感谢!'
  },
  {
    name: '萨莎何',
    position: '会计',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text: '这家伙是一个顶尖的设计师和前端开发人员。他善于沟通，工作速度快，工作质量高。我们很幸运能和他一起工作!'
  },
  {
    name: '杰克翰',
    position: '导演',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: '这家伙是一个年轻而有才华的IT专业人士，积极主动，负责任，有很强的职业道德。他非常擅长PSD2HTML转换和HTML/CSS技术。他学东西很快，渴望学习新技术。他很专注，有很好的动力来完成预定的日期和出色的结果。'
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
```

