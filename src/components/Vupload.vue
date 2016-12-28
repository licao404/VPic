<template>
  <el-upload
    action="//jsonplaceholder.typicode.com/posts/"
    type="drag"
    :multiple="false"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
  >
    <i class="el-icon-upload"></i>
    <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
  </el-upload>
</template>

<script>
  export default {
    data() {
      return {
        // fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleSuccess(file) {
        console.log(file);
      },
    },
  };
</script>

<style>
  .el-upload { position: absolute; left: 50%; top: 50%; margin: -120px -180px; }
  .el-dragger__text em, .el-upload__file a { color: #7D5CFF; }
  .el-dragger { background: rgba(38, 49, 65, 0.3); border: 1px solid #223449; }
  .el-dragger:not(.is-showCover):hover .el-dragger__text em { color: #20a0ff; }
  .el-upload__file { transition: all .1s cubic-bezier(.55,0,.1,1); }
  .el-upload__file:hover { background: rgba(38, 49, 65, 0.3); }
</style>


<!--from photo-editor-->


<!-- <template>
  <div @change="change" @dragover="dragover" @drop="drop" v-show="!uploaded" class="upload">
      <p>Drop image here or
          <label class="browse">browse...
              <input id="file" type="file" accept="image/*" class="sr-only">
          </label>
      </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploaded: false,
    };
  },
  template: '#upload-box',
  methods: {
    read(file, callback = () => {}) {
      let reader = null;

      if (file) {
        if (/^image\/\w+$/.test(file.type)) {
          reader = new global.FileReader();

          reader.onload = () => {
            this.uploaded = true;
            this.$dispatch('broadcast', 'uploaded', {
              type: file.type,
              name: file.name,
              url: reader.result,
            });

            callback();
          };

          reader.readAsDataURL(file);
        } else {
          global.alert('Please choose an image file.');
          callback();
        }
      } else {
        callback();
      }
    },
    change(e) {
      const target = e.target;
      const files = target.files;

      this.read(files && files[0], () => {
        target.value = '';
      });
    },
    dragover(e) {
      e.preventDefault();
    },
    drop(e) {
      const files = e.dataTransfer.files;

      e.preventDefault();

      this.read(files && files[0]);
    },
  },
  events: {
    remove() {
      this.uploaded = false;
    },
    removed() {
      this.uploaded = false;
    },
  },
};
</script>

<style>
.upload { display: table; width: 100%; height: 100%; overflow: hidden }
.upload>p { display: table-cell; color: #999; text-align: center; vertical-align: middle }
.browse { margin-left: 4px; color: #0074d9; cursor: pointer }
.browse:hover { color: #0d8eff; text-decoration: underline }
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}
</style> -->
