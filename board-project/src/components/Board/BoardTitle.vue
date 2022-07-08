<template>
  <div class="btn_area">
    <router-link to="/BoardWriter">
      <a href="write.html" class="btn_blue_line">글쓰기</a>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'BoardTitle',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>