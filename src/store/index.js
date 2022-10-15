import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costsData: [],
    currentPage: 1,
    perPage: 5,

    error: false

  },

  getters: {
    getCostsList: state => {
      return state.costsData;
    },
    getPageCount: state => {
      let l = state.costsData.length,
        s = state.perPage;
      return Math.ceil(l / s);
    },
    getPaginatedData: state => {
      const start = (state.currentPage - 1) * state.perPage,
        end = start + state.perPage;
      return state.costsData.slice(start, end);
    },



    getCurrentPage: state => state.currentPage,
    getMaxId: state =>
      state.costsData.map(({ id }) => id).sort((a, b) => a - b)[
      state.costsData.length - 1
      ],
  },

  mutations: {
    setCostsList: (state, payload) => (state.costsData = payload),
    addCostsList: (state, payload) => state.costsData.push(payload),
    setCurrentPage: (state, payload) => (state.currentPage = payload),



  },

  actions: {
    async loadCosts({ commit }) {
      const list = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { id: 1, date: "20.09.2022", category: "food", value: 11 },
            { id: 2, date: "15.09.2022", category: "transport", value: 21145 },
            { id: 3, date: "22.09.2022", category: "healthcare", value: 78110 },
            { id: 4, date: "22.09.2022", category: "healthcare", value: 7180 },
            { id: 5, date: "22.09.2022", category: "healthcare", value: 7180 },
            { id: 6, date: "22.09.2022", category: "healthcare", value: 7810 },
            { id: 7, date: "22.09.2022", category: "healthcare", value: 7810 },
            { id: 8, date: "22.09.2022", category: "healthcare", value: 7180 },
            { id: 9, date: "22.09.2022", category: "healthcare", value: 7180 },
            { id: 10, date: "22.09.2022", category: "healthcare", value: 7280 },
          ]);
        }, 1000);
      });
      return commit("setCostsList", list);
    },
  },
});
