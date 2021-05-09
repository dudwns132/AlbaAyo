<template>
    <div>
        <h2>그룹 생성</h2>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group 
                id="input-group-3" 
                label="사업자 등록 번호:" 
                label-for="input-3"
            >
                <b-form-input
                id="input-3"
                v-model="form.rNumber"
                placeholder="Enter Company Registration Number"
                required
                >
                </b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-4" 
                label="그룹명:" 
                label-for="input-4"
            >
                <b-form-input
                id="input-4"
                v-model="form.gName"
                placeholder="Enter Group Name"
                required
                >
                </b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-5" 
                label="주소:" 
                label-for="input-5"
            >
                <b-form-input
                id="input-5"
                v-model="form.address"
                placeholder="Enter Address"
                required
                >
                </b-form-input>
            </b-form-group>

            <b-button variant="outline-primary" id="cancelbtn" href="http://localhost:8080/GroupList">Cancel</b-button>
            <b-button variant="outline-primary" id="submitbtn">Submit</b-button>
        </b-form>
    </div>
</template>

<script>

export default {
    data() {
      return {
        form: {
          id: '',
          password: '',
          address: ''
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
        this.form.address = ''
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

    #cancelbtn {
        margin-left: 700px;
        margin-top: 20px;
    }
    #submitbtn {
        margin-top: 20px;
    }
    h2 {
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
    #input-3 {
        width: 500px;
    }
    #input-4 {
        width: 500px;
    }
    #input-5 {
        width: 500px;
    }
</style>