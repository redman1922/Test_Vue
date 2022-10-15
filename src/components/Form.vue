<template>
    <div class="form">
        <input type="text" placeholder="Payment description" v-model="date">
        <input type="text" placeholder="Payment amount" v-model="category">
        <input type="number" placeholder="Payment date" v-model="value">
        <button v-on:click="onBtnAdd" class="btn-add">ADD</button>


    </div>
</template>

<script>
export default {
    name: 'Form',
    props: {
        key1: Number
    },
    data() {
        return {
            date: '',
            category: '',
            value: '',

        }
    },
    methods: {
        onBtnAdd() {
            this.$emit('add', { id: this.key1, date: this.date, category: this.category, value: this.value })
        }

    }
}
</script>

<style >
.form {
    width: 616px;
    height: 33vh;
    position: absolute;
    top: 58vh;
    left: calc(47% - 250px);
    background-color: cadetblue;
    border: 1px solid cadetblue;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px 20px;
}

input {
    width: 100%;
    height: 30px;
    margin: 0 0 20px 0;
}

.btn-add {
    width: 100px;
    box-sizing: border-box;
    padding: 5px 0;
    margin-left: calc(100% - 93px);
}
</style>