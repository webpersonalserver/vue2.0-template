<template>
  <div class="vue-container">
    <div class="test">Welcome to Your Vue.js App</div>
    <cube-button>lib-flexible</cube-button>
    <cube-button @click="showAlert">Dialog</cube-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  mounted () {},
  methods: {
    showAlert () {
      this.$createDialog({
        type: 'alert',
        title: 'lib-flexible',
        content: 'px2rem-loader',
        icon: 'cubeic-alert'
      }).show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/style/common.scss';

.test {
  width: mini(670px);
  height: mini(96px);
  margin: mini(20px) auto;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;/* px */
  border: 1px solid red;
  box-sizing: border-box;
  border-radius: mini(100px);
  text-align: center;
  line-height: mini(94px);
}
</style>
