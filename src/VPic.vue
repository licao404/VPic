<template>
  <section id="vpic" class="clearfix">
    <div id="vmenu" class="fl">
      <div class="logo">
          <img src="../static/image/LOGO-s.png">
      </div>
      <vsidebar></vsidebar>
    </div>
    <div id="vmain" class="">
      <vtoolbar></vtoolbar>
      <veditor></veditor>
    </div>
  </section>
</template>

<script>
    import Cropper from 'cropperjs';
    import 'cropperjs/dist/cropper.css';
    import Vtoolbar from './components/toolbar_module/index';
    import Vsidebar from './components/sidebar';
    import Veditor from './components/Veditor/index';

    export default {
      name: 'vpic',
      components: {
        Cropper,
        Vtoolbar,
        Vsidebar,
        Veditor,
      },
    };
</script>

<style>
    .fl {
      float: left;
    }

    .fr {
      float: right;
    }

    .clearfix:after {
      content: '';
      display: table;
      clear: both;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    button {
      border: 0;
      outline: none;
      cursor: pointer;
    }
    /* Custom Chrome Scrollbar */

    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      margin-right: 5px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background-color: #1F2F3D;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: rgba(0, 0, 0, .15);
    }

    .custom-scrollbar:hover::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, .25)
    }

    html,
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: #2b3342;
      overflow: hidden;
    }

    #vpic {
      position: relative;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      height: 100%;
    }

    #vmenu {
      position: relative;
      width: 300px;
      height: 100%;
    }

    #vpic_sidebar {
      position: absolute;
      top: 100px;
      bottom: 30px;
      left: 0;
      width: 100%;
      background: #324057;
      overflow: auto;
    }

    .project-info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30px;
      background: #7759ee;
    }

    #vmain {
      position: relative;
      margin-left: 300px;
      min-width: 800px;
      height: 100%;
    }

    #vtoolbar {
      width: 100%;
      height: 60px;
      background: #324057;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    }

    #veditor {
      position: absolute;
      top: 60px;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .logo {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100px;
    }

</style>
