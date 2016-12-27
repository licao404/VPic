<template>
  <div id="vtoolbar" class="clearfix">
    <vaction></vaction>
  </div>
</template>
<script>
  import Vaction from './Vaction';

  export default {
    components: {
      Vaction,
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>
