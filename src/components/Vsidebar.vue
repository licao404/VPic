<template>
<el-row class="tac custom-scrollbar" id="vpic_sidebar">
  <el-col :span="24">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="1">
        <template slot="title"><i class="my-icon-cut my-icon"></i>裁切</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="my-icon-edit my-icon"></i>调整</template>
        <el-submenu index="2-1">
          <template slot="title" class="v-submenu">亮度 / 对比度</template>
          <el-menu-item-group>
            <el-menu-item index="2-1-1">
              <slider></slider>
            </el-menu-item>
            <el-menu-item index="2-1-2">
              <slider></slider>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title" class="v-submenu">色相 / 饱和度</template>
          <el-menu-item-group>
            <el-menu-item index="2-2-1">色相</el-menu-item>
            <el-menu-item index="2-2-2">饱和度</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
<!--         <el-menu-item-group>
          <el-menu-item index="1-1">亮度 / 对比度</el-menu-item>
          <el-menu-item index="1-2">色相 / 饱和度</el-menu-item>
        </el-menu-item-group> -->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="my-icon-blur my-icon"></i>模糊</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="my-icon-fun my-icon"></i>Fun</template>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  import Slider from './Slider';

  export default {
    components: {
      Slider,
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style>
  .el-menu { border-radius: 0; }
  .el-menu-item-group__title { padding: 0; }
  .el-submenu .el-menu-item { padding: 0 30px !important; border-bottom: 1px solid #3c3f43; border-top: 1px solid #3c3f43; }
  /*.el-menu */
  .el-submenu__title { padding-left: 80px !important; height: 60px; text-align: left; font-size: 18px; }
  .el-submenu__icon-arrow { right: 30px; }
  .el-slider__runway { margin: 22px 0; }
  .el-slider__runway, .el-slider__bar { height: 3px; }
  .el-slider__button { width: 11px; height: 11px; }

  .v-submenu { font-size: 14px; }
  .my-icon { display: inline-block; vertical-align: sub; margin-right: 10px; width: 24px; height: 24px; }
  .my-icon-cut { background: url('../../static/sprites/cut.png'); background-size: 24px 24px; }
  .my-icon-edit { background: url('../../static/sprites/editor.png'); background-size: 24px 24px; }
  .my-icon-blur { background: url('../../static/sprites/blur.png'); background-size: 24px 24px; }
  .my-icon-fun { background: url('../../static/sprites/fun.png'); background-size: 24px 24px; }
</style>
