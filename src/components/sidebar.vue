<template>
<el-row class="tac custom-scrollbar" id="vpic_sidebar">
  <el-col :span="24">
    <el-menu unique-opened class="el-menu-vertical-demo" theme="dark">
      <el-submenu index="1">
        <template slot="title"><i class="my-icon-cut my-icon"></i>裁切</template>
        <el-submenu index="1-1">
          <template slot="title">固定比例</template>
          <el-menu-item-group>
            <el-menu-item index="1-1-1" data-aspectratio="16/9" @click="setAspectRatio">宽屏/16:9</el-menu-item>
            <el-menu-item index="1-1-2" data-aspectratio="4/3" @click="setAspectRatio">标准/4:3</el-menu-item>
            <el-menu-item index="1-1-3" data-aspectratio="1/1" @click="setAspectRatio">正方形</el-menu-item>
            <el-menu-item index="1-1-4" data-aspectratio="2/3" @click="setAspectRatio">2:3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="1-2" data-aspectratio="NaN" @click="setAspectRatio">自由裁切</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="my-icon-edit my-icon"></i>调整</template>
        <el-submenu index="2-1">
          <template slot="title">亮度 / 对比度</template>
          <el-menu-item-group>
            <el-menu-item index="2-1-1">
              <div class="val-tag clearfix">
                <span class="fl">亮度</span>
                <span class="fr">{{ brightness }}</span>
              </div>
              <el-slider v-model="brightness" :min="-50" :max="50" :show-tooltip="false" @change="setBrightness"></el-slider>
            </el-menu-item>
            <el-menu-item index="2-1-2">
              <div class="val-tag clearfix">
                <span class="fl">对比度</span>
                <span class="fr">{{ contrast }}</span>
              </div>
              <el-slider v-model="contrast" :min="-50" :max="50" :show-tooltip="false" @change="setContrast"></el-slider>
            </el-menu-item>
            <el-menu-item index="2-1-3">
              <el-button type="primary" @click="saveResult">确定</el-button>
              <el-button @click="resetGrayscale">重置</el-button>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title">色调 / 饱和度</template>
          <el-menu-item-group>
            <el-menu-item index="2-2-1">
              <div class="val-tag clearfix">
                <span class="fl">色调</span>
                <span class="fr">{{ hue }}</span>
              </div>
              <el-slider v-model="hue" :min="0" :max="100" :show-tooltip="false" @change="setHue"></el-slider>
            </el-menu-item>
            <el-menu-item index="2-2-2">
              <div class="val-tag clearfix">
                <span class="fl">饱和度</span>
                <span class="fr">{{ saturation }}</span>
              </div>
              <el-slider v-model="saturation" :min="-50" :max="50" :show-tooltip="false" @change="setSaturation"></el-slider>
            </el-menu-item>
            <el-menu-item index="2-2-3">
              <el-button type="primary" @click="saveResult">确定</el-button>
              <el-button @click="resetGrayscale">重置</el-button>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
<!--         <el-menu-item-group>
          <el-menu-item index="1-1">亮度 / 对比度</el-menu-item>
          <el-menu-item index="1-2">色相 / 饱和度</el-menu-item>
        </el-menu-item-group> -->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="my-icon-blur my-icon"></i>模糊</template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="my-icon-fun my-icon"></i>Fun</template>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
    data() {
      return {
        brightness: 0,
        contrast: 0,
        hue: 0,
        saturation: 0,
      };
    },
    methods: {
      setAspectRatio(e) {
        const ratioMap = {
          '16/9': 16 / 9,
          '4/3': 4 / 3,
          '1/1': 1 / 1,
          '2/3': 2 / 3,
          NaN,
        };

        if (this.$store.state.uploaded) {
          this.$store.state.cropper.setAspectRatio(ratioMap[e.$el.dataset.aspectratio]);
        } else {
          this.$message({
            message: '请先导入图片哦',
            type: 'warning',
          });
        }
      },
      setBrightness() {
        this.$store.dispatch('setBrightness', this.brightness);
      },
      setContrast() {
        this.$store.dispatch('setContrast', this.contrast);
      },
      setHue() {
        this.$store.dispatch('setHue', this.hue);
      },
      setSaturation() {
        this.$store.dispatch('setSaturation', this.saturation);
      },
      saveResult() {
        const imgUrl = this.$store.state.storeUrl;

        this.$store.dispatch('setImgUrl', imgUrl);
      },
      resetGrayscale() {
        this.brightness = 0;
        this.contrast = 0;
      },
    },
  };
</script>

<style>
  .fl { float: left; }
  .fr { float: right; }
  .clearfix:after { display: block; content: ''; clear: both; }
  .el-menu { border-radius: 0; }
  .el-menu-item-group__title { padding: 0; }
  .el-submenu .el-menu-item { position: relative; padding: 12px 30px !important; border-bottom: 1px solid #3c3f43; border-top: 1px solid #3c3f43; height: 80px; }
  .el-submenu .el-menu-item .val-tag { display: inline;  margin: 0; padding: 0; line-height: 1; font-size: 14px; color: #828890; }
  /*.el-menu */
  .el-submenu__title { padding-left: 80px !important; height: 60px; text-align: left; font-size: 18px; }
  .el-submenu__icon-arrow { right: 30px; }

  .el-slider__runway { margin: 18px 0; }
  .el-slider__runway, .el-slider__bar { height: 3px; }
  .el-slider__button-wrapper { line-height: 36px; }
  .el-slider__button { width: 11px; height: 11px; }

  .v-submenu { font-size: 14px; }
  .my-icon { display: inline-block; vertical-align: sub; margin-right: 10px; width: 24px; height: 24px; }
  .my-icon-cut { background: url('../../static/sprites/cut.png'); background-size: 24px 24px; }
  .my-icon-edit { background: url('../../static/sprites/editor.png'); background-size: 24px 24px; }
  .my-icon-blur { background: url('../../static/sprites/blur.png'); background-size: 24px 24px; }
  .my-icon-fun { background: url('../../static/sprites/fun.png'); background-size: 24px 24px; }
</style>
