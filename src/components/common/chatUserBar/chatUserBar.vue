<template>
  <div class="chatUserBarContainer">
    <div class="chatUserBarLeft">
      <img
        @click="router.push('usermessage')"
        src="src/assets/avatar.jpeg"
        alt="avatar"
        class="mineAvatar"
        style="border-radius: 35px; height: 70px; width: 70px"
      />
      <div @click="router.push('chatShow')" class="chatUserBarSpan">
        <span style="font-family: inherit; color: black; font-size: 20px"
          >BQXBQX</span
        >
        <span style="font-family: inherit; color: gray; font-size: 15px"
          >在线</span
        >
      </div>
    </div>
    <div @click="router.push('chatShow')" class="chatUserBarRight">
      <span
        style="
          background-color: #f8197a;
          border-radius: 20px;
          font-size: 25px;
          padding: 8px;
          opacity: 75%;
          font-family: inherit;
          color: black;
        "
        >78</span
      >
    </div>
  </div>
</template>
<script setup>
import router from "../../../router/index.js";
</script>
<style>
@import "./chatUserBar.css";
</style>
