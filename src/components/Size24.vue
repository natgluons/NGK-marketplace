<template>
    <div class="size24">
        <slot>🛒</slot>
    </div>
</template>

<script>
export default {
    name: 'Size24',
    props: {
        color: {
            type: String,
            default: '#b3b3b3'
        }
    }
};
</script>

<style scoped>
.size24 {
    font-size: 24px;
    color: v-bind(color);
    cursor: pointer;
}
</style>
