<template>
  <div class="mineContainer">
      <div class="navUserInformation">
          <div style="
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: center;
          justify-content: space-between;">
              <div class="mineInformation">
                  <div>
                      <img src="../assets/avatar.jpeg" alt="avatar" class="mineAvatar">
                  </div>
                  <div style="display: flex;   flex-direction: column; margin-left: 10px">
                      <span class="mineNameText text">BQXBQX</span>
                      <span class="mineIDText text">ID:7D72E864</span>
                  </div>
              </div>
              <div style="
               display: flex;
               align-content: center;
               justify-content: center;
               flex-wrap: wrap;">
                  <svg t="1697292994808" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7516" width="200" height="200"><path d="M605.086476 512.146286L338.358857 245.272381l51.760762-51.687619 318.415238 318.585905L390.095238 830.415238l-51.687619-51.736381z" p-id="7517"></path></svg>
              </div>
          </div>
          <div class="followingContent">
              <span class="text followInfo">followers:</span>
              <span class="text followNum">54  </span>
              <span class="text followInfo">following:</span>
              <span class="text followNum">41  </span>
          </div>
      </div>
  </div>
</template>
<script setup>

</script>
<style>
.navUserInformation{
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
}
.mineContainer{
    flex-direction: column;
    position: absolute;
    display: flex;
    top: 10px;
    bottom: 84px;
    width: 100%;
}
.mineAvatar{
    width: 80px;
    height: 80px;
    border-radius: 15px;
}
.mineInformation{
    display: flex;
}
.mineNameText{
    font-size: 25px;
    color: black;
}
.text{
    color: black;
    font-family: inherit;
}
.mineIDText{
    font-size: 15px;
    color: gray;
}
.followInfo{
    font-size: 20px;
}
.followNum{
    font-size: 20px;
    color: gray;
}
.followingContent{
    display: flex;
    gap: 5%;
}
</style>