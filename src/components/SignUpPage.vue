<template>
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
                placeholder="Enter ID"
                required
            >
            </b-form-input>
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
                v-model="form.passwordcheck"
                placeholder="Enter Password again"
                required
                type="password"
            >
            </b-form-input>

        <p id="signup_input_birth">생년월일:</p>
            <b-form-datepicker 
                id="signup_input-6" 
                v-model="value" 
                size="200px"
            >
            </b-form-datepicker>
        <div style="text-align: center">
            <b-button variant="outline-primary" id="signup_backbtn" router :to="{ name: 'LoginPage' }">← 뒤로가기</b-button>
            <b-button variant="outline-primary" id="signup_submitbtn" v-on:click="signUp" router :to="{ name: 'LoginPage' }">확인</b-button>
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
          userId: '',
          password: '',
          passwordcheck: '',
          birth: ''
        },
        show: true
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
      }
    }
  }

</script>

<style>

    #signup_backbtn {
        margin-right: 333px;
        margin-top: 20px;
    }
    #signup_submitbtn {
        /* margin-left: 350px; */
        margin-top: 20px;
    }
    #submitbtn2 {
        margin-left: 605px;
        margin-top: -65px;
    }
    #signUp_h1 {
        text-align: center;
        margin-right: 350px;
        margin-top: 30px;
        /* margin-left: 700px;
        margin-top: 20px; */
    }
    #signup_input_email {
        text-align: center;
        margin-right: 415px;
        margin-top: 20px;
    }
    #signup_input_name {
        text-align: center;
        margin-right: 465px;
        margin-top: 20px;
    }
    #signup_input_id {
        text-align: center;
        margin-right: 445px;
        margin-top: 20px;
    }
    #signup_input_password {
        text-align: center;
        margin-right: 434px;
    }
    #signup_input_password_check {
        text-align: center;
        margin-right: 395px;
        margin-top: 20px;
    }
    #signup_input_birth {
        text-align: center;
        margin-right: 430px;
        margin-top: 20px;
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
        margin: 0 auto;
        width: 500px;
    }
    #signup_input-5 {
        margin: 0 auto;
        width: 500px;
    }
    #signup_input-6__outer_ {
        margin: 0 auto;
        width: 500px;
    }
</style>