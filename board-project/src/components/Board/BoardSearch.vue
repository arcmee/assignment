<template>
    <div class="find_wrap">
        <select name="" id="">
            <option value="">제목</option>
            <option value="">내용</option>
        </select>
        <input type="text" name="" id=""  title="검색어 입력" placeholder="검색어 입력"
        v-model="searchText" >
        <a @click="boardSearch" class="btn_gray">검색</a>
    </div>    
</template>
<script>
export default {
  name: 'BoardSearch',
  props: {
  },
  data() {
    return {
        searchText : ""
    }
  },
  methods : {
    boardSearch : function() {
        this.$emit('boardSearch', this.searchText );
    }
  }
}
</script>
<style scoped>
</style>