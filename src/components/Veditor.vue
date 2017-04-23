<template>
    <div id="veditor">
        <!--<div style="max-width: 900px; display: inline-block;">-->
            <!-- assign ref property to access the underlying functions -->
            <!-- all cropperjs options should be in kebab-case instead of camelCase -->
            <!-- see http://vuejs.org/guide/components.html#camelCase-vs-kebab-case -->
            <!--<vue-cropper
                ref='cropper'
                :guides="true"
                :view-mode="2"
                drag-mode="crop"
                :auto-crop-area="0.5"
                :min-container-width="250"
                :min-container-height="180"
                :background="true"
                :rotatable="true"
                :src="imgSrc">
            </vue-cropper>
        </div>
        <img :src="cropImg" style="max-width: 300px;" />
        <br />
        <button @click="cropImage">Crop Image</button>
        <button @click="rotate">Rotate</button>
        <button @click="change">Change Image</button>-->
        <vupload v-on:uploadedImg="getUploadedImg"></vupload>
        <vcanvas :config="uploadedMsg"></vcanvas>
    </div>
</template>

<script>
    import Vupload from './Vupload';
    import Vcanvas from './Vcanvas';

    export default {
      name: 'Veditor',
      components: {
        Vupload,
        Vcanvas,
      },
      data() {
        return {
          uploadedMsg: {
            type: '',
            data: {},
          },
        };
      },
      methods: {
        // 接收子组件（Vupload组件）传递过来的信息
        getUploadedImg(type, data) {
          this.uploadedMsg.type = type;
          this.uploadedMsg.data = data;
        },
      },
        // data() {
        //   return {
        //     /* eslint-disable global-require */
        //     imgSrc: require('../../static/image/test.jpg'),
        //     /* eslint-enable global-require */
        //     cropImg: '',
        //   };
        // },
        // methods: {
        //   change() {
        //     /* eslint-disable global-require */
        //     this.imgSrc = require('../../static/image/LOGO-b.png');
        //     // rebuild cropperjs with the updated source
        //     this.$refs.cropper.replace(require('../../static/image/LOGO-b.png'));
        //     /* eslint-enable global-require */
        //   },
        //   cropImage() {
        //     // get image data for post processing, e.g. upload or setting image src
        //     this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        //   },
        //   rotate() {
        //     // guess what this does :)
        //     this.$refs.cropper.rotate(90);
        //   },
        // },
    };
</script>

<style>
  .sr-only {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .sr-only--focusable:active,
  .sr-only--focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto
  }


</style>
