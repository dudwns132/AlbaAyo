<template>
    <div>
        <h1 id="h1">로그인</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group 
                id="input-group-3" 
                label="아이디:" 
                label-for="input-3"
            >
                <b-form-input
                id="input-3"
                v-model="form.userId"
                placeholder="Enter ID"
                required
                >
                </b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-4" 
                label="비밀번호:" 
                label-for="input-4"
            >
                <b-form-input
                id="input-4"
                v-model="form.password"
                placeholder="Enter Password"
                required
                type="password"
                >
                </b-form-input>
            </b-form-group>

            <b-button variant="outline-primary" id="singupbtn" href="/SignUpPage">회원가입</b-button>
            <b-button variant="outline-primary" id="submitbtn" v-on:click="login" >확인</b-button>
        </b-form>
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
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.id = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
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
    
    #singupbtn {
        margin-left: 700px;
        margin-top: 20px;
    }
    #submitbtn {
        margin-top: 20px;
    }
    #h1 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input-group-3 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input-group-4 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input-3 {
        width: 500px;
    }
    #input-4 {
        width: 500px;
    }
</style>