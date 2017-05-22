<template>
    <div id="veditor">
        <vactiontip></vactiontip>
        <vupload></vupload>
        <vcanvas></vcanvas>
    </div>
</template>

<script>
  import Vactiontip from './tip';
  import Vupload from './upload_module/index';
  import Vcanvas from './canvas';

  export default {
    name: 'Veditor',
    components: {
      Vactiontip,
      Vupload,
      Vcanvas,
    },
  };
</script>

<style>
  .sr-only {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .sr-only--focusable:active,
  .sr-only--focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto
  }
</style>
