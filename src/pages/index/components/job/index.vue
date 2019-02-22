<template>
  <div class="center">
    <ul style="display:flex;">
      <li is='jobList'
          v-for='list in res1'
          v-bind:key='list.id'
          @toggleD='toggleData'
          v-bind:title='list.JName'
          v-bind:pay='list.JPay'
          v-bind:addr='list.JAdd'
          v-bind:depict='list.depict'
          v-bind:date='list.JDate'
          v-bind:value='list.value'
          >
        <div></div>
      </li>
    </ul>
    <div class="stats">
      <div class="users">
        <div class="labels">
          关注量
          <span class="min">50 人</span>
          <span class="max">100 人</span>
        </div>
        <div class="progress">
          <div class="value" :style="'width:'+val+'%'"></div>
        </div>
      </div>
      <div class="depict"
           label="描述">{{depict}}</div>
      <div class="foot"
           style="display:table;">
        <el-tag>发布:{{author}}</el-tag>
        <el-tag>标签二</el-tag>
        <el-tag>标签三</el-tag>
        <el-badge :value="1012"
                  :max="999"
                  class="item"
                  style="margin-right:40px;float:right;">
          <el-popover placement="left"
                      width="400"
                      trigger="click">
            <el-button size="small"
                       slot="reference">评论</el-button>
            <commenting :notices="dataM" />
            <el-input v-model="inputM"
                      placeholder="请输入内容"
                      @keyup.enter.native="sendM">
              <el-button slot="append"
                         @click="sendM">发送</el-button>
            </el-input>
          </el-popover>
        </el-badge>
      </div>
      <!-- <vue-star animate="animated tada" color="#F05654">
        <i slot="icon" class="fa fa-heart"></i>
      </vue-star>-->
    </div>
  </div>
</template>
<script>
import { FindJob } from '@/api/sys/job'
// import { mapActions } from "vuex"
import comments from './components/comments'
import JobList from './components/JobList'
export default {
  components: {
    commenting: comments,
    jobList: JobList
  },
  data() {
    return {
      inputM: '',
      author: '张起灵',
      dataM: ['msg1', 'msg2', 'msg3', 'msg4'],
      depict: '查看详细信息请点击上面的招聘列表',
      res1: [],
      val:''
    }
  },
  created() {
    this.test()
  },
  methods: {
    // ...mapActions("d2admin/findJob", ["test"]),
    test() {
      FindJob({})
        .then(async res => {
          this.res1 = res.job
          console.log(this.res1)
        })
        .catch(err => {
          console.log('err: ', err)
        })
    },
    sendM() {
      if (this.inputM === '') {
        this.$message.error('发送内容为空')
      } else {
        this.dataM.push(this.inputM)
        this.$message({
          message: '评价成功',
          type: 'success'
        })
      }
    },
    toggleData(data) {
      this.depict = data.dep,
      this.val= data.val
    }
  }
}
</script>

<style>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pack {
  width: 8rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  background: #fff;
  margin: 8px 10px 0 0;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  border-radius: 0 0 5px 5px;
}
.pack:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  cursor: pointer;
}
.pack:hover .title {
  background: #19b955;
  margin: 0px;
}
/* .pack.pro:hover ~ .stats .users .progress .value {
  width: 50%;
}

.pack.basic:hover ~ .stats .users .progress .value {
  width: 2%;
}

.pack.premium:hover ~ .stats .users .progress .value {
  width: 100%;
} */
.depict {
  padding: 5px;
}
.stats {
  width: 100%;
  height: inherit;
  background: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  color: #333;
  margin: 10px 0 0 0;
  padding: 5px;
}
.stats > div {
  display: flex;
  flex-direction: column;
}
.stats > div .labels {
  display: flex;
  justify-content: space-between;
}
.stats > div .progress {
  width: 100%;
  height: 10px;
  background: #ddd;
  margin-top: 5px;
  border-radius: 5px;
}
.stats > div .progress .value {
  background: linear-gradient(to right, #00d2ff, #3a7bd5);
  height: 100%;
  border-radius: 5px;
  width: 0;
  transition: all 0.7s ease;
}
.stats .space {
  margin: 20px 0;
}
/* .moreB {
  margin: 4em 0 0 0;
  line-height: 1.5;
  background-color: #0000;
  color: white;
} */
.foot {
  position: absolute;
  bottom: 0;
  padding: 2px;
  color: #409eff;
  width: 100%;
}
.el-tag {
  margin: 5px;
  cursor: pointer;
}
</style>