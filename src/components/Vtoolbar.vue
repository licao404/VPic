<template>
  <div id="toolbar" class="clearfix">
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
  #toolbar { position: absolute; left: 300px; right: 0; min-width: 780px;; height: 70px; background: #324057; box-shadow: 0 2px 10px rgba(0, 0, 0, .1); }
  /*.action-lis { height: 100%; }*/
  .action-list > li { height: 70px; }
  .action-list .btn { display: inline-block; margin: 5px 30px 0 0; width: 60px; height: 60px; border-radius: 60px; }
  .action-list .save-btn { background: #7D5CFF; }
  .action-list .delete-btn { background: #333; }
</style>
