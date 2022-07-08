<template>
  <table class="basic_write">
    <caption>News 입력</caption>
    <colgroup>
      <col style="width:150px">
      <col style="width:*">
    </colgroup>
    <tr>
      <th>제목<span class="star">*</span></th>
      <td><input type="text" title="제목" name="" id="" class="add_txt" placeholder="제목 *" v-model="viewData.title"></td>
    </tr>
    <tr>
      <th>작성자<span class="star">*</span></th>
      <td><input type="text" title="성명" name="" id="" class="name_txt" placeholder="성명 *" v-model="viewData.author"></td>
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
        <textarea name="" id="" cols="30" rows="10" style="width:100%" v-model="viewData.description"></textarea>
      </td>
    </tr>
  </table>
  <div class="btn_area">
    <button v-if="isEdit" type="button" @click="editBoard" class="btn_blue">수정</button>
    <button v-else  type="button" @click="createBoard" class="btn_blue">확인</button>
    <router-link to="/Boards">
      <a class="btn_blue_line">취소</a>
    </router-link>
  </div>
</template>
<script>
import { router } from '../../router'
import { useRoute } from 'vue-router'
import BoardViewRepository from '../../core/BoardView/BoardViewRepository';
import BoardCreator from '../../core/BoardEditor/BoardCreator'
import BoardEditor from '../../core/BoardEditor/BoardEditor'
import { ref } from 'vue'

export default {
  name: 'WriterForm',
  props : {
  },
  data() {
    return {
      // title : "",
      // author : "",
      // description : "",
    }
  },
  methods : {
    createBoard : async function() {
      const saveData = {
        title : this.viewData.title,
        author : this.viewData.author,
        description : this.viewData.description,
        registerDate : new Date().toISOString().split('T')[0],
      }
      console.log(saveData);
      const boardCreator = new BoardCreator();
      await boardCreator.create(saveData).then( async (res) => {
          if(res.status == 201){
            await router.push({ path: "/Boards"})
          }
        }        
      );
    },
    editBoard : async function() {
      const editData = {
        title : this.viewData.title,
        author : this.viewData.author,
        description : this.viewData.description,
        registerDate : new Date().toISOString().split('T')[0],
      }
      const boardEditor = new BoardEditor();
      console.log(this.id);
      await boardEditor.boardEditById(this.id, editData).then( async (res) => {
          if(res.status == 200){
            await router.push({ path: "/Boards"})
          }
        }        
      );
    }

  },
  async setup() {
    const viewData = ref({
      title : "",
      author : "",
      description : "",
    });
    let isEdit = false;
    const route = useRoute();
    const id = route.params.id;
    if(route.params.id)  {
      const boardViewRepository = new BoardViewRepository();
      const res = await boardViewRepository.getBoardView(route.params.id);
      console.log(res);
      viewData.value.title = res.title;
      viewData.value.author = res.author;
      viewData.value.description = res.description;
      isEdit = true;
    }

    return {
      viewData,
      isEdit,
      id,
    }
    
  }
}
</script>
<style scoped>
</style>