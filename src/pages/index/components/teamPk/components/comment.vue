<template>
  <div class="container">
    <div class="comment"
         v-for="item in comments" :key="item">
      <div class="info">
        <img class="avatar"
             :src="item.fromAvatar"
             width="36"
             height="36" />
        <div class="right">
          <div class="name">{{item.fromName}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="control">
        <span class="like"
              :class="{active: item.isLike}"
              @click="likeClick(item)">
          <i class="fa fa-thumbs-o-up"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
        <span class="comment-reply"
              @click="showCommentInput(item,item)">
          <i class="fa fa-comments-o"></i>
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item"
             v-for="reply in item.reply" :key="reply">
          <div class="reply-content">
            <span class="from-name">{{reply.fromName}}</span><span>: </span>
            <span class="to-name">@{{reply.toName}}</span>
            <span>{{reply.content}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.date}}</span>
            <span class="reply-text"
                  @click="showCommentInput(item, reply)">
              <span>回复</span>
            </span>
          </div>
        </div>
        <div class="write-reply"
             @click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">我也评论一下吧</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper"
               v-if="showItemId ===item.id">
            <el-input class="gray-bg-input"
                      v-model="inputComment"
                      type="textarea"
                      :rows="2"
                      autofocus
                      placeholder="写下你的评论">
            </el-input>
            <div class="btn-control">
              <span class="cancel"
                    @click="cancel">取消</span>
              <el-button class="btn"
                         type="success"
                         round
                         @click="commitComment(item)">确定</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  components: {},
  data() {
    return {
      inputComment: '',
      showItemId: '',
      cType: 0,
      time: dayjs().format('MM-DD HH:mm')
    }
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 点赞
     */
    likeClick(item) {
      if (item.isLike === null) {
        Vue.$set(item, 'isLike', true)
        item.likeNum++
      } else {
        if (item.isLike) {
          item.likeNum--
        } else {
          item.likeNum++
        }
        item.isLike = !item.isLike
      }
    },

    /**
     * 点击取消按钮
     */
    cancel() {
      this.showItemId = ''
    },

    /**
     * 提交评论
     */

    commitComment(item) {
      if (this.cType === 1) {
        item.reply.push({
          id: '34523244545', // 主键id
          commentId: 'comment0001', // 父评论id，即父亲的id
          fromId: 'observer223432', // 评论者id
          fromName: '夕阳红', // 评论者昵称
          fromAvatar:
            'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', // 评论者头像
          toId: 'errhefe232213', // 被评论者id
          toName: '犀利的评论家', // 被评论者昵称
          toAvatar:
            'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', // 被评论者头像
          content: this.inputComment, // 评论内容
          date: this.time// 评论时间
        })
      }else{
        this.comments.push({
          id: '34523244545', // 主键id
          commentId: 'comment0001', // 父评论id，即父亲的id
          fromId: 'observer223432', // 评论者id
          fromName: '夕阳红', // 评论者昵称
          fromAvatar:
            'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', // 评论者头像
          toId: 'errhefe232213', // 被评论者id
          toName: '犀利的评论家', // 被评论者昵称
          toAvatar:
            'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', // 被评论者头像
          content: this.inputComment, // 评论内容
          date:  this.time // 评论时间
        })
      }
       this.showItemId = ''
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput(item, reply) {
      this.showItemId = item.id
      if (reply) {
        this.inputComment = '@' + reply.fromName + ' '
        this.cType = 1
      } else {
        this.inputComment = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 0 5px;
  box-sizing: border-box;
  .comment {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-bottom: 1px solid #f2f6fc;
    .info {
      display: flex;
      align-items: center;
      .avatar {
        border-radius: 50%;
        height: 40px;
        width: 40px;
      }
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 6px;
        .name {
          font-size: 14px;
          color: #303133;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .date {
          font-size: 8px;
          color: #909399;
        }
      }
    }
    .content {
      font-size: 14px;
      color: #303133;
      line-height: 10px;
      padding: 3px 0;
    }
    .control {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      font-size: 10px;
      color: #909399;
      .like {
        display: flex;
        align-items: center;
        margin-left: 10px;
        cursor: pointer;
        &.active,
        &:hover {
          color: #409eff;
        }
        .fa {
          font-size: 17px;
          margin-right: 5px;
        }
      }
      .comment-reply {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: #333;
        }
        .fa {
          font-size: 17px;
          margin-right: 5px;
        }
      }
    }
    .reply {
      border-left: 2px solid #dcdfe6;
      .item {
        margin: 0 5px;
        padding: 5px 0;
        border-bottom: 1px dashed #ebeef5;
        .reply-content {
          display: flex;
          align-items: center;
          font-size: 10px;
          color: #303133;
          .from-name {
            color: #409eff;
          }
          .to-name {
            color: #409eff;
            margin-left: 5px;
            margin-right: 5px;
          }
        }
        .reply-bottom {
          display: flex;
          align-items: center;
          margin-top: 6px;
          font-size: 8px;
          color: #909399;
          .reply-text {
            display: flex;
            align-items: center;
            margin-left: 5px;
            cursor: pointer;
            &:hover {
              color: #333;
            }
            .icon-comment {
              margin-right: 5px;
            }
          }
        }
      }
      .write-reply {
        display: flex;
        align-items: center;
        font-size: 10px;
        color: #909399;
        padding: 5px;
        &:hover {
          color: #303133;
        }
        .el-icon-edit {
          margin-right: 5px;
        }
      }
      .fade-enter-active,
      fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }
      .input-wrapper {
        padding: 5px;
        .btn-control {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-top: 5px;
          .cancel {
            font-size: 12px;
            color: #606266;
            margin-right: 10px;
            cursor: pointer;
            &:hover {
              color: #333;
            }
          }
          .confirm {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
