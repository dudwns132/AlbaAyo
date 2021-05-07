<template>
    <div class="LoginPage" id="app" >
    <img src= "../img/logo.png" alt="logo" width="300" height="300"><br>

        <a href="/oauth2/authorization/google">
            <img src= "../img/googlelogin.png" alt="google"><br>
        </a>

        <a href="/oauth2/authorization/naver">
        <img src= "../img/naverlogin.png" alt="naver">
        </a>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>