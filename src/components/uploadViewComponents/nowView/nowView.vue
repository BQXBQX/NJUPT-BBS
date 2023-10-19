<template>
    <transition name="beforePage">
        <div class="nowBeforeViewContainer" v-if="isActive === true" @click="isActiveChange">
            <svg t="1697698307309" class="nowViewIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8914"><path d="M576.967111 554.894222C576.967111 227.84 849.550222 34.844444 1024 0v192.995556c-95.402667 29.496889-209.891556 179.598222-215.324444 343.125333H1024V739.555556c0 157.098667-127.345778 284.444444-284.444444 284.444444h-162.588445V554.894222zM0 554.894222C0 227.84 272.583111 34.844444 447.032889 0v192.995556c-95.402667 29.496889-209.891556 179.598222-215.324445 343.125333h212.593778V739.555556c0 157.098667-127.345778 284.444444-284.444444 284.444444H0V554.894222z" p-id="8915" fill="#cdcdcd"></path></svg>
            <span class="nowViewSpanTitle">点这里， 说说想法</span>
            <span class="nowViewSpanMain">求大家推荐一个小众宝藏旅游地</span>
            <div class="background"></div>
        </div>
    </transition>
    <transition name="afterPage">
        <div class="nowAfterViewContainer" v-if="isActive === false">
            <div class="backgroundAfter"></div>
            <textarea placeholder="说说你的想法吧" class="afterInput"></textarea>
        </div>
    </transition>
</template>
<script setup>

import {ref} from "vue";

let isActive = ref(true)
function isActiveChange(){
    isActive.value = !isActive.value
    console.log(isActive.value)
}
</script>
<style>
@import "../nowView/nowView.css";
</style>