---
title: 三、首页 layout
order: 3
---

# 三、首页 Layout

## 功能需求

1. 基本架子拆解（菜单组件的使用）
   
2. 登录访问拦截
   
3. 用户基本信息获取&渲染
   
4. 退出功能 [element-plus 确认框]

## 代码编写

1. 准备静态模板

```vue
// src/views/layout/LayoutContainer.vue

<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom
} from '@element-plus/icons-vue'
import avatar from '@/assets/default.png'
</script>

<template>
  <!-- 
    el-menu 整个菜单组件
      :default-active="$route.path"  配置默认高亮的菜单栏
      router   router选项开启，el-menu-item 的 index 就是点击跳转的路径

    el-menu-item 菜单项
      index="/article/channel" 配置的是访问的跳转路径，配合default-active的值实现高亮
   -->
  <el-container class="layout-container">
    <el-aside width="200px">
      <div class="el-aside__logo"></div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#232323"
        :default-active="$route.path"
        text-color="#fff"
        router
      >
        <el-menu-item index="/article/channel">
          <el-icon><Management /></el-icon>
          <span>文章分类</span>
        </el-menu-item>
        <el-menu-item index="/article/manage">
          <el-icon><Promotion /></el-icon>
          <span>文章管理</span>
        </el-menu-item>
        
        <el-sub-menu index="/user">
          <!-- 多级菜单的标题 - 具名插槽-->
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>个人中心</span>
          </template>

					<!-- 展开的内容 - 默认插槽 -->
          <el-menu-item index="/user/profile">
            <el-icon><User /></el-icon>
            <span>基本资料</span>
          </el-menu-item>
          <el-menu-item index="/user/avatar">
            <el-icon><Crop /></el-icon>
            <span>更换头像</span>
          </el-menu-item>
          <el-menu-item index="/user/password">
            <el-icon><EditPen /></el-icon>
            <span>重置密码</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div>黑马程序员：<strong>小帅鹏</strong></div>
        <el-dropdown placement="bottom-end">
          <!-- 展示给用户，默认看到的 -->
          <span class="el-dropdown__box">
            <el-avatar :src="avatar" />
            <el-icon><CaretBottom /></el-icon>
          </span>
          <!-- 折叠的下拉部分 -->
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="profile" :icon="User"
                >基本资料</el-dropdown-item
              >
              <el-dropdown-item command="avatar" :icon="Crop"
                >更换头像</el-dropdown-item
              >
              <el-dropdown-item command="password" :icon="EditPen"
                >重置密码</el-dropdown-item
              >
              <el-dropdown-item command="logout" :icon="SwitchButton"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>大事件 ©2023 Created by 黑马程序员</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  .el-aside {
    background-color: #232323;
    &__logo {
      height: 120px;
      background: url('@/assets/logo.png') no-repeat center / 120px auto;
    }
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-dropdown__box {
      display: flex;
      align-items: center;
      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
```

从上面的静态模板我们可以剖析出整个架子组件

```txt
el-container
├── el-aside(左侧)
│   └── el-menu(左侧边栏菜单)
├── el-container(右侧)
│   ├── el-header(右侧头部)
│   │   └── el-dropdown
│   ├── el-main(右侧主体)
└── └── └── router-view
```

2. 登录访问拦截

```javascript
// src/router/index.js

import { useUserStore } from '@/stores'

// 登录访问拦截 => 默认直接放行
// 根据返回值决定，是放行还是拦截
// 返回值：
// 1. undefined / true 直接放行
// 2. false 拦from 的地址
// 3. 具体路径 或 路径对象  拦截到对应的地址
//    '/login'    { name: "login" }
router.beforeEach((to) => {
  // 如果没有token，且访问的是非登录页，拦截到登录，其他情况正常放行
  const useStore = useUserStore()
  if (!useStore.token && to.path !== '/login') return '/login'
})
```

3. 用户基本信息获取 & 渲染

```javascript
// src/api/user.js

// 获取用户基本信息
export const userGetInfoService = () => request.get('/my/userinfo')
```

```javascript
// src/stores/modules/user.js

export const useUserStore = defineStore(
	...,
  const user = ref({})
	const getUser = async () => {
    const res = await userGetInfoService() // 请求获取数据
    user.value = res.data.data
  }
  
  return {
    user,
    getUser
  }
)
```

```vue
// src/views/layout/LayoutContainer.vue

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores'

const userStore = useUserStore()
onMounted(() => {
  userStore.getUser()
})
</script>

<template>
	<el-container>
  	<el-header>
  		<div>
      	黑马程序员：
        <strong>
          {{ userStore.user.nickname || userStore.user.username }}
  			</strong>
  		</div>
      <el-dropdown placement="bottom-end">
  			<span class="el-dropdown_box">
  				<el-avatar :src="userStore.user.user_pic || avatar"></el-avatar>
  			</span>
  		</el-dropdown>
  	</el-header>
  </el-container>
</template>
```

4. 退出功能

```vue
// src/views/layout/LayoutContainer.vue

<script setup>
const router = useUserStore()
const handleCommand = async (key) => {
  if (key === 'logout') {
    // 退出操作
    await ElMessageBox.confirm('确认退出吗？', '温馨提示', {
      type: 'warning',
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    })

    // 清除本地的数据(token + user 信息)
    userStore.removeToken()
    userStore.setUser({})
    router.push('/login')
  } else {
    // 跳转操作
    router.push(`/user/${key}`)
  }
}
</script>

<template>
	<el-container>
  	<el-header>
  		<div>
        ...
  		</div>
      <el-dropdown placement="bottom-end" @command="handleCommand">
  
  		</el-dropdown>
  	</el-header>
  </el-container>
</template>
```

```javascript
// src/stores/modules/user.js

export const useUserStore = defineStore(
  ...,
	const setUser = (obj) => {
  	user.value = obj
	}

	return {
    setUser
  }
)
```

