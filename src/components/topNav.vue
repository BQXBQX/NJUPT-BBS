<template>
  <div class="topNavContainer">
      <svg t="1697363412742" @click="routerBack" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7516" width="200" height="200"><path d="M659.748571 245.272381l-51.687619-51.687619-318.439619 318.585905 318.415238 318.268952 51.712-51.736381-266.703238-266.556952z" p-id="7517"></path></svg>
      <span class="text" style="
      display: flex;
      font-size: 20px;
      height: 40px;
      text-align: center;
      align-content: center;
      flex-wrap: wrap;">
          个人信息
      </span>
  </div>
</template>
<script setup>
import router from "../router/index.js";

function routerBack(){
    router.go(-1);
}
</script>
<style>
.topNavContainer{
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    height: 60px;
    background-color: #e6e6e6;
    gap: 20px;
}

</style>