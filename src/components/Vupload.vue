<!--<template>
  <el-upload
    action="//jsonplaceholder.typicode.com/posts/"
    type="drag"
    :show-upload-list="false"
    :thumbnail-mode="true"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-progress="console"
  >
    <i class="el-icon-upload"></i>
    <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      console() {
        console.log(1);
      },
    },
  };
</script>-->


<!--from photo-editor-->


<template>
  <div @change="change" @dragover="dragover" @drop="drop" v-show="!uploaded" class="upload">
      <p>Drop image here or
          <label class="browse">browse...
              <input id="file" type="file" accept="image/*" class="sr-only">
          </label>
      </p>
  </div>
</template>

<script>
  import '../js/vupload';
</script>

<style>
.upload { display: table; width: 100%; height: 100%; overflow: hidden }
.upload>p { display: table-cell; color: #999; text-align: center; vertical-align: middle }
.browse { margin-left: 4px; color: #0074d9; cursor: pointer }
.browse:hover { color: #0d8eff; text-decoration: underline }
</style>
