<template>
    <div>
        <h1>Sign Up</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
            id="input-group-1"
            label="Email address:"
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
            label="Your Name:" 
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
            id="input-group-3" 
            label="Your ID:" 
            label-for="input-3"
        >
            <b-form-input
            id="input-3"
            v-model="form.id"
            placeholder="Enter ID"
            required
            >
            </b-form-input>
        </b-form-group>

        <b-form-group 
            id="input-group-4" 
            label="Your Password:" 
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
            label="Password Check:" 
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

        <!-- <b-form-group 
            id="input-group-6" 
            label="Your Birth:" 
            label-for="input-6"
        >
            <b-form-input
            id="input-6"
            v-model="form.birth"
            placeholder="YYYY/MM/DD"
            required
            >
            </b-form-input>
        </b-form-group> -->
        <b-form-group 
            id="input-group-6" 
            label="Your Birth" 
            label-for="input-6"
        >
        <b-form-datepicker 
            id="input-6" 
            v-model="value" 
        >
        </b-form-datepicker>
        </b-form-group>

        <b-button variant="outline-primary" id="backbtn" href="http://localhost:8080/LoginPage">← Back</b-button>
        <b-button variant="outline-primary" id="submitbtn">Submit</b-button>
    </b-form>
        <!-- <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        
        <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card> -->
    </div>
    <!-- <validation-observer
        ref="observer"
        v-slot="{ invalid }"
    >
        <form @submit.prevent="submit">
        <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:10"
        >
            <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Name"
            required
            ></v-text-field>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="phoneNumber"
            :rules="{
            required: true,
            digits: 7,
            regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
            }"
        >
            <v-text-field
            v-model="phoneNumber"
            :counter="7"
            :error-messages="errors"
            label="Phone Number"
            required
            ></v-text-field>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
        >
            <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
            ></v-text-field>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="select"
            rules="required"
        >
            <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="Select"
            data-vv-name="select"
            required
            ></v-select>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="checkbox"
        >
            <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Option"
            type="checkbox"
            required
            ></v-checkbox>
        </validation-provider>

        <v-btn
            class="mr-4"
            type="submit"
            :disabled="invalid"
        >
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
        </form>
    </validation-observer> -->
    <!-- <div class="LoginPage" id="app" >
    <img src= "../img/logo.png" alt="logo" width="300" height="300"><br>

        <a href="/oauth2/authorization/google">
            <img src= "../img/googlelogin.png" alt="google"><br>
        </a>

        <a href="/oauth2/authorization/naver">
        <img src= "../img/naverlogin.png" alt="naver">
        </a>
  </div> -->
</template>

<script>

export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          id: '',
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
// import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
// import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

// setInteractionMode('eager')

//   extend('digits', {
//     ...digits,
//     message: '{_field_} needs to be {length} digits. ({_value_})',
//   })

//   extend('required', {
//     ...required,
//     message: '{_field_} can not be empty',
//   })

//   extend('max', {
//     ...max,
//     message: '{_field_} may not be greater than {length} characters',
//   })

//   extend('regex', {
//     ...regex,
//     message: '{_field_} {_value_} does not match {regex}',
//   })

//   extend('email', {
//     ...email,
//     message: 'Email must be valid',
//   })

// export default {
//     components: {
//       ValidationProvider,
//       ValidationObserver,
//     },
//     data: () => ({
//       name: '',
//       phoneNumber: '',
//       email: '',
//       select: null,
//       items: [
//         'Item 1',
//         'Item 2',
//         'Item 3',
//         'Item 4',
//       ],
//       checkbox: null,
//     }),

//     methods: {
//       submit () {
//         this.$refs.observer.validate()
//       },
//       clear () {
//         this.name = ''
//         this.phoneNumber = ''
//         this.email = ''
//         this.select = null
//         this.checkbox = null
//         this.$refs.observer.reset()
//       },
//     },
//   }
</script>

<style>
    /* #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    } */
    #backbtn {
        margin-left: 700px;
        margin-top: 20px;
    }
    #submitbtn {
        margin-left: 350px;
        margin-top: 20px;
    }
    h1 {
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
    #input-group-3 {
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
    #input-3 {
        width: 500px;
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