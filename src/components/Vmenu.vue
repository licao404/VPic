<template>
<el-row class="tac" id="vpic_menu">
  <div class="logo"></div>
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
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="my-icon-blur my-icon"></i>模糊</template>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
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
  #vpic_menu { width: 300px; box-shadow: 2px 1px 10px rgba(0, 0, 0, .1) }
  .logo { height: 100px; background: url('../../static/image/LOGO-s.png') no-repeat center center; }
  .el-menu { border-radius: 0; }
  .el-submenu__title { font-size: 18px; }
  .my-icon { display: inline-block; vertical-align: sub; margin-right: 10px; width: 24px; height: 24px; }
  .my-icon-cut { background: url('../../static/sprites/cut.png'); background-size: 24px 24px; }
  .my-icon-edit { background: url('../../static/sprites/editor.png'); background-size: 24px 24px;; }
  .my-icon-blur { background: url('../../static/sprites/blur.png'); background-size: 24px 24px; }
</style>
