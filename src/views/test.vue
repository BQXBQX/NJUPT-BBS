<template>
    <div class="chatShowContainer">
        <div class="messageContainer" v-for="message in messages" :class="message.sender === 'user' ? 'user-message' : 'assistant-message'">
            <div class="messageContent">{{ message.content }}</div>
        </div>
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="输入消息...">
    </div>
</template>
<script>
export default {
    data() {
        return {
            messages: [
                { sender: 'assistant', content: '欢迎来到对话界面！' }
            ],
            newMessage: ''
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                this.messages.push({ sender: 'user', content: this.newMessage });
                this.newMessage = '';
            }
        }
    }
};
</script>

<style scoped>
.chatShowContainer {
    max-width: 400px;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/*.messageContainer {*/
/*    margin-bottom: 10px;*/
/*    align-items: center;*/
/*}*/

.user-message {
    border-radius: 15px;
    box-sizing: border-box;
    padding: 10px;
    position: absolute;
    right: 30px;
    background-color: #dcf8c6;
    display: flex;
    height: 60px;
    align-content: center;
    flex-wrap: wrap;
}

.assistant-message {
    background-color: #fff;
    margin-right: auto;
}

.messageContent {
    padding: 8px 12px;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>

