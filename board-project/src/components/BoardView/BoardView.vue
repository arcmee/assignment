<template>
    <board-view-form></board-view-form>
    <board-view-button></board-view-button>
</template>
<script>
import BoardViewForm from './BoardViewForm.vue'
import BoardViewButton from './BoardViewButton.vue'

export default {
  name: 'BoardDetail',
  components : {
    BoardViewForm,
    BoardViewButton,
  },
  props: {

  }
}
</script>
<style scoped>
</style>