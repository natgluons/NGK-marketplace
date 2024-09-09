<template>
    <header class="header">
        <div class="header-item" @click="goBack">
            <img class="arrow-back" src="@/assets/backarrow.svg" alt="Arrow Back" />
        </div>
        <div class="header-item title">NATASHA GADING</div>
        <div class="header-item">
            <router-link v-for="(item, index) in navItems" :key="index" :to="item.to" class="header-item nav-item"
                @click="setActive(index)">
                <img :src="item.icon" :alt="item.text" :class="{ 'active': activeIndex === index }">
                <span :class="{ 'active': activeIndex === index }">{{ item.text }}</span>
            </router-link>
        </div>
        <!-- <div class="header-item shopping-cart-container">
            <img class="shopping-cart" src="@/assets/shoppingcart.svg" alt="Shopping Cart" />
        </div> -->
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    },
    data() {
        return {
            activeIndex: null,
            navItems: [
                // { to: '/cart', icon: require('@/assets/shoppingcart.svg') },
                {
                    to: this.isLoggedIn ? '/cart' : '/login',
                    icon: require('@/assets/shoppingcart.svg'),
                    // text: 'Cart',
                    // isPlaceholder: true
                }
            ]
        }
    },
    computed: {

        isLoggedIn() {
            // Check if a token exists in localStorage
            return localStorage.getItem('token') !== null;
        }
    },
};
// };
</script>

<style scoped>
.header {
    background-color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    /* position: fixed; */
    top: 0;
    width: 100%;
    max-width: 500px;
    /* Match the parent container's width */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    /* Include padding in the width calculation */
}


.header-item {
    display: flex;
    align-items: center;
}

@import url('https://fonts.googleapis.com/css2?family=Itim');

.title {
    font-family: "Itim", cursive;
    font-weight: 700;
    color: #f10000;
    font-size: 20px;
    text-align: center;
    /* border-radius: 10px; */
}

.shopping-cart,
.arrow-back {
    width: 24px;
    height: 24px;
    margin-left: 10px;
}

.header-item img:hover {
    /* filter: invert(95%) sepia(100%) saturate(100000%) hue-rotate(287deg) brightness(75%) contrast(180%);  */
    filter: invert(20%) sepia(84%) saturate(6473%) hue-rotate(357deg) brightness(90%) contrast(126%);
}

/* .header-item:hover {
    color: red;
} */

.nav-item img {
    display: flex;
    justify-content: flex-end;
    width: 24px;
    /* Adjust this value as needed */
    margin-right: 10px;
    /* Adjust this value to move the icon more or less to the left */

}

.nav-item img:hover {
    /* filter: invert(95%) sepia(100%) saturate(100000%) hue-rotate(287deg) brightness(75%) contrast(180%);  */
    filter: invert(20%) sepia(84%) saturate(6473%) hue-rotate(357deg) brightness(90%) contrast(126%);
}

.nav-item img.active {
    /* filter: invert(95%) sepia(100%) saturate(100000%) hue-rotate(287deg) brightness(75%) contrast(180%);  */
    filter: invert(20%) sepia(84%) saturate(6473%) hue-rotate(357deg) brightness(90%) contrast(126%);
}

.shopping-cart-container {
    display: flex;
    justify-content: flex-end;
    width: 24px;
    /* Adjust this value as needed */
    margin-right: 10px;
    /* Adjust this value to move the icon more or less to the left */
}
</style>
