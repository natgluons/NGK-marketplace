<template>
    <div class="carousel">
        <button @click="prevSlide">‹</button>
        <div class="carousel-items">
            <slot></slot>
        </div>
        <button @click="nextSlide">›</button>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            currentSlide: 0,
        };
    },
    methods: {
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            }
        },
        nextSlide() {
            if (this.currentSlide < this.$slots.default.length - 1) {
                this.currentSlide++;
            }
        }
    }
};
</script>

<style scoped>
.carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.carousel-items {
    overflow: hidden;
    white-space: nowrap;
    width: 80%;
}

.carousel-items::slotted(*) {
    display: inline-block;
    width: 100%;
}
</style>
