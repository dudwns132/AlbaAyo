<template>
<div class="desktop" >
    <div class="invite" style="font-family: bamin;">
        <h1 id="Salary">월급조회</h1>
        <h3 id="Salary_text_messeage1">그룹 선택 : </h3>
        <div>
        <b-dropdown id="dropdown-1" text="그룹 목록" class="m-md-2">
            <b-dropdown-item>그룹 1번</b-dropdown-item>
            <b-dropdown-item>그룹 2번</b-dropdown-item>
            <b-dropdown-item>그룹 3번</b-dropdown-item>
        </b-dropdown>
        </div>
    </div>
    <br><br>
    <div>
        <b-container fluid>
            <b-table
            :items="items"
            :fields="fields"
            stacked="md"
            show-empty
            small
            table-class="content_area"
            >
            <template #cell(name)="row" >
                <p style="color: white;">{{row.value}}</p>
            </template>

            <template #cell(actions)="row">
                <b-button size="sm" @click="row.toggleDetails">
                {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                </b-button>
            </template>

            <template #row-details="row">
                <b-card style="background-color:rgba(0, 0, 0, 0) !important;">
                <ul>
                    <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                </ul>
                </b-card>
            </template>
            </b-table>
        </b-container>
    </div>
    <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="https://cdn.wallpaperhub.app/cloudcache/e/1/1/c/c/1/e11cc11bc54695a5605a987ae3868b4467da9029.jpg">
    </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          { age: 25, name: '박영준', salary: '150만원 '},
          { age: 24, name: '조승완', salary: '120만원'},
        ],
        fields: [
          { key: 'name', label: 'Name'},
          { key: 'actions', label: 'Actions' }
        ],
        groups: [
          { title: '그룹1' },
          { title: '그룹2' },
          { title: '그룹3' },
          { title: '그룹4' },
        ]
      }
    },
    methods: {
        Salary_rowClick() {
            var text = document.getElementById("salary");
            if(text.style.display === "none") {
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
        }
    }
}
</script>

<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }
    #Salary {
        text-align: left;
        margin-top: 80px;
        color: aliceblue;
    }
    #Salary_text_messeage1 {
        text-align: left;
        margin-top: 75px;
        color: aliceblue;
    }
    .content_area {
        color: white;
        width: 40%;
    }
</style>