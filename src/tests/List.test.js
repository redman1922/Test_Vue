import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import List from "../components/List.vue";

describe("CostList is rendered", () => {
  let mutations;
  let $store;
  let actions;
  let getters;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    mutations = {
      addCostsList: jest.fn(),
      setCostsList: jest.fn(),
      setCurrentPage: jest.fn(),
      removeCostsList: jest.fn(),
      editCostsList: jest.fn(),
    };
    actions = {
      loadCosts: jest.fn(),
    };
    getters = {
      getCostsList: jest.fn(),
      getPageCount: jest.fn(),
      getPaginatedData: jest.fn(),
      getCurrentPage: jest.fn(),
      getMaxId: jest.fn(),
    };

    $store = new Vuex.Store({
      state: { costsData: {category: "transport"} },
      actions,
      getters,
      mutations,
    });
  });

  it("Should render costList on page", () => {
    console.log($store.state.costsData);
    return $store
      .dispatch("loadCosts")
      .then(() =>
        expect($store.state.costsData).toEqual({ category: "transport" })
      );
  });
});
