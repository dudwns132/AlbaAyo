<template>
<div class="desktop" style="font-family: bamin;">
    <div class="SignUpPage">
        <h1 id="signUp_h1">회원가입</h1>
        <p id="signup_input_email">이메일 주소:</p>
            <!-- description="We'll never share your email with anyone else." -->
            <b-form-input
                id="signup_input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
            >
            </b-form-input>
            <div class="error_next_box" v-if="checkFlag && !form.email"></div>
        <p id="signup_input_name">이름:</p>
            <b-form-input
                id="signup_input-2"
                v-model="form.name"
                placeholder="Enter name"
                required
            >
            </b-form-input>
        <div style="text-align:center">
        <p id="signup_input_id">아이디:</p>
            <b-form-input
                id="signup_input_3"
                v-model="form.userId"
                placeholder="영어대소문자 + 숫자(6~20)"
                required
                minlength="8"
                maxlength="20"
            >
            </b-form-input>
            <div v-if="!idValid" class="idCheck">
                유효하지 않는 아이디입니다.
            </div>
            <b-button variant="outline-primary" id="submitbtn2">중복확인</b-button>
        </div>

        <p id="signup_input_password">패스워드:</p>
            <b-form-input
                id="signup_input-4"
                v-model="form.password"
                placeholder="Enter Password"
                required
                type="password"
            >
            </b-form-input>
        <p id="signup_input_password_check">패스워드 확인:</p>
            <b-form-input
                id="signup_input-5"
                v-model="passwordcheck"
                placeholder="Enter Password again"
                required
                type="password"
                @blur="passwordCheckValid"
            >
            </b-form-input>
            <div v-if="passwordCheckFlag === false" class="passwordCheck">
                비밀번호가 일치하지 않습니다.
            </div>

        <p id="signup_input_birth">생년월일:</p>
            <b-form-datepicker 
                id="signup_input-6" 
                v-model="form.birth" 
                size="200px"
            >
            </b-form-datepicker>
        <div style="text-align: center">
            <b-button variant="outline-primary" id="signup_backbtn" router :to="{ name: 'LoginPage' }">뒤로가기</b-button>
            <b-button variant="outline-primary" id="signup_submitbtn" v-on:click="signUp" @click="goNextPage" router :to="{ name: 'LoginPage' }">확인</b-button>
        </div>
    </div>
    <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="../img/IMG_Background.png">
    </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          userId: null,
          password: null,
          birth: ''
        },
        show: true,
        passwordcheck: '',
        passwordCheckFlag: true
      }
    },
    computed: {
        idValid() {
            return /^[A-Za-z0-9]+$/.test(this.form.userId)
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      signUp: function() {
              axios.post("http://ec2-18-116-210-28.us-east-2.compute.amazonaws.com:9000/employer/signup", {
                  userId: this.form.userId,
                  password: this.form.password,
                  email: this.form.email,
                  birth: this.form.birth,
                  name: this.form.name,
              })
              .then(function(response) {
                  console.log(response.data);
              });
      },
      passwordCheckValid () {
          if(this.form.password === this.passwordcheck) {
              this.passwordCheckFlag = true
          } else {
              this.passwordCheckFlag = false
          }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.id = ''
        this.form.password = ''
        this.form.passwordcheck = ''
        this.form.birth = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      isEmpty(data) {
          if(data === "" || data === null || data === undefined) {
              return true;
          } else {
              return false;
          }
      },
      goNextPage() {
          this.checkFlag = true; 
          if(
              !this.isEmpty(this.form.email)
          ) {
              this.$router.push({ name: "loginPage", params: { form: this.form}})
          }
      } 
    }
  }

</script>

<style>

    #signup_backbtn {
        margin-right: 370px;
        margin-top: 20px;
        color: aliceblue;
        background: black;
    }
    #signup_submitbtn {
        /* margin-left: 350px; */
        margin-top: 20px;
        color: aliceblue;
        background: black;
    }
    #submitbtn2 {
        margin-left: 605px;
        margin-top: -65px;
        color: aliceblue;
        background: black;
    }
    #signUp_h1 {
        text-align: center;
        margin-top: 75px;
        color: aliceblue;
        /* margin-left: 700px;
        margin-top: 20px; */
    }
    #signup_input_email {
        text-align: center;
        margin-right: 415px;
        margin-top: 20px;
        color: aliceblue;
    }
    #signup_input_name {
        text-align: center;
        margin-right: 465px;
        margin-top: 20px;
        color: aliceblue;
    }
    #signup_input_id {
        text-align: center;
        margin-right: 445px;
        margin-top: 20px;
        color: aliceblue;
    }
    #signup_input_password {
        text-align: center;
        margin-right: 434px;
        color: aliceblue;
    }
    #signup_input_password_check {
        text-align: center;
        margin-right: 395px;
        margin-top: 20px;
        color: aliceblue;
    }
    #signup_input_birth {
        text-align: center;
        margin-right: 430px;
        margin-top: 20px;
        color: aliceblue;
    }   
    #signup_input-1 {
        margin: 0 auto;
        width: 500px;
    }
    #signup_input-2 {
        margin: 0 auto;
        width: 500px;
    }
    #signup_input_3 {
        margin: 0 auto;
        width: 500px;
    }
    #signup_input-4 {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0 auto;
        width: 500px;
    }
    #signup_input-5 {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0 auto;
        width: 500px;
    }
    #signup_input-6__outer_ {
        margin: 0 auto;
        width: 500px;
    }
    .passwordCheck {
        margin-top: 20px;
        text-align: center;
        color: aliceblue;
    }
    .idCheck {
        margin-top: 20px;
        text-align: center;
        color: aliceblue;
    }
</style>