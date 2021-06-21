<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{contentId}}
          </div>
          <div class="content-detail-content-info-left-subject">
            {{title}}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{user}}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{created}}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{context}}
      </div>
      <div class="content-detail-button-update">
        <b-button variant="primary" @click="updateData">수정</b-button>
      </div>
      <div class="content-detail-button-delete">
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        덧글
      </div>
    </b-card>
  </div>
</template>

<script>
import data from "@/data";
export default {
  name: "NoticeDetail",
  data() {
    const contentId = Number(this.$route.params.contentId);
    const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      user: data.User.filter(item => item.user_id === contentData.user_id)[0]
        .name,
      created: contentData.created_at
    };
  },
  methods: {
    deleteData() {
      const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
      data.Content.splice(content_index, 1)
      this.$router.push({
        path: '/Notice'
      })
    },
    updateData() {
      this.$router.push({
        path: `/NoticeCreate/${this.contentId}`
      })
    }
  }
};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-left: 400px;
  margin-top: 25px;
}
.content-detail-content-info-left {
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 500px;
  width: 1000px;
  margin-left: 400px;
}
.content-detail-button-update {
  /* border: 1px solid black; */
  margin-top: 5px;
  padding: 2rem;
  width: 1000px;
  margin-left: 1235px;
}

.content-detail-button-delete {
  /* border: 1px solid black; */
  padding: 2rem;
  width: 1000px;
  margin-top: -102px;
  margin-left: 1310px;
}

.content-detail-comment {
  border: 1px solid black;
  margin-top: 5px;
  padding: 2rem;
  width: 1000px;
  margin-left: 400px;
}
</style>
