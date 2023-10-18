<template>
    <div class="chatUserBarContainer">
        <div class="chatUserBarLeft">
            <img src="src/assets/avatar.jpeg" alt="avatar" class="mineAvatar" style="border-radius: 35px;height: 70px;width: 70px">
            <div class="chatUserBarSpan">
                <span style="font-family: inherit; color: black; font-size: 20px">BQXBQX</span>
                <span style="font-family: inherit; color: gray; font-size: 15px">在线</span>
            </div>
        </div>
        <div class="chatUserBarRight">
            <span style="background-color: #f8197a; border-radius: 20px;font-size: 25px;padding: 8px; opacity: 75%; font-family: inherit; color: black">78</span>
        </div>
    </div>

</template>
<script setup>

</script>
<style>
.chatUserBarContainer{
    display: flex;
    background-color: white;
    padding: 2vw;
    justify-content: space-between;
    align-items: center;
}

.chatUserBarLeft{
    display: flex;
    gap: 20px;
}
.chatUserBarSpan{
    gap: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>