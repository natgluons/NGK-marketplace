<template>
    <nav class="navbar">
        <router-link v-for="(item, index) in navItems" :key="index" :to="item.to" class="nav-item"
            @click="setActive(index)">
            <img :src="item.icon" :alt="item.text" :class="{ 'active': activeIndex === index }">
            <span :class="{ 'active': activeIndex === index }">{{ item.text }}</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            activeIndex: null,
            navItems: [
                { to: '/', icon: require('@/assets/home.svg'), text: 'Home' },
                { to: '/contact-us', icon: require('@/assets/contactus.svg'), text: 'Contact Us' },
                { to: '/transactions', icon: require('@/assets/transactions.svg'), text: 'Transactions' },
                { to: '/account', icon: require('@/assets/account.svg'), text: 'Account' },
            ]
        }
    },
    methods: {        
        setActive(index) {
            this.activeIndex = index;
        },
        updateActiveIndex() {
            const currentPath = this.$route.path;
            this.activeIndex = this.navItems.findIndex(item => item.to === currentPath);
        }
    },
    mounted() {
        this.updateActiveIndex();
    },
    watch: {
        $route() {
            this.updateActiveIndex();
        }
    }
};
</script>

<style scoped>
.navbar {
    background-color: white;
    padding: 2px 0; 
    display: flex;
    justify-content: space-around;
    border-top: 0px solid #ddd;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    /* height: 60px; */
    width: 100%;
    max-width: 500px;
    /* Adjust this value to match the parent container's width */
    margin: 0 auto;
}

.nav-item {
    color: black;
    text-decoration: none;
    font-size: 12px;
    /* Reduced from 13px */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-item span {
    margin-bottom: 5px;
    /* Reduced from 4px */
}

.nav-item:hover {
    color: #ff0000;
}

.nav-item span.active {
    color: #ff0000;
}

.nav-item img {
    width: 23px;
    /* Reduced from 24px */
    height: 23px;
    /* Reduced from 24px */
    margin-bottom: 0px;
    margin-top: 5px
    /* Added to create space between icon and text */
}

.nav-item img:hover {
    /* filter: invert(95%) sepia(100%) saturate(100000%) hue-rotate(287deg) brightness(75%) contrast(180%);  */
    filter: invert(20%) sepia(84%) saturate(6473%) hue-rotate(357deg) brightness(90%) contrast(126%);
}

.nav-item img.active {
    /* filter: invert(95%) sepia(100%) saturate(100000%) hue-rotate(287deg) brightness(75%) contrast(180%);  */
    filter: invert(20%) sepia(84%) saturate(6473%) hue-rotate(357deg) brightness(90%) contrast(126%);
}
</style>
