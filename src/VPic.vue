<template>
  <section id="vpic">
    <!-- <img src="./assets/logo.png"> -->
    <vmenu></vmenu>
    <!-- <slider></slider> -->
  </section>
</template>

<script>
    import Vmenu from './components/Vmenu';
    import Slider from './components/Slider';

    export default {
      name: 'vpic',
      components: {
        Vmenu,
        Slider,
      },
    };
</script>

<style>
    html, body{
      margin: 0;
      padding: 0;
      background: #2F3A4C;
    }
    #vpic {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #41b883;
    }
</style>
