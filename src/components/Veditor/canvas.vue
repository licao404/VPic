<template>
  <div class="canvas" v-show="editable">
    <div @dblclick="dblclick" class="editor">
        <template v-if="url"><img :src="url" :alt="name" @load="load"></template>
    </div>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';
  import $ from 'jquery';

  const caman = window.Caman;

  export default {
    data() {
      return {
        uploaded: false,
        cropper: false,
        data: null,
        canvasData: null,
        cropBoxData: null,
        image: null,
        type: '',
        name: '',
        url: '',
        originalUrl: '',
      };
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('keydown', this.keydown, false);
      });
    },
    beforeDestory() {
      window.removeEventListener('keydown', this.keydown, false);
    },
    computed: {
      editable() {
        return this.$store.state.uploaded;
      },
      lisenActionType() {
        return this.$store.state.actionType;
      },
      vGrayscale() {
        return {
          brightness: this.$store.state.imgArguments.brightness,
          contrast: this.$store.state.imgArguments.contrast,
        };
      },
      vColor() {
        return {
          hue: this.$store.state.imgArguments.hue,
          saturation: this.$store.state.imgArguments.saturation,
        };
      },
      vInvert() {
        return {
          greyscale: this.$store.state.imgArguments.greyscale,
          invert: this.$store.state.imgArguments.invert,
        };
      },
      vBlur() {
        return this.$store.state.imgArguments.blur;
      },
      vNoise() {
        return this.$store.state.imgArguments.noise;
      },
      vSharpen() {
        return this.$store.state.imgArguments.sharpen;
      },
      vFilter() {
        return this.$store.state.imgFilter;
      },
    },
    watch: {
      editable(show) {
        this.uploaded = show;
        if (!show) return;
        this.initPaper();
      },
      lisenActionType(type) {
        const actionType = type.actionType;
        const actionMap = {
          remove: this.remove,
          clear: this.clear,
          crop: this.crop,
          cropModel: this.changeModel,
          moveModel: this.changeModel,
          'rotate-right': this.changeModel,
          'rotate-left': this.changeModel,
          'flip-vertical': this.changeModel,
          'flip-horizontal': this.changeModel,
        };

        actionMap[actionType](actionType);
      },
      vGrayscale(grayscale) {
        if (this.uploaded) {
          this.setArgument(grayscale);
        }
      },
      vColor(color) {
        if (this.uploaded) {
          this.setArgument(color);
        }
      },
      vInvert(invert) {
        if (this.uploaded) {
          this.setInvert(invert);
        }
      },
      vBlur(blur) {
        if (this.uploaded) {
          this.setBlur(blur);
        }
      },
      vNoise(noise) {
        if (this.uploaded) {
          this.setNoise(noise);
        }
      },
      vSharpen(sharpen) {
        if (this.uploaded) {
          this.setSharpen(sharpen);
        }
      },
      vFilter(filter) {
        if (this.uploaded) {
          this.setFilter(filter);
        }
      },
    },
    methods: {
      setArgument(val) {
        const self = this;
        let imgUrl = '';

        this.imgPaper = caman('.cropper-canvas .canvas-img');
        this.imgPaper.revert(false);
        $.map(val, (v, k) => {
          this.imgPaper[k](v);
        });
        this.imgPaper.render(() => {
          // render后回调，存储处理后的图像
          imgUrl = self.imgPaper.toBase64(self.$store.state.imgMsg.type);
          // self.$store.dispatch('setImgUrl', imgUrl);
          self.$store.dispatch('storeResult', imgUrl);
        });
      },
      setInvert(invert) {
        const self = this;
        let imgUrl = '';

        this.imgPaper = caman('.cropper-canvas .canvas-img');
        this.imgPaper.revert(true);
        $.map(invert, (v, k) => {
          if (v) {
            this.imgPaper[k]();
          }
        });
        this.imgPaper.render(() => {
          imgUrl = self.imgPaper.toBase64(self.$store.state.imgMsg.type);
          self.$store.dispatch('storeResult', imgUrl);
        });
      },
      setBlur(blur) {
        const self = this;
        let imgUrl = '';

        this.imgPaper = caman('.cropper-canvas .canvas-img');
        this.imgPaper.revert(false);
        this.imgPaper.stackBlur(blur);
        this.imgPaper.render(() => {
          imgUrl = self.imgPaper.toBase64(self.$store.state.imgMsg.type);
          self.$store.dispatch('storeResult', imgUrl);
        });
      },
      setNoise(noise) {
        const self = this;
        let imgUrl = '';

        this.imgPaper = caman('.cropper-canvas .canvas-img');
        this.imgPaper.revert(false);
        this.imgPaper.noise(noise);
        this.imgPaper.render(() => {
          imgUrl = self.imgPaper.toBase64(self.$store.state.imgMsg.type);
          self.$store.dispatch('storeResult', imgUrl);
        });
      },
      setSharpen(sharpen) {
        const self = this;
        let imgUrl = '';

        this.imgPaper = caman('.cropper-canvas .canvas-img');
        this.imgPaper.revert(false);
        this.imgPaper.sharpen(sharpen);
        this.imgPaper.render(() => {
          imgUrl = self.imgPaper.toBase64(self.$store.state.imgMsg.type);
          self.$store.dispatch('storeResult', imgUrl);
        });
      },
      setFilter(filter) {
        const self = this;
        let imgUrl = '';

        this.imgPaper = caman('.cropper-canvas .canvas-img');
        this.imgPaper.revert(true);
        this.imgPaper[filter]();
        this.imgPaper.render(() => {
          imgUrl = self.imgPaper.toBase64(self.$store.state.imgMsg.type);
          self.$store.dispatch('setImgUrl', imgUrl);
        });
      },
      initPaper() {
        const imgMsg = this.$store.state.imgMsg;
        this.type = imgMsg.type;
        this.name = imgMsg.name;
        this.url = imgMsg.url;
      },
      load(e) {
        if (!this.image) {
          this.image = e.target;
          this.start();
        }
      },
      changeModel(actionType) {
        const cropper = this.$store.state.cropper;
        const type = this.type;
        let imgUrl = '';

        if (!cropper) {
          return;
        }

        switch (actionType) {
          case 'moveModel':
            cropper.setDragMode('move');
            break;

          case 'cropModel':
            cropper.setDragMode('crop');
            break;

          // case 'zoom-in':
          //   cropper.zoom(0.1);
          //   break;

          // case 'zoom-out':
          //   cropper.zoom(-0.1);
          //   break;

          case 'rotate-left':
            cropper.rotate(-90);
            break;

          case 'rotate-right':
            cropper.rotate(90);
            break;

          case 'flip-horizontal':
            cropper.scaleX(-this.$store.state.cropper.getData().scaleX || -1);
            break;

          case 'flip-vertical':
            cropper.scaleY(-this.$store.state.cropper.getData().scaleY || -1);
            break;

          default:
            break;
        }

        this.data = cropper.getData();
        this.canvasData = cropper.getCanvasData();
        this.cropBoxData = cropper.getCropBoxData();
        this.url = cropper.getCroppedCanvas(type === 'image/png' ? null : {
          fillColor: '#fff',
        }).toDataURL(type);
        imgUrl = this.url;

        this.$store.dispatch('setImgUrl', imgUrl);
      },
      keydown(e) {
        const cropper = this.$store.state.cropper;
        const key = e.key || e.keyCode || e.which || e.charCode;

        switch (key) {

          // Undo crop (Key: Ctrl + Z)
          case 90:
            if (e.ctrlKey) {
              e.preventDefault();
              this.restore(true);
            }

            break;

              // Delete the image (Key: Delete)
          case 46:
            this.remove(true);
            break;

          default:
            break;
        }

        if (!cropper) {
          return;
        }

        switch (key) {
          // Crop the image (Key: Enter)
          case 13:
            this.crop(true);
            break;

              // Clear crop area (Key: Esc)
          case 27:
            this.clear(true);
            break;

              // Move to the left (Key: ←)
          case 37:
            e.preventDefault();
            cropper.move(-1, 0);
            break;

              // Move to the top (Key: ↑)
          case 38:
            e.preventDefault();
            cropper.move(0, -1);
            break;

              // Move to the right (Key: →)
          case 39:
            e.preventDefault();
            cropper.move(1, 0);
            break;

              // Move to the bottom (Key: ↓)
          case 40:
            e.preventDefault();
            cropper.move(0, 1);
            break;

              // Enter crop mode (Key: C)
          case 67:
            cropper.setDragMode('crop');
            break;

              // Enter move mode (Key: M)
          case 77:
            cropper.setDragMode('move');
            break;

              // Zoom in (Key: I)
          case 73:
            cropper.zoom(0.1);
            break;

              // Zoom out (Key: O)
          case 79:
            cropper.zoom(-0.1);
            break;

              // Rotate left (Key: L)
          case 76:
            cropper.rotate(-90);
            break;

              // Rotate right (Key: R)
          case 82:
            cropper.rotate(90);
            break;

              // Flip horizontal (Key: H)
          case 72:
            cropper.scaleX(-this.$store.state.cropper.getData().scaleX || -1);
            break;

              // Flip vertical (Key: V)
          case 86:
            cropper.scaleY(-this.$store.state.cropper.getData().scaleY || -1);
            break;

          default:
            break;
        }
      },
      dblclick(e) {
        if (e.target.className.indexOf('cropper-face') >= 0) {
          e.preventDefault();
          e.stopPropagation();
          this.crop(true);
        }
      },
      start() {
        const self = this;

        if (this.$store.state.cropper) {
          return;
        }

        const cropper = new Cropper(this.image, {
          autoCrop: false,
          dragMode: 'move',
          background: false,
          built() {
            if (self.data) {
              this.$store.state.cropper
                .crop()
                .setData(self.data)
                .setCanvasData(self.canvasData)
                .setCropBoxData(self.cropBoxData);
              self.data = null;
              self.canvasData = null;
              self.cropBoxData = null;
            }
          },
          crop(data) {
            if (data.detail.width > 0 && data.detail.height > 0 && !self.$store.state.cropping) {
              self.$store.dispatch('setCropping');
            }
          },
        });
        this.$store.dispatch('setCropper', cropper);
      },
      stop() {
        if (this.$store.state.cropper) {
          // 销毁cropper对象
          this.$store.state.cropper.destroy();
          this.$store.state.cropper = null;
          this.$store.dispatch('cancelCropping');
        }
      },
      nextCrop() {
        this.$store.state.cropper.replace(this.url);
        this.$store.dispatch('cancelCropping');
      },
      crop() {
        const cropper = this.$store.state.cropper;
        const type = this.type;

        if (this.$store.state.cropping) {
          this.originalUrl = this.url;
          this.data = cropper.getData();
          this.canvasData = cropper.getCanvasData();
          this.cropBoxData = cropper.getCropBoxData();
          // 非png格式图像空白处填充白色
          this.url = cropper.getCroppedCanvas(type === 'image/png' ? null : {
            fillColor: '#fff',
          }).toDataURL(type);

          this.$notify({
            title: '提示',
            message: '图片剪裁成功',
            type: 'success',
            duration: 1500,
          });
          this.nextCrop();
          this.$store.dispatch('cropImgMsg', {
            url: this.url,
            name: this.name,
          });
        }
      },
      clear() {
        if (this.$store.state.cropping) {
          this.$store.state.cropper.clear();
          this.$store.dispatch('cancelCropping');
        }
      },
      restore(dispatch) {
        if (!this.$store.state.cropper) {
          this.image = null;
          this.url = this.originalUrl;
          this.originalUrl = '';

          if (dispatch) {
            this.$dispatch('broadcast', 'restored');
          }
        }
      },
      remove() {
        // Disallow to delete image when cropping
        if (!this.$store.state.cropping) {
          this.stop();
          this.data = null;
          this.image = null;
          this.$store.dispatch('setImgMsg', {
            type: '',
            name: '',
            url: '',
          });
          this.originalUrl = '';
          this.$notify({
            title: '提示',
            message: '清空画布成功 可导入新的图片',
            type: 'success',
            duration: 3500,
          });
          this.$store.dispatch('cancelUpload');
        }
      },
    },
  };
</script>

<style lang="css">
  .canvas {
    width: 100%;
    height: 100%;
  }
  .canvas .editor {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .canvas .editor > img {
    display: block;
    max-width: 95%;
    max-height: 95%;
    margin: auto;
    vertical-align: middle;
  }
</style>
