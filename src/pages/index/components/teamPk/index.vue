<template>
  <div class="teambox">
    <el-col :span="4"
            class="title">
      <div>
        <img :src="`${$baseUrl}image/team/wz.jpg`"
             alt="">
      </div>
      <div class="title2">
        <p style="color:#3587c9">王者荣耀队</p>
        <p class="live">直播中</p>
        <p style="color:#d41819">英雄联盟队</p>
      </div>
      <div>
        <img :src="`${$baseUrl}image/team/lol.jpg`"
             alt="">
      </div>
    </el-col>
    <el-col :span="20">
      <section class="teamA">
        <el-tabs type="border-card"
                 class="tabA">
          <el-tab-pane label="出场队员">
            <div style="display:flex;">
              <el-card class="TMcard parallelogram"
                       :body-style="{ padding: '0px' }">
                <img :src="`${$baseUrl}image/demo/demo.jpg`"
                     class="Timage">
                <div class="TMbot">
                  <span>好吃的汉堡好吃的</span>
                  <span class="Amate">队长</span>
                </div>
              </el-card>
              <el-card class="TMcard parallelogram"
                       :body-style="{ padding: '0px' }">
                <img :src="`${$baseUrl}image/demo/demo.jpg`"
                     class="Timage">
                <div class="TMbot">
                  <span>好吃的汉堡好吃的</span>
                  <span class="Amate">打野</span>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史战绩"
                       style="">
            <el-row :span=8>
              <el-col :span=24>
                <div class="Tinfo">房间看了电视剧开发的</div>
              </el-col>
            </el-row>
            <el-row :span=8>
              <el-col :span=24>
                <div class="Tinfo">房间看了电视剧开发的</div>
              </el-col>
            </el-row>
            <el-row :span=8>
              <el-col :span=24>
                <div class="Tinfo">
                  <el-popover placement="top"
                              trigger="hover"
                              v-model="show">
                    <radar :id="'Achart'" :team="team"  :ave="ave"></radar>
                    <el-button slot="reference">查看</el-button>
                  </el-popover>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="评论留言"></el-tab-pane>
        </el-tabs>
      </section>
      <section class="teamB">

      </section>
    </el-col>

  </div>
</template>
<script>
import teammate from './components/teammate.vue'
import radar from './components/radar.vue'
export default {
  components: {
    teamer: teammate,
    radar: radar
  },
  data() {
   
    return {
      team:[80,20,0.8,2000],
      ave:[50,19,0.5,600],
      show:false,
      teamerList: [
        { color: 'dsfd', class: 'red' }, //todu:只能使用英文作为昵称
        { color: 'blue', class: 'blue' }
      ]
    } 
  },
  mounted(){
  },
    watch: {
 
    },
    methods:{
    //   draw(){
    //     let Achart=document.getElementById("Achart")
    //     this.Achart.setOption({
    //     series: [{
    //         // 根据名字对应到相应的系列
    //         name: '此战队',
    //         data: team
    //     },
    //     {
    //         name: '同类型均值',
    //         data: ave
    //     }
    //     ]
    // })
    //   }
    }
}
</script>
<style >
.Tinfo {
  padding: 5px;
  background: #12c2e9;
  margin: 5px;
  border-radius: 4px;
}
.el-col {
  height: 100%;
  overflow: hidden;
}
.tabA {
  background: #3587c9;
  height: 100%;
  border: 0px;
}

.title {
  background: #e5e9f2;
}
.title > div {
  width: 100%;
  height: 33.4%;
}
.title img {
  height: 100%;
  width: 100%;
}
.title2 {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  font-weight: 600;
}
.live {
  font-size: 15px;
  color: white;
  background-color: #19b955;
  width: 100%;
  cursor: pointer;
  padding: 5px;
  overflow: hidden;
}
section {
  position: relative;
  height: 50%;
  color: #fff;
  text-align: center;
}
.teamA {
  border-radius: 0 4px 0 0;
}
.teamB {
  background: #d41819;
  border-radius: 0 0 4px 0;
}

.teambox {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #3587c9;
  /* we don't want the pseudo-elements sticking out */
}
.TMcard {
  margin: -10px 12px -10px -10px;
  width: 80px;
  cursor: pointer;
}
.TMbot {
  padding: 2px;
  display: flex;
  align-items: center;
}
.TMbot span {
  font-size: 13px;
}
.Timage {
  width: 100%;
}
.Amate {
  color: #3587c9;
  padding: 1px;
  border: 2px solid;
  border-radius: 5px;
}
.Bmate {
}
/* 平行四边形 */
.parallelogram {
  transform: skew(-3deg);
  -webkit-transform: skew(-3deg);
  -moz-transform: skew(-3deg);
  -o-transform: skew(-3deg);
  -ms-transform: skew(-3deg);
}
</style>

