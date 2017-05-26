<template>
<div>
  <el-row class="tac custom-scrollbar" id="vpic_sidebar">
    <el-col :span="24">
      <el-menu unique-opened class="el-menu-vertical-demo" theme="dark">
        <el-submenu index="1">
          <template slot="title"><i class="my-icon-cut my-icon"></i>裁切</template>
          <el-submenu index="1-1">
            <template slot="title">固定比例</template>
            <el-menu-item-group>
              <el-menu-item v-for="cropItem in cropList" :index="cropItem.order" :data-aspectratio="cropItem.val" @click="setAspectRatio">{{ cropItem.name }}</el-menu-item>
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
                <el-button @click="resetColor">重置</el-button>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2-3">
            <template slot="title">灰度 / 反色</template>
            <el-menu-item-group>
              <el-menu-item index="2-3-1">
                <div class="val-tag clearfix">
                  <span class="fl">灰度</span>
                  <span class="fr">{{ greyscale }}</span>
                </div>
                <el-switch v-model="greyscale" on-text="" off-text="" @change="setGreyscale" on-color="#7D5CFF"></el-switch>
              </el-menu-item>
              <el-menu-item index="2-3-2">
                <div class="val-tag clearfix">
                  <span class="fl">反色</span>
                  <span class="fr">{{ invert }}</span>
                </div>
                <el-switch v-model="invert" on-text="" off-text="" @change="setInvert" on-color="#7D5CFF"></el-switch>
              </el-menu-item>
              <el-menu-item index="2-3-3">
                <el-button type="primary" @click="saveResult">确定</el-button>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="my-icon-blur my-icon"></i>增强</template>
          <el-submenu index="3-1">
            <template slot="title">模糊</template>
            <el-menu-item index="3-1-1">
              <div class="val-tag clearfix">
                <span class="fl">模糊</span>
                <span class="fr">{{ blur }}</span>
              </div>
              <el-slider v-model="blur" :min="0" :max="20" :show-tooltip="false" @change="setBlur"></el-slider>
            </el-menu-item>
            <el-menu-item index="3-1-2">
              <el-button type="primary" @click="saveResult">确定</el-button>
              <el-button @click="resetBlur">重置</el-button>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3-2">
            <template slot="title">噪声</template>
            <el-menu-item index="3-2-1">
              <div class="val-tag clearfix">
                <span class="fl">噪声</span>
                <span class="fr">{{ noise }}</span>
              </div>
              <el-slider v-model="noise" :min="0" :max="50" :show-tooltip="false" @change="setNoise"></el-slider>
            </el-menu-item>
            <el-menu-item index="3-2-2">
              <el-button type="primary" @click="saveResult">确定</el-button>
              <el-button @click="resetNoise">重置</el-button>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3-3">
            <template slot="title">锐化</template>
            <el-menu-item index="3-3-1">
              <div class="val-tag clearfix">
                <span class="fl">锐化</span>
                <span class="fr">{{ sharpen }}</span>
              </div>
              <el-slider v-model="sharpen" :min="0" :max="50" :show-tooltip="false" @change="setSharpen"></el-slider>
            </el-menu-item>
            <el-menu-item index="3-3-2">
              <el-button type="primary" @click="saveResult">确定</el-button>
              <el-button @click="resetSharpen">重置</el-button>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="my-icon-filter my-icon"></i>滤镜</template>
              <el-row :gutter="5" class="filter-ct">
                <el-col :span="12" v-for="item in filterList">
                  <div class="filter" :data-filter="item.name" @click="setFilter">
                    <img class="filter-preview" :src="item.preview">
                    <p class="filter-name">{{ item.desc }}</p>
                  </div>
                </el-col>
              </el-row>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
  <div class="project-info">
    <ul class="opensource">
      <li class="item fl"><p class="title">Power by:</p></li>
      <li class="item fl" v-for="item in opensource">
        <a :href="item.link" target="_blank" class="clearfix">
          <span class="icon fl" :style="item.logo"></span>
          <p class="desc fl">{{ item.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  import $ from 'jquery';

  export default {
    data() {
      return {
        cropList: [
          {
            order: '1-1-1',
            val: '16/9',
            name: '宽屏16:9',
          },
          {
            order: '1-1-2',
            val: '4/3',
            name: '标准4:3',
          },
          {
            order: '1-1-3',
            val: '1/1',
            name: '正方形',
          },
          {
            order: '1-1-4',
            val: '2/3',
            name: '2:3',
          },
        ],
        brightness: 0,
        contrast: 0,
        hue: 0,
        saturation: 0,
        greyscale: false,
        invert: false,
        blur: 0,
        noise: 0,
        sharpen: 0,
        sunrise: false,
        filterList: [
          {
            name: 'sunrise',
            preview: './static/image/filter-sunrise.jpg',
            desc: '日出辉映',
          },
          {
            name: 'lomo',
            preview: './static/image/filter-lomo.jpg',
            desc: '经典Lomo',
          },
          {
            name: 'clarity',
            preview: './static/image/filter-clarity.jpg',
            desc: '这一刻 更清晰',
          },
          {
            name: 'hazyDays',
            preview: './static/image/filter-hazyDays.jpg',
            desc: '这一刻 更朦胧',
          },
          {
            name: 'crossProcess',
            preview: './static/image/filter-crossProcess.jpg',
            desc: '怀旧电影',
          },
          {
            name: 'concentrate',
            preview: './static/image/filter-concentrate.jpg',
            desc: '美式咖啡',
          },
          {
            name: 'jarques',
            preview: './static/image/filter-jarques.jpg',
            desc: '抑郁深蓝',
          },
          {
            name: 'nostalgia',
            preview: './static/image/filter-nostalgia.jpg',
            desc: '泛黄记忆',
          },
          {
            name: 'pinhole',
            preview: './static/image/filter-pinhole.jpg',
            desc: '黑白胶片',
          },
          {
            name: 'sinCity',
            preview: './static/image/filter-sinCity.jpg',
            desc: '水墨印染',
          },
        ],
        opensource: [
          {
            link: 'https://vuejs.org/',
            logo: 'background: url(./static/sprites/vue.png);',
            name: 'Vue.js',
          },
          {
            link: 'https://webpack.js.org/',
            logo: 'background: url(./static/sprites/webpack.png);',
            name: 'Webpack',
          },
          {
            link: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
            logo: 'background: url(./static/sprites/canvas.png);',
            name: 'Canvas',
          },
        ],
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
      setGreyscale() {
        this.$store.dispatch('setGreyscale', this.greyscale);
      },
      setInvert() {
        this.$store.dispatch('setInvert', this.invert);
      },
      setBlur() {
        this.$store.dispatch('setBlur', this.blur);
      },
      setNoise() {
        this.$store.dispatch('setNoise', this.noise);
      },
      setSharpen() {
        this.$store.dispatch('setSharpen', this.sharpen);
      },
      setFilter(e) {
        const $target = $(e.currentTarget);
        const filterType = $target.data('filter');

        this.$store.dispatch('setFilter', filterType);
      },
      saveResult() {
        const imgUrl = this.$store.state.storeUrl;

        this.$store.dispatch('setImgUrl', imgUrl);
        this.$notify({
          title: '提示',
          message: '参数调整完成 可点击下载',
          type: 'success',
          duration: 1500,
        });
      },
      resetGrayscale() {
        this.brightness = 0;
        this.contrast = 0;
      },
      resetColor() {
        this.hue = 0;
        this.saturation = 0;
      },
      resetBlur() {
        this.blur = 0;
      },
      resetNoise() {
        this.noise = 0;
      },
      resetSharpen() {
        this.sharpen = 0;
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
  .my-icon-filter { background: url('../../static/sprites/filter.png'); background-size: 24px 24px; }

  .opensource,
  .opensource .item,
  .opensource a{
    height: 100%;
  }
  .opensource {
    line-height: 30px;
  }

  .opensource .title {
    margin: 0;
    padding-left: 3px;
    font-size: 12px;
    color: #ddd;
  }

  .opensource .item {
    margin: 0 3px;
  }

  .opensource a {
    position: relative;
    display: inline-block;
    padding: 0 5px;
  }

  .opensource .icon {
    position: relative;
    top: 6px;
    width: 16px;
    height: 16px;
  }

  .opensource .desc {
    padding-left: 5px;
    margin: 0;
    font-size: 12px;
    color: #fff;
  }

  .filter-preview, .filter-ct {
    width: 100%;
  }
  .filter-ct {
    margin-bottom: 15px;
  }

  .filter-preview {
    display: block;
  }

  .filter {
    position: relative;
    right: -8px;
    margin-top: 15px;
    width: 90%;
    border: 2px solid #fff;
  }
  .filter:hover {
    box-shadow: 0 4px 8px 0 rgba(151, 168, 190, 0.6);
  }
  .filter-name {
    display: block;
    margin: 0;
    padding: 5px 0;
    font-size: 14px;
    background: #fff;
    color: #333;
  }
</style>
