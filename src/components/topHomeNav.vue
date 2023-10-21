<template>
  <div class="nav-top-container">
      <div class="nav-top-icon-container">
          <svg t="1697249626938" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14497" width="200" height="200"><path d="M465.334857 146.285714c176.201143 0 319.024762 145.091048 319.024762 324.096a325.973333 325.973333 0 0 1-65.560381 196.827429L877.714286 828.611048 829.366857 877.714286l-157.647238-160.182857a314.855619 314.855619 0 0 1-206.384762 76.921904C289.133714 794.453333 146.285714 649.386667 146.285714 470.381714S289.133714 146.285714 465.334857 146.285714z m0 69.436953c-138.459429 0-250.684952 114.029714-250.684952 254.659047 0 140.629333 112.225524 254.634667 250.684952 254.634667 138.435048 0 250.660571-114.005333 250.660572-254.634667 0-140.629333-112.225524-254.659048-250.660572-254.659047z" p-id="14498" fill="#2D328E"></path></svg>
      </div>
      <div class="nav-top-text-container">
          <span class="nav-top-text" :class="{active: topActiveTab==='recommend'}" @click="topHandleTabClick('recommend')">推荐</span>
          <span class="nav-top-text" :class="{active: topActiveTab==='concern'}" @click="topHandleTabClick('concern')">关注</span>
          <span class="nav-top-text" :class="{active: topActiveTab==='new'}" @click="topHandleTabClick('new')">最新</span>
      </div>
      <div class="nav-top-icon-container" @click="toUpload">
          <svg t="1697269791661" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7726" width="200" height="200"><path d="M268.190476 146.285714h48.761905v73.118476L268.190476 219.428571v609.52381h243.809524v73.142857H268.190476a73.142857 73.142857 0 0 1-73.142857-73.142857V219.428571a73.142857 73.142857 0 0 1 73.142857-73.142857z m442.441143 460.01981l125.366857 125.366857-51.712 51.712-37.546666-37.571048-0.024381 153.283048h-73.142858V746.788571l-36.571428 36.59581-51.736381-51.687619 125.366857-125.391238zM560.761905 536.380952v73.142858h-219.428572v-73.142858h219.428572z m195.047619-390.095238a73.142857 73.142857 0 0 1 73.142857 73.142857l-0.024381 341.333334h-73.142857L755.809524 219.428571h-48.761905V146.285714h48.761905z m-73.142857 243.809524v73.142857H341.333333v-73.142857h341.333334zM585.142857 73.142857a73.142857 73.142857 0 0 1 73.142857 73.142857v48.761905a73.142857 73.142857 0 0 1-73.142857 73.142857h-146.285714a73.142857 73.142857 0 0 1-73.142857-73.142857V146.285714a73.142857 73.142857 0 0 1 73.142857-73.142857h146.285714z m0 73.142857h-146.285714v48.761905h146.285714V146.285714z" p-id="7727" fill="#08ae13"></path></svg>      </div>
  </div>
</template>
<script setup>

import {ref} from "vue";
import router from "../router/index.js";

const topActiveTab = ref('recommend');

function toUpload(){
    router.push('upload')
}
function topHandleTabClick(tab){
    topActiveTab.value = tab;
}
</script>
<style>
.nav-top-container {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 0 20px #2D328E;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    color: gray;
}
.nav-top-text{
    font-size: 20px;
}
.nav-top-text-container{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 20px;
}
.nav-top-icon-container{
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}
.nav-top-text.active{
    color: #2D328E;
}
.nav-top-text:hover{
    transform: scale(1.2);
    transition: 0.3s;
}
</style>