<template>
  <div class="postCommentContainer">
      <div class="postCommentUser" style="display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;">
          <div class="userInformation">
              <img src="../../../assets/avatar.jpeg" alt="avatar" width="40" height="40" style="border-radius: 25px">
              <span style="    font-family: inherit;
    color: black;
    font-size: 20px;
    display: flex;
    font-weight: 400;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;">BQXBQX</span>
          </div>
          <div style="display: flex; flex-direction: row;">
              <div class="iconContainer">
                  <good-button></good-button>
<!--                  <svg t="1697441684803" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7516" width="200" height="200"><path d="M591.62819 121.904762c7.68 0 21.187048 1.633524 31.524572 4.973714 50.907429 16.505905 80.213333 70.582857 68.339809 124.708572l-1.219047 5.071238-45.372953 170.179047h179.736381c21.820952 0 43.398095 8.094476 58.026667 24.283429 16.335238 18.090667 22.698667 42.032762 17.846857 65.267809l-1.219047 4.973715-94.768762 337.432381a59.294476 59.294476 0 0 1-52.662857 43.154285l-4.388572 0.146286H268.190476V444.001524c97.084952-21.016381 239.079619-279.28381 239.079619-279.28381C527.457524 137.337905 551.936 121.904762 591.62819 121.904762zM828.952381 501.126095c0-0.316952-0.146286-0.512-0.560762-0.975238 0.341333 0.390095-0.975238-0.170667-3.754667-0.170667H549.692952l69.900191-262.217142c5.022476-18.773333-4.144762-36.498286-18.968381-41.301334a52.589714 52.589714 0 0 0-9.020952-1.414095c-10.922667 0-15.457524 1.26781-21.065143 7.558095l-1.950477 2.29181-9.216 16.091428-9.874285 16.700953a1534.683429 1534.683429 0 0 1-72.216381 110.201905c-28.013714 38.765714-55.53981 72.167619-82.553905 98.816-17.968762 17.724952-35.59619 32.49981-53.394286 43.958857V828.952381h395.605334L828.952381 501.126095zM121.904762 438.857143h73.142857v463.238095H121.904762z" p-id="7517" fill="#2c2c2c"></path></svg>-->
              </div>
              <span style="display: flex;
    font-size: 20px;
    flex-wrap: wrap;
    align-content: center;
    font-family: inherit;
    font-weight: 700;
    color: black">71</span>
          </div>
      </div>
      <div class="userComment">
          <span style="font-family: inherit;
          color: black;
          font-size: 20px;
">I really want to fuck it too!</span>
          <br>
          <span class="timeText">10-09 7:54</span>
          <div class="nestedComment">
<!--              使用v-for进行评论区的展示-->
              <div class="postNestedCommentUser" style="display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;">
                  <div class="userInformation">
                      <img src="../../../assets/avatar.jpeg" alt="avatar" width="30" height="30" style="border-radius: 25px">
                      <span style="    font-family: inherit;
    color: black;
    font-size: 18px;
    display: flex;
    font-weight: 400;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;">BQXBQX</span>
                  </div>
                  <div style="display: flex; flex-direction: row;">
                      <div class="iconContainer">
                          <good-button></good-button>
                      </div>
                      <span style="display: flex;
    font-size: 18px;
    flex-wrap: wrap;
    align-content: center;
    font-family: inherit;
    font-weight: 700;
    color: black">71</span>
                  </div>
              </div>
              <span style="font-family: inherit;
          color: black;
          font-size: 20px;
">I really want to fuck it too!</span>
              <br>
              <span class="timeText">10-09 7:54</span>
          </div>
          <span @click="toggleCollapse" class="collapseButton">--------Toggle Collapse--------</span>
          <div class="collapsedComment" v-if="isCollapsed === true">
              <div class="nestedComment">
                  <!--              使用v-for进行评论区的展示-->
                  <div class="postNestedCommentUser" style="display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;">
                      <div class="userInformation">
                          <img src="../../../assets/avatar.jpeg" alt="avatar" width="30" height="30" style="border-radius: 25px">
                          <span style="    font-family: inherit;
    color: black;
    font-size: 18px;
    display: flex;
    font-weight: 400;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;">BQXBQX</span>
                      </div>
                      <div style="display: flex; flex-direction: row;">
                          <div class="iconContainer">
                              <good-button></good-button>
                          </div>
                          <span style="display: flex;
    font-size: 18px;
    flex-wrap: wrap;
    align-content: center;
    font-family: inherit;
    font-weight: 700;
    color: black">71</span>
                      </div>
                  </div>
                  <span style="font-family: inherit;
          color: black;
          font-size: 20px;
">I really want to fuck it too!</span>
                  <br>
                  <span class="timeText">10-09 7:54</span>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import GoodButton from "../../common/goodButton/goodButton.vue";

const isCollapsed = ref(false)

const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value
}
</script>
<style>
.collapseButton{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    font-size: 20px;
    color: black;
}
.nestedComment{
    padding: 5px;
    /*height: 400px;*/
    /*background-color: #e6e6e6;*/
    margin-right: 5px;
}
.postCommentContainer{
    background-color: white;
}
.timeText{
    margin-top: 10px;
    display: flex;
    font-size: 15px;
    color: gray;
    flex-wrap: wrap;
    justify-content: flex-end;
}
.userInformation{
    display: flex;
    gap: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
}
.userComment{
    padding-left: 35px;
    margin-top: 10px;
}
.postCommentContainer{
    padding: 10px;
}
</style>