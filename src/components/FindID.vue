<template>
<div class="desktop">
    <div style="font-family: bamin;">
        <h1 id="signIn_h1">아이디 찾기</h1>
        <br><br>
            <p id="find_input_id">가입하신 이메일을 입력해주세요: </p>   
                <b-form-input
                    id="signIn_input-3"
                    v-model="email"
                    placeholder="Enter Email"
                    required
                >
                </b-form-input>
                <b-button variant="outline-primary" id="findIDbtn">검색</b-button>
                <br><br>
        <div style="text-align: center">
            <br>
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
   <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="../img/IMG_Background.png">
   </div>
</div>
</template>

<script>
export default {}
</script>

<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }
    #signIn_h1 {
        text-align: center;
        margin-top: 75px;
        color: aliceblue;
        /* display: flex; */
        /* margin-left: 700px;
        margin-top: 20px; */
    }
    #find_input_id {
        text-align: center;
        margin-right: 130px;
        margin-top: 20px;
        color: aliceblue;
    }
    #signIn_input-3 {
        margin: 0 auto;
        width: 340px;
    }
    #findPwbtn {
        color: aliceblue;
    }
    #findIDbtn {
        margin-left: 1000px;
        margin-top: -65px;
        color: aliceblue;
        background: black;
    }
</style>