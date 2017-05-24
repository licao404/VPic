<template>
  <div class="upload" v-if="!uploaded" @change="change" @dragover="dragover" @drop="drop">
    <el-dialog title="图片导入" :visible.sync="dialogTableVisible">
      <el-row :gutter="10">
        <el-col :span="8"><img class="select-img" data-width="2000" data-height="1125" @click="selectImg" src="../../../../static/image/test-1.jpg"></el-col>
        <el-col :span="8"><img class="select-img" data-width="1600" data-height="900" @click="selectImg" src="../../../../static/image/test-2.jpg"></el-col>
        <el-col :span="8"><img class="select-img" data-width="4871" data-height="3237" @click="selectImg" src="../../../../static/image/test-3.jpg"></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><img class="select-img" data-width="1920" data-height="1080" @click="selectImg" src="../../../../static/image/test-4.jpg"></el-col>
        <el-col :span="8"><img class="select-img" data-width="1920" data-height="1200" @click="selectImg" src="../../../../static/image/test-5.jpg"></el-col>
        <el-col :span="8"><img class="select-img" data-width="2560" data-height="1440" @click="selectImg" src="../../../../static/image/test-6.jpg"></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><img class="select-img" data-width="2048" data-height="1367" @click="selectImg" src="../../../../static/image/test-7.jpg"></el-col>
        <el-col :span="8"><img class="select-img" data-width="1600" data-height="900" @click="selectImg" src="../../../../static/image/test-8.jpg"></el-col>
        <el-col :span="8">
          <div class="upload-btn J-upload" title="选择本地图片">
            <span class="upload-icon"></span>
            <input id="file" type="file" accept="image/*" class="sr-only">
          </div>
        </el-col>
      </el-row>
    </el-dialog>
    <div class="import-area J-import" @click="dialogTableVisible = true">
      <span class="icon"></span>
      <p class="tip">拖入图片或 <span class="browse">点击导入</span></p>
    </div>
  </div>
</template>

<script>
  // import Vdialog from './dialog';

  export default {
    components: {
    // <vdialog :dialogTableVisible="dialogTableVisible"></vdialog>

      // Vdialog,
    },
    data() {
      return {
        dialogTableVisible: false,
      };
    },
    computed: {
      uploaded() {
        return this.$store.state.uploaded;
      },
    },
    methods: {
      read(file, callback = () => {}) {
        const imgReg = /^image\/\w+$/;
        let reader = null;

        if (file) {
          if (imgReg.test(file.type)) {
            reader = new FileReader(); // 实例化 Web Api FileReader

            reader.onload = () => {
              // 上传区域置空
              this.$store.dispatch('setUpload');
              // store传递类型以及文件信息
              this.$store.dispatch('setImgMsg', {
                type: file.type,
                name: file.name,
                url: reader.result,
              });

              callback();
            };

            reader.readAsDataURL(file);
          } else {
            this.$message({
              message: '请选择图片文件',
              type: 'warning',
            });
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
      selectImg(e) {
        const target = e.target;
        const url = this.getBase64Image(target);

        // 上传区域置空
        this.$store.dispatch('setUpload');
        // store传递类型以及文件信息
        this.$store.dispatch('setImgMsg', {
          type: 'image/jpeg',
          name: 'test',
          url,
        });
      },
      getBase64Image(img) {
        const canvas = document.createElement('canvas');
        canvas.width = img.dataset.width;
        canvas.height = img.dataset.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.dataset.width, img.dataset.height);
        const dataURL = canvas.toDataURL('image/jpeg');
        return dataURL;
      },
    },
  };
</script>

<style>
  .upload {
    width: 100%;
    height: 100%;
  }
  .import-area {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -120px -150px;
    box-sizing: border-box;
    width: 300px;
    height: 200px;
    background: #2b3342;
    border: 2px dashed #7d7d7d;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.1s;
  }

  .import-area:hover {
    background: #324057;
    border-color: #ccc;
  }

  .import-area .icon {
    display: inline-block;
    margin-top: 20px;
    width: 128px;
    height: 128px;
    background: url('../../../../static/sprites/upload.png') no-repeat;
  }

  .import-area .tip {
    margin: 0;
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .import-area .tip .browse {
    color: #7D5CFF;
  }

  .import-area:hover .browse {
    text-decoration: underline;
  }

  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    cursor: pointer;
  }
  .select-img,
  .upload-btn {
    width: 100%;
    height: 108px;
  }
  .upload-btn {
    position: relative;
    line-height: 118px;
    border-radius: 10px;
    box-sizing: border-box;
    border: 3px dashed #ccc;
  }
  .upload-icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url('../../../../static/sprites/plus.png') no-repeat;
  }
  .el-dialog__header {
    text-align: left;
  }
  .v-modal {
    opacity: 0.6;
  }
  .sr-only {
    cursor: pointer;
  }
</style>
