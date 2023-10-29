<template>
  <div class="postDraftsContainer">
    <div class="postDraftsTop">
      <svg
        t="1698564029543"
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
      <span style="color: black; font-size: 20px">本地草稿</span>
      <svg
        t="1698564430694"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="9806"
        width="200"
        height="200"
      >
        <path
          d="M512 0C373.76 0 245.76 51.2 148.48 148.48 56.32 245.76 0 373.76 0 506.88 0 793.6 225.28 1024 506.88 1024c286.72 0 517.12-225.28 517.12-506.88C1024 230.4 798.72 0 512 0z m0 957.44c-250.88 0-450.56-199.68-445.44-450.56 0-245.76 199.68-445.44 445.44-440.32 245.76 0 445.44 199.68 445.44 445.44 0 250.88-194.56 445.44-445.44 445.44zM460.8 424.96v163.84c0 35.84 20.48 46.08 56.32 46.08 35.84 0 35.84-20.48 35.84-46.08 5.12-97.28 5.12-194.56 10.24-291.84 5.12-35.84 0-61.44-51.2-61.44S455.68 256 455.68 296.96L460.8 424.96z m117.76 337.92c-5.12 40.96-30.72 61.44-66.56 61.44-35.84 0-61.44-20.48-66.56-56.32-5.12-40.96 20.48-61.44 61.44-61.44 40.96-5.12 61.44 20.48 71.68 56.32z"
          fill="#FAB427"
          p-id="9807"
        ></path>
      </svg>
    </div>
    <div class="postDraftsContent">
      <div v-for="(item, index) in draftsContent" :key="item.id" class="postDraftItem" @click="router.push('/sendpost/'+index)">
        <img :src="item.postImgs[0]" alt="imgItem" />
        <div class="spanContainer">
          <span
            style="
              font-size: 14px;
              color: black;
              font-family: inherit;
              padding: 0 8px;
              text-align: start;
              font-family: inherit;
              -webkit-line-clamp: 2; /* 设置最大行数为2行 */
              -webkit-box-orient: vertical;
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              max-width: 100%;
              box-sizing: border-box;
            "
            v-if="item.postTitle !== ''"
            >{{ item.postTitle }}</span
          >
          <span
            style="
              font-size: 14px;
              color: black;
              font-family: inherit;
              padding: 0 8px;
              text-align: start;
              font-family: inherit;
              -webkit-line-clamp: 2; /* 设置最大行数为2行 */
              -webkit-box-orient: vertical;
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              max-width: 100%;
              box-sizing: border-box;
            "
            v-if="item.postTitle === ''"
          >
            {{ item.postText }}
          </span>
          <div class="itemBottom">
            <span style="font-size: 8px; color: gray">今天 19:08</span>
            <span
              style="
                font-size: 15px;
                color: white;
                background-color: brown;
                height: 20px;
                width: 20px;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: inherit;
              "
              @click.stop="deleteDraft(index)"
              >x</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import router from "../../router";

let draftsContent = ref([]);

onMounted(() => {
  const drafts = JSON.parse(localStorage.getItem("postDraftsContent"))
  draftsContent.value = drafts
});

function deleteDraft(index) {
  draftsContent.value.splice(index,1);
  let messageString = JSON.stringify(draftsContent.value)
  localStorage.setItem('postDraftsContent',messageString)

}
</script>

<style scoped>
.itemBottom {
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
img {
  min-height: 20vh;
  width: 47.5vw;
  object-fit: cover;
  height: 220px;
}
.spanContainer {
  margin-top: 10px;
}
.postDraftsContainer {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
}
.postDraftItem {
  overflow: scroll;
  height: fit-content;
  min-height: 200px;
  width: 47.5vw;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 300px;
}
.postDraftsTop {
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
}
.postDraftsContent {
  position: absolute;
  top: 70px;
  width: 100%;
  overflow: scroll;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1vw;
  padding: 0 2vw;
  box-sizing: border-box;
  margin: auto;
}
</style>
