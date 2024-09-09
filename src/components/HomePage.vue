<template>
    <div class="home-page">
        <div class="div">
            <div class="carousel-banner">
                <div class="overlap-2">
                    <div class="carousel-container">
                        <transition-group name="fade" tag="div" class="carousel-images">
                            <img v-for="(image, index) in carouselImages" :key="index" :src="image.src" :alt="image.alt"
                                v-show="currentIndex === index" />
                        </transition-group>
                        <button class="prev" @click="prevSlide">❮</button>
                        <button class="next" @click="nextSlide">❯</button>
                    </div>
                    <div class="dots-container">
                        <div v-for="(dot, index) in carouselImages" :key="index"
                            :class="['dot', { 'dot-active': currentIndex === index }]"></div>
                    </div>
                </div>
                <div class="overlap-3">
                    <h2 class="section-title">Our Puppies</h2>
                    <div class="our-puppies-carousel">
                        <div class="carousel">
                            <div class="item" v-for="breed in ['Toy Poodle', 'Schnauzer', 'Yorkshire']" :key="breed">
                                <img :src="getBreedImage(breed)" :alt="breed" />
                                <router-link :to="{ name: 'BreedPage', params: { breedName: breed } }"
                                    class="item-text">
                                    {{ breed }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <h2 class="section-title">The Essentials</h2>
                    <div class="the-essentials">
                        <div class="carousel">
                            <div class="item">
                                <img src="@/assets/royalcanin.jpg" alt="Dog Food" />
                                <!-- style="border: 3px solid #E6EDF1;"/> -->
                                <div class="item-text">Dog Food</div>
                            </div>
                            <!-- <div class="item">
                                <img src="@/assets/examplepic.png" alt="Accessories" />
                                <div class="item-text">Accessories</div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            currentIndex: 0,
            carouselImages: [
                { src: require('@/assets/logongk.png'), alt: 'Image 1' },
                { src: require('@/assets/schnauzeradult3main.jpg'), alt: 'Image 2' },
                { src: require('@/assets/schnauzeradult8main.jpg'), alt: 'Image 3' },
                { src: require('@/assets/toypoodleadult1main.jpg'), alt: 'Image 4' },
                { src: require('@/assets/toypoodleadult5main.jpg'), alt: 'Image 5' },
            ],
            userInteracted: false, // Flag to track if the user has manually changed the image
            lastInteractionTime: Date.now(), // Track the time of the last user interaction
        };
    },
    mounted() {
        this.startCarousel();
    },
    methods: {
        startCarousel() {
            setInterval(() => {
                // Check if the user has not interacted in the last 5 seconds
                if (Date.now() - this.lastInteractionTime >= 5000) {
                    this.userInteracted = false;
                }

                // Only auto-change the image if the user hasn't interacted
                if (!this.userInteracted) {
                    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
                }
            }, 5000);
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
            this.userInteracted = true; // User clicked the button
            this.lastInteractionTime = Date.now(); // Update the time of interaction
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
            this.userInteracted = true; // User clicked the button
            this.lastInteractionTime = Date.now(); // Update the time of interaction
        },
        getBreedImage(breed) {
            if (breed === 'Toy Poodle') {
                return require('@/assets/toypoodle1.jpg');
            } else if (breed === 'Schnauzer') {
                return require('@/assets/schnauzer1.jpg');
            } else if (breed === 'Yorkshire') {
                return require('@/assets/yorkie1.jpg');
            }
        },
    },
};
</script>

<style scoped>
.home-page {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* padding: 0px 3px; */
    /* min-height: 100vh; */
    height: 100%;
    overflow-x: hidden;
    /* overflow-y: scroll; */
    /* Prevent horizontal scrolling */
}

.div {
    background-color: #ffffff;
    overflow-y: visible;
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
    width: 100%;
    /* Use 90% of the screen width */
    /* max-width: 500px; */
    /* Cap the maximum width for larger screens */
    height: calc(100vh - 90px);
    /* Assuming 60px for header and 60px for navbar */
    /* position: relative; */
    padding: 0px;
    /* box-sizing: border-box; */
    /* margin-top: 50px; */
    /* Space for header */
    /* margin-bottom: 60px; */
    /* Space for navbar */
}

.the-essentials,
.our-puppies-carousel,
.carousel-banner {
    width: 100%;
    margin-bottom: 5%;
}

.overlap-group,
.overlap,
.overlap-2 {
    position: relative;
    width: 100%;
    padding-bottom: 0%;
    /* Maintain aspect ratio */
}

.overlap-3 {
    position: relative;
    width: 100%;
    padding: 0px 9px;
    /* Maintain aspect ratio */
}

.carousel {
    display: flex;
    width: 100%;
    gap: 13px;
    overflow-x: auto;
    padding: 10px 0;
    scroll-snap-type: x mandatory;
}

.item {
    flex: 0 0 auto;
    width: calc(50% - 17px);
    min-width: 100px;
    position: relative;
    margin-right: 0;
    scroll-snap-align: start;
}

.item:last-child {
    padding-right: 19px;
}

.item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    aspect-ratio: 1 / 1;
}

.item-text {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px 10px;
    border-radius: 10px;
    font-family: "Inter-Medium", Helvetica;
    font-weight: 500;
    color: #333;
    font-size: clamp(12px, 3vw, 16px);
    white-space: nowrap;
    text-decoration: none;
    /* Add this to remove underline */
    display: block;
    /* Add this to make it a block element */
}

/* Add styles for scrollbar */
.carousel::-webkit-scrollbar {
    height: 6px;
    margin-left: 10px;
}

.carousel::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.carousel::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
}

.carousel::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* ... other styles ... */

.text-wrapper,
.text-wrapper-2,
.text-wrapper-3,
.text-wrapper-4,
.text-wrapper-5,
.text-wrapper-6,
.text-wrapper-7,
.text-wrapper-8 {
    position: absolute;
    font-family: "Inter-Medium", Helvetica;
    font-weight: 500;
    color: #9aa0a6;
    font-size: clamp(14px, 4vw, 20px);
    /* Responsive font size with min and max values */
    letter-spacing: 0.02em;
    white-space: nowrap;
}

.text-wrapper {
    bottom: 5%;
    right: 5%;
}

.text-wrapper-2 {
    bottom: 5%;
    left: 5%;
}

.text-wrapper-3,
.text-wrapper-6 {
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 600;
    color: #eb221e;
    text-align: left;
    font-size: clamp(18px, 5vw, 24px);
    /* Responsive font size with min and max values */
    margin-bottom: 2%;
}

.rectangle img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
}

.page-control {
    position: absolute;
    width: 100%;
    bottom: 15%;
    /* Adjusted from 20% to 15% to move it slightly down */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* Adds space between text and dots */
}

.referral-text {
    position: absolute;
    width: 100%;
    bottom: 15%;
    left: 5%;
    font-family: "Inter-Italic", Helvetica;
    font-weight: 400;
    font-style: italic;
    color: #000000;
    font-size: clamp(12px, 3.5vw, 18px);
    text-align: center;
}

.dots-container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
}

.dot,
.dot-2 {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.dot {
    background-color: #000000;
    opacity: 0.3;
    transition: opacity 0.3s ease;
}

.dot-active {
    background-color: #ff3b30;
    opacity: 1;
}

.dot-2 {
    background-color: #000000;
    opacity: 0.3;
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.p {
    position: absolute;
    width: 90%;
    bottom: 5%;
    left: 5%;
    font-family: "Inter-Italic", Helvetica;
    font-weight: 400;
    font-style: italic;
    color: #000000;
    font-size: clamp(12px, 3.5vw, 18px);
    /* Responsive font size with min and max values */
    text-align: center;
}

.text-wrapper-7 {
    position: absolute;
    width: 80%;
    /* Reduced from 90% to allow more space on sides */
    top: 10%;
    left: 10%;
    /* Adjusted to center the narrower text block */
    font-family: "Inter-ExtraBold", Helvetica;
    font-weight: 800;
    color: #000000;
    font-size: clamp(16px, 5vw, 24px);
    /* Reduced font size */
    text-align: center;
    line-height: 1.3;
    /* Increased line height for better readability */
    white-space: normal;
    /* Allow text to wrap */
}

/* Styles for scrollbar */
.div::-webkit-scrollbar {
    width: 6px;
}

.div::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.div::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0px;
}

.div::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* Media query for larger screens */
@media (min-width: 700px) {
    .div {
        width: 100%;
        /* Slightly narrower on larger screens */
    }
}

/* Remove or comment out these styles */
/*
.text-wrapper,
.text-wrapper-2 {
    position: absolute;
    bottom
*/

.carousel-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 75%;
    /* Adjust this value to change the aspect ratio */
    overflow: hidden;
}

.carousel-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.carousel-images img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
