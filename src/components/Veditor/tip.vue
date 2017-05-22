<template>
  <div>
    <el-alert
      v-show="uploaded"
      type="success"
      :title="successTip.title"
      :description="successTip.desc">
    </el-alert>
    <el-alert
      v-show="!uploaded"
      type="info"
      :title="importTip.title"
      :description="importTip.desc">
    </el-alert>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        successTip: {
          title: '图片导入成功',
          desc: '1.按住鼠标左键拖动图片； 2.滑动滚轮缩放至最佳视角；3.鼠标双击切换至截图工具；',
        },
        importTip: {
          title: '请导入图片',
          desc: '1.可直接拖入图片至下方区域； 2.可点击下方导入按钮选取图片；',
        },
      };
    },
    computed: {
      uploaded() {
        return this.$store.state.uploaded;
      },
    },
  };
</script>

<style lang="css">
  .el-alert {
    position: absolute;
    z-index: 1;
  }
</style>
