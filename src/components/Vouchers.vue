<template>
    <div class="voucher-page">
        <div class="contact-helper">
            <span>Click the phone button in the header to find our contact info!</span>
            <div class="arrow-up"></div>
        </div>
        <div v-if="isLoggedIn">
            <h1>Vouchers</h1>
            <div v-if="loading" class="loading">
                Loading vouchers...
            </div>
            <div v-else-if="error" class="error">
                {{ error }}
            </div>
            <div v-else-if="vouchers.length === 0" class="no-vouchers">
                No vouchers available
            </div>
            <div v-else class="vouchers-list">
                <div v-for="voucher in vouchers" :key="voucher.id" class="voucher-item">
                    <div class="voucher-header">
                        <span class="voucher-date">{{ formatDate(voucher.datetime) }}</span>
                        <span :class="['voucher-status', voucher.status.toLowerCase()]">
                            {{ voucher.status }}
                        </span>
                    </div>
                    <div class="voucher-content">
                        <p class="voucher-message">
                            Another user has entered your username as their referrer, you have received a voucher for dog food purchase
                        </p>
                        <router-link 
                            v-if="voucher.status === 'UNCLAIMED'"
                            :to="{ name: 'ClaimVoucher', params: { id: voucher.id }}" 
                            class="claim-button"
                        >
                            Claim Voucher
                        </router-link>
                        <span v-else-if="voucher.status === 'CLAIMED'" class="claimed-text">
                            Voucher has been claimed
                        </span>
                        <span v-else-if="voucher.status === 'USED'" class="used-text">
                            Voucher has been used
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="sign-in-prompt">
            <h2>Sign in to view your voucher list</h2>
            <router-link to="/login" class="sign-in-link">Sign in</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Vouchers',
    data() {
        return {
            vouchers: [],
            loading: true,
            error: null
        }
    },
    computed: {
        isLoggedIn() {
            return localStorage.getItem('token') !== null;
        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        },
        async fetchVouchers() {
            try {
                this.loading = true;
                this.error = null;
                
                const response = await fetch('https://api.example.com/vouchers', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch vouchers');
                }

                this.vouchers = await response.json();
            } catch (err) {
                this.error = 'Error loading vouchers. Please try again later.';
                console.error('Error:', err);
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        if (this.isLoggedIn) {
            this.fetchVouchers();
        }
    }
};
</script>

<style scoped>
.voucher-page {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

h1 {
    color: #333;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
}

.loading, .error, .no-vouchers {
    text-align: center;
    padding: 20px;
    color: #666;
}

.error {
    color: #f10000;
}

.vouchers-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.voucher-item {
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.voucher-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.voucher-date {
    color: #666;
    font-size: 14px;
}

.voucher-status {
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 12px;
    font-weight: 600;
}

.voucher-status.unclaimed {
    background-color: #e8f0fe;
    color: #1a73e8;
}

.voucher-status.claimed {
    background-color: #fef7e6;
    color: #f9a825;
}

.voucher-status.used {
    background-color: #f5f5f5;
    color: #666;
}

.voucher-content {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.voucher-message {
    color: #333;
    font-size: 14px;
    margin: 0;
    line-height: 1.4;
}

.claim-button {
    background-color: #f10000;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.2s;
}

.claim-button:hover {
    background-color: #d40000;
}

.claimed-text, .used-text {
    text-align: center;
    color: #666;
    font-size: 14px;
    font-style: italic;
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

.contact-helper {
    position: fixed;
    top: 80px;
    right: 10px;
    background-color: #fff;
    padding: 12px 18px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    font-size: 15px;
    color: #f10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    font-family: 'Comic Sans MS', 'Marker Felt', cursive;
    transform: rotate(-2deg);
    border: 2px solid #f10000;
}

.arrow-up {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 12px solid #f10000;
    position: absolute;
    bottom: 100%;
    right: 10px;
}
</style>
