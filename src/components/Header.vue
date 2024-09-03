<template>
    <header class="header">
        <div class="header-item" @click="goBack">
            <img class="arrow-back" src="@/assets/backarrow.svg" alt="Arrow Back" />
        </div>
        <div class="header-item title">NATASHA GADING KENNEL</div>
        <div class="header-item shopping-cart-container">
            <img class="shopping-cart" src="@/assets/shoppingcart.svg" alt="Shopping Cart" />
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
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

.shopping-cart-container {
    display: flex;
    justify-content: flex-end;
    width: 24px;
    /* Adjust this value as needed */
    margin-right: 10px;
    /* Adjust this value to move the icon more or less to the left */
}

.header-item:hover {
    color: red;
}
</style>
