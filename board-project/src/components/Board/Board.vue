<template>
    <board-title></board-title>
    <board-table :rows="tableRows"></board-table>
    <board-pagination></board-pagination>
    <board-search></board-search>
</template>
<script>
import { provide } from 'vue';

import BoardTitle from "./BoardTitle.vue"
import BoardTable from "./BoardTable.vue"
import BoardPagination from "./BoardPagination.vue"
import BoardSearch from "./BoardSearch.vue"
import BoardRepository from '@/core/Board/GetBoardList'

export default {
    name: 'Board',
    components: {
        BoardTitle,
        BoardTable,
        BoardPagination,
        BoardSearch
    },
    setup: () => {
        const boardRepository = new BoardRepository();
        console.log(boardRepository.getBoardList());
        provide('tableRows', boardRepository.getBoardList());
        return {
            tableRows : boardRepository.getBoardList(),
        };
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>