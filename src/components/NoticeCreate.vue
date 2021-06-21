<template>
    <div>
        <p id="NC_title">제목: </p>
        <b-form-input
            v-model="subject" 
            id="NC_input" 
            placeholder="Enter Title" 
            required>
        </b-form-input>

        <p id="NC_content">내용: </p>
        <b-form-textarea 
            v-model="context"
            id="NC_input_2" p
            laceholder="Enter Cotent" 
            required>
        </b-form-textarea>

        <div style="text-align: center">
        <b-button 
            variant="outline-primary" 
            id="NC_submitbtn"
            @click="updateMode ? updateContent() : uploadContent()">
            작성
        </b-button>
        </div>
        <div style="text-align: center">
            <b-button 
            variant="outline-primary"
            id="NC_cancelbtn" 
            @click="cancel">
            취소
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
                subject: '',
                context: '',
                userId: 1,
                createdAt: '2021-06-19 11:19:30',
                updateAt: null,
                updateObject: null,
                updateMode: this.$route.params.contentId > 0 ? true : false
            }
        },
        created() {
            if(this.$route.params.contentId > 0) {
                const contentId = Number(this.$route.params.contentId)
                this.updateObject = data.Content.filter(item => item.content_id === contentId)[0]
                this.subject = this.updateObject.title;
                this.context = this.updateObject.context;
            }
        },
        methods: {
            uploadContent() {
                let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
                const content_id = items[0].content_id + 1
                data.Content.push({
                    content_id: content_id,
                    user_id: this.userId,
                    title: this.subject,
                    context: this.context,
                    created_at: this.createdAt,
                    updated_at: null
                })
                this.$router.push({
                    path: '/Notice'
                })
            },
            updateContent() {
                this.updateObject.title = this.subject;
                this.updateObject.context = this.context;
                this.$router.push({
                    path: '/Notice'
                })
            },
            cancel() {
                this.$router.push({
                    path: '/Notice'
                })
            }
        }
    }
</script>
<style>
    #NC_submitbtn {
        margin-right: -304px;
        margin-top: 30px;
    }

    #NC_cancelbtn {
        margin-right: -444px;
        margin-top: -65px;
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

</style>