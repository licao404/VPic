// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VPic from './VPic';

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#vpic',
  template: '<VPic/>',
  components: { VPic },
});
