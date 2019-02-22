<template>
  <d2-container>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="person-home">
           <span slot="label"><i class="fa fa-id-card-o"></i> 个人中心</span>
          <d2-person-home />
        </el-tab-pane>
        <el-tab-pane name="my-friends">
           <span slot="label"><i class="fa fa-hand-peace-o"></i> 我的好友</span>
          <d2-my-friends />
        </el-tab-pane>
        <el-tab-pane name="union-sub">
           <span slot="label"><i class="fa fa-object-group"></i> 社团订阅</span>
          <d2-union-sub />
        </el-tab-pane>
        <el-tab-pane name="fav-fold">
           <span slot="label" name="fav-fold"><i class="fa fa-bookmark-o"></i> 收藏夹</span>
          <d2-fav-fold />
        </el-tab-pane>
      </el-tabs>
    </template>
    <template slot="footer">
        <el-badge :value="12" class="fans-item">
          <el-button size="small">关注数</el-button>
        </el-badge>
        <el-badge :value="35" class="fans-item">
          <el-button size="small">粉丝数</el-button>
        </el-badge>
    </template>
  </d2-container>
</template>

<script>
export default {
  components: {
    "d2-person-home": () => import("./components/person-home"), 
    "d2-my-friends": () => import("./components/my-friends"),
    "d2-union-sub": () => import("./components/union-sub"),
    "d2-fav-fold": () => import("./components/fav-fold")
  },
  data() {
    return {
      name: "userInfo",
      activeName: "person-home",
      a: true
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style>

  .fans-item {
    margin-right:20px;
}
  .fans-item button{
    border:0px;
  }
</style>
