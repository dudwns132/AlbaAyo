<template>
  <div id="app" class="GroupList">
    <h1 id="group_list_h1">그룹이 없으신가요? 또는 그룹을 생성하시겠습니까?</h1>
    <!-- <h1>Don't you have any Group? or create new Group?</h1> -->
    <div style="text-align: center">
      <b-button variant="outline-primary" id="createbtn" router :to="{ name: 'GroupCreate' }">그룹생성</b-button>
    </div>
    <p></p>
    <div style="text-algin: center">
     <b-container id="cont">
    <b-row>
      <b-col cols="12">
        <carousel :perPage="3">
          <slide class="p-2">
            <b-card title="GS25 영진전문대점" img-src="https://mblogthumb-phinf.pstatic.net/20161018_4/1606006_1476802452458AuWnG_JPEG/20161018_163800.jpg?type=w800" img-alt="Image" img-top tag="article">
              <b-card-text>
                고객이 신뢰하고 믿을 수 있는 대표 편의점 GS25. 대구광역시 북구 복현동 위치, 편의점.
              </b-card-text>
              <b-button v-b-modal.modal-center variant="primary">그룹 정보보기</b-button>

              <b-modal id="modal-center" centered title="GS25 영진전문대점">
                <p>고객이 신뢰하고 믿을 수 있는 대표 편의점 GS25. 포스트박스(postbox) 편의점택배 가능 지점</p>
                <p>전화번호 : 053-958-1341</p>
                <p>web 주소 : http://gs25.gsretail.com/</p>
                <p>대구광역시 북구 복현동 218 영진전문대학내</p>
              </b-modal>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="BHC 복현점" img-src="https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTFfNDAg/MDAxNjE1NDYzMjgwMzI2.Zq6Z0lcoAprqZ0x-CiAbhrB9WvMEHp_QM9EUUaE9Efcg.fZT0ofB6DD5uolVEa6FJfhnglsb4E9F-NvHhM6KAtcsg.JPEG.jamme4963/20210307%EF%BC%BF193547.jpg?type=w800" img-alt="Image" img-top tag="article">
              <b-card-text>
                깔끔한 매장, 깨끗한 시설, 최고로 맛있는 치킨을 드립니다.
              </b-card-text>
              <b-button v-b-modal.modal-tall variant="primary">그룹 정보보기</b-button>

              <b-modal id="modal-tall" centered title="BHC 복현점">
                <p>맛있는 치킨, 깨끗한 치킨, 친절한 치킨 ! BHC 치킨입니다.

저희 BHC는 건강에 좋은 하이올레익 해바라기유를 사용하여 깨끗함과 신선함을 잃지 않고
고소함과 바삭한 식감을 베이스로한 다양한 치킨의 맛을 고객께 선사할 수 있도록 노력하고 있습니다.
Quality(품질), Cleanness(청결도), Service(서비스)를 유지하며 고객 만족을 위해 정성을 다 하겠습니다.</p>
                <p>전화번호 : 053-939-9992</p>
                <p>web 주소 : httP://www.bhc.co.kr/</p>
                <p>대구 북구 복현동 249-3</p>
                <p>매일 12:00 - 24:00 휴무일은 매장으로 확인</p>
              </b-modal>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="GS25 경대북문점" img-src="https://file.newswire.co.kr/data/datafile2/thumb_640/2021/04/3554238800_20210427095736_8095163007.jpg" img-alt="Image" img-top tag="article">
              <b-card-text>
                고객이 신뢰하고 믿을 수 있는 대표 편의점 GS25. 대구광역시 북구 산격동 위치, 편의점.
              </b-card-text>
              <b-button v-b-modal.modal-lg variant="primary">그룹 정보보기</b-button>
              
              <b-modal id="modal-lg" centered title="GS25 경대북문점">
                <p>고객이 신뢰하고 믿을 수 있는 대표 편의점 GS25. 포스트박스(postbox) 편의점택배 가능 지점</p>
                <p>전화번호 : 053-939-9994</p>
                <p>web 주소 : http://gs25.gsretail.com/</p>
                <p>대구광역시 북구 대현로9길 48</p>
              </b-modal>
            </b-card>
          </slide>
          <slide class="p-2">
            <b-card title="CU 복현점" img-src="https://img.hankyung.com/photo/201712/01.15362214.1.jpg" img-alt="Image" img-top tag="article">
              <b-card-text>
                24시간 편의점, 편의점 프랜차이즈, 편의점택배, 택배, 상품안내, 가맹 시스템, 창업 상담 제공.
              </b-card-text>

              <b-button v-b-modal.modal-xl variant="primary">그룹 정보보기</b-button>

              <b-modal id="modal-xl" centered title="CU 복현점">
                <p>24시간 편의점, 편의점 프랜차이즈, 편의점택배, 택배, 상품안내, 가맹 시스템, 창업 상담 제공.</p>
                <p>전화번호 : 053-954-2216</p>
                <p>web 주소 : http://cu.bgfretail.com/</p>
                <p>대구 북구 경진로1길 10</p>
              </b-modal>
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