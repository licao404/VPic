<template>
    <div id="veditor" class="fl">
        <div style="max-width: 900px; display: inline-block;">
            <!-- assign ref property to access the underlying functions -->
            <!-- all cropperjs options should be in kebab-case instead of camelCase -->
            <!-- see http://vuejs.org/guide/components.html#camelCase-vs-kebab-case -->
            <vue-cropper
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
        <button @click="change">Change Image</button>
    </div>
</template>

<script>
    import VueCropper from '../../node_modules/vue-cropperjs';

    export default {
      name: 'Veditor',
      components: { VueCropper },
      data() {
        return {
          /* eslint-disable global-require */
          imgSrc: require('../../static/image/LOGO-b.png'),
          /* eslint-enable global-require */
          cropImg: '',
        };
      },
      methods: {
        change() {
          /* eslint-disable global-require */
          this.imgSrc = require('../../static/image/LOGO-s.png');
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(require('../../static/image/LOGO-s.png'));
          /* eslint-enable global-require */
        },
        cropImage() {
          // get image data for post processing, e.g. upload or setting image src
          this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        },
        rotate() {
          // guess what this does :)
          this.$refs.cropper.rotate(90);
        },
      },
    };
</script>
