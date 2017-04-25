/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uploaded: false,
    cropping: false,
    type: '',
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
    setImgMsg(state, uploadMsg) {
      state.type = uploadMsg.type;
      state.imgMsg = uploadMsg.imgMsg;
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
    setActionType(state, type) {
      state.actionType = type;
    }
  },
  actions: {
    uploadedImg({ commit }, uploadMsg) {
      commit('setImgMsg', uploadMsg);
    },
    setUpload({ commit }) {
      commit('setUpload');
    },
    cancelUpload({ commit }) {
      commit('cancelUpload');
    },
    removeUpload({ commit }, actionType) {
      commit('cancelUpload');
      commit('setActionType', actionType);
    },
  },
});
