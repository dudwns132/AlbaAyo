<template>
    <div>
        <h1 id="signIn_h1">로그인</h1>
            <p id="input_id">아이디: </p>   
                <b-form-input
                    id="signIn_input-3"
                    v-model="form.userId"
                    placeholder="Enter ID"
                    required
                >
                </b-form-input>
            <p id="input_password">비밀번호: </p>
                <b-form-input
                    id="signIn_input-4"
                    v-model="form.password"
                    placeholder="Enter Password"
                    required
                    type="password"
                >
                </b-form-input>
        <div style="text-align: center">
            <b-button variant="outline-primary" id="signIn_singupbtn" href="/SignUpPage">회원가입</b-button>
            <b-button variant="outline-primary" id="signIn_submitbtn" v-on:click="login" >확인</b-button>
        </div>
    </div>
   
</template>

<script>
import axios from 'axios'

export default {
    data() { 
      return {
        form: {
          userId: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      login: function() {
          axios.post("http://ec2-18-116-210-28.us-east-2.compute.amazonaws.com:9000/login",
         {
            userId: this.form.userId,
            password: this.form.password
         })
         .then(response => {
                  console.log(response.data);
              });
      }
    }
  }
</script>

<style>
    
    #signIn_singupbtn {
        margin-right: 350px;
        margin-top: 20px;
    }
    #signIn_submitbtn {
        margin-top: 20px;
    }
    #signIn_h1 {
        text-align: center;
        margin-right: 380px;
        margin-top: 30px;
        /* display: flex; */
        /* margin-left: 700px;
        margin-top: 20px; */
    }
    #input_id {
        text-align: center;
        margin-right: 445px;
        margin-top: 20px;
    }
    #input_password {
        text-align: center;
        margin-right: 430px;
        margin-top: 10px;
    }
    #signIn_input-3 {
        margin: 0 auto;
        width: 500px;
    }
    #signIn_input-4 {
        margin: 0 auto;
        width: 500px;
    }
</style>