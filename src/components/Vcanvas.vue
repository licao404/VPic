<template>
  <div class="canvas" v-show="editable">
    <div @dblclick="dblclick" class="editor">
        <template v-if="url"><img :src="url" :alt="name" @load="load"></template>
    </div>
  </div>
</template>

<script>
  import Cropper from 'cropperjs';

  export default {
    data() {
      return {
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
    },
    watch: {
      editable(show) {
        if (!show) return;
        this.initPaper();
      },
      lisenActionType(type) {
        const actionMap = {
          remove: this.remove,
          clear: this.clear,
          crop: this.crop,
        };

        actionMap[type.actionType]();
      },
    },
    methods: {
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
      click(e) {
        const cropper = this.cropper;
        const target = e.target;
        let action = '';

        if (!cropper) {
          return;
        }

        action = target.dataset.action || target.parentNode.dataset.action;

        switch (action) {
          case 'move':
          case 'crop':
            cropper.setDragMode(action);
            break;

          case 'zoom-in':
            cropper.zoom(0.1);
            break;

          case 'zoom-out':
            cropper.zoom(-0.1);
            break;

          case 'rotate-left':
            cropper.rotate(-90);
            break;

          case 'rotate-right':
            cropper.rotate(90);
            break;

          case 'flip-horizontal':
            cropper.scaleX(-this.cropper.getData().scaleX || -1);
            break;

          case 'flip-vertical':
            cropper.scaleY(-this.cropper.getData().scaleY || -1);
            break;

          default:
            break;
        }
      },
      keydown(e) {
        const cropper = this.cropper;
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
            cropper.scaleX(-this.cropper.getData().scaleX || -1);
            break;

              // Flip vertical (Key: V)
          case 86:
            cropper.scaleY(-this.cropper.getData().scaleY || -1);
            break;

          default:
            break;
        }
      },
      dblclick(e) {
        if (e.target.className.indexOf('cropper-face') >= 0) {
          console.log(2);
          e.preventDefault();
          e.stopPropagation();
          this.crop(true);
        }
      },
      start() {
        const self = this;

        if (this.cropper) {
          return;
        }

        this.cropper = new Cropper(this.image, {
          // aspectRatio: 16 / 9,
          autoCrop: false,
          dragMode: 'move',
          background: false,
          built() {
            if (self.data) {
              this.cropper
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
      },
      stop() {
        if (this.cropper) {
          // 销毁cropper对象
          this.cropper.destroy();
          this.cropper = null;
          this.$store.dispatch('cancelCropping');
        }
      },
      nextCrop() {
        this.cropper.replace(this.url);
        this.$store.dispatch('cancelCropping');
      },
      crop() {
        const cropper = this.cropper;
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

          this.nextCrop();

          this.$store.dispatch('cropImgMsg', {
            url: this.url,
            name: this.name,
          });
        }
      },
      clear() {
        if (this.$store.state.cropping) {
          this.cropper.clear();
          this.$store.dispatch('cancelCropping');
        }
      },
      restore(dispatch) {
        if (!this.cropper) {
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
          this.type = '';
          this.name = '';
          this.url = '';
          this.originalUrl = '';
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
