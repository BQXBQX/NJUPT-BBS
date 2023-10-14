<template>
    <div class = postItemContainer>
        <div class="postItemTopNav">
            <div class="userInformation">
                <div class="avatar">
                    <img src="../assets/avatar.png" alt="avatar" width="50" height="50">
                </div>
                <div class="user">
                    <p class="userName">BQXBQX</p>
                    <p class="postTime">35秒前发表</p>
                </div>
            </div>
            <div class="concernButton">关注 TA</div>
        </div>
        <div class="postItemContent">
            <span class="textContent">日前，国家自然科学基金委员会公布了2023年国家自然科学基金集中接收申请项目评审结果，我校获批立项资助125项（其中，国家杰出青年科学基金项目1项、优秀青年科学基金项目4项、重大研究计划培育项目1项、面上项目40项、青年科学基金项目79项），获资助直接经费5618.5万元。获资助项目数较2022年同期增长22.55%，经费数较2022年同期增长20.75%，获资助项目数和经费数均再创历史新高！此外，国家级人才类项目数再创历史新高！</span>
        </div>
        <div class="postItemBottomNav">
            
        </div>
    </div>
</template>
<script setup>

</script>
<style>
.postItemContainer{

}
.postItemTopNav{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.userInformation{
    display: flex;
    gap: 10px;
}
.avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}
.user{
    height: 50px;
}
p{
    margin: 0;
    height: 25px;
}
.userName{
    font-weight: bold;
    color: black;
}
.postTime{
    color: gray;
}
.concernButton{
    border: 2px solid #08ae13;
    text-align: center;
    display: flex;
    width: 18%;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    color: #08ae13;
    border-radius: 15px;
}
.textContent{
    font-size: 18px;
    color: black;
    font-weight: 400;
}
.postItemContent{
    margin-top: 10px;
}
</style>