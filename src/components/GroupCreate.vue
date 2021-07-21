<template>
<div class="desktop" style="font-family: bamin;">
    <div>
        <h1 id="GroupCreate_h1">그룹 생성</h1>
            <p id="input_number">사업자 등록 번호:</p>
                <b-form-input
                    id="input-3"
                    v-model="form.rNumber"
                    placeholder="Enter Company Registration Number"
                    required
                >
                </b-form-input>

            <p id="input_gname">그룹명:</p>
                <b-form-input
                    id="input-4"
                    v-model="form.gName"
                    placeholder="Enter Group Name"
                    required
                >
                </b-form-input>

            <p id="input_address">주소:</p>
                <b-form-input
                    id="input-5"
                    v-model="form.address"
                    placeholder="Enter Address"
                    required
                >
                </b-form-input>
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
          rNumber: '',
          gName: '',
          address: ''
        },
        show: true
      }
    },
    methods: {
    //   onSubmit(event) {
    //     event.preventDefault()
    //     alert(JSON.stringify(this.form))
    //   },
    //   onReset(event) {
    //     event.preventDefault()
    //     // Reset our form values
    //     this.form.id = ''
    //     this.form.password = ''
    //     this.form.address = ''
    //     // Trick to reset/clear native browser form validation state
    //     this.show = false
    //     this.$nextTick(() => {
    //       this.show = true
    //     })
    //   }
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
    #input_number {
        text-align: center;
        margin-right: 345px;
        margin-top: 30px;
        color: aliceblue;
    }
    #input_gname {
        text-align: center;
        margin-right: 415px;
        margin-top: 30px;
        color: aliceblue;
    }
    #input_address {
        text-align: center;
        margin-right: 430px;
        margin-top: 30px;
        color: aliceblue;
    }
    /* #input-group-3 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input-group-4 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input-group-5 {
        margin-left: 700px;
        margin-top: 20px;
    } */
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
</style>