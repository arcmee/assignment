<template>
    <router-link to="/BoardWriter">
        <div class="btn_area">
            <a href="write.html" class="btn_blue_line">글쓰기</a>
        </div>
    </router-link>
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