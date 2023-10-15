<template>
    <div class="navUserInformation">
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
                    <span class="mineNameText text">{{message.mineName}}</span>
                    <span class="mineIDText text">ID:{{message.mineID}}</span>
                </div>
            </div>
            <div style="
               display: flex;
               align-content: center;
               justify-content: center;
               flex-wrap: wrap;" @click="toUserMessage">
                <svg t="1697292994808" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7516" width="200" height="200"><path d="M605.086476 512.146286L338.358857 245.272381l51.760762-51.687619 318.415238 318.585905L390.095238 830.415238l-51.687619-51.736381z" p-id="7517"></path></svg>
            </div>
        </div>
        <div class="followingContent">
            <span class="text followInfo">followers:</span>
            <span class="text followNum">{{message.mineFollowers}}  </span>
            <span class="text followInfo">following:</span>
            <span class="text followNum">{{message.mineFollowing}}  </span>
        </div>
    </div>
</template>
<script setup>
import router from "../router/index.js";

const props = defineProps({
    message:Object
})
function toUserMessage(){
    router.push("usermessage")
}
</script>
<style>

</style>