/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uploaded: false,
    cropping: false,
    actionType: '',
    // 上传的图片信息
    imgMsg: {
      type: '',
      name: '',
      url: '',
    },
    cropper: null,
    // 图像参数调整
    imgArguments: {
      brightness: 0,
      contrast: 0,
      hue: 0,
      saturation: 0,
      greyscale: false,
      invert: false,
      blur: 0,
      noise: 0,
      sharpen: 0,
    },
    imgFilter: '',
    storeUrl: '',
  },
  getters: {

  },
  mutations: {
    storeResult(state, url) {
      state.storeUrl = url;
    },
    setImgMsg(state, imgMsg) {
      state.imgMsg = imgMsg;
    },
    setImgUrl(state, url) {
      state.imgMsg.url = url;
    },
    cropImgMsg(state, cropMsg) {
      state.imgMsg.url = cropMsg.url;
      state.imgMsg.name = cropMsg.name;
    },
    setUpload(state) {
      state.uploaded = true;
    },
    cancelUpload(state) {
      state.uploaded = false;
    },
    setCropping(state) {
      state.cropping = true;
    },
    cancelCropping(state) {
      state.cropping = false;
    },
    setActionType(state, type) {
      state.actionType = type;
    },
    setCropper(state, cropper) {
      state.cropper = cropper;
    },
    setBrightness(state, val) {
      state.imgArguments.brightness = val;
    },
    setContrast(state, val) {
      state.imgArguments.contrast = val;
    },
    setHue(state, val) {
      state.imgArguments.hue = val;
    },
    setSaturation(state, val) {
      state.imgArguments.saturation = val;
    },
    setGreyscale(state, val) {
      state.imgArguments.greyscale = val;
    },
    setInvert(state, val) {
      state.imgArguments.invert = val;
    },
    setBlur(state, val) {
      state.imgArguments.blur = val;
    },
    setNoise(state, val) {
      state.imgArguments.noise = val;
    },
    setSharpen(state, val) {
      state.imgArguments.sharpen = val;
    },
    setFilter(state, val) {
      state.imgFilter = val;
    },
  },
  actions: {
    storeResult({ commit }, url) {
      commit('storeResult', url);
    },
    setImgMsg({ commit }, imgMsg) {
      commit('setImgMsg', imgMsg);
    },
    setImgUrl({ commit }, url) {
      commit('setImgUrl', url);
    },
    cropImgMsg({ commit }, cropMsg) {
      commit('cropImgMsg', cropMsg);
    },
    setUpload({ commit }) {
      commit('setUpload');
    },
    setCropping({ commit }) {
      commit('setCropping');
    },
    cancelUpload({ commit }) {
      commit('cancelUpload');
    },
    cancelCropping({ commit }) {
      commit('cancelCropping');
    },
    setActionType({ commit }, actionType) {
      commit('setActionType', actionType);
    },
    setCropper({ commit }, cropper) {
      commit('setCropper', cropper);
    },
    setBrightness({ commit }, val) {
      commit('setBrightness', val);
    },
    setContrast({ commit }, val) {
      commit('setContrast', val);
    },
    setHue({ commit }, val) {
      commit('setHue', val);
    },
    setSaturation({ commit }, val) {
      commit('setSaturation', val);
    },
    setGreyscale({ commit }, val) {
      commit('setGreyscale', val);
    },
    setInvert({ commit }, val) {
      commit('setInvert', val);
    },
    setBlur({ commit }, val) {
      commit('setBlur', val);
    },
    setNoise({ commit }, val) {
      commit('setNoise', val);
    },
    setSharpen({ commit }, val) {
      commit('setSharpen', val);
    },
    testFilter({ commit }, val) {
      commit('testFilter', val);
    },
    setFilter({ commit }, val) {
      commit('setFilter', val);
    },
  },
});
