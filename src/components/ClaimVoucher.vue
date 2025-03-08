<template>
    <div class="claim-voucher-page">
        <div v-if="loading" class="loading">
            Loading voucher details...
        </div>
        <div v-else-if="error" class="error">
            {{ error }}
        </div>
        <div v-else class="claim-container">
            <h1>Claim Your Voucher</h1>
            <div class="voucher-details">
                <p class="voucher-message">
                    Another user has entered your username as their referrer, you have received a voucher for dog food purchase
                </p>
            </div>
            <div class="swipe-container" 
                @touchstart="touchStart"
                @touchmove="touchMove"
                @touchend="touchEnd"
                @mousedown="mouseDown"
                @mousemove="mouseMove"
                @mouseup="mouseUp"
                @mouseleave="mouseUp">
                <div class="swipe-button" :style="swipeButtonStyle">
                    <span v-if="!isComplete">Swipe to claim voucher →</span>
                    <span v-else>Voucher claimed!</span>
                </div>
                <div class="swipe-track"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClaimVoucher',
    data() {
        return {
            loading: true,
            error: null,
            startX: 0,
            currentX: 0,
            isDragging: false,
            isComplete: false,
            maxSwipe: 0
        }
    },
    computed: {
        swipeButtonStyle() {
            if (this.isComplete) {
                return {
                    transform: `translateX(${this.maxSwipe}px)`,
                    backgroundColor: '#4CAF50'
                }
            }
            return {
                transform: `translateX(${this.currentX}px)`
            }
        }
    },
    methods: {
        async fetchVoucherDetails() {
            try {
                this.loading = true;
                this.error = null;
                
                const response = await fetch(`https://api.example.com/vouchers/${this.$route.params.id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch voucher details');
                }

                const data = await response.json();
                // Handle voucher data
            } catch (err) {
                this.error = 'Error loading voucher details. Please try again later.';
                console.error('Error:', err);
            } finally {
                this.loading = false;
            }
        },
        async claimVoucher() {
            try {
                const response = await fetch(`https://api.example.com/vouchers/${this.$route.params.id}/claim`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to claim voucher');
                }

                this.isComplete = true;
                setTimeout(() => {
                    this.$router.push('/vouchers');
                }, 1500);
            } catch (err) {
                this.error = 'Error claiming voucher. Please try again later.';
                console.error('Error:', err);
            }
        },
        touchStart(e) {
            this.startX = e.touches[0].clientX;
            this.isDragging = true;
        },
        touchMove(e) {
            if (!this.isDragging) return;
            const x = e.touches[0].clientX - this.startX;
            this.updatePosition(x);
        },
        touchEnd() {
            this.handleDragEnd();
        },
        mouseDown(e) {
            this.startX = e.clientX;
            this.isDragging = true;
        },
        mouseMove(e) {
            if (!this.isDragging) return;
            const x = e.clientX - this.startX;
            this.updatePosition(x);
        },
        mouseUp() {
            this.handleDragEnd();
        },
        updatePosition(x) {
            this.currentX = Math.max(0, Math.min(x, this.maxSwipe));
        },
        handleDragEnd() {
            this.isDragging = false;
            if (this.currentX >= this.maxSwipe * 0.9) {
                this.currentX = this.maxSwipe;
                this.claimVoucher();
            } else {
                this.currentX = 0;
            }
        }
    },
    mounted() {
        this.fetchVoucherDetails();
        const trackElement = document.querySelector('.swipe-track');
        const buttonElement = document.querySelector('.swipe-button');
        this.maxSwipe = trackElement && buttonElement ? 
            trackElement.clientWidth - buttonElement.clientWidth : 0;
    }
}
</script>

<style scoped>
.claim-voucher-page {
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

.loading, .error {
    text-align: center;
    padding: 20px;
    color: #666;
}

.error {
    color: #f10000;
}

.voucher-details {
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.voucher-message {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    text-align: center;
}

.swipe-container {
    position: relative;
    width: 100%;
    height: 60px;
    margin-top: 20px;
}

.swipe-track {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 30px;
}

.swipe-button {
    position: absolute;
    height: 100%;
    width: 120px;
    background-color: #f10000;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    cursor: pointer;
    user-select: none;
    touch-action: none;
    transition: transform 0.2s ease-out;
}

.swipe-button span {
    white-space: nowrap;
    font-size: 14px;
}
</style>
