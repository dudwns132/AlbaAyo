<template>
      <div>
        <!-- 페이지 헤더~152 -->
        <pageheader>
        <b-button v-b-toggle.sidebar-1 id="logo">
            <img alt="main logo" src="./img/logo.png" width="160">
        </b-button>

        <div class='title'>
            <h4>{{ title }}</h4>
        </div>
        
        <b-button id="login">
                <a href="http://localhost:8080/LoginPage"><img alt="login button" src="./img/loginbtn.png" width="100"></a>
        </b-button>
        <b-sidebar 
            id="sidebar-1"
            title="Menu"
            :backdrop-variant="variant"
            backdrop
            bg-variant="light"  
            text-variant="dark">
            <!-- 사이드바 하단부 메뉴 리스트  -->
            <v-card
                class="mx-auto"
                width="300"
                height="600"
                tile
            >
                <v-list shaped>
                <v-list-item href="http://localhost:8080/">
                    <v-list-item-icon>
                    <v-icon >mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-group
                    :value="false"
                    prepend-icon="mdi-account-circle"
                >
                    <template v-slot:activator>
                    <v-list-item-title>그룹관리</v-list-item-title>
                    </template>

                    <v-list-item id="menu1" href="http://localhost:8080/invite">
                        <v-list-item-icon>
                            <v-icon>mdi-account-plus-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>그룹초대</v-list-item-title>
                    </v-list-item>

                    <v-list-item id="menu2" href="http://localhost:8080/GroupList">
                        <v-list-item-icon>
                            <v-icon>mdi-format-list-text</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>그룹목록</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-group
                    :value="true"
                    no-action
                    sub-group
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>Group Invite</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in admins"
                        :key="i"
                        link
                    >
                        <v-list-item-title v-text="title"></v-list-item-title>

                        <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    </v-list-group> -->

                    <!-- <v-list-group
                    no-action
                    sub-group
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>Group Invite</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in cruds"
                        :key="i"
                        link
                    >
                        <v-list-item-title v-text="title"></v-list-item-title>

                        <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    </v-list-group> -->
                </v-list-group>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>그룹채팅</v-list-item-title>
                </v-list-item>

                <v-list-item href="http://localhost:8080/schedule">
                    <v-list-item-icon>
                    <v-icon>mdi-calendar</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>일정</v-list-item-title>
                </v-list-item>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>직원목록</v-list-item-title>
                </v-list-item>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-cash-check</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>월급조회</v-list-item-title>
                </v-list-item>

                <v-list-item link="">
                    <v-list-item-icon>
                    <v-icon>mdi-bulletin-board</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>공지사항</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-card>
        </b-sidebar>
    </pageheader>

    <!-- maincontent -->
      <router-view />
        <!-- <router-view/> -->
    <!-- 페이지 하단 부분 ~   -->
    <v-footer color="green" dark fixed padless>
        <v-col
        class="text-center"
        cols="12"
        >
        {{ new Date().getFullYear() }} — <strong>School of Computer Information 3CPB</strong>
        </v-col>
    </v-footer>
      </div>
    <!-- </v-main>
  </v-app> -->
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import MainContent from './components/MainContent.vue'
// import Schedule from './views/Schedule.vue'
// import LoginPage from  './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    // MainContent,
    // Schedule
    // LoginPage
  },
  data() {
        return {
            title: '알바에요',
            variant: 'dark',
            variants: [
                'transparent',
                'white',
                'light',
                'dark',
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',

            ]
        }
    },
};
</script>
<style>
    #menu1 {
        margin-left: 20px;
    }
    #menu2 {
        margin-left: 20px;
    }
    /* a {
        text-decoration:none; color : white;
        font-size: 25px;
    } */
    /* #sidebar-1 {
        background-color: #747fA5;
    } */
    /* 로그 사이드바 버튼 */
    pageheader {
        margin-left: -8px;
        margin-top: -8px;
        margin-right: 0px;
        height:200px;
        background-color: #8dc1e9;
        align-items: center;
        justify-content: space-between;
        display: flex;
    }
    /* 왼쪽 상단 로그 */
    #logo {
        margin-left: 40px;
        background-color: #8dc1e9;
        border-color: #8dc1e9;
    }
    /* 헤더안에 있는 중앙글자 */
    pageheader h4{
        width: 100%;
        height: 100%;
        font-size: 40px;
        color: white;
        font-family: 'Yu Gothic';
        display: flex;
    }
    /* 로그인 버튼 */
    #login {
        display: flex;
        margin-right: 40px;
        background-color: #8dc1e9;
        border-color: #8dc1e9;
    }
</style>
