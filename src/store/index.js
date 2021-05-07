import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    swiper0: null,
    swiper1: null,
    swiper2: null,
    swiper3: null,
    start: 'SubjectOne',
    industry: false,
    subject: false,
    result: null,
    clientHeight: '',
    inputname: '',
    warning: '',
    flag: true,
    onewidth: null,
    twowidth: null,
    threewidth: null,
    fourwidth: null,
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    A6: '',
    A7: '',
    A8: '',
    A9: '',
    A10: '',
    A11: '',
    D12: '',
    D13: '',
    D14: '',
    D15: '',
    D16: '',
    D17: '',
    D18: '',
  },
  mutations: {
    updateStart(state, payload) {
      state.start = payload;
    },
    setWarning(state, payload) {
      state.warning = payload;
    },
    setData(state, payload) {
      state.result = payload;
    },
  },
  actions: {
    getData({ commit }) {
      axios.get('db.json').then((res) => commit('setData', res.data));
    },
  },
  modules: {},
});
