import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import BreedPage from './components/BreedPage.vue';
import ContactUs from './components/ContactUs.vue';
import Transactions from './components/Transactions.vue';
import Account from './components/Account.vue';
import CartPage from './components/CartPage.vue';
import LoginPage from './components/LoginPage.vue';
import SignUp from './components/SignUp.vue';
import OTPverify from './components/OTPverify.vue';
import AccDetails from './components/AccDetails.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import ResetPassword from './components/ResetPassword.vue';
import Vouchers from './components/Vouchers.vue';
import ClaimVoucher from './components/ClaimVoucher.vue';
import auth from './services/auth';

Vue.config.productionTip = false;

Vue.use(Router);

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/breed/:breedName', name: 'BreedPage', component: BreedPage },
    { path: '/contact-us', name: 'ContactUs', component: ContactUs },
    { path: '/transactions', name: 'Transactions', component: Transactions },
    { path: '/account', name: 'Account', component: Account },
    { path: '/cart', name: 'Cart', component: CartPage, meta: { requiresAuth: true } },
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/otp', name: 'OTPverify', component: OTPverify },
    { path: '/account-details', name: 'AccDetails', component: AccDetails },
    { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
    { path: '/reset-password', name: 'ResetPassword', component: ResetPassword, props: (route) => ({ token: route.query.token }) },
    { path: '/vouchers', name: 'Vouchers', component: Vouchers },
    { path: '/claim-voucher', name: 'ClaimVoucher', component: ClaimVoucher, meta: { requiresAuth: true } }
];

const router = new Router({
    routes,
    mode: 'history', // Use HTML5 history mode
});

// Add navigation guard
router.beforeEach((to, from, next) => {
    // Check if route requires auth
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.checkAuth()) {
            next({
                name: 'LoginPage',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
