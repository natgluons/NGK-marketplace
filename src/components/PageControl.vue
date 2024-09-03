<template>
    <div class="page-control">
        <span v-for="n in dots" :key="n" :class="{ active: n === parseInt(selection) }">•</span>
    </div>
</template>

<script>
export default {
    name: 'PageControl',
    props: {
        dots: Number,
        selection: String
    }
};
</script>

<style scoped>
.page-control {
    display: flex;
    justify-content: center;
}

.page-control span {
    font-size: 24px;
    margin: 0 5px;
    color: #ddd;
}

.page-control span.active {
    color: #ff3b30;
}
</style>
