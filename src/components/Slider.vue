<template>
    <el-slider v-model="value2" :min="-50" :max="50"></el-slider>
</template>

<script>
  export default {
    data() {
      return {
        value2: 0,
      };
    },
  };
</script>

<style>
  .el-slider__bar, .el-slider__button, .el-slider__button.dragging,
  .el-slider__button.hover, .el-slider__button:hover { background-color: #7D5CFF; };
  .el-input-number__decrease:hover, .el-input-number__increase:hover { color: #7D5CFF; }
</style>
