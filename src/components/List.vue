<template>
    <div class="costs-list">
        <slot name="head"></slot>
        <div v-for="cost in list" v-bind:key="cost.id" class="costs-list-item">
            <p v-for="(item, key) in cost" v-bind:key="key" class="costs-list-item-txt">{{item}}</p>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        list: Array
    }
}
</script>

<style >
.costs-list {
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.costs-list-item {
    height: 60px;
    border-bottom: 1px solid #444;
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
}

.costs-list-item-txt {
    width: 150px;
}

.costs-list-item-txt:nth-child(3) {
    text-align: center;
}

.costs-list-item-txt:nth-child(4) {
    text-align: center;
}
</style>