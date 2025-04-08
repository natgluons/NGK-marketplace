<template>
    <div class="account-page">
        <div class="contact-helper">
            <div class="helper-text">
                <p>Click here</p>
                <p>to find our</p>
                <p>contact info!</p>
            </div>
            <div class="arrow-up">↑</div>
        </div>
        <div v-if="isAuthenticated" class="account-container">
            <h1>My Account</h1>
            
            <div class="account-details">
                <div class="profile-section">
                    <h2>Profile Information</h2>
                    <div class="info-row">
                        <span class="label">Username:</span>
                        <span v-if="profileData" class="value clickable" @click="copyText(profileData.username)">
                            {{ profileData.username }}
                        </span>
                        <span v-else class="value loading">Loading profile information...</span>
                    </div>
                    <div class="info-row">
                        <span class="label">WhatsApp:</span>
                        <span v-if="profileData" class="value clickable" @click="copyText(profileData.whatsapp)">
                            {{ profileData.whatsapp }}
                        </span>
                        <span v-else class="value loading">Loading profile information...</span>
                    </div>
                </div>

                <div class="referral-section">
                    <h2>My Referral Code</h2>
                    <div class="referral-code-container" @click="copyReferralCode">
                        <p class="referral-code">{{ auth.getUser() }}</p>
                        <img src="@/assets/copy.svg" alt="Copy" class="copy-icon" />
                    </div>
                    <p class="referral-hint">Share this code with your friends!</p>
                </div>
            </div>

            <button @click="logout" class="logout-button">Sign Out</button>
        </div>
        <div v-else class="sign-in-prompt">
            <img src="@/assets/logongk.png" alt="NGK Logo" class="prompt-logo" />
            <div class="coming-soon-text">
                <h3>Coming Soon: Referral Login</h3>
                <p>We're working on it!</p>
                <p>Contact us on <a href="https://wa.me/6281234187970" target="_blank" class="whatsapp-link" style="color: #044484;">WhatsApp</a> for now</p>
            </div>
            <h2>Sign in to view your account details</h2>
            <router-link to="/login" class="sign-in-link">Sign in</router-link>
        </div>
    </div>
</template>

<script>
import auth from '@/services/auth';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Account',
    setup() {
        const router = useRouter();
        const isAuthenticated = ref(auth.checkAuth());  // Initialize with current auth state
        const profileData = ref(null);

        const fetchProfileData = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await fetch('YOUR_API_ENDPOINT/profile', {
                    headers: {
                        'Authorization': `Bearer ${auth.getToken()}`
                    }
                });
                if (!response.ok) throw new Error('Failed to fetch profile');
                profileData.value = await response.json();
            } catch (error) {
                console.error('Error fetching profile:', error);
                // Handle error appropriately
            }
        };

        const logout = async () => {
            await auth.logout();
            isAuthenticated.value = false;  // Update the reactive state
            router.push('/');
        };

        const copyReferralCode = () => {
            navigator.clipboard.writeText(auth.getUser())
                .then(() => {
                    alert('Referral code copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        };

        const copyText = (text) => {
            navigator.clipboard.writeText(text)
                .then(() => {
                    alert('Copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        };

        onMounted(() => {
            isAuthenticated.value = auth.checkAuth();  // Check auth state when component mounts
            if (isAuthenticated.value) {
                fetchProfileData();
            }
        });

        return {
            auth,  // Still expose auth for methods that need it
            isAuthenticated,  // Use this for template conditions instead of auth.checkAuth()
            profileData,
            fetchProfileData,
            logout,
            copyReferralCode,
            copyText
        };
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
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
}

h2 {
    color: #444;
    font-size: 14px;
    margin-bottom: 8px;
}

.account-details {
    margin-bottom: 15px;
}

.profile-section, .referral-section {
    padding: 12px;
    background: #f9f9f9;
    border-radius: 8px;
    margin-bottom: 12px;
}

.info-row {
    display: flex;
    margin-bottom: 6px;
    padding: 4px 0;
}

.label {
    font-weight: 600;
    width: 120px;
    color: #666;
}

.value {
    color: #333;
}

.referral-code-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    margin: 8px 0;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
}

.referral-code-container:hover {
    background-color: #ebebeb;
    border-color: #ccc;
}

.referral-code {
    font-size: 18px;
    color: #eb221e;
    font-weight: bold;
    margin: 0;
    flex-grow: 1;
    text-align: center;
}

.copy-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: opacity 0.2s;
    margin-left: auto;
}

.copy-icon:hover {
    opacity: 0.7;
}

.referral-hint {
    text-align: center;
    color: #666;
    font-size: 12px;
    margin-top: 6px;
}

.logout-button {
    width: 100%;
    padding: 10px;
    background-color: #fffcfc;
    border: 1px solid #eb221e;
    border-radius: 30px;
    color: #eb221e;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.logout-button:hover {
    background-color: #eb221e;
    color: #ffffff;
}

.sign-in-prompt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    text-align: center;
    padding: 20px;
}

.sign-in-prompt h2 {
    color: #333;
    font-size: 18px;
    margin-bottom: 20px;
    font-family: "Inter-Medium", Helvetica;
}

.sign-in-link {
    display: inline-block;
    padding: 10px 30px;
    background-color: #fffcfc;
    border: 1px solid #eb221e;
    border-radius: 30px;
    color: #eb221e;
    text-decoration: none;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
}

.sign-in-link:hover {
    background-color: #eb221e;
    color: #ffffff;
}

.loading-state {
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
}

.value.loading {
    color: #666;
    font-style: italic;
    font-size: 14px;
}

.value.clickable {
    cursor: pointer;
    padding: 2px 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: all 0.2s;
}

.value.clickable:hover {
    background-color: #f5f5f5;
    border-color: #ccc;
}

.contact-helper {
    position: fixed;
    top: 80px;
    right: 10px;
    font-size: 15px;
    color: #f10000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 100;
}

.helper-text {
    text-align: right;
    font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
    transform: rotate(-2deg);
    margin-right: 10px;
}

.helper-text p {
    margin: 0;
    line-height: 1.2;
}

.arrow-up {
    font-size: 40px;
    line-height: 1;
    position: absolute;
    top: -45px;
    right: 15px;
}

.prompt-logo {
    width: 200px;
    height: 200px;
    margin-bottom: 1px;
    object-fit: contain;
}

.coming-soon-text {
    margin-bottom: 35px;
    color: #666;
}

.coming-soon-text h3 {
    color: #f10000;
    font-size: 15px;
    margin-bottom: 2px;
    font-family: "Inter-SemiBold", Helvetica;
}

.coming-soon-text p {
    font-size: 14px;
    margin: 2px 0;
    color: #666;
    font-family: "Inter-Regular", Helvetica;
}

.whatsapp-link {
    color: inherit;
    text-decoration: underline;
    font-weight: 700;
}

.whatsapp-link:hover {
    opacity: 0.8;
}
</style>
