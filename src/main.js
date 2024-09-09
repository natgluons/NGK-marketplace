import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import BreedPage from './components/BreedPage.vue';
import ProductPage from './components/ProductPage.vue';
import ContactUs from './components/ContactUs.vue';
import Transactions from './components/Transactions.vue';
import Account from './components/Account.vue';
import CartPage from './components/CartPage.vue';
import LoginPage from './components/LoginPage.vue';
import SignUp from './components/SignUp.vue';
import OTPpage from './components/OTPpage.vue';
import VerifyAccDetails from './components/VerifyAccDetails.vue';

Vue.config.productionTip = false;

Vue.use(Router);

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/breed/:breedName', name: 'BreedPage', component: BreedPage },
    { path: '/product/:productName', name: 'ProductPage', component: ProductPage },
    { path: '/contact-us', name: 'ContactUs', component: ContactUs },
    { path: '/transactions', name: 'Transactions', component: Transactions },
    { path: '/account', name: 'Account', component: Account },
    { path: '/cart', name: 'Cart', component: CartPage },
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/otp', name: 'OTPpage', component: OTPpage },
    { path: '/verify', name: 'VerifyAccDetails', component: VerifyAccDetails }
];

const router = new Router({
    routes,
    mode: 'history', // Use HTML5 history mode
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
