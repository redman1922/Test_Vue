<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <img alt="Vue logo" src="./assets/logo.png"
      /></router-link>
    </nav>

    <h1>My Personal Costs</h1>
    <router-link to="/add/payment"><AddButton></AddButton></router-link>
    <nav class="nav-costs">
      <router-link class="router-link" to="/add/payment/food?value=200"
        ><a class="btn-costs">Food</a>
      </router-link>
      <router-link class="router-link" to="/add/payment/transport?value=50"
        ><a class="btn-costs">Transport</a>
      </router-link>
      <router-link class="router-link" to="/add/payment/entertanment?value=2000"
        ><a class="btn-costs">Entertainment</a></router-link
      >
    </nav>
    <router-view :key="$route.fullPath" />
    <List></List>
    <Pagination v-model="this.$store.currentPage"></Pagination>
  </div>
</template>

<script>
import AddButton from "./components/AddButton.vue";
import Form from "./components/Form.vue";
import List from "./components/List.vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    AddButton,
    Form,
    List,
    Pagination,
  },
  methods: {
        show() {
      this.isShown = true;
    },

    hide() {
      this.isShown = false;
      console.log("hide")
    },
    // onBtnClick() {
    //   this.$store.commit("setIsPopupActive", !this.$store.state.isPopupActive);
    // },
  },
    mounted() {
    this.$context.EventEmitter.$on("show", this.show);
    this.$context.EventEmitter.$on("hide", this.hide);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-costs {
  width: 600px;
  margin: 30px auto;
  display: flex;
  justify-content: space-evenly;

  &.router-link-exact-active {
    color: #42b983;
  }
}
.btn-costs {
  border: 2px solid cadetblue;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: rgb(240, 193, 74);
    color: white;
    border: 2px solid rgb(240, 193, 74);
  }
}
.router-link {
  text-decoration: none;
}

h3 {
  margin: 0;
}
</style>
