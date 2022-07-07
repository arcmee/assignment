<template>
  <table class="basic_write">
    <caption>News 입력</caption>
    <colgroup>
      <col style="width:150px">
      <col style="width:*">
    </colgroup>
    <tr>
      <th>제목<span class="star">*</span></th>
      <td><input type="text" title="제목" name="" id="" class="add_txt" placeholder="제목 *"></td>
    </tr>
    <tr>
      <th>작성자<span class="star">*</span></th>
      <td><input type="text" title="성명" name="" id="" class="name_txt" placeholder="성명 *"></td>
    </tr>

    <tr>
      <th>첨부파일</th>
      <td>
        <input type="file" title="첨부파일" name="" id="" placeholder="학과/부서" class="name_txt">
      </td>
    </tr>
    <tr>
      <th>내용 <span class="star">*</span></th>
      <td>
        <textarea name="" id="" cols="30" rows="10" style="width:100%"></textarea>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  name: 'WriterForm',
  props: {
  }
}
</script>
<style scoped>
</style>