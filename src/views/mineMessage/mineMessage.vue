<template>
  <div class="mineMessageContainer">
    <TopNav></TopNav>
    <div
      class="div"
      style="
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1px;
      "
    >
      <MineMessageBar :message="mineMessageContent[0]"></MineMessageBar>
      <MineMessageBar :message="mineMessageContent[1]"></MineMessageBar>
      <MineMessageBar :message="mineMessageContent[2]"></MineMessageBar>
    </div>
    <div class="logOut" @click="logOut">
      <svg
        t="1697366167627"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="14192"
        width="200"
        height="200"
      >
        <path
          d="M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m-219.428571 377.904761v73.142858h438.857142v-73.142858H292.571429z"
          p-id="14193"
          fill="#8a8a8a"
        ></path>
      </svg>
      <span
        class="text"
        style="
          font-size: 20px;
          display: flex;
          flex-wrap: wrap;
          align-content: center;
        "
        >退出登录</span
      >
    </div>
  </div>
</template>
<script setup>
import TopNav from "../../components/showViewComponents/mineView/topNav/topNav.vue";
import MineMessageBar from "../../components/showViewComponents/mineView/mineMessageBar/mineMessageBar.vue";
import { ref } from "vue";
import api from "../../service/api.js";

const mineMessageContent = ref([
  //这里传入的是三个参数，但是因为api问题，无法写入具体实例，第一个是message信息，第二个是判断是否有picture，用来v-if判定，第三个是picture的地址值
  {
    barMessage: "头像",
    picture: "null",
  },
  {
    barMessage: "昵称",
    picture: "null",
  },
  {
    barMessage: "签名",
    picture: "null",
  },
]);

async function logOut() {
  try {
    const response = await api.put("/user/logout", {});
    //写api登出用户逻辑
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
</script>
<style>
@import "./mineMessage.css";
</style>
