<template>
    <div class="btn_area">
        <button type="button" v-on:click="createBoard" class="btn_blue">확인</button>
    <router-link to="/Boards">
        <a class="btn_blue_line">취소</a>
    </router-link>
    </div>
</template>
<script>
import { router } from '../../router'
import BoardCreator from '../../core/BoardEditor/BoardCreator'

export default {
    name: 'FormButton',
    methods : {
        createBoard : () => {
            const boardCreator = new BoardCreator();
            boardCreator.create();
            router.push({ path: "/Boards"});
        }
    },
    props: {
    }
}
</script>
<style scoped>
</style>