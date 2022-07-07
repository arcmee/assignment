<template>
  <div id="wrap">
    <section id="container" class="sub new">
      <div id="contents">
        <board></board>
      </div>
    </section>
  </div>
</template>

<script>
import Board from './components/Board/Board.vue'

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>

<style>
</style>
