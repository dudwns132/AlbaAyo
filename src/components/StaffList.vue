<template>
    <v-data-table
      :headers="headers"
      :items="staff"
      sorty-by="names"
      class="elevation-1"
    >
      <template v-slot:top>
          <v-toolbar flat>
              <v-toolbar-title>직원목록</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <!-- <v-dialog
                v-model="dialog"
                max-width="500px"
                :eager="true"
              >
                <template v-slot:activator="{ on, attrs }" >
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      New Staff
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    v-model="editedItem.name"  
                                    label="Staff Name"
                                  ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="12"    
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    v-model="editedItem.age"
                                    label="Age"
                                  ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="12"    
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    v-model="editedItem.position"
                                    label="Position"
                                  ></v-text-field>
                                </v-col>   
                                <v-col
                                  cols="12" 
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    v-model="editedItem.career"  
                                    label="Career"
                                  ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="close"
                        >
                        Cancel
                        </v-btn>
                        <v-btn
                          color="blue darken-1"  
                          text
                          @click="save"
                        >
                        Save
                        </v-btn>  
                    </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                      <v-card-title class="text-h5">이 데이터를 지우시겠습니까?</v-card-title>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                          <v-spacer></v-spacer>
                      </v-card-actions>
                  </v-card>
              </v-dialog> -->
          </v-toolbar>
      </template>
      <!-- <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>        
      </template> -->
      <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
            >
              Reset
            </v-btn>
      </template>
    </v-data-table>
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
    /* margin-top: 50px;
    margin-left: 400px; */
    width: 1200px;
    margin: auto;
}
</style>