<template>
  <div class="vue-container">
    <p>Welcome to Your Vue.js App</p>
    <cube-button>px2rem-loader</cube-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  width: 750px;
  margin: 40px 0 0;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;/* px */
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
