<template>
  <div class="searchContainer">
      <div class="searchContainerTop">
          <svg t="1697870110328" class="icon" @click="router.go(-1)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7516" width="200" height="200"><path d="M659.748571 245.272381l-51.687619-51.687619-318.439619 318.585905 318.415238 318.268952 51.712-51.736381-266.703238-266.556952z" p-id="7517"></path></svg>
          <div class="inputSearch">
              <div style="    background-color: rgb(230, 230, 230);
    height: 50px;
    width: 40px;
    border-radius: 25px 0px 0px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;">
                  <svg t="1697870458070" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7740" width="200" height="200"><path d="M465.334857 146.285714c176.201143 0 319.024762 145.091048 319.024762 324.096a325.973333 325.973333 0 0 1-65.560381 196.827429L877.714286 828.611048 829.366857 877.714286l-157.647238-160.182857a314.855619 314.855619 0 0 1-206.384762 76.921904C289.133714 794.453333 146.285714 649.386667 146.285714 470.381714S289.133714 146.285714 465.334857 146.285714z m0 69.436953c-138.459429 0-250.684952 114.029714-250.684952 254.659047 0 140.629333 112.225524 254.634667 250.684952 254.634667 138.435048 0 250.660571-114.005333 250.660572-254.634667 0-140.629333-112.225524-254.659048-250.660572-254.659047z" p-id="7741"></path></svg>
              </div>
              <input type="search" name="searchInput" class="searchInput" placeholder="丁真">
              <div style="background-color: #e6e6e6; height: 50px; width: 25px; border-radius: 0 25px 25px 0"></div>
          </div>
          <span style="color: #2c2c2c; font-size: 20px">搜索</span>
         </div>
  </div>
  <div class="searchHistoryContainer">
      <p>history : </p>
      <div class="searchHistory">
          <span class="textHistory">hello world!</span>
          <span class="textHistory">vue</span>
          <span class="textHistory">react</span>
          <span class="textHistory">vite</span>
          <span class="textHistory">router</span>
          <span class="textHistory">love</span>
      </div>
  </div>
</template>
<script setup>

import router from "../../router/index.js";
</script>
<style>
@import "../searchView/searchView.css";
</style>