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
    <div class="info-section">
      <div class="info-box">
        <p class="breed-description">{{ breedData.description }}</p>
        <div class="price-info">Price range: {{ breedData.price }}</div>
      </div>

      <div class="features-box">
        <h3 class="features-title">Why Natasha Gading Kennel?</h3>
        <ul class="features-list">
          <li>Pedigree Completed (Stamboom)</li>
          <li>Microchip</li>
          <li>E4 Vaccine</li>
          <li>Bloodline Imported from Taiwan</li>
          <li>Regular Deworming & Vitamins</li>
          <li>Flea & Worm-Free</li>
          <li>Guaranteed Healthy</li>
        </ul>
      </div>

      <div class="features-box">
        <h3 class="features-title">Visitation & Shipping</h3>
        <ul class="features-list checkmark">
          <li>Visits available by appointment (booking required!). We're located in Kelapa Gading, North Jakarta (walking distance from Mall Kelapa Gading)</li>
          <li>Home delivery available</li>
          <li>Shipping throughout Indonesia</li>
        </ul>
      </div>
    </div>
    <div class="contact-section">
      <div class="section-divider">
        <div class="line"></div>
        <span>Contact Us</span>
        <div class="line"></div>
      </div>
      <div class="contact-box">
        <h3 class="contact-title">Interested in bringing this adorable puppy home?</h3>
        <p class="contact-text">Contact us for pricing, availability, appointment, or shipping information.</p>
        <div class="whatsapp-button">
          <img src="@/assets/whatsapp.svg" alt="WhatsApp" class="whatsapp-icon" />
          <a href="https://wa.me/6281234187970">(+62) 81234-18-7970</a>
        </div>
      </div>
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
  color: #7c7c7c;
  font-size: 16px;
  letter-spacing: 0.32px;
  line-height: 19.2px;
  margin: 15px;
}

.contact-section {
  padding: 20px 15px 80px 15px;
}

.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.section-divider .line {
  height: 1px;
  background-color: #e0e0e0;
  flex: 1;
  max-width: 80px;
}

.section-divider span {
  color: #666;
  font-size: 16px;
  font-family: "Inter-Medium", Helvetica;
  white-space: nowrap;
}

.contact-box {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.contact-title {
  font-family: "Inter-SemiBold", Helvetica;
  color: #333;
  font-size: 18px;
  margin: 0 0 15px 0;
}

.contact-text {
  font-family: "Inter-Regular", Helvetica;
  color: #666;
  font-size: 14px;
  line-height: 1.4;
  margin: 0 0 20px 0;
}

.whatsapp-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  padding: 12px 20px;
  margin: 0 auto;
  max-width: fit-content;
  transition: all 0.3s ease;
}

.whatsapp-icon {
  width: 20px;
  height: 20px;
  transition: filter 0.3s ease;
}

.whatsapp-button a {
  color: #333;
  text-decoration: none;
  font-family: "Inter-Medium", Helvetica;
  font-size: 15px;
  transition: color 0.3s ease;
}

.whatsapp-button:hover {
  background-color: #eb221e;
  border-color: #eb221e;
}

.whatsapp-button:hover a {
  color: #ffffff;
}

.whatsapp-button:hover .whatsapp-icon {
  filter: brightness(0) invert(1);
}

.available-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  padding-right: 5px;
}

.overlap-group-2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #9aa0a6;
  padding: 4px 8px;
  width: fit-content;
  height: 30px;
}

/* Special case for Salt & Pepper */
.overlap-group-2:has(.text-wrapper-2:contains("Salt & Pepper")) {
  min-width: 140px;
}

.text-wrapper-2 {
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Inter-Regular", Helvetica;
  color: #9aa0a6;
  font-size: 16px;
  white-space: nowrap;
}

.ellipse, .ellipse-2, .ellipse-3, .ellipse-4, .ellipse-5, .ellipse-6 {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #9aa0a6;
  margin-left: 10px;
  margin-right: 8px;
  flex-shrink: 0;
  aspect-ratio: 1;
}

.ellipse-10 {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #9aa0a6;
  margin-left: 10px;
  margin-right: 5px;
  flex-shrink: 0;
  aspect-ratio: 1;
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

.info-section {
  padding: 15px;
}

.info-box, .features-box {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
}

.breed-description {
  color: #333;
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 15px 0;
}

.price-info {
  color: #333;
  font-size: 15px;
  font-weight: 500;
}

.features-title {
  color: #333;
  font-size: 16px;
  font-family: "Inter-SemiBold", Helvetica;
  margin: 0 0 12px 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
}

.features-list li:before {
  content: "•";
  position: absolute;
  left: 5px;
  color: #666;
}

.features-list li:last-child {
  margin-bottom: 0;
}

.features-list.checkmark li:before {
  content: "✓";
  color: #666;
}

</style>
