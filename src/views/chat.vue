<template>
  <div class="chatContainer">
      <div class="chatTop">
          <span style="font-size: 30px">
              Chat
          </span>
      </div>
      <div class="chatNav">
          <div class="chatFollowers">
              <div class="iconFollowersChatContainer">
                  <svg t="1697443882992" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11556" width="200" height="200"><path d="M544 848c0-26.512 10.752-50.512 28.112-67.872l112-112 0.272 0.288a98.784 98.784 0 0 1 20.352-15.504c-63.664-27.216-80.336-36.688-80.336-36.688l-0.88-94.304s37.184-28.224 48.784-117.392c23.216 6.72 31.072-27.216 32.336-48.896 1.376-20.944 13.728-86.224-14.672-80.4 5.808-43.584 10.368-82.992 8.32-103.856-7.104-73.216-57.728-149.68-185.52-155.264-108.64 5.584-179.168 82.096-186.288 155.328-2.048 20.864 2.128 60.224 7.936 103.888-28.384-5.904-16.16 59.504-14.912 80.432 1.376 21.68 9.056 55.712 32.32 48.992 11.552 89.184 48.736 117.632 48.736 117.632l-0.928 94.8s-23.52 14.352-122.8 55.456c-99.28 41.184-68.144 8.528-149.024 48.752C0 784.992 0 959.888 0 959.888h0.032A48 48 0 0 0 48 1008h616.256l-92.128-92.128A95.648 95.648 0 0 1 544 848z m302.368-96h93.248c-12.624-11.6-26.592-22.256-43.408-30.608-29.664-14.768-44.24-19.936-55.712-22.64A95.52 95.52 0 0 1 848 736c0 5.488-0.736 10.768-1.632 16z m-90.48 144H976a48 48 0 1 0 0-96H755.888l30.064-30.064a48 48 0 0 0-67.888-67.872l-112 112A47.84 47.84 0 0 0 592 848c0 13.264 5.376 25.248 14.064 33.936l112 112a48 48 0 1 0 67.872-67.872L755.888 896z m268.128 63.888s0-10.864-1.984-28.144C1008.32 939.312 992.784 944 976 944h-129.664c0.912 5.216 1.664 10.512 1.664 16a94.88 94.88 0 0 1-13.312 48H976a48 48 0 0 0 48-48l-0.016-0.112h0.032z" fill="#2D328E" p-id="11557"></path></svg>
              </div>
              <span style="font-size: 30px;">followers</span>
          </div>
          <div class="chatFollowing">
              <div class="iconFollowingChatContainer">
                  <svg t="1697444348597" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12008" width="200" height="200"><path d="M1024.016 959.888s-0.112-8.832-1.472-22.672L951.744 1008H976a48 48 0 0 0 48-48l-0.016-0.112h0.032zM769.632 944H640a96 96 0 1 1 0-192h129.632A94.16 94.16 0 0 1 768 736c0-18.976 5.68-36.512 15.152-51.392a679.504 679.504 0 0 1-35.952-13.84c-99.28-41.104-122.8-54.544-122.8-54.544l-0.88-94.288s37.184-28.224 48.784-117.392c23.216 6.72 31.072-27.216 32.336-48.896 1.376-20.944 13.728-86.224-14.672-80.4 5.808-43.584 10.368-82.992 8.32-103.856-7.088-73.216-57.728-149.68-185.52-155.264-108.64 5.584-179.168 82.096-186.288 155.328-2.048 20.864 2.128 60.224 7.936 103.888-28.384-5.904-16.16 59.504-14.912 80.432 1.376 21.68 9.056 55.712 32.32 48.992 11.552 89.184 48.736 117.648 48.736 117.648l-0.928 94.784s-23.52 14.336-122.8 55.456c-99.28 41.184-68.144 8.528-149.024 48.752C0 784.992 0 959.904 0 959.904h0.032A48 48 0 0 0 48 1008h733.312A94.832 94.832 0 0 1 768 960c0-5.488 0.736-10.768 1.632-16zM1024 848a47.84 47.84 0 0 0-14.064-33.936l-112-112a48 48 0 1 0-67.872 67.872L860.112 800H640a48 48 0 1 0 0 96h220.112l-30.064 30.064a48 48 0 0 0 67.888 67.872l112-112A47.824 47.824 0 0 0 1024 848z" fill="#08ae13" p-id="12009"></path></svg>
              </div>
              <span style="font-size: 30px;">following</span>
          </div>
      </div>
      <div style="margin-top: 10vw;
    display: flex;
    gap: 1px;
    flex-direction: column;" @click="toChatShow">
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
          <chat-user-bar></chat-user-bar>
      </div>
  </div>
</template>
<script setup>

import ChatUserBar from "../components/common/chatUserBar/chatUserBar.vue";
import router from "../router/index.js";

function toChatShow(){
    router.push('chatshow')
}
</script>
<style>
.chatTop{
    color: black;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}
.chatNav{
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
}
.chatContainer{
    background-color: #e6e6e6;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    bottom: 80px;
    overflow-y: scroll;
}
.iconFollowersChatContainer{
    display: flex;
    height: 50px;
    width: 50px;
    background-color: cornflowerblue;
    border-radius: 15px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    box-shadow: 0 0 10px #2D328E;
}
.iconFollowingChatContainer{
    display: flex;
    height: 50px;
    width: 50px;
    background-color: #1afa29;
    border-radius: 15px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    box-shadow: 0 0 10px #1afa29;
}
.chatNav{
    display: flex;
}
.chatFollowers{
    gap: 10px;
    background-color: white;
    height: 150px;
    width: 150px;
    border-radius: 20px;
    /*box-shadow: 0 0 1000px cornflowerblue;*/
    /*border: 2px solid cornflowerblue;*/
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.chatFollowing{
    gap: 10px;
    background-color: white;
    height: 150px;
    width: 150px;
    border-radius: 20px;
    /*box-shadow: 0 0 1000px #1afa29;*/
    /*border: 2px solid #1afa29;*/
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
</style>