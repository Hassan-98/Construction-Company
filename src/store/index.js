import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    header: {
      home: true,
      title: "",
      type: ""
    }
  },
  mutations: {
    setHeader(state, { home, title, type }) {
      state.header = {
        home,
        title,
        type
      };
    }
  },
  actions: {},
  modules: {}
});
