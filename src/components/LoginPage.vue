<template>
<div class="desktop">
    <div style="font-family: bamin;">
        <h1 id="signIn_h1">로그인</h1>
        <br><br>
        <v-alert
            class="mb-3"
            id="alertBar"
            :value="isLoginError"
            type="error"
        >
        가입하지 않은 아이디이거나 잘못된 비밀번호입니다.
        </v-alert>
            <p id="login_input_id">아이디: </p>   
                <b-form-input
                    id="login_signIn_input-3"
                    v-model="email"
                    placeholder="Enter ID"
                    required
                >
                </b-form-input>
                <br><br>
            <p id="input_password">비밀번호: </p>
                <b-form-input
                    id="signIn_input-4"
                    v-model="password"
                    placeholder="Enter Password"
                    required
                    type="password"
                >
                </b-form-input>
        <div style="text-align: center">
            <b-button 
                variant="outline-primary" 
                id="signIn_singupbtn" 
                router
                :to="{ name: 'SignUpPage' }"
            >
                회원가입
            </b-button>

            <b-button 
                variant="outline-primary" 
                id="signIn_submitbtn" 
                v-on:click="login({ email, password })"
            >
                로그인
            </b-button>

            <br><br><br>
            <div class="findIDPW">
                <b-button
                    variant="outline-none"
                    id="findIdbtn"
                    router
                    :to="{ name: 'FindID' }"
                >
                    아이디찾기
                </b-button>

                <b-button
                    variant="outline-none"
                    id="findPwbtn"
                    router
                    :to="{ name: 'FindPW' }"
                >
                    비밀번호찾기
                </b-button>
            </div>
        </div>
    </div>
   <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="../img/IMG_Background.png">
   </div>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import axios from 'axios'

export default {
    data() { 
      return {
          email: null,
          password: null
      }
    },
    computed: {
        ...mapState(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["login"]),
    }
  }
</script>

<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }

    #signIn_singupbtn {
        margin-right: 357px;
        margin-top: 75px;
        color: aliceblue;
        background-color: black;
    }
    #signIn_submitbtn {
        margin-top: 75px;
        color: aliceblue;
        background-color: black;
    }
    #signIn_h1 {
        text-align: center;
        margin-top: 75px;
        color: aliceblue;
        /* display: flex; */
        /* margin-left: 700px;
        margin-top: 20px; */
    }
    #login_input_id {
        text-align: center;
        margin-right: 445px;
        margin-top: 20px;
        color: aliceblue;
    }
    #input_password {
        text-align: center;
        margin-right: 430px;
        margin-top: 10px;
        color: aliceblue;
    }
    #login_signIn_input-3 {
        margin: 0 auto;
        width: 500px;
    }
    #signIn_input-4 {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0 auto;
        width: 500px;
    }

    .mb-3 {
        width: 500px;
        margin: auto;
        /* font-family: Arial, Helvetica, sans-serif; */
    }

    #alertBar {
        background: red;
        
        color: aliceblue;
    }

    .findIDPW {
        margin-top: -85px;
    }

    #findIdbtn {
        color: aliceblue;
    }

    #findPwbtn {
        color: aliceblue;
    }
</style>