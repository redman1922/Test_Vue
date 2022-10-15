<template>
  <div id="app">
    <h2>My personal costs</h2>
    <AddButton v-on:show="popupToggle"></AddButton>
    <List v-bind:list="costsList">
      <template v-slot:head>
        <div class="header">
          <p class="header-item">#</p>
          <p class="header-item">Date</p>
          <p class="header-item">Category</p>
          <p class="header-item">Value</p>
        </div>
      </template>
    </List>
    <Form v-if="isPopupActive" v-on:add="addData" v-bind:key1="costsList.length +1"></Form>


  </div>
</template>

<script>
import AddButton from './components/AddButton.vue'
import Form from './components/Form.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: { AddButton, Form, List },
  data() {
    return {
      costsList: [],
      isPopupActive: false
    }
  },
  methods: {
    fetchData() {
      return [
        { id: 1, date: '12.09.2022', category: 'food', value: 1582 },
        { id: 2, date: '15.09.2022', category: 'transport', value: 245 },
        { id: 3, date: '20.09.2022', category: 'healthcare', value: 780 },
        { id: 4, date: '20.09.2022', category: 'healthcare', value: 780 }
      ]
    },
    popupToggle() {
      this.isPopupActive = !this.isPopupActive;
    },
    addData(add) {
      this.costsList.push(add);
    }
  },
  created() {
    this.costsList = this.fetchData();
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  display: flex;

}

.header-item {
  width: 150px;
  text-align: left;
}

.header-item:nth-child(3) {
  text-align: center;
}

.header-item:nth-child(4) {
  text-align: center;
}
</style>
