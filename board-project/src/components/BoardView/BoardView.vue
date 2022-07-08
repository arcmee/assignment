<template>
    <suspense>
      <board-view-form v-bind="viewData"></board-view-form>
      <template #fallback>
            Loading...
      </template>
    </suspense>
    <!-- <board-view-button></board-view-button> -->
</template>
<script>
import BoardViewForm from './BoardViewForm.vue'
import BoardViewRepository from '../../core/BoardView/BoardViewRepository';
import { useRoute } from 'vue-router'
// import BoardViewButton from './BoardViewButton.vue'

export default {
  name: 'BoardView',
  components : {
    BoardViewForm,
    // BoardViewButton,
  },
  props: {
  },
  async setup() {
    const route = useRoute();
    const boardViewRepository = new BoardViewRepository();
    const res = await boardViewRepository.getBoardView(route.params.id);
    console.log(res);
    return {
        viewData : res,
    };
  },
}
</script>
<style scoped>
</style>