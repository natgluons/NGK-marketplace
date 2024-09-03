<template>
    <div class="arrow-back" @click="goBack">
        ←
    </div>
</template>

<script>
export default {
    name: 'ArrowBack',
    methods: {
        goBack() {
            this.$router.go(-1);  // Navigate back to the previous page
        }
    }
};
</script>

<style scoped>
.arrow-back {
    font-size: 24px;
    cursor: pointer;
    color: #b3b3b3;
}
</style>
