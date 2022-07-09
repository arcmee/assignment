<template>
    <board-title></board-title>
    <board-table :rows="result.fetched.data"></board-table>
    <board-pagination :page="page" :total-pages="result.fetched.totalPages" @pagination="pagination"></board-pagination>
    <board-search @board-search="searchByTitle"></board-search>
</template>
<script>
import BoardTitle from "./BoardTitle.vue"
import BoardTable from "./BoardTable.vue"
import BoardPagination from "./BoardPagination.vue"
import BoardSearch from "./BoardSearch.vue"
import BoardRepository from '@/core/Board/GetBoardList'
import { ref } from 'vue'

export default {
    name: 'Board',
    data() {
        return {
            searchText : "",
            page : 0,
            selected : "title",
        }
    },
    components: {
        BoardTitle,
        BoardTable,
        BoardPagination,
        BoardSearch
    },
    methods : {
        async searchByTitle(searchText, selected) {
            console.log(selected);
            const boardRepository = new BoardRepository();
            let res = {};
            this.selected = selected;
            if(selected === "title"){
                res = await boardRepository.findByTitleContaining(searchText, 0);
            }
            else{
                res = await boardRepository.findByDescriptionContaining(searchText, 0);
            }
            this.searchText = searchText;
            this.page = 0;
            this.result.fetched = res;
        },
        async pagination(page){
            this.page = page;
            if(this.page < 0){
                this.page = 0;
            }
            if(this.page > this.result.fetched.totalPages - 1){
                this.page = this.result.fetched.totalPages - 1
            }            
            const boardRepository = new BoardRepository();
            let res = {};
            if(this.selected === "title"){
                res = await boardRepository.findByTitleContaining(this.searchText, this.page);            
            }
            else{
                res = await boardRepository.findByDescriptionContaining(this.searchText, this.page);            
            }
            this.result.fetched = res;
        }
    },
    async setup() {
        const boardRepository = new BoardRepository();
        const result = ref({
            fetched : await boardRepository.getBoardList(),
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