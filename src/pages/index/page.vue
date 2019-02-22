<template>
  <d2-container class="page">
    <el-row class="row">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <swiper/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <teamPk/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple frame"><job/></div>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import swiper from './components/swiper'
import teamPk from './components/teamPk'
import job from './components/job'
export default {
  components: {
    swiper: swiper,
    teamPk: teamPk,
    job:job
  },
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.el-row {
  padding-bottom: 5px;
  &:last-child {
    padding-bottom: 0;
  }
  height: 50%;
}
.el-col {
  border-radius: 4px;
  height: 100%;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
// .bg-blue{
//   	background: #3587c9;
// 	color: #fff;
// }
.grid-content {
  border-radius: 4px;
  height: 100%;
  margin-right: 5px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

  .frame {
  position: relative;
  overflow: hidden;
  background: #12c2e9;
  background: linear-gradient(45deg, #fff940, #9c61a0, #12c2e9);
  color: #333;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
