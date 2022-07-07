<template>
    <board-title></board-title>
    <board-table></board-table>
    <board-pagination></board-pagination>
    <board-search></board-search>
</template>
<script>
import BoardTitle from "./BoardTitle.vue"
import BoardTable from "./BoardTable.vue"
import BoardPagination from "./BoardPagination.vue"
import BoardSearch from "./BoardSearch.vue"

export default {
    name: 'Board',
    components: {
        BoardTitle,
        BoardTable,
        BoardPagination,
        BoardSearch
    },
    props: {
        msg: String
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>