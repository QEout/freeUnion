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
            <!-- <el-row :span=8>
              <el-col :span=24>
                <div class="Tinfo"></div>
              </el-col>
            </el-row>
            <el-row :span=8>
              <el-col :span=24>
                <div class="Tinfo"></div>
              </el-col>
            </el-row> -->
            <el-row>
              <el-col :span=24>
                <div class="Tinfo">
                  <el-popover placement="top"
                              trigger="click"
                              v-model="show">
                    <radar :id="'Achart'"
                           :team="team"
                           :ave="ave"></radar>
                    <span slot="reference"
                          class="refto">
                          在最近5场比赛中获胜4场,超越同类型80%战队,
                      <span style="text-decoration: underline">
                        点击查看全面分析
                      </span>
                    </span>
                  </el-popover>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="评论留言" class="comdiv">
             <comment :comments="commentData"></comment>
          </el-tab-pane>
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
 import comment from './components/comment.vue'
 import { FindComment } from '@/api/sys/teampk'
export default {
  components: {
    teamer: teammate,
    radar: radar,
      comment:comment
  },
  data() {
    return {
      team: [85,21,0.8,2000],
      ave: [50, 19, 0.5, 600],
      show: false,
      teamerList: [
        { color: 'dsfd', class: 'red' }, //todu:只能使用英文作为昵称
        { color: 'blue', class: 'blue' }
      ],
      commentData: []
    }
  },
  mounted() {
    this.test()
  },
  watch: {

  },
  methods: {
    test() {
      FindComment({})
        .then(async res => {
          this.commentData = res.comment
        })
        .catch(err => {
          console.log('err: ', err)
        })
    }
  }
}
</script>
<style >
.comdiv{
  height:145px;
  overflow-y:scroll;
  background:white;
  margin:-15px;
}
.comdiv::scroll-bar{
    width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}
.comdiv::-ms-scrollbar{
    width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}
.comdiv::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
.comdiv::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
    }
.comdiv::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
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
.refto {
  cursor: pointer;
}
</style>

