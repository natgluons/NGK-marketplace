<template>
    <div class="cart-page">
        <h1>Your Cart</h1>
        <div v-if="cart.length">
            <div v-for="item in cart" :key="item.id" class="cart-item">
                <span>{{ item.name }}</span>
                <span>{{ item.quantity }}</span>
                <span>{{ item.price }}</span>
                <button @click="removeFromCart(item.id)">Remove</button>
            </div>
        </div>
        <div v-else>
            <p>Your cart is empty.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartPage",
    data() {
        return {
            cart: [] // This would be managed by a global state or Vuex in a real application
        };
    },
    methods: {
        removeFromCart(id) {
            // Implement remove functionality here
            this.cart = this.cart.filter(item => item.id !== id);
        }
    }
};
</script>

<style>
.cart-page {
    padding: 20px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.cart-item button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.cart-item button:hover {
    background-color: darkred;
}
</style>
