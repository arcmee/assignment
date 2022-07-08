<template>
  <div class="btn_area">
    <router-link to="/Boards">
      <a href="#" class="btn_blue">목록</a>
    </router-link>
    <button type="button" class="btn_blue">수정</button>
    <router-link to="/Boards">
      <button type="button" @click="deleteBoard" class="btn_blue">삭제</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'BoardViewButton',
  props: {
  },
  methods : {
    deleteBoard : async function() {
      // const saveData = {
      //   title : this.title,
      //   author : this.author,
      //   description : this.description,
      //   registerDate : new Date().toISOString().split('T')[0],
      // }
      // const boardCreator = new BoardCreator();
      // await boardCreator.create(saveData).then( async (res) => {
      //     if(res.status == 201){
      //       await router.push({ path: "/Boards"})
      //     }
      //   }        
      // );
    }
  },
}
</script>
<style scoped>
</style>