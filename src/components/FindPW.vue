<template>
<div class="desktop">
    <div style="font-family: bamin;">
        <h1 id="signIn_h1">비밀번호 찾기</h1>
        <br><br>
            <p id="findPW_input">이메일을 입력해주세요: </p>   
                <b-form-input
                    id="signIn_input-3"
                    v-model="email"
                    placeholder="Enter Email"
                    required
                >
                </b-form-input>
                <br><br>
            <p id="findPW_input">아이디를 입력해주세요: </p>   
                <b-form-input
                    id="signIn_input-3"
                    v-model="email"
                    placeholder="Enter ID"
                    required
                >
                </b-form-input> 
        <div style="text-align: center">
            <br>
                <b-button
                    variant="outline-none"
                    id="findPwbtn"
                >
                    조회하기
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
    #findPW_input {
        text-align: center;
        margin-right: 185px;
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
</style>