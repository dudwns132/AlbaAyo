<template>
    <div id="pageName">
        <h1 id="pageNameContent">공지사항</h1>
        <table>
            <tr>
                <td>글쓴이</td>
                <td>제목</td>
                <td>내용</td>
            </tr>
            <tr :key="index" v-for="(value, index) in data" @click="detail(index)">
                <td>{{value.writer}}</td>
                <td>{{value.title}}</td>
                <td>{{value.content}}</td>
            </tr>
        </table>
        <b-button @click="write">글쓰기</b-button>
        <!-- <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a> -->
    </div>
</template>

<script>
import data from '@/data'
// import axios from 'axios'

export default {
    data() {
        return {
            data: data
        }
    },
    methods:{
        write() {
            this.$router.push({
                path: 'NoticeCreate'
            })
        },
        detail(index) {
            this.$router.push({
                name: 'NoticeDetail',
                params: {
                    contentId: index
                }
            })
        }
		// getList() {
		// 	axios.get("http://localhost:3306/api/board")
		// 	.then((res)=>{
		// 		console.log(res);
		// 	})
		// 	.then((err)=>{
		// 		console.log(err);
		// 	})
		// }
	}
}
</script>
<style>
    #pageName {
        margin-left: 75px;
        margin-top: 75px;
        font-weight: 700;
    }
</style>