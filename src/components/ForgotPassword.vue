<template>
    <div class="forgot-password-page">
        <div class="content">
            <h1 class="title">Reset Password</h1>
            <div class="input-group">
                <label for="whatsapp">Enter your WhatsApp number</label>
                <div class="whatsapp-input">
                    <span class="prefix">+62</span>
                    <input 
                        id="whatsapp" 
                        type="text" 
                        v-model="whatsappNumber"
                        placeholder="Enter WhatsApp number"
                    >
                </div>
            </div>
            <button class="submit-button" @click="sendResetLink">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForgotPassword',
    data() {
        return {
            whatsappNumber: ''
        }
    },
    methods: {
        sendResetLink() {
            if (!this.whatsappNumber) {
                alert('Please enter your WhatsApp number');
                return;
            }

            // For testing purposes
            if (this.whatsappNumber === '0000') {
                alert('Redirecting to reset password page as the WA number is used for testing purpose');
                this.$router.push({ 
                    name: 'ResetPassword',
                    query: { token: '0000' }
                });
                return;
            }

            // For testing invalid link
            if (this.whatsappNumber === '0001') {
                alert('Redirecting to invalid link as the WA number is used for testing purpose');
                this.$router.push({ 
                    name: 'ResetPassword',
                    query: { token: '0001' }
                });
                return;
            }

            // Send reset link
            fetch('https://api.example.com/send-reset-link', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber: this.whatsappNumber }),
            })
            .then(() => {
                alert('Reset password link has been sent to your WhatsApp number');
            })
            .catch(error => {
                console.error('Error sending reset link:', error);
                alert('An error occurred. Please try again later.');
            });
        }
    }
}
</script>

<style scoped>
.forgot-password-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    background-color: #ffffff;
}

.content {
    width: 300px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.title {
    font-family: "Inter-Bold", Helvetica;
    font-weight: 700;
    color: #4d4d4d;
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #4d4d4d;
    font-size: 14px;
    margin-bottom: 5px;
}

.whatsapp-input {
    display: flex;
    align-items: center;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
}

.prefix {
    padding: 8px 12px;
    background-color: #f5f5f5;
    color: #666;
    border-right: 1px solid #c2c2c2;
    font-family: "Inter-Regular", Helvetica;
}

.whatsapp-input input {
    flex: 1;
    border: none;
    border-radius: 0;
    padding: 8px;
    font-size: 14px;
}

.whatsapp-input input:focus {
    outline: none;
}

.submit-button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
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

.submit-button:hover {
    background-color: #eb221e;
    color: #ffffff;
}
</style>