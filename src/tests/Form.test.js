import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Form from "../views/Form.page.vue";

describe("Form add list", () => {
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
      actions,
      getters,
      mutations,
    });
  });

  test("Should call addCostsList on ADD-button click", () => {
    const $route = {
      params: {
        category: "1",
        mode: "add",
      },
      query: {
        value: "1",
        date: "1",
      },
    };

    const wrapper = mount(Form, {
      stubs: ['router-link', 'router-view'],
      mocks: {
        $route,
        $store
      },
    });

    wrapper.find(".btn").trigger("click");
    expect(mutations.addCostsList).toHaveBeenCalled();
  });
});

describe("Form not add list", () => {
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
      actions,
      getters,
      mutations,
    });
  });

  test("Shouldn't call addCostsList on ADD-button click", () => {
    const $route = {
      params: {
        category: "",
        mode: "add",
      },
      query: {
        value: "",
        date: "",
      },
    };

    const wrapper = mount(Form, {
      stubs: ['router-link', 'router-view'],
      mocks: {
        $route,
        $store
      },
    });
    
    wrapper.find(".btn").trigger("click");
    expect(mutations.addCostsList).not.toHaveBeenCalled();
  });
});

describe("Form close", () => {
  let mutations;
  let $store;
  let actions;
  let getters;
  let localVue;
  let $router

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

    $router = {
      go: jest.fn()
    },

    $store = new Vuex.Store({
      actions,
      getters,
      mutations,
    });
  });

  test("Should $router.go(-1) on cross-button click", () => {
    const $route = {
      params: {
        category: "",
        mode: "add",
      },
      query: {
        value: "",
        date: "",
      },
    };

    const wrapper = mount(Form, {
      stubs: ['router-link', 'router-view'],
      mocks: {
        $route,
        $store,
        $router
      },
    });
    
    wrapper.find(".closeModal").trigger("click");
    expect($router.go).toHaveBeenCalled();
  });
});

describe("Form error-class", () => {
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
      actions,
      getters,
      mutations,
    });
  });

  test("Should be class='error' if input === undefined", () => {
    const $route = {
      params: {
        category: "",
        mode: "add",
      },
      query: {
        value: "",
        date: "",
      },
    };

    const wrapper = mount(Form, {
      stubs: ['router-link', 'router-view'],
      mocks: {
        $route,
        $store,
      },
    });

    const wrapIn = wrapper.findAll('input');
    expect(wrapIn.at(0).classes()).toContain('error');
    expect(wrapIn.at(1).classes()).toContain('error');
  });
});