<template>
  <!-- 路由模块模板 -->
  <div class="vue-container">
    
    <!-- 界面构造区域 -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Template',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/style/common.scss';
</style>
