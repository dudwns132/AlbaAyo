import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        allUsers: [
            { userId: "dudwns132", password: "123456" },
            { userId: "admin123", password: "123456" }
        ],
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        // 로그인이 성공했을 경우
        loginSuccess(state) {
            state.isLogin = true
            state.isLoginError = false
        },
        // 로그인이 실패했을 경우
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        }
    },
    actions: {
        // 로그인 시도했을 경우
        login({ state, commit }, form ) {
            //console.log(loginObj);
            let selectedUser = null
            state.allUsers.forEach(user => {
                if (user.userId === form.userId) selectedUser = user
            })
            selectedUser === null
              ? commit("loginError")
              : selectedUser.password !== form.password
                ? commit("loginError")
                : commit("loginSuccess")
        }
    }
})