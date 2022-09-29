<template>
    <div v-on:click="onBtnClick" class="btn">ADD NEW +</div>
</template>

<script>
    export default {
        name: 'AddButton',
        props: ['onClick'],
        methods: {
            onBtnClick() {
                this.onClick('OK')
            }
        }
    }
</script>

<style lang="scss">
    .btn {
        background-color: cadetblue;
        border: 1px solid cadetblue;
        border-radius: 3px;
        color: white;
        padding: 7px 25px;
        display: inline-block;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: transparent;
            color: cadetblue;
        }
    }
</style>