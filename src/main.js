// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import '../theme/index.css';
import store from './store/index';
import VPic from './VPic';

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#vpic',
  store,
  template: '<VPic/>',
  components: { VPic },
});
