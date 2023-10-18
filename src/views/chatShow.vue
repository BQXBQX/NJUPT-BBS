<template>
    <div class="chatShowContainer">
        <div class="chatUserMessage">
            <div class="backIcon">
                <svg t="1697599264362" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21408" width="200" height="200"><path d="M659.748571 245.272381l-51.687619-51.687619-318.439619 318.585905 318.415238 318.268952 51.712-51.736381-266.703238-266.556952z" p-id="21409" fill="#8a8a8a"></path></svg>
            </div>
            <div style="display: flex;align-items: center;gap: 20px">
                <div class="chatUserAvatar">
                    <img src="../assets/avatar.jpeg" alt="avatar" width="40" height="40" style="border-radius: 20px">
                </div>
                <span STYLE="font-family: inherit;font-size: 25px;color: black">BQXBQX</span>
            </div>
        </div>
        <div class="messageShow">
            <div class="messageContainer" v-for="message in messages" :class="message.sender === 'user' ? 'user-message' : 'assistant-message'">
                <span class="messageContent" style="font-family: inherit;font-size: 30px">{{ message.content }}</span>
            </div>
        </div>
        <div class="commitBottom">
            <div class="inputCommit">
                <div style="height: 40px;width: 20px;border-radius: 20px 0 0 20px; background-color: #e6e6e6"></div>
                <input v-model="newMessage" type="text" style="height: 40px;border-radius: 0px; width: 80%;" class="commentInput" placeholder="让大家听到你的声音" @keyup.enter="sendMessage" >
                <div style="height: 40px;width: 20px;border-radius: 0 20px 20px 0; background-color: #e6e6e6"></div>
            </div>
            <label for="fileInput" class="svgImage">
                <svg t="1697452376184" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8433" style="height: 40px;width: 40px"><path d="M512 936.915619c-234.672764 0-424.915619-190.243879-424.915619-424.915619S277.327236 87.083357 512 87.083357c234.676857 0 424.916643 190.243879 424.916643 424.915619S746.676857 936.915619 512 936.915619zM724.45781 469.50414 554.491767 469.50414 554.491767 299.546284l-84.983533 0 0 169.957857L299.54219 469.50414l0 84.99172 169.966043 0 0 169.966043 84.983533 0L554.491767 554.49586l169.966043 0L724.45781 469.50414z" p-id="8434" fill="#08ae13"></path></svg>
            </label>
            <input type="file" name="fileAdd" id="fileInput" class="inputFile" style="display: none">
            <button type="submit" style="height: 40px;border-radius: 15px" @click="sendMessage">submit</button>
        </div>
    </div>
</template>

<script setup>

import {ref} from "vue";

const messages = ref([
    { sender: 'assistant', content: '欢迎来到对话界面！' }
]);

let newMessage = ref('');
function  sendMessage() {
    if (newMessage.value !== '') {
        messages.value.push({ sender: 'user', content: newMessage.value });
        newMessage.value = '';
    }
}
</script>

<style>
.chatUserMessage{
    display: flex;
    height: 80px;
    background-color: white;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    padding: 5vw;
    box-sizing: border-box;
}
.messageShow{
    left: 0;
    right: 0;
    top: 80px;
    position: absolute;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5vw;
    bottom: 60px;
}
.chatShowContainer {
    background-color: #e6e6e6;
    height: 100%;
    width: 100%;
}


.user-message {
    margin-right: 40px;
    margin-left: auto;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    background-color: #dcf8c6;
    height: fit-content;
    align-content: center;
    width: fit-content;
    justify-content: flex-end;
    flex-wrap: wrap;
}

.assistant-message {
    margin-left: 40px;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    width: fit-content;
    background-color: #faad9c;
    height: fit-content;
    align-content: center;
    flex-wrap: wrap;
}

.commitBottom{
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    background-color: white;
    height: 60px;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.inputCommit{
    display: flex;
    flex-wrap: wrap;
    /*align-content: center;*/
    width: 60%;
    padding-left: 5px;
}
.svgImage{
    height: 40px;
    width: 40px;
}.messageContainer{

 }
</style>
