<template>
  <a-layout id="app">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo"><img src="./assets/logo.png" /> <span>EV</span></div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <router-link to="/about">About</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
        <div class="header-mask"><h1>Earth Viewer</h1></div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"> <router-view /> </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  mounted() {
    L2Dwidget.init({
      model: { jsonPath: 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json', scale: 1 },
      display: { position: 'left', width: 150, height: 300, hOffset: 0, vOffset: -20 },
      mobile: { show: true, scale: 0.5 },
      react: { opacityDefault: 0.7, opacityOnHover: 0.2 }
    })
  }
}
</script>

<style lang="less" scoped>
@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    /*宽度固定，如果为百分比背景不会滚动*/
    background-position: -300px 0;
  }
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .header {
    padding: 0 20px;
    text-align: left;
    background-color: #fff;
    display: flex;
    align-items: center;

    .header-mask {
      flex: 1;
      display: flex;
      justify-content: center;

      h1 {
        /*设置背景渐变色*/
        background-image: linear-gradient(to right, red, orange, yellow, green, blue);
        /*chrome私有样式，加前缀，文字显示背景图片*/
        -webkit-background-clip: text;
        animation: move 5s infinite;
        /*文字颜色设为透明*/
        color: transparent;
        /*宽度固定*/
        width: 300px;
        margin-bottom: 0;
        font-size: 32px;
        font-weight: bold;
      }
    }

    .trigger {
      font-size: 18px;
      cursor: pointer;
      margin-right: 20px;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }
  }

  .logo {
    height: 64px;
    line-height: 64px;

    img {
      width: 48px;
      height: 48px;
      vertical-align: middle;
    }

    span {
      color: #fff;
      font-size: 24px;
      margin-left: 20px;
      vertical-align: middle;
    }
  }
}
</style>
