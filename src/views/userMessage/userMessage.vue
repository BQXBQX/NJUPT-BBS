<template>
    <div class="userMessageContainer">
        <div class="userMessageTopBar">
            <svg @click="router.go(-1)" t="1697871769088" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13785" width="200" height="200"><path d="M659.748571 245.272381l-51.687619-51.687619-318.439619 318.585905 318.415238 318.268952 51.712-51.736381-266.703238-266.556952z" p-id="13786"></path></svg>
            <black-list></black-list>
        </div>
        <div class="userMessageNameContainer">
            <div class="userMessageName">
                <img src="/../src/assets/avatar.jpeg" style="height: 80px;width: 80px;border-radius: 15px">
                <div class="spanMessage">
                    <span style="font-size: 25px;
    color: black;
    font-family: inherit;">BQXBQX</span>
                    <span style="font-size: 15px;
    color: gray;
    font-family: inherit;">ID:djksadjkadj</span>
                </div>
            </div>
            <focus-button></focus-button>
        </div>
        <div class="followMessage">
            <span class="followInfo" style="color: #2c2c2c">followers: </span>
            <span class="followNum" style="color: gray;">54</span>
            <span class="followInfo" style="color: #2c2c2c">following: </span>
            <span class="followNum" style="color: gray;">52</span>
        </div>

        <div class="messageBarContainer">
            <MessageBar :message="messageBarContent[0]"></MessageBar>
            <MessageBar :message="messageBarContent[1]"></MessageBar>
            <MessageBar :message="messageBarContent[2]"></MessageBar>
        </div>
    </div>
</template>
<script setup>
import NavMineInformation from "../../components/navMineInformation.vue";
import MessageBar from "../../components/messageBar.vue";
import {onMounted, ref} from "vue";
import router from "../../router/index.js";
import FocusButton from "../../components/common/focusButton/focusButton.vue";
import BlackList from "../../components/common/blackList/blackList.vue";
import Test from "../test.vue";
import PostItem from "../../components/postItem.vue";

let messageBarContent = ref([
    {
        messageBarSvgFill:null,
        messageBarSvgPath:"M243.2 290.816v562.322286h495.689143V926.47619H279.478857C219.37981 926.47619 170.666667 877.226667 170.666667 816.469333v-525.653333h72.533333zM780.190476 97.52381a73.142857 73.142857 0 0 1 73.142857 73.142857v560.761904a73.142857 73.142857 0 0 1-73.142857 73.142858H292.571429V170.666667a73.142857 73.142857 0 0 1 73.142857-73.142857h414.47619z m0 73.142857H365.714286v560.761904h414.47619V170.666667z m-125.927619 71.265523v73.362286H436.662857V241.93219h217.624381z",
        messageBarText:"TA发表的帖子",
        messageBarNum:157
    },{
        messageBarSvgFill:null,
        messageBarSvgPath:"M853.333333 170.666667a73.142857 73.142857 0 0 1 73.142857 73.142857v487.619047a73.142857 73.142857 0 0 1-73.142857 73.142858H473.526857l-167.594667 109.83619A24.380952 24.380952 0 0 1 268.190476 894.000762V804.571429H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142858V243.809524a73.142857 73.142857 0 0 1 73.142857-73.142857h682.666666z m0 73.142857H170.666667v487.619047h170.666666v72.338286L451.705905 731.428571H853.333333V243.809524zM543.207619 487.619048v73.142857H341.333333v-73.142857h201.874286zM682.666667 341.333333v73.142857H341.333333v-73.142857h341.333334z",
        messageBarText:"TA发表的评论",
        messageBarNum:741
    },{
        messageBarSvgFill:"#08ae13",
        messageBarSvgPath:"M591.62819 121.904762c7.68 0 21.187048 1.633524 31.524572 4.973714 50.907429 16.505905 80.213333 70.582857 68.339809 124.708572l-1.219047 5.071238-45.372953 170.179047h179.736381c21.820952 0 43.398095 8.094476 58.026667 24.283429 16.335238 18.090667 22.698667 42.032762 17.846857 65.267809l-1.219047 4.973715-94.768762 337.432381a59.294476 59.294476 0 0 1-52.662857 43.154285l-4.388572 0.146286H268.190476V444.001524c97.084952-21.016381 239.079619-279.28381 239.079619-279.28381C527.457524 137.337905 551.936 121.904762 591.62819 121.904762zM121.904762 438.857143h73.142857v463.238095H121.904762z",
        messageBarText:"TA赞过的帖子",
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
.followMessage{
    display: flex;
    gap: 10px;
    background-color: white;
    padding: 10px;
}
.userMessageNameContainer{
    background-color:white;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 10px;
}
.userMessageContainer{
    background-color: #e6e6e6;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
}
.userMessageName{
    display: flex;
}
.userMessageTopBar{
    background-color: white;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
}
.spanMessage{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>