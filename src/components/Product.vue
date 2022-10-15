<template>
    <div class="costs-list-item ">
        <p class="costs-list-item-txt">{{id}}</p>
        <p class="costs-list-item-txt">{{date}}</p>
        <p class="costs-list-item-txt">{{category}}</p>
        <p class="costs-list-item-txt">цена: {{value}}$</p>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        id: Number,
        date: String,
        category: String,
        value: Number
    }
}
</script>

<style >
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