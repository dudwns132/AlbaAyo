<template>
<div class="desktop" style="font-family: bamin;">
    <v-data-table
      :headers="headers"
      :items="staff"
      sorty-by="names"
      class="elevation-1"
    >
      <template v-slot:top>
          <v-toolbar id="staffListHeader" flat>
              <v-toolbar-title>직원목록</v-toolbar-title>
              <v-divider
                
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
          </v-toolbar>
      </template>
      <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
            >
              Reset
            </v-btn>
      </template>
    </v-data-table>
    <div class="contents">
  <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="../img/IMG_Background.png">
    </div>
    </div>
    </div>
</template>
    
<script>
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'name'
            },
            { text: 'Age', value: 'age'},
            // { text: 'Position', value: 'position'},
            { text: 'Career(month)', value: 'career'},
            // { text: 'Actions', value: 'actions', sortable: false},
        ],
        staff: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            age: 0,
            position: '',
            carrer: ''
        },
        defaultItem: {
            name: '',
            age: 0,
            position: '',
            carrer: ''
        }
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Staff' : 'Edit Staff'
        }
    },

    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        }
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize () {
            this.staff = [
                {
                    name: '조승완',
                    age: 24,
                    position: '점장',
                    career: 45
                },
                {
                    name: '이선제',
                    age: 24,
                    position: '부점장',
                    career: 23
                },
                {
                    name: '최재욱',
                    age: 22,
                    position: '주방장',
                    career: 20
                },
                {
                    name: '박영남',
                    age: 24,
                    position: '홀매니저',
                    career: 15
                },
                {
                    name: '정성권',
                    age: 24,
                    position: '주방 보조',
                    career: 10
                },
                {
                    name: '박영준',
                    age: 25,
                    position: '서빙',
                    career: 6
                },
                
            ]
        },

        editItem (item) {
            this.editedIndex = this.staff.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.staff.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.staff.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if(this.editedIndex > -1) {
                Object.assign(this.staff[this.editedIndex], this.editedItem)
            } else {
                this.staff.push(this.editedItem)
            }
            this.close()
        }
    }
}
</script>
<style>
.elevation-1 {
    margin-top: 175px;
    /*margin-left: 400px; */
    width: 1200px;
    margin: 0 auto;
    background-color:rgba(0, 0, 0, 0) !important;

}
#staffListHeader {
    margin-top: 50px;
    /* margin: 0 auto; */
    background-color:rgba(0, 0, 0, 0) !important;
}
</style>