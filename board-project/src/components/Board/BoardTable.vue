<template>
  <table class="news_list">
    <caption>News 리스트</caption>
    <colgroup>
        <col style="width: 10%">
        <col style="width:*">
        <col style="width: 10%">
        <col style="width: 10%">
        <col style="width: 5%">
        <col style="width: 8%">
    </colgroup>
    <thead>
      <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">등록일</th>
          <th scope="col">조회</th>
          <th scope="col">첨부</th>
      </tr>
    </thead>
    <tbody>
      <board-table-row 
        v-for="item in rows" 
        :key="item.id"
        v-bind="item">
      </board-table-row>
    </tbody>
  </table>
</template>
<script>
import BoardTableRow from './BoardTableRow.vue'

export default {
  name: 'BoardTable',
  components : {
    BoardTableRow,
  },
  props: {
    rows : Array
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>