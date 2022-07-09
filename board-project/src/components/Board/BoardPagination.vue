<template>
    <div class="pagination">
        <a @click="first" class="prev end">첫 페이지</a>
        <a @click="prev" class="prev">이전 페이지</a>
        <a  @click="pagination" 
            v-for="n in totalPages" 
            :key="n"
            :class="{ on : n == page + 1 }"
        >{{n}}</a>
        <a @click="next" class="next">다음 페이지</a>
        <a @click="last" class="next end">마지막 페이지</a>
    </div>
</template>
<script>


export default {
    name: 'BoardPagination',
    props : {
        totalPages : Number,
        page : Number
    },
    methods : {
        pagination : function(e) {
            this.$emit('pagination',e.target.innerText - 1);
        },
        next : function() {
            this.$emit('pagination', this.page + 1);
        },
        prev : function() {
            this.$emit('pagination', this.page - 1);
        },
        first : function() {
            this.$emit('pagination', 0 );
        },
        last : function() {
            this.$emit('pagination', this.totalPages - 1 );
        },
    }
}
</script>
<style scoped>
</style>