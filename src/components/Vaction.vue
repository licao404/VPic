<template>
  <ul class="action-list fr" @click="click">
    <li class="fr">
      <a :href="url" :download="name" class="save-btn btn" title="下载保存" v-show="url"><span class="icon"></span></a :href="url">
    </li>
    <li class="fr">
      <button data-action="crop" class="crop-btn btn" title="确认剪裁" v-show="cropping"><span class="icon"></span></button>
    </li>
    <li class="fr">
      <button data-action="remove" class="delete-btn btn" title="清空画布" v-show="uploaded &amp;&amp; !cropping"><span class="icon"></span></button>
    </li>
    <li class="fr">
      <button data-action="clear" class="cancel-btn btn" title="取消操作" v-show="cropping"><span class="icon"></span></button>
    </li>
  </ul>
</template>
<script>
  export default {
    computed: {
      uploaded() {
        return this.$store.state.uploaded;
      },
      cropping() {
        return this.$store.state.cropping;
      },
      url() {
        return this.$store.state.imgMsg.url;
      },
      name() {
        return this.$store.state.imgMsg.name;
      },
    },
    methods: {
      click(e) {
        const action = e.target.dataset.action;
        const actionMap = {
          remove: this.remove,
          clear: this.clear,
          crop: this.crop,
        };

        if (action) {
          actionMap[action]();
        }
      },
      remove() {
        if (!this.$store.state.cropping) {
          this.$store.dispatch('setActionType', {
            actionType: 'remove',
          });
        }
      },
      clear() {
        this.$store.dispatch('setActionType', {
          actionType: 'clear',
        });
      },
      crop() {
        this.$store.dispatch('setActionType', {
          actionType: 'crop',
        });
      },
    },
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
  .action-list .crop-btn .icon { background: url('../../static/sprites/ok.png'); }
</style>
