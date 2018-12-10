<template>
  <div id="app">
    <keep-alive :include="includeRouterName">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      includeRouterName: []
    }
  },
  created () {
    // 处理路由模块是否需要缓存,并记录存储
    const routes = this.$router.options.routes;
    routes.forEach(route => {
      if (route.meta && route.meta.isKeepAlive) {
        this.includeRouterName.push(route.name);
      }
    });
  }
}
</script>

<style lang="scss">
@import '@/assets/style/common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
