<template>
    <div class="account-page">
        <div v-if="auth.checkAuth()" class="account-container">
            <h1>My Account</h1>
            
            <div class="account-details">
                <div class="profile-section">
                    <h2>Profile Information</h2>
                    <div class="info-row">
                        <span class="label">Username:</span>
                        <span class="value">{{ auth.getUser() }}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">WhatsApp:</span>
                        <span class="value">+62812345678</span>
                    </div>
                </div>

                <div class="referral-section">
                    <h2>My Referral Code</h2>
                    <p class="referral-code">{{ auth.getUser() }}</p>
                    <p class="referral-hint">Share this code with your friends!</p>
                </div>
            </div>

            <button @click="logout" class="logout-button">Sign Out</button>
        </div>
    </div>
</template>

<script>
import auth from '@/services/auth';

export default {
    name: 'Account',
    data() {
        return {
            auth
        }
    },
    methods: {
        logout() {
            auth.logout();
            this.$router.push({ name: 'LoginPage' });
        }
    }
}
</script>

<style scoped>
.account-page {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.account-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 30px;
    text-align: center;
}

h2 {
    color: #444;
    font-size: 18px;
    margin-bottom: 15px;
}

.account-details {
    margin-bottom: 30px;
}

.profile-section, .referral-section {
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    margin-bottom: 20px;
}

.info-row {
    display: flex;
    margin-bottom: 10px;
    padding: 8px 0;
}

.label {
    font-weight: 600;
    width: 120px;
    color: #666;
}

.value {
    color: #333;
}

.referral-code {
    font-size: 24px;
    color: #eb221e;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    margin: 10px 0;
}

.referral-hint {
    text-align: center;
    color: #666;
    font-size: 14px;
}

.logout-button {
    width: 100%;
    padding: 12px;
    background-color: #fffcfc;
    border: 1px solid #eb221e;
    border-radius: 30px;
    color: #eb221e;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.logout-button:hover {
    background-color: #eb221e;
    color: #ffffff;
}
</style>
