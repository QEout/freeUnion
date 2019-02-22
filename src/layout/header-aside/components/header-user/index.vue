<template>
  <el-dropdown size="small" class="d2-mr">
    <span class="btn-text">你好 {{info.name}}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="toUserInfo">
        <d2-icon name="user" class="d2-mr-5"/>个人中心
      </el-dropdown-item>
      <el-dropdown-item @click.native="logOff">
        <d2-icon name="power-off" class="d2-mr-5"/>注销
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/user', ['info'])
  },
  methods: {
    ...mapActions('d2admin/account', ['logout']),
    /**
     * @description 登出
     */
    toUserInfo () {
      if (this.info.name !== '游客') {
        this.$router.push({
          name: 'userInfo'
        })
      } else {
        this.$router.push({
          name: 'login'
        })
      }
    },
    logOff () {
      this.logout({
        vm: this,
        confirm: true
      })
    }
  }
}
</script>
