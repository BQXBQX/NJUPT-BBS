<template>
  <div class="postContentContainer">
      <div class="postContentLeft">
          <div class="postUser">
              <div class="left">
                  <div class="avatar">
                      <img src="../assets/avatar.jpeg" alt="avatar" width="50" height="50">
                  </div>
                  <span class="text" style="    font-weight: 400;font-size: 25px;">BQXBQX</span>
              </div>
              <focus-button></focus-button>
          </div>
          <div class="postPictureContainer">
              <img src="https://ts1.cn.mm.bing.net/th/id/R-C.bb2b49d10fbdeef099bcfc7a9def7f9f?rik=qg41XR8J%2flja3w&riu=http%3a%2f%2fwww.petsworld.in%2fblog%2fwp-content%2fuploads%2f2014%2f10%2fBasset-Hound1.jpg&ehk=9EqdJnDRnuOuGazad86md%2bbjQwukrim1nA3zNg9CwdU%3d&risl=&pid=ImgRaw&r=0" alt="postPicture" class="postPicture">
          </div>
          <div class="postContentText">
          <span style="margin: auto;
      font-family: inherit;
      font-size: 20px;
      color: black; padding: 5vw">this is a lovely dog! I really want to fuck it!</span>
          </div>
      </div>
      <div class="postDate">
          <span style="font-size: 15px;
          color: gray;
          padding: 10px;
">10-14 23:57</span>
      </div>
  </div>
</template>
<script setup>

import FocusButton from "./common/focusButton/focusButton.vue";
</script>
<style>
.postContentContainer{
    padding: 5px;
    margin-top: 5px;
    background-color: white;
}
.postContentText {
    display: flex;
}
.postUser{
    padding: 10px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
}
.left{
    display: flex;
    gap: 10px;
}
.right{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
}
.concernPostButton{
    border: 2px solid #08ae13;
    text-align: center;
    display: flex;
    /* width: 18%; */
    padding: 5px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    color: #08ae13;
    border-radius: 15px
}
.postPicture{
    padding: 5vw;
    width: 90%;
    height: auto;
    border-radius: 50px;
}
.postPictureContainer{
}
.postDate{
    display: flex;
    margin-top: 20px;
    flex-direction: row-reverse;
}
</style>