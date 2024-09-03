<template>
  <div class="breed-page">
    <div class="carousel-container">
      <div class="carousel">
        <img 
          v-for="(image, index) in breedData.images" 
          :key="index" 
          v-show="currentIndex === index"
          :src="image" 
          :alt="`${breedName} ${index + 1}`"
          class="carousel-image"
        />
        <button class="prev" @click="prevImage">&#10094;</button>
        <button class="next" @click="nextImage">&#10095;</button>
      </div>
      <div class="dots-container">
        <div 
          v-for="(dot, index) in breedData.images" 
          :key="index"
          :class="['dot', { 'dot-active': currentIndex === index }]"
          @click="currentIndex = index"
        ></div>
      </div>
    </div>
    <div class="description">
      <div style="text-align: center;"><strong>{{ breedName }}</strong></div>
      <br />
      Available colors:
    </div>
    <div class="available-colors">
      <div v-for="color in formattedColors" :key="color.name" :class="color.class">
        <div class="overlap-group-2">
          <div class="text-wrapper-2">{{ color.name }}</div>
          <div :class="color.ellipseClass"></div>
        </div>
      </div>
    </div>
    <div class="description">
      {{ breedData.description }}<br /><br />
      Price range: {{ breedData.price }}<br />
      <p>
        <strong>Why Natasha Gading Kennel?</strong><br>
        • Pedigree Completed (Stamboom)<br>
        • Microchip<br>
        • E4 Vaccine<br>
        • Bloodline Imported from Taiwan<br>
        • Regular Deworming & Vitamins<br>
        • Flea & Worm-Free<br>
        • Guaranteed Healthy<br><br>

        <strong>Visitation & Shipping</strong><br>
        ✓ Visits available by appointment (booking required!). We're located in Kelapa Gading, North Jakarta (3.1km from MKG)<br>
        ✓ Home delivery available<br>
        ✓ Shipping throughout Indonesia
      </p>
    </div>
    <div class="advertise">
      <strong>Interested in bringing this adorable puppy home?</strong>
      <br /><br />
      Contact us for pricing, availability, appointment, or shipping information.<br /><br />
      ✆ WhatsApp: <a href="https://wa.me/6281808600487">(+62) 8180-860-0487</a>
      <br /><br /><br /><br />
    </div>
  </div>
</template>

<script>
import breedsData from '@/assets/breedsData.js';

export default {
  name: 'BreedPage',
  data() {
    return {
      currentIndex: 0,
      breedData: {},
      breedName: '',
      userInteracted: false, // Flag to track if the user has manually changed the image
      lastInteractionTime: Date.now(), // Track the time of the last user interaction
    };
  },
  computed: {
    formattedColors() {
      return this.breedData.colors || [];
    }
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex + this.breedData.images.length - 1) % this.breedData.images.length;
      this.userInteracted = true; // User clicked the button
      this.lastInteractionTime = Date.now(); // Update the time of interaction
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.breedData.images.length;
      this.userInteracted = true; // User clicked the button
      this.lastInteractionTime = Date.now(); // Update the time of interaction
    },
    fetchBreedData() {
      const breedName = this.$route.params.breedName; // Get breed name from URL
      this.breedName = breedName;
      this.breedData = breedsData[breedName] || {}; // Load breed data based on breed name
    }
  },
  watch: {
    '$route.params.breedName': 'fetchBreedData' // Watch for route changes
  },
  created() {
    this.fetchBreedData();
    setInterval(() => {
      // Check if the user has not interacted in the last 5 seconds
      if (Date.now() - this.lastInteractionTime >= 5000) {
        this.userInteracted = false;
      }

      // Only auto-change the image if the user hasn't interacted
      if (!this.userInteracted) {
        this.nextImage();
      }
    }, 5000); // Auto-change image every 5 seconds
  }
};

</script>

<style scoped>
.breed-page {
  background-color: #ffffff;
  overflow-y: visible;
  overflow-x: hidden;
  width: 100%;
  max-width: 500px;
  height: calc(100vh - 90px);
  padding: 0;
  box-sizing: border-box;
}

.carousel-container {
  position: relative;
  width: 100%;
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
  scroll-snap-type: x mandatory;
  position: relative;
}

.carousel-images {
  display: flex;
  width: 100%;
  height: auto;
  scroll-snap-type: x mandatory;
}

.carousel-image {
  flex: none;
  width: 100%;
  height: auto;
  scroll-snap-align: center;
  transition: opacity 0.5s ease-in-out;
}

.dots-container {
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 2px;
  cursor: pointer;
}

.dot-active {
  background-color: #717171;
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

.description {
  font-family: "Inter-Regular", Helvetica;
  color: #9aa0a6;
  font-size: 16px;
  letter-spacing: 0.32px;
  line-height: 19.2px;
  margin: 15px;
}

.advertise {
  font-family: "Inter-Regular", Helvetica;
  color: #222222;
  font-size: 18px;
  letter-spacing: 0.3px;
  line-height: 20.1px;
  margin: 20px;
}

.available-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 0;
}

.overlap-group-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #9aa0a6;
  padding: 4px;
  width: 100px;
  height: 30px;
}

.text-wrapper-2 {
  margin-left: 10px;
  font-family: "Inter-Regular", Helvetica;
  color: #9aa0a6;
  font-size: 16px;
}

.carousel {
  display: flex;
  width: 100%;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  position: relative;
}

.carousel::-webkit-scrollbar {
  display: none; /* Hide scrollbar for WebKit browsers */
}

.carousel::-webkit-scrollbar-track {
  display: none; /* Hide scrollbar track for WebKit browsers */
}

.carousel::-webkit-scrollbar-thumb {
  display: none; /* Hide scrollbar thumb for WebKit browsers */
}

.ellipse, .ellipse-2, .ellipse-3, .ellipse-4, .ellipse-5, .ellipse-6 {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #9aa0a6;
  margin-left: 10px;
  margin-right: 8px;
}

.ellipse-10 {
  width: 25px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #9aa0a6;
  margin-left: 0px;
  margin-right: 5px;
}

.ellipse { background-color: #fffcfc; }
.ellipse-2 { background-color: #787878; }
.ellipse-3 { background-color: #292525; }
.ellipse-4 { background-color: #cc956d; }
.ellipse-5 { background-color: #97623c; }
.ellipse-6 { background-color: #d03622; }
.ellipse-7 { background-color: #a08c71; } /* Blue & Tan*/
.ellipse-8 { background-color: #8b4513; } /* Black & Tan */
.ellipse-9 { background-color: #587790; } /* Steel Blue */
.ellipse-10 { background-color: #b4b9b0; } /* Salt & Pepper */

</style>
