<template>
  <div id="app" class="GroupList">
    <h1 id="group_list_h1">그룹이 없으신가요? 또는 그룹을 생성하시겠습니까?</h1>
    <!-- <h1>Don't you have any Group? or create new Group?</h1> -->
    <div style="text-align: center">
      <b-button variant="outline-primary" id="createbtn" href="http://localhost:8080/GroupCreate">그룹생성</b-button>
    </div>
    <p></p>
    <div style="text-algin: center">
     <b-container id="cont">
    <b-row>
      <b-col cols="12">
        <carousel :perPage="3">
          <slide class="p-2">
            <b-card title="Group Name 1" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
              <b-button href="#" variant="primary">Group Information</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="Group Name 2" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Group Information</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="Group Name 3" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Group Information</b-button>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="Group Name 4" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </b-container>
  </div>
  </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';

  export default {
    el: "#app",
    components: {
        Carousel,
        Slide
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    // methods: {
    //   onSlideStart(slide) {
    //     this.sliding = true
    //   },
    //   onSlideEnd(slide) {
    //     this.sliding = false
    //   }
    // }
  }
</script>
<style>
    #cont {
      margin: 0 auto;
    }
    .row{
    margin-top:100px;
    }
    #group_list_h1 {
        text-align: center;
        margin-top: 20px;
    }
    #createbtn {
        margin-top: 20px;
    }
</style>