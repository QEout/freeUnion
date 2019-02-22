<template>
  <el-tooltip effect="dark" content="设置" placement="bottom">
    <el-button class="d2-mr btn-text can-hover" type="text" @click="handleClick">
      <d2-icon name="cog" style="font-size: 18px;"/>
    </el-button>
  </el-tooltip>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/user', ['info'])
  },
  methods: {
    handleClick() {
      if (this.info.name !== '游客') {
        this.$router.push({
          name: 'setting'
        })
      } else {
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
}
</script>
