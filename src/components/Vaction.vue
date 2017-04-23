<template>
  <ul class="action-list fr">
    <li class="fr">
      <a :href="url" data-action="download" :download="name" class="save-btn btn" title="下载保存"><span class="icon"></span></a :href="url">
    </li>
    <li class="fr">
      <button data-action="remove" class="delete-btn btn" title="清空画布" v-show="uploaded"><span class="icon"></span></button>
    </li>
    <li class="fr">
      <button data-action="clear" class="cancel-btn btn" title="取消操作" v-show="cropping"><span class="icon"></span></button>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        uploaded: false,
        cropping: false,
        cropped: false,
        download: typeof document.createElement('a').download !== 'undefined',
        url: '',
        name: '',
      };
    },
    methods: {},
  };
</script>
<style>
  .action-list { height: 100%; }
  .action-list .btn { display: inline-block; width: 60px; height: 60px; line-height: 60px; background: #324057; }
  .action-list .btn:hover { background: #1f2f3d; }
  .action-list .save-btn:hover { background: #7D5CFF; }
  .action-list .btn .icon { display: inline-block; width: 16px; height: 16px; }
  .action-list .save-btn .icon { background: url('../../static/sprites/save.png'); }
  .action-list .delete-btn .icon { background: url('../../static/sprites/delete.png'); }
  .action-list .cancel-btn .icon { background: url('../../static/sprites/cancel.png'); }
</style>
