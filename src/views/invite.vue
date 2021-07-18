<template>
    <div class="invite">
        <h1 id="groupInvite">그룹초대</h1>
        <h3 id="text_messeage1">초대 할 계정의 이메일 정보를 입력해주세요.</h3>
        <b-input-group prepend="E-mail" id="text-area">
            <b-form-input ></b-form-input>
            <b-input-group-append>
                <b-button v-b-toggle.collapse-3 class="m-1" variant="outline-success">조회</b-button>
                <!-- <b-collapse visible id="collapse-3">
                    <b-card>
                        <p>이름 : 박영준</p>
                        <p>나이 : 25</p>
                        <p>아이디: qkrdudwns132</p>
                    </b-card>
                </b-collapse> -->
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #groupInvite {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin-top: 50px;
        margin-right: 700px;
        /* margin-top: 75px;
        margin-left: 525px; */
    }
    #text_messeage1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin-top: 40px;
        margin-right: 310px;
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