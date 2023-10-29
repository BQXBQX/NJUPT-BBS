<template>
  <div class="sendPostContainer">
    <div class="sendPostTop">
      <svg
        @click="isBackActiveJudge"
        t="1698540996137"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8517"
        width="200"
        height="200"
      >
        <path
          d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z"
          fill="#707070"
          p-id="8518"
        ></path>
      </svg>
      <svg
        @click="isNoticeActiveTrue"
        t="1698541364765"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="9696"
        width="200"
        height="200"
      >
        <path
          d="M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z"
          fill="#8a8a8a"
          p-id="9697"
        ></path>
        <path
          d="M543.334 576h-64.001l-31.246-320.047h128.025z"
          fill="#8a8a8a"
          p-id="9698"
        ></path>
        <path
          d="M512.099 702.965m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"
          fill="#8a8a8a"
          p-id="9699"
        ></path>
      </svg>
    </div>
    <div class="sendPostContent">
      <div class="sendPostImgContainer">
        <div v-for="(item, index) in postImgs" :key="item.id" class="imgItem">
          <img :src="item" :alt="index" />
        </div>
        <div class="moreImg">+</div>
      </div>
      <div class="titleContainer">
        <input
          type="text"
          v-model="postTitle"
          placeholder="填寫標題會有更多贊哦~"
        />
      </div>
      <div class="sendPostSelectPartition">
        <select>
          <option value="" disabled selected hidden>请选择分区，必填~</option>
          <option value="option1">选项1</option>
          <option value="option2">选项2</option>
          <option value="option3">选项3</option>
        </select>
      </div>
      <div class="sendPostTextContent">
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="新增正文"
          v-model="postText"
        ></textarea>
      </div>
    </div>
    <div class="sendPostButtonContainer">
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 60px;
          width: 60px;
          box-sizing: border-box;
          border-radius: 30px;
          justify-content: center;
          background-color: #e6e6e6;
        "
      >
        <svg
          t="1698547249322"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="10919"
          width="200"
          height="200"
        >
          <path
            d="M951.84 898.84H525.55l368.2-247.11a70 70 0 0 0 19.11-97.13L600.34 88.94a70 70 0 0 0-18.17-18.47 32.64 32.64 0 0 0-21.08-10.88l-11.3-1.23-60.66-6.58-98.73-10.71a33 33 0 0 0-21.9 5.46 69.88 69.88 0 0 0-13.83 7.18L53.15 256.07A70 70 0 0 0 34 353.21l366.1 545.5 0.1 0.14H144.88a30 30 0 0 0 0 60h807a30 30 0 0 0 0-60zM491.62 112.4l-50.72 43-15.66-50.2z m-35.29 757.1a10 10 0 0 1-6.37-4.24L83.86 319.77a10 10 0 0 1 2.73-13.88l279.82-187.8 29.06 93.1a32.55 32.55 0 0 0 19.31 21.9 32.61 32.61 0 0 0 31.64-3.83l0.91-0.67 111.21-94.26L863 588a10 10 0 0 1-2.73 13.88L463.84 868a10 10 0 0 1-7.51 1.5z"
            fill="#000000"
            p-id="10920"
          ></path>
          <path
            d="M533.4 235.07a30 30 0 0 0-41.66-8L216.43 413.41a30 30 0 1 0 33.63 49.69l275.32-186.37a30 30 0 0 0 8.02-41.66zM618.22 368.25a30 30 0 0 0-41.66-8L301.25 546.59a30 30 0 0 0 33.63 49.69L610.2 409.91a30 30 0 0 0 8.02-41.66zM669.2 499.28L393.89 685.65a30 30 0 0 0 33.63 49.69L702.83 549a30 30 0 1 0-33.63-49.69z"
            fill="#000000"
            p-id="10921"
          ></path>
        </svg>

        <span style="font-size: 12px; color: black">存草稿</span>
      </div>
      <button
        style="
          width: 70%;
          height: 60px;
          border-radius: 30px;
          background: linear-gradient(70deg, #eec9a3, #ef629f);
        "
      >
        发布笔记
      </button>
    </div>
  </div>
  <transition name="noticeSlide">
    <div v-if="isNoticeActive" class="sendPostNoticeContainer">
      <div class="sendPostNotice">
        <span style="font-size: 20px; text-align: center">发布小贴士</span>
        <div class="noticeContent">
          <span style="font-size: 15px"
            >NJUPT-BBS鼓励向上，真实，原创的内容，含一下内容的笔记不会被推荐:</span
          >
          <ul>
            <li>
              <span style="font-size: 15px"> 含有不文明语言，过度性感照片</span>
            </li>
            <li>
              <span style="font-size: 15px">冒充他人身份，辱骂他人</span>
            </li>
            <li>
              <span style="font-size: 15px"
                >为了刻意博取眼球，使用肮脏字眼作为标题的</span
              >
            </li>
            <li>
              <span style="font-size: 15px">......</span>
            </li>
          </ul>
        </div>
        <button
          @click="isNoticeActiveFalse"
          style="
            height: 40px;
            border-radius: 20px;
            background: linear-gradient(-40deg, #eec9a3, #ef629f);
          "
        >
          我知道了
        </button>
      </div>
    </div>
  </transition>
  <transition name="backSlide">
    <div
      class="isActiveBackContainer"
      v-if="isBackActive"
      @click="isBackActive = false"
    >
      <div class="isActiveBack">
        <div class="topSpan">
          <span style="font-size: 22px; color: gray" @click.stop=""
            >要保存草稿吗？</span
          >
          <span style="font-size: 20px" @click.stop="">直接退出</span>
          <span style="font-size: 20px" @click.stop="">保存退出</span>
        </div>
        <span class="bottomSpan">取消</span>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { useRoute } from "vue-router";
import router from "../../router";
import { onMounted, ref } from "vue";

const postImgs = ref([]);
// const postImgs = ref([
//   "https://i01piccdn.sogoucdn.com/7e5a6939fb641dd4",
//   "https://oss.1381801.com/forum/202210/05/085631b0n166urt6rufkkn.jpg"
// ])
let postTitle = ref("");
let postText = ref("");
let isNoticeActive = ref(false);
let isBackActive = ref(false);
let postContent = ref({});
let postContentStorage = ref([]);
let routerPath = ref();

onMounted(() => {
  let message = localStorage.getItem("postDraftsContent");
  if (message) {
    postContentStorage.value = JSON.parse(message);
    console.log(postContentStorage.value);
  }
  console.log(postContentStorage.value);

  const route = useRoute();
  if (decodeURIComponent(route.path).split("/")[2]) {
    routerPath.value = decodeURIComponent(route.path).split("/")[2];
    let draftMessage = JSON.parse(localStorage.getItem("postDraftsContent"))[
      routerPath.value
    ];
    console.log(draftMessage.postImgs);
    postImgs.value = draftMessage.postImgs;
    postTitle.value = draftMessage.postTitle;
    postText.value = draftMessage.postText;
  }
});

function isNoticeActiveTrue() {
  isNoticeActive.value = true;
}
function isNoticeActiveFalse() {
  isNoticeActive.value = false;
}

function isBackActiveJudge() {
  if (
    postImgs.value.length === 0 &&
    postTitle.value === "" &&
    postText.value === ""
  ) {
    router.go(-1);
  } else {
    postContent.value = {
      postImgs: postImgs.value,
      postTitle: postTitle.value,
      postText: postText.value,
    };
    if (routerPath.value !== undefined) {
      console.log(routerPath.value);
      postContentStorage.value[routerPath.value] = postContent.value
      console.log(postContent.value);
    } else {
      console.log(routerPath.value);
      postContentStorage.value.push(postContent.value);
    }
    let messageString = JSON.stringify(postContentStorage.value);
    localStorage.setItem("postDraftsContent", messageString);
  }
}
</script>
<style scoped>
@import "./sendPost.css";
</style>
