<template>
    <div class="SignUpPage">
        <h1 id="h1">회원가입</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
            id="input-group-1"
            label="이메일 주소:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
        >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
            >
            </b-form-input>
        </b-form-group>

        <b-form-group 
            id="input-group-2" 
            label="이름:" 
            label-for="input-2"
        >
            <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
            >
            </b-form-input>
        </b-form-group>

        <b-form-group 
            id="input_group_3" 
            label="아이디:" 
            label-for="input_3"
        >
            <b-form-input
            id="input_3"
            v-model="form.userId"
            placeholder="Enter ID"
            required
            >
            </b-form-input>
        </b-form-group>

        <b-button variant="outline-primary" id="submitbtn2">중복확인</b-button>

        <b-form-group 
            id="input_group_4" 
            label="패스워드:" 
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

        <b-form-group 
            id="input-group-5" 
            label="패스워드 확인:" 
            label-for="input-5"
        >
            <b-form-input
            id="input-5"
            v-model="form.passwordcheck"
            placeholder="Enter Password again"
            required
            type="password"
            >
            </b-form-input>
        </b-form-group>

        <b-form-group 
            id="input-group-6" 
            label="생년월일" 
            label-for="input-6"
        >
        <b-form-datepicker 
            id="input-6" 
            v-model="value" 
        >
        </b-form-datepicker>
        </b-form-group>

        <b-button variant="outline-primary" id="backbtn" href="/LoginPage">← 뒤로가기</b-button>
        <b-button variant="outline-primary" id="submitbtn" v-on:click="signUp" href="/LoginPage">확인</b-button>
    </b-form>

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

    #backbtn {
        margin-left: 700px;
        margin-top: 20px;
    }
    #submitbtn {
        margin-left: 350px;
        margin-top: 20px;
    }
    #submitbtn2 {
        margin-left: 1110px;
        margin-top: -98px;
    }
    #h1 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input-group-1 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input-group-2 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input_group_3 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input_group_4 {
        margin-left: 700px;
        margin-top: -10px;
    }
    #input-group-5 {
        margin-left: 700px;
        margin-top: 20px;
    }
    #input-group-6 {
        margin-left: 700px;
        margin-top: 20px;
        width: 500px;
    }
    #input-1 {
        width: 500px;
    }
    #input-2 {
        width: 500px;
    }
    #input_3 {
        width: 400px;
    }
    #input-4 {
        width: 500px;
    }
    #input-5 {
        width: 500px;
    }
    #input-6 {
        width: 200px;
    }
</style>