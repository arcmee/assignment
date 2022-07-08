<template>
    <div class="write_title">
        {{title}}
    </div>
    <div class="write_date">
        <span class="write_line"><strong>작성자 :</strong> {{author}} </span>
        <span class="write_line"><strong>조회수 :</strong> {{views}} </span>
        <span class="write_line">{{registerDate}}</span>
        <span><em class="file_icon"></em><a href="#"> 123.hwp</a></span>
    </div>
    <div class="con_box">
        {{description}}
    </div>
    <div class="btn_area">
        <router-link to="/Boards">
            <a href="#" class="btn_blue">목록</a>
        </router-link>
        <button @click="toEdit" type="button" class="btn_blue">수정</button>
        <button @click="deleteBoard" type="button" class="btn_blue">삭제</button>
    </div>
</template>
<script>
import BoardViewRepository from '../../core/BoardView/BoardViewRepository';
import { router } from '../../router';

export default {
    name: 'BoardViewForm',
    props: {
        id : Number,
        title: String,
        author: String,
        views: Number,
        registerDate: String,
        description: String,
    },
    methods : {
        deleteBoard : async function() {
            const boardViewRepository = new BoardViewRepository();
            await boardViewRepository.deleteBoard(this.id).then( async (res) => {
                if(res.status == 204) {
                    await router.push({ path: "/Boards"})
                }
            })
        },
        toEdit(){
            router.push({ path: `/editBoard/${this.id}`});
        }
    },
    async setup(props) {
        return {
            ...props
        }
    }
}
</script>
<style scoped>
</style>