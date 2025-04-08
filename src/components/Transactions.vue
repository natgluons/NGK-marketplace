<template>
    <div class="transaction-page">
        <div class="contact-helper">
            <span>Click the phone button in the header to find our contact info!</span>
            <div class="arrow-up"></div>
        </div>
        <div v-if="isLoggedIn">
            <h1>Transactions</h1>
            <div v-if="loading" class="loading">
                Loading transactions...
            </div>
            <div v-else-if="error" class="error">
                {{ error }}
            </div>
            <div v-else-if="transactions.length === 0" class="no-transactions">
                No transactions found
            </div>
            <div v-else class="transactions-list">
                <div v-for="transaction in transactions" :key="transaction.id" class="transaction-item">
                    <div class="transaction-header">
                        <span class="transaction-date">{{ formatDate(transaction.datetime) }}</span>
                        <span class="transaction-category" :class="transaction.category.toLowerCase()">
                            {{ transaction.category }}
                        </span>
                    </div>
                    <div class="transaction-details">
                        <p class="transaction-description">{{ transaction.description }}</p>
                        <span v-if="shouldShowPrice(transaction.category)" class="transaction-amount">
                            {{ formatAmount(transaction.price) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="sign-in-prompt">
            <img src="@/assets/logongk.png" alt="NGK Logo" class="prompt-logo" />
            <div class="coming-soon-text">
                <h3>Coming Soon: Referral Login</h3>
                <p>We're working on it!</p>
                <p>Contact us on <a href="https://wa.me/6281234187970" target="_blank" class="whatsapp-link">WhatsApp</a> for now</p>
            </div>
            <h2>Sign in to view your transaction history</h2>
            <router-link to="/login" class="sign-in-link">Sign in</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Transactions',
    data() {
        return {
            transactions: [],
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
        formatAmount(amount) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
            }).format(amount);
        },
        shouldShowPrice(category) {
            return ['dog food', 'daycare'].includes(category.toLowerCase());
        },
        async fetchTransactions() {
            try {
                this.loading = true;
                this.error = null;
                
                const response = await fetch('https://api.example.com/transactions', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch transactions');
                }

                this.transactions = await response.json();
            } catch (err) {
                this.error = 'Error loading transactions. Please try again later.';
                console.error('Error:', err);
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        if (this.isLoggedIn) {
            this.fetchTransactions();
        }
    }
};
</script>

<style scoped>
.transaction-page {
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

.loading, .error, .no-transactions {
    text-align: center;
    padding: 20px;
    color: #666;
}

.error {
    color: #f10000;
}

.transactions-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.transaction-item {
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.transaction-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.transaction-date {
    color: #666;
    font-size: 14px;
}

.transaction-category {
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 12px;
    font-weight: 600;
    text-transform: capitalize;
}

.transaction-category.puppies {
    background-color: #e8f0fe;
    color: #1a73e8;
}

.transaction-category.daycare {
    background-color: #fef7e6;
    color: #f9a825;
}

.transaction-category.dog.food {
    background-color: #e6f4ea;
    color: #1e8e3e;
}

.transaction-details {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.transaction-description {
    color: #333;
    font-size: 14px;
    margin: 0;
    line-height: 1.4;
}

.transaction-amount {
    color: #1e8e3e;
    font-weight: 600;
    font-size: 16px;
    align-self: flex-end;
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
