<template>
    <div class="navUserInformation">
        <div class="topIcon">
            <svg t="1697603410165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18802" width="200" height="200"><path d="M384 320l512 0c17.696 0 32-14.336 32-32s-14.304-32-32-32L384 256c-17.664 0-32 14.336-32 32S366.336 320 384 320z" fill="#ffffff" p-id="18803"></path><path d="M896 480 384 480c-17.664 0-32 14.336-32 32s14.336 32 32 32l512 0c17.696 0 32-14.336 32-32S913.696 480 896 480z" fill="#ffffff" p-id="18804"></path><path d="M896 704 384 704c-17.664 0-32 14.304-32 32s14.336 32 32 32l512 0c17.696 0 32-14.304 32-32S913.696 704 896 704z" fill="#ffffff" p-id="18805"></path><path d="M192 288m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z" fill="#ffffff" p-id="18806"></path><path d="M192 512m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z" fill="#ffffff" p-id="18807"></path><path d="M192 736m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z" fill="#ffffff" p-id="18808"></path></svg>
            <svg t="1697603451556" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20054" width="200" height="200"><path d="M354.986667 219.428571v73.142858H195.047619v536.380952h585.142857V548.571429h73.142857V828.952381a73.142857 73.142857 0 0 1-73.142857 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857V292.571429a73.142857 73.142857 0 0 1 73.142857-73.142858h159.939048z m383.829333-100.473904l172.397714 172.373333-181.00419 181.028571-51.736381-51.712L757.784381 341.333333H670.47619c-139.068952 0-252.245333 110.884571-255.902476 249.07581L414.47619 597.333333v97.52381h-73.142857v-97.52381C341.333333 415.548952 488.69181 268.190476 670.47619 268.190476h114.127239l-97.499429-97.523809 51.712-51.712z" p-id="20055" fill="#ffffff"></path></svg>
        </div>
        <div style="
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: center;
          justify-content: space-between;">
            <div class="mineInformation">
                <div>
<!--                    图片的地址等到api写好后再修改-->
                    <img src="../assets/avatar.jpeg" alt="avatar" class="mineAvatar">
                </div>
                <div style="display: flex;   flex-direction: column; margin-left: 10px">
                    <span class="mineNameText ">{{message.mineName}}</span>
                    <span class="mineIDText ">ID:{{message.mineID}}</span>
                </div>
            </div>
            <div style="
               display: flex;
               align-content: center;
               justify-content: center;
               flex-wrap: wrap;" @click="toUserMessage">
                <svg t="1697603710734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20363" width="200" height="200"><path d="M605.086476 512.146286L338.358857 245.272381l51.760762-51.687619 318.415238 318.585905L390.095238 830.415238l-51.687619-51.736381z" p-id="20364" fill="#ffffff"></path></svg>            </div>
        </div>
        <div class="followingContent">
            <span class=" followInfo">followers:</span>
            <span class=" followNum">{{message.mineFollowers}}  </span>
            <span class=" followInfo">following:</span>
            <span class=" followNum">{{message.mineFollowing}}  </span>
        </div>
    </div>
</template>
<script setup>
import router from "../router/index.js";

const props = defineProps({
    message:Object
})
function toUserMessage(){
    router.push("minemessage")
}
</script>
<style>
.topIcon{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4vw;
}
.mineAvatar{
    width: 80px;
    height: 80px;
    border-radius: 15px;
}
.mineInformation{
    display: flex;
}
.mineNameText{
    font-size: 25px;
    color: white;
    font-family: inherit;

}

.mineIDText{
    font-size: 15px;
    color: #e6e6e6;
    font-family: inherit;

}
.followInfo{
    font-size: 20px;
    font-family: inherit;
    color: white;

}
.followNum{
    font-size: 20px;
    color: #e6e6e6;
    font-family: inherit;

}
.followingContent{
    display: flex;
    gap: 5%;
}
</style>