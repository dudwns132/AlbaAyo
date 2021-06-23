<template>
    <div id="pageName">
        <h1 id="pageNameContent">공지사항</h1>
        <b-table 
            id="Notice-table" 
            striped hover 
            :items="items" 
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            @row-clicked="rowClick"></b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
        ></b-pagination>
        <b-button id="create_btn" @click="writeContent">글쓰기</b-button>
        <!-- <table>
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
        <b-button @click="write">글쓰기</b-button> -->
        <!-- <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a> -->
    </div>
</template>

<script>
import data from '@/data';
// import axios from 'axios'

export default {
    name: 'Notice',
    data() {
        let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
        items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
        return {
            currentPage: 1,
            perPage: 10,
            fields:[
                {
                    key: 'content_id',
                    label: '글번호'
                },
                {
                    key: 'title',
                    label: '제목'
                },
                {
                    key: 'created_at',
                    label: '작성일'
                },
                {
                    key: 'user_name',
                    label: '글쓴이'
                }
            ],
            items: items
        }
    },
    methods:{
        rowClick(item) {
            this.$router.push({
                path: `/NoticeDetail/${item.content_id}`
            })
        },
        writeContent() {
            this.$router.push({
                path: '/NoticeCreate'
            })
        }
        // write() {
        //     this.$router.push({
        //         path: 'NoticeCreate'
        //     })
        // },
        // detail(index) {
        //     this.$router.push({
        //         name: 'NoticeDetail',
        //         params: {
        //             contentId: index
        //         }
        //     })
        // }
		// getList() {
		// 	axios.get("http://localhost:3306/api/board")
		// 	.then((res)=>{
		// 		console.log(res);
		// 	})
		// 	.then((err)=>{
		// 		console.log(err);
		// 	})
		// }
	},
    computed: {
        rows() {
            return this.items.length
        }
    }
}
</script>
<style>
    #pageName {
        margin-left: 75px;
        margin-top: 75px;
        font-weight: 700;
    }

    #Notice-table {
        margin-top: 50px;
        width: 1500px;
    }

    #create_btn {
        margin-top: 10px;
        margin-left: 750px;
    }
</style>