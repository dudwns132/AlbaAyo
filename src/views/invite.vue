<template>
    <div class="invite">
        <h1>그룹초대</h1>
        <h3>초대 할 계정의 이메일 정보를 입력해주세요.</h3>
        <b-input-group prepend="E-mail" id="text-area">
            <b-form-input ></b-form-input>
            <b-input-group-append>
                <b-button variant="outline-success">조회</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 75px;
        margin-left: 525px;
    }
    h3 {
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 40px;
        margin-left: 525px;
    }
    #text-area {
        margin-top: 75px;
        margin-left: 525px;
        width: 900px;
    }
</style>