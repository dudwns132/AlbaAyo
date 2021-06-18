<template>
    <div>
        <p id="NC_writer">글쓴이: </p>
        <b-form-input 
            v-model="writer" 
            id="NC_input_3" 
            placeholder="Enter writerName" 
            required>
        </b-form-input>

        <p id="NC_title">제목: </p>
        <b-form-input
            v-model="title" 
            id="NC_input" 
            placeholder="Enter Title" 
            required>
        </b-form-input>

        <p id="NC_content">내용: </p>
        <b-form-textarea 
            v-model="content"
            id="NC_input_2" p
            laceholder="Enter Cotent" 
            required>
        </b-form-textarea>

        <div style="text-align: center">
        <b-button 
            variant="outline-primary" 
            id="NC_submitbtn"
            @click="write">
            확인
        </b-button>
        </div>
    </div>
</template>
<script>
import data from '@/data'
    export default {
        name: 'NoticeCreate',
        data() {
            return {
                data: data,
                writer: "",
                title: "",
                content: ""
            }
        },
        methods: {
            write() {
                this.data.push({
                    writer: this.writer,
                    title: this.title,
                    content: this.content,
                })
                this.$router.push({
                    path: '/Notice'
                })
            }
        }
    }
</script>
<style>
    #NC_submitbtn {
        margin-right: -444px;
        margin-top: 30px;
    }
    #NC_writer {
        text-align: center;
        margin-right: 444px;
        margin-top: 70px;
    }

    #NC_title {
        text-align: center;
        margin-right: 460px;
        margin-top: 20px;
    }

    #NC_content {
        text-align: center;
        margin-right: 460px;
        margin-top: 30px;
    }

    #NC_input {
        margin: 0 auto;
        width: 500px;
    }

    #NC_input_2 {
        margin: 0 auto;
        width: 500px;
        height: 200px;
    }

    #NC_input_3 {
        margin: 0 auto;
        width: 500px;
    }
</style>