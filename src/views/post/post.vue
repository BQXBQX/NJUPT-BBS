<template>
  <div class="postContainer">
    <PostTopNav></PostTopNav>
    <div class="postContent">
      <PostContent></PostContent>
      <div class="postCommentNum">
        <span
          style="
            font-size: 20px;
            color: gray;
            font-family: inherit;
            padding: 10px;
            font-weight: 400;
          "
          >共 43 条评论</span
        >
      </div>
      <div class="postCommentNav">
        <div style="display: flex; flex-wrap: wrap; align-content: center">
          <svg
            t="1697428258871"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="27376"
            width="200"
            height="200"
          >
            <path
              d="M828.1 529.5h-388V327.2c0-65.5-53.1-118.6-118.6-118.6s-118.6 53.1-118.6 118.6c0 59 43.1 107.8 99.5 116.9V613c0 108.5 88 196.5 196.5 196.5H683c124.4 0 225.2-100.8 225.2-225.2V448.4l-80.1 81.1z"
              fill="#F4CA19"
              p-id="27377"
            ></path>
            <path
              d="M682.8 827h-184c-118 0-213.9-96-213.9-213.9V458.2c-58.5-16.1-99.5-69-99.5-131 0-75 61-136.1 136.1-136.1 75 0 136.1 61 136.1 136.1V512h363.2l74.8-75.8c5-5 12.5-6.6 19-3.9 6.5 2.7 10.8 9.1 10.8 16.1v135.9C925.5 718.1 816.6 827 682.8 827zM321.5 226.1c-55.8 0-101.2 45.4-101.2 101.2 0 49.8 35.7 91.7 84.8 99.7 8.4 1.4 14.6 8.7 14.6 17.2v168.9c0 98.7 80.3 179 179 179h184.1c114.5 0 207.7-93.2 207.7-207.7V491l-50.1 50.7c-3.3 3.3-7.7 5.2-12.4 5.2H440c-9.6 0-17.4-7.8-17.4-17.4V327.2c0-55.7-45.4-101.1-101.1-101.1z"
              fill="#4C4848"
              p-id="27378"
            ></path>
            <path
              d="M321.5 463.3c-17.6 0-34.8-3.3-51.1-9.9-8.9-3.6-13.2-13.8-9.6-22.7 3.6-8.9 13.8-13.2 22.7-9.6 25 10.1 53.6 9.7 78.3-1 8.8-3.9 19.1 0.2 23 9 3.8 8.8-0.2 19.1-9 23-17.2 7.4-35.5 11.2-54.3 11.2z"
              fill="#4C4848"
              p-id="27379"
            ></path>
            <path
              d="M678.8 734.3H574.5c-40.4 0-73.2-32.8-73.2-73.2V606H752v55.1c0 40.5-32.8 73.2-73.2 73.2z"
              fill="#F69D29"
              p-id="27380"
            ></path>
            <path
              d="M202.8 364h-87.2c-0.8 0-1.5-0.7-1.5-1.5v-52.4c0-0.8 0.7-1.5 1.5-1.5h87.2V364z"
              fill="#FF5A5A"
              p-id="27381"
            ></path>
            <path
              d="M202.8 381.5h-62.6c-24 0-43.5-19.5-43.5-43.5v-3.2c0-24 19.5-43.5 43.5-43.5h62.6c9.6 0 17.4 7.8 17.4 17.4V364c0.1 9.7-7.7 17.5-17.4 17.5z m-62.6-55.4c-4.8 0-8.6 3.9-8.6 8.6v3.2c0 4.8 3.9 8.6 8.6 8.6h45.1V326h-45.1z"
              fill="#4C4848"
              p-id="27382"
            ></path>
            <path
              d="M305.4 323.3m-17.4 0a17.4 17.4 0 1 0 34.8 0 17.4 17.4 0 1 0-34.8 0Z"
              fill="#4C4848"
              p-id="27383"
            ></path>
          </svg>
        </div>
        <InputComment></InputComment>
      </div>
      <postComment></postComment>
      <postComment></postComment>
    </div>
    <PostBottom></PostBottom>
  </div>
</template>
<script setup>
import PostTopNav from "../../components/post/postTopNav/postTopNav.vue";
import PostContent from "../../components/post/postContent/postContent.vue";
import PostBottom from "../../components/post/postBottom/postBottom.vue";
import PostComment from "../../components/post/postComment/postComment.vue";
import InputComment from "../../components/common/inputComment/inputComment.vue";
</script>
<style>
@import "./post.css";
</style>
