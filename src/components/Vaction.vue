<template>
  <ul class="action-list fr">
    <li class="fr">
      <button class="J-save save-btn btn"><span class="icon"></span></button>
    </li>
    <li class="fr">
      <button class="J-delete delete-btn btn"><span class="icon"></span></button>
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
  .action-list > li { height: 70px; }
  .action-list .btn { display: inline-block; margin: 10px 30px 0 0; width: 50px; height: 50px; line-height: 70px; border-radius: 50px; }
  .action-list .save-btn { background: #7D5CFF; }
  .action-list .save-btn:hover { background: #5F3EE3; }
  .action-list .save-btn .icon { display: inline-block; width: 30px; height: 30px; background: url('../../static/sprites/save.png'); }
  .action-list .delete-btn { background: #1f2f3d; line-height: 65px; }
  .action-list .delete-btn:hover { background: #475669; }
  .action-list .delete-btn .icon { display: inline-block; width: 26px; height: 26px; background: url('../../static/sprites/close.png'); }
</style>
