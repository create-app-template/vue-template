<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/bar">bar</router-link>
    <router-link to="/foo">foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;

    h1 {
      display: flex;
      justify-content: flex-start;
      color: yellow;
    }
  }
</style>
