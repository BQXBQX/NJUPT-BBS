<template>
  <div class="Blacklist" @click="isShowTrue">
    <svg
      t="1697871831644"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="14857"
      width="200"
      height="200"
    >
      <path
        d="M227.14123 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C321.728492 456.087573 279.288914 413.647995 227.14123 413.647995z"
        fill="#272636"
        p-id="14858"
      ></path>
      <path
        d="M510.903016 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C605.490278 456.087573 563.051723 413.647995 510.903016 413.647995z"
        fill="#272636"
        p-id="14859"
      ></path>
      <path
        d="M794.665825 413.647995c-52.14973 0-94.587262 42.439578-94.587262 94.587262 0 52.14973 42.437531 94.587262 94.587262 94.587262 52.147684 0 94.587262-42.437531 94.587262-94.587262C889.253086 456.087573 846.813508 413.647995 794.665825 413.647995z"
        fill="#272636"
        p-id="14860"
      ></path>
    </svg>
  </div>
  <transition name="BlackListSlide">
    <div
      v-if="isShow === true"
      style="position: fixed; inset: 0; z-index: 0"
      @click="isShowFalse"
    >
      <div class="BlacklistMessage" v-if="isShow === true">
        <div class="messageBar" @click.stop="router.push('mine')">举报TA</div>
        <div class="messageBar">取消</div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { ref } from "vue";

let isShow = ref(false);

function isShowTrue() {
  isShow.value = true;
}

function isShowFalse() {
  isShow.value = false;
}
</script>
<style>
@import "../blackList/blackList.css";
</style>
