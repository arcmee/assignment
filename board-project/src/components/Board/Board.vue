<template>
    <board-title></board-title>
    <board-table :rows="result.fetched"></board-table>
    <board-pagination></board-pagination>
    <board-search @board-search="searchByTitle"></board-search>
</template>
<script>
// import { provide } from 'vue';

import BoardTitle from "./BoardTitle.vue"
import BoardTable from "./BoardTable.vue"
import BoardPagination from "./BoardPagination.vue"
import BoardSearch from "./BoardSearch.vue"
import BoardRepository from '@/core/Board/GetBoardList'
import { ref } from 'vue'

export default {
    name: 'Board',
    components: {
        BoardTitle,
        BoardTable,
        BoardPagination,
        BoardSearch
    },
    methods : {
        async searchByTitle(searchText) {
            const boardRepository = new BoardRepository();
            const res = await boardRepository.findByTitleContaining(searchText);
            this.result.fetched = res;
        }
    },
    async setup() {
        const boardRepository = new BoardRepository();
        const result = ref({
            fetched : await boardRepository.getBoardList()
        });
        return {
            result
        };
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>