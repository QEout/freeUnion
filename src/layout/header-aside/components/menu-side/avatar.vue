<template>
  <div>
    <el-upload class="avatar-uploader"
               action="https://jsonplaceholder.typicode.com/posts/"
               :show-file-list="false"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl"
           :src="imageUrl"
           class="avatar">
      <i v-else
         class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="avatar-motto">
      <el-input type="textarea"
                placeholder="请输入内容"
                v-model="textarea"
                resize="none"></el-input>
    </div>
  </div>
</template>

<style>
.avatar-uploader {
  position: fixed;
  bottom: 16px;
  left: 3px;
}
.avatar-uploader .el-upload {
  background-color: rgba(217, 217, 217, 0.68);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  background-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  line-height: 60px;
  height: 60px;
  width: 60px;
  text-align: center;
}
.avatar {
  width: 60px;
  height: 60px;
  display: block;
}
.avatar-motto {
  position: fixed;
  bottom: 20px;
  width: 133px;
  left: 65px;
}
.avatar-motto textarea {
  height: 60px;
  padding: 2px;
  font-family: inherit;
  font-size: 14px;
  font-weight:100;
  color: #ffffff;
      background: radial-gradient(ellipse at top left, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
  overflow: hidden;
}
</style>

<script>
export default {
  name: 'd2-layout-header-aside-menu-avatar',
  data() {
    return {
      imageUrl: '',
      input: '',
      textarea: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
