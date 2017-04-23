import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 5,
  },
  getters: {
    evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
  },
});
