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
      <div class="nav-top-icon-container">
          <svg t="1697249705809" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14711" width="200" height="200"><path d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m0 73.142857C323.486476 170.666667 170.666667 323.486476 170.666667 512s152.81981 341.333333 341.333333 341.333333 341.333333-152.81981 341.333333-341.333333S700.513524 170.666667 512 170.666667z m-2.072381 125.220571l222.890667 222.890667-51.712 51.712-135.070476-135.070476-0.024381 299.544381h-73.142858V436.394667l-134.119619 134.095238-51.712-51.712 222.890667-222.890667z" p-id="14712" fill="#08ae13"></path></svg>
      </div>
  </div>
</template>
<script setup>

import {ref} from "vue";

const topActiveTab = ref('recommend');

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