<template>
    <tr>
        <td>{{id}}</td>
        <td class="board_txt">
            <p>
                <a href="#" class="ellip"> {{title}} </a>
            </p>
        </td>
        <td class="board_man">{{author}}</td>
        <td class="board_date">{{registerDate}}</td>
        <td class="board_read">{{views}}</td>
        <td class="board_file"><span class="file_icon">파일다운로드</span></td>
    </tr>
</template>
<script>
export default {
    name: 'BoardTableRow',
    components: {
    },
    props: {
        id : Number,
        title : String,
        author : String,
        registerDate : String,
        views : Number,
    },
    setup : (props) => {
        console.log(props);
    }
}
</script>
<style scoped>
</style>