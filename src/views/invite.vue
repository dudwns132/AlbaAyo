<template>
<div class="desktop" >
    <div class="invite" style="font-family: bamin;">
        <h1 id="groupInvite">그룹초대</h1>
        <h3 id="text_messeage1">초대 할 계정의 아이디를 입력해주세요.</h3>
            <b-input-group align-center prepend="ID" class="mt-5" id="inputId">
                <b-form-input id="inputIdText"></b-form-input>
                <b-input-group-append>
                    <b-button id="SearchButton" variant="outline-success">Search</b-button>
                </b-input-group-append>
            </b-input-group>
                <!-- <b-collapse visible id="collapse-3">
                    <b-card>
                        <p>이름 : 박영준</p>
                        <p>나이 : 25</p>
                        <p>아이디: qkrdudwns132</p>
                    </b-card>
                </b-collapse> -->
    </div>
    <br><br><br>
    <div>
        <v-simple-table style="width: 40%; margin: 0 auto;">
            <template v-slot:default>
            <thead>
                <tr class="text-size">
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    ID
                </th>
                <th class="text-left">
                    Birth
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in worker"
                :key="item.Name"
                >
                <td>{{ item.Name }}</td>
                <td>{{ item.ID }}</td>
                <td>{{ item.Birth }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </div>
    <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="https://cdn.wallpaperhub.app/cloudcache/e/1/1/c/c/1/e11cc11bc54695a5605a987ae3868b4467da9029.jpg">
    </div>
    </div>
</template>

<script>
export default {
     data () {
      return {
        worker: [
          {
            Name: '조승완',
            ID: 'abc123',
            Birth: '1998-01-01'
          },  
        ],
      }
    },
}
</script>

<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }

    #inputId {
        width: 400px;
        margin: auto;
    }

    #inputIdText {
        width: 100px;
    }

    #SearchButton {
        background: gainsboro;
        color: black;
    }

    #groupInvite {
        text-align: center;
        margin-top: 80px;
        color: aliceblue;
        /* margin-top: 75px;
        margin-left: 525px; */
    }
    #text_messeage1 {
        text-align: center;
        margin-top: 75px;
        color: aliceblue;
    }
    #text-area {
        text-align: center;
        margin: 0 auto;
        margin-top: 75px;
        /* margin-right: px; */
        width: 860px;
        height: 40px;
    }
    
</style>