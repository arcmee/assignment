<template>
  <div id="wrap">
    <section id="container" class="sub new">
      <div id="contents">
        <Title></Title>
        <!-- <board></board> -->
        <Writer></Writer>
      </div>
    </section>
  </div>
</template>

<script>
import Title from './components/common/Title.vue'
// import Board from './components/Board/Board.vue'
import Writer from './components/Writer/Writer.vue'

export default {
  name: 'App',
  components: {
    // Board,
    Title,
    Writer,
  }
}
</script>

<style>
</style>
