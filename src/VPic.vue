<template>
  <section id="vpic" class="clearfix">
    <div id="vmenu" class="fl">
      <div class="logo"></div>
      <vsidebar></vsidebar>
    </div>
    <div id="vmain" class="">
      <vtoolbar></vtoolbar>
      <veditor></veditor>
    </div>
  </section>
</template>

<script>
    import Vtoolbar from './components/Vtoolbar';
    import Vsidebar from './components/Vsidebar';
    import Slider from './components/Slider';
    import Veditor from './components/Veditor';

    export default {
      name: 'vpic',
      components: {
        Vtoolbar,
        Vsidebar,
        Slider,
        Veditor,
      },
    };
</script>

<style>
    .fl { float: left; }
    .fr { float: right; }
    .clearfix:after { content: ''; display: table; clear: both; }
    ul, li { margin: 0; padding: 0; list-style: none; }
    button { border: 0; outline: none; cursor: pointer; }

    /* Custom Chrome Scrollbar */
    .custom-scrollbar::-webkit-scrollbar { width: 6px; margin-right: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background-color: #1F2F3D; }
    .custom-scrollbar::-webkit-scrollbar-thumb { border-radius: 20px; background-color: rgba(0,0,0,.15); }
    .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,.25) }

    html, body{ margin: 0; padding: 0; width: 100%; height: 100%; background: #2b3342; }

    #vpic { position: relative; font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; height: 100%; }
    #vmenu { position: relative; width: 300px; height: 100%; }
    #vpic_sidebar { position: absolute; top: 100px; bottom: 0; left: 0; width: 100%; background: #324057; overflow: auto; }
    #vmain { position: relative; margin-left: 300px; min-width: 800px; height: 100%; }
    #vtoolbar { width: 100%; height: 48px; background: #324057; }
    #veditor { position: absolute; top: 48px; bottom: 0; width: 100%; }
    .logo { position: absolute; left: 0; top: 0; width: 100%; height: 100px; background: url('../static/image/LOGO-s.png') no-repeat center center; }
</style>
