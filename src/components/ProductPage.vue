<template>
  <div class="product-page">
    <header>
      <h1>{{ productName }}</h1>
    </header>

    <section class="details">
      <p>[Type] {{ productName }}</p>
      <div class="sizes">
        <h3>Sizes available:</h3>
        <span>1.14 kg</span> <span>4.54 kg</span>
      </div>
      <div class="colors" v-if="productName === 'Accessories'">
        <h3>Colors available:</h3>
        <div v-for="color in colors" :key="color" class="color-box" :style="{ backgroundColor: color }"></div>
      </div>
    </section>

    <section class="purchase">
      <p>Price: Rp XX.XXX</p>
      <button @click="addToCart">Add to cart</button>
      <button @click="buyNow">Buy Now</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      colors: ['red', 'blue', 'green'],
    };
  },
  computed: {
    productName() {
      return this.$route.params.productName;
    }
  },
  methods: {
    addToCart() {
      alert('Added to cart!');
    },
    buyNow() {
      alert('Purchase complete!');
    }
  }
};
</script>

<style scoped>
.product-page {
  text-align: center;
}

header {
  background-color: red;
  color: white;
  padding: 10px;
}

.details {
  margin: 20px 0;
}

.sizes span, .colors .color-box {
  margin-right: 10px;
}

.color-box {
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 50%;
}

.purchase {
  margin-top: 20px;
}

button {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: darkred;
}
</style>
