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
  },
  getters: {

  },
  mutations: {
    setImgMsg(state, imgMsg) {
      state.imgMsg = imgMsg;
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
    }
  },
  actions: {
    setImgMsg({ commit }, imgMsg) {
      commit('setImgMsg', imgMsg);
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
  },
});
