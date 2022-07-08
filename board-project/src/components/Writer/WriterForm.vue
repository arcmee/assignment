<template>
  <table class="basic_write">
    <caption>News 입력</caption>
    <colgroup>
      <col style="width:150px">
      <col style="width:*">
    </colgroup>
    <tr>
      <th>제목<span class="star">*</span></th>
      <td><input type="text" title="제목" name="" id="" class="add_txt" placeholder="제목 *" v-model="title"></td>
    </tr>
    <tr>
      <th>작성자<span class="star">*</span></th>
      <td><input type="text" title="성명" name="" id="" class="name_txt" placeholder="성명 *" v-model="author"></td>
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
        <textarea name="" id="" cols="30" rows="10" style="width:100%" v-model="description"></textarea>
      </td>
    </tr>
  </table>
  <div class="btn_area">
    <button type="button" @click="createBoard" class="btn_blue">확인</button>
    <router-link to="/Boards">
      <a class="btn_blue_line">취소</a>
    </router-link>
  </div>
</template>
<script>
import { router } from '../../router'
import BoardCreator from '../../core/BoardEditor/BoardCreator'

export default {
  name: 'WriterForm',
  data() {
    return {
      title : "",
      author : "",
      description : "",
    }
  },
  methods : {
      createBoard : async function() {
      const saveData = {
        title : this.title,
        author : this.author,
        description : this.description,
        registerDate : new Date().toISOString().split('T')[0],
      }
      const boardCreator = new BoardCreator();
      await boardCreator.create(saveData).then(
        router.push({ path: "/Boards"})
      );
    }
  },
  props: {
  }
}
</script>
<style scoped>
</style>