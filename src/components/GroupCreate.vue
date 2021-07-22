<template>
<div class="desktop" style="font-family: bamin;">
    <div>
        <h1 id="GroupCreate_h1">그룹 생성</h1>
            <p id="input_GName">그룹 이름:</p>
                <b-form-input
                    id="input-3"
                    v-model="form.GNumber"
                    placeholder="Enter Group Number"
                    required
                >
                </b-form-input>

            <p id="input_GLocation">위치:</p>
                <b-form-input
                    id="input-4"
                    v-model="form.GLocation"
                    placeholder="Enter Group Location"
                    required
                >
                </b-form-input>

            <p id="input_ENumber">사업자등록번호:</p>
                <b-form-input
                    id="input-5"
                    v-model="form.ENumber"
                    placeholder="Enter Company Registration Number"
                    required
                >
                </b-form-input>

            <br>
            <p id="input_GImage">이미지:</p>
            <b-form-group id="file-small" >
                <b-form-file  size="sm"></b-form-file>
            </b-form-group>

            <div style="text-align: center">
                <b-button variant="outline-primary" id="cancelbtn" href="/GroupList">취소</b-button>
                <b-button variant="outline-primary" id="submitbtn" onClick="create" href="/GroupCreate">확인</b-button>
            </div>    
            
            
            
    </div>
    <div class="contents">
  <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="../img/IMG_Background.png">
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        form: {
          GName: '',
          GLocation: '',
          ENumber: ''
        },
        show: true
      }
    },
    methods: {
        create: function() {
            axios.post("http://ec2-18-116-210-28.us-east-2.compute.amazonaws.com:9000//create",
            {
                rNumber: this.form.rNumber,
                gName: this.form.gName,
                address: this.form.address
            })
            .then(response => {
                console.log(response.data);
            });
        }
    }
  }

</script>

<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }
    #cancelbtn {
        margin-right: 360px;
        margin-top: 40px;
        background-color: black;
        color: aliceblue;
    }
    #submitbtn {
        margin-top: 40px;
        background-color: black;
        color: aliceblue;
    }
    #GroupCreate_h1 {
        text-align: center;
        margin-top: 75px;
        /* margin-left: 700px;
        margin-top: 20px; */
        color: aliceblue;
    }
    #input_GName {
        text-align: center;
        margin-right: 400px;
        margin-top: 30px;
        color: aliceblue;
    }
    #input_GLocation {
        text-align: center;
        margin-right: 430px;
        margin-top: 30px;
        color: aliceblue;
    }
    #input_ENumber {
        text-align: center;
        margin-right: 360px;
        margin-top: 30px;
        color: aliceblue;
    }
    #input_GImage {
        text-align: center;
        margin-right: 420px;
        color: aliceblue;
    }
    #input-3 {
        margin: 0 auto;
        width: 465px;
    }
    #input-4 {
        margin: 0 auto;
        width: 465px;
    }
    #input-5 {
        margin: 0 auto;
        width: 465px;
    }
    #file-small {
        width: 465px;
        margin: 0 auto;
    }
</style>