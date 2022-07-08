<template>
  <div id="wrap">
    <section id="container" class="sub new">
      <div id="contents">
        <Title></Title>
        <Suspense>
        <router-view></router-view>
        <template #fallback>
            Loading...
        </template>
        </Suspense>
      </div>
    </section>
  </div>
</template>

<script>
import Title from './components/common/Title.vue'
// import Board from './components/Board/Board.vue'
// import Writer from './components/Writer/Writer.vue'
// import BoardView from './components/BoardView/BoardView.vue'

export default {
  name: 'App',
  components: {
    // Board,
    Title,
    // Writer,
    // BoardView,
  }
}
</script>

<style>
</style>
