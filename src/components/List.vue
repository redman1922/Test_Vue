<template>
  <ul class="costs-list">
    <div class="costs-list__title">
      <span>#</span>
      <span>Date</span>
      <span>Category</span>
      <span>Value</span>
    </div>
    <li v-for="cost in list" :key="cost.id" class="costs-list__item">
      <span v-for="(item, idx) in cost" :key="idx" class="row">{{ item }} </span
      ><span class="dot" @click="callContextMenu($event, cost)" >&#10247;</span> <!-- $event - для определения координат трех точек -->
    </li>
    <ContextMenu></ContextMenu>
  </ul>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";

export default {
  name: "List",
  components: {
    ContextMenu,
  },

  mounted() {
    this.$store.dispatch("loadCosts", +this.$route.query.page);
    this.$context.EventEmitter.$on("show", this.show);
  
  },

  computed: {
    list() {
      return this.$store.getters.getPaginatedData;
    },
  },

  methods: {
    callContextMenu(event, cost) {
      this.$context.show(event.currentTarget, cost); // event.currentTarget для определения текущего элемента, на котором сработал event

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.costs-list {
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  &__item {
    height: 50px;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__title {
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__title span {
    flex-basis: 25%;
    padding: 8px 16px;
    text-align: center;
  }
}

.row {
  flex-basis: 25%;
  padding: 8px 16px;
  text-align: center;
}

.context-menu {
  cursor: pointer;
  text-decoration: none;
}

.dot{
  cursor: pointer;
}
</style>
