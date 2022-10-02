<template>
    <ul class="costs-list">
        <div class="costs-list__title">
            <span class="costs-list__title-span">#</span>
            <span class="costs-list__title-span">Date</span>
            <span class="costs-list__title-span">Category</span>
            <span class="costs-list__title-span">Value</span>
        </div>
        <li v-for="cost in list" :key="cost.id" class="costs-list__item">
            <span v-for="(item, idx) in cost" :key="idx" class="row">{{ item }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "List",

    mounted() {
        this.$store.dispatch("loadCosts");
    },

    computed: {
        list() {
            return this.$store.getters.getPaginatedData;
        },
    },
};
</script>

<style scoped >
.costs-list {
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
}

.costs-list__item {
    height: 50px;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.costs-list__title {
    font-weight: bold;
    display: flex;
    align-items: center;
}

.costs-list__title-span {
    width: 150px;
}


.row {
    flex-basis: 25%;
    padding: 8px 16px;
    text-align: center;
}
</style>