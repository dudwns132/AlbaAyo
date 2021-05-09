<template>
    <div>
        <h1 id="h1">Sign In</h1>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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

            <b-button variant="outline-primary" id="singupbtn" href="http://localhost:8080/SignUpPage">Sign-Up</b-button>
            <b-button variant="outline-primary" id="submitbtn">Submit</b-button>
        </b-form>
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
          id: '',
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