<template>
  <div class="mineContainer">
      <NavMineInformation :message="navMineMessage"></NavMineInformation>
      <div class="messageBarContainer">
          <MessageBar :message="messageBarContent[0]"></MessageBar>
          <MessageBar :message="messageBarContent[1]"></MessageBar>
          <MessageBar :message="messageBarContent[2]"></MessageBar>
      </div>
  </div>
</template>
<script setup>
import NavMineInformation from "../components/navMineInformation.vue";
import MessageBar from "../components/messageBar.vue";
import {onMounted, ref} from "vue";
import router from "../router/index.js";

let messageBarContent = ref([
    {
        messageBarSvgFill:null,
        messageBarSvgPath:"M243.2 290.816v562.322286h495.689143V926.47619H279.478857C219.37981 926.47619 170.666667 877.226667 170.666667 816.469333v-525.653333h72.533333zM780.190476 97.52381a73.142857 73.142857 0 0 1 73.142857 73.142857v560.761904a73.142857 73.142857 0 0 1-73.142857 73.142858H292.571429V170.666667a73.142857 73.142857 0 0 1 73.142857-73.142857h414.47619z m0 73.142857H365.714286v560.761904h414.47619V170.666667z m-125.927619 71.265523v73.362286H436.662857V241.93219h217.624381z",
        messageBarText:"我发表的帖子",
        messageBarNum:157
    },{
        messageBarSvgFill:null,
        messageBarSvgPath:"M853.333333 170.666667a73.142857 73.142857 0 0 1 73.142857 73.142857v487.619047a73.142857 73.142857 0 0 1-73.142857 73.142858H473.526857l-167.594667 109.83619A24.380952 24.380952 0 0 1 268.190476 894.000762V804.571429H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142858V243.809524a73.142857 73.142857 0 0 1 73.142857-73.142857h682.666666z m0 73.142857H170.666667v487.619047h170.666666v72.338286L451.705905 731.428571H853.333333V243.809524zM543.207619 487.619048v73.142857H341.333333v-73.142857h201.874286zM682.666667 341.333333v73.142857H341.333333v-73.142857h341.333334z",
        messageBarText:"我发表的评论",
        messageBarNum:741
    },{
        messageBarSvgFill:"#08ae13",
        messageBarSvgPath:"M591.62819 121.904762c7.68 0 21.187048 1.633524 31.524572 4.973714 50.907429 16.505905 80.213333 70.582857 68.339809 124.708572l-1.219047 5.071238-45.372953 170.179047h179.736381c21.820952 0 43.398095 8.094476 58.026667 24.283429 16.335238 18.090667 22.698667 42.032762 17.846857 65.267809l-1.219047 4.973715-94.768762 337.432381a59.294476 59.294476 0 0 1-52.662857 43.154285l-4.388572 0.146286H268.190476V444.001524c97.084952-21.016381 239.079619-279.28381 239.079619-279.28381C527.457524 137.337905 551.936 121.904762 591.62819 121.904762zM121.904762 438.857143h73.142857v463.238095H121.904762z",
        messageBarText:"我赞过的帖子",
        messageBarNum:1203
    }
])

let navMineMessage = ref({
    mineName:"BQXBQX",
    mineID:"7D72E864",
    // mineAvatar:"../assets/avatar.jpeg",
    mineFollowers:54,
    mineFollowing:41
})

</script>
<style>

.messageBarContainer{
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
}
.navUserInformation{
    background: linear-gradient(#5ee7df, #b490ca);
    /*background-color: rgba(255, 255, 255, 0.9); !* 使用rgba()函数设置白色背景和透明度 *!*/
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}
.mineContainer{
    background-image: url('../assets/background3.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #e6e6e6;
    flex-direction: column;
    position: absolute;
    display: flex;
    top:0px;
    bottom: 84px;
    width: 100%;
}
.text{
    color: black;
}
</style>