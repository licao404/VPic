<template>
  <div id="vtoolbar" class="clearfix fl">
    <ul class="action-list clearfix">
      <li class="fr">
        <a href="javascript:;" class="J-save save-btn btn"><span class="icon"></span></a>
      </li>
      <li class="fr">
        <a href="javascript:;" class="J-delete delete-btn btn"><span class="icon"></span></a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>
<style>
  #vtoolbar { position: absolute; left: 300px; right: 0; min-width: 780px;; height: 70px; background: #324057; box-shadow: 0 2px 10px rgba(0, 0, 0, .1); }
  /*.action-lis { height: 100%; }*/
  .action-list > li { height: 70px; }
  .action-list .btn { display: inline-block; margin: 10px 30px 0 0; width: 50px; height: 50px; line-height: 70px; border-radius: 50px; }
  .action-list .save-btn { background: #7D5CFF; }
  .action-list .save-btn:hover { background: #5F3EE3; }
  .action-list .save-btn .icon { display: inline-block; width: 30px; height: 30px; background: url('../../static/sprites/save.png'); }
  .action-list .delete-btn { background: #1f2f3d; line-height: 65px; }
  .action-list .delete-btn:hover { background: #475669; }
  .action-list .delete-btn .icon { display: inline-block; width: 26px; height: 26px; background: url('../../static/sprites/close.png'); }
</style>
