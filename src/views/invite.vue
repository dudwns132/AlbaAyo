<template>
<div class="desktop" >
    <div class="invite" style="font-family: bamin;">
        <h1 id="groupInvite">그룹초대</h1>
        <h3 id="text_messeage1">초대 할 계정의 이메일 정보를 입력해주세요.</h3>
            <div class="input-group" >
                <input type="text" id="inputEmail" placeholder="Email">
                <div class="input-group-dropdown-menu">
                    <span class="input-group-text">@example.com</span>
                </div>
            </div>
                <!-- <b-collapse visible id="collapse-3">
                    <b-card>
                        <p>이름 : 박영준</p>
                        <p>나이 : 25</p>
                        <p>아이디: qkrdudwns132</p>
                    </b-card>
                </b-collapse> -->
    </div>
    <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="https://cdn.wallpaperhub.app/cloudcache/e/1/1/c/c/1/e11cc11bc54695a5605a987ae3868b4467da9029.jpg">
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }

    #inputEmail {
        background: white;
        width: 500px;
        margin-left: 560px;
        margin-top: 75px;
    }

    .input-group-text {
        margin-top: 75px;
    }

    #groupInvite {
        text-align: center;
        margin-top: 80px;
        color: aliceblue;
        /* margin-top: 75px;
        margin-left: 525px; */
    }
    #text_messeage1 {
        text-align: center;
        margin-top: 75px;
        color: aliceblue;
    }
    #text-area {
        text-align: center;
        margin: 0 auto;
        margin-top: 75px;
        /* margin-right: px; */
        width: 860px;
        height: 40px;
    }
</style>