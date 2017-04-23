<template>
  <div class="upload" v-if="!uploaded" @change="change" @dragover="dragover" @drop="drop">
    <div class="import-area J-import">
      <span class="icon"></span>
      <!--<input id="file" type="file" accept="image/*" class="sr-only">-->
      <p class="tip">拖入图片或 <span class="browse">点击导入</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        uploaded: false,
      };
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
              this.uploaded = true;
              // 向父组件传递类型以及文件信息
              this.$emit('uploadedImg', 'uploaded', {
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
    background: url('../../static/sprites/upload.png') no-repeat;
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
</style>
