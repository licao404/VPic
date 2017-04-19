<template>
  <ul class="action-list fr">
    <li class="fr">
      <button class="J-save save-btn btn" title="下载保存"><span class="icon"></span></button>
    </li>
    <li class="fr">
      <button class="J-delete delete-btn btn" title="清空画布"><span class="icon"></span></button>
    </li>
  </ul>
</template>
<script>
  export default {
    methods: {},
  };
</script>
<style>
  .action-list { height: 100%; }
  .action-list .btn { display: inline-block; width: 60px; height: 60px; line-height: 60px; background: #324057; }
  .action-list .btn:hover { background: #1f2f3d; }
  .action-list .save-btn:hover { background: #7D5CFF; }
  .action-list .save-btn .icon { display: inline-block; width: 16px; height: 16px; background: url('../../static/sprites/save.png'); }
  .action-list .delete-btn .icon { display: inline-block; width: 16px; height: 16px; background: url('../../static/sprites/delete.png'); }
</style>
