<template>
  <div class="postBottomContainer">
      <div class="postBottomLeft">
          <InputComment></InputComment>
<!--          <div class="iconContainer iconInput">-->
<!--              <svg t="1697424542600" style="height: 20px;width: 20px; padding-left: 10px;" class="icon" viewBox="0 0 1146 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26202" width="200" height="200"><path d="M0 956.866005h1146.877922v63.856995H0v-63.856995z m0-44.089997l300.529979-85.323995L85.866994 614.104028 0 912.776008zM802.673945 328.370048L588.00996 115.020062 115.743992 584.37703l214.660985 213.329985L802.673945 328.370048z m99.768993-179.214988L768.272947 15.819069c-22.229998-22.096998-59.468996-20.893999-83.180994 2.665l-64.409995 63.991995 214.664985 213.349986 64.405995-64.011996c23.711998-23.559998 24.914998-60.559996 2.69-82.659994z" p-id="26203"></path></svg>-->
<!--          </div>-->
<!--          <input type="text" class="commentInput" placeholder="说点什么">-->
      </div>
      <div class="postBottomRight">
          <div class="postBottomItem">
              <div class="iconContainer">
                  <good-button></good-button>
              </div>
              <span class="text" style="font-size: 20px">58</span>
          </div>

          <div class="postBottomItem">
              <div class="iconContainer">
                  <svg t="1697423694640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24854" width="200" height="200"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" p-id="24855" fill="#2c2c2c"></path></svg>
              </div>
              <span class="text" style="font-size: 20px">54</span>
          </div>
          <div class="postBottomItem">
          </div>
      </div>
  </div>
</template>
<script setup>
import InputComment from "./common/inputComment/inputComment.vue";
import GoodButton from "./common/goodButton/goodButton.vue";
</script>
<style>
.postBottomContainer{
    justify-content: space-between;
    display: flex;
    position: absolute;
    bottom: 0;
    height: 70px;
    background-color: white;
    width: 100%;
}
.commentInput{
    box-sizing: border-box;
    height: 50px;
    border-radius: 0 26px 26px 0;
    border: 0;
    background-color: #e6e6e6;
}
.postBottomItem{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.postBottomRight{
    padding: 10px;
    display: flex;
    gap: 8px;
}
.postBottomLeft{
    padding: 10px;
    width: 90%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: row;
}
.commentInput{
    width: 100%;
}
.iconInput{
    padding: 5px;
    background-color: #e6e6e6;
    height: 50px;
    border-radius: 25px 0 0 25px;
    box-sizing: border-box;
}
</style>