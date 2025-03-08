<template>
    <div class="reset-password-page">
        <div v-if="currentStep === 'reset-form'" class="content">
            <h1 class="title">Reset Password</h1>
            <div class="input-group">
                <label for="newPassword">New password*</label>
                <input 
                    id="newPassword" 
                    type="password" 
                    v-model="newPassword"
                    placeholder="Enter new password"
                >
                <span class="hint">must contain at least 8 characters with at least 1 letter, 1 number, and 1 special character</span>
                <span class="character-count">{{ newPassword.length }}/32</span>
            </div>
            <div class="input-group">
                <label for="confirmPassword">Confirm new password*</label>
                <input 
                    id="confirmPassword" 
                    type="password" 
                    v-model="confirmPassword"
                    placeholder="Confirm new password"
                >
                <span class="character-count">{{ confirmPassword.length }}/32</span>
            </div>
            <button class="submit-button" @click="resetPassword">Reset Password</button>
        </div>
        <div v-else-if="currentStep === 'reset-success'" class="content success-content">
            <img src="@/assets/check.svg" alt="Success" />
            <h2>Password Reset Successful</h2>
            <p>Your password has been successfully reset</p>
            <button class="submit-button" @click="goToLogin">Continue to Login</button>
        </div>
        <div v-else class="content invalid-token">
            <h1 class="title">Invalid or Expired Link</h1>
            <p>This password reset link is invalid or has expired. Please request a new password reset link.</p>
            <button class="submit-button" @click="goToForgotPassword">Request New Link</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResetPassword',
    data() {
        return {
            newPassword: '',
            confirmPassword: '',
            isValidToken: false,
            currentStep: 'reset-form'
        }
    },
    created() {
        // Get token from URL query parameter
        const token = this.$route.query.token;
        
        // For testing purposes - invalid token
        if (token === '0001') {
            this.isValidToken = false;
            this.currentStep = 'invalid-token';
            return;
        }

        // For testing purposes - valid token
        if (token === '0000') {
            this.isValidToken = true;
            return;
        }

        // Validate token
        if (!token) {
            this.isValidToken = false;
            this.currentStep = 'invalid-token';
            return;
        }

        // Verify token with backend
        fetch('https://api.example.com/verify-reset-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        })
        .then(response => {
            this.isValidToken = response.ok;
            if (!response.ok) {
                this.currentStep = 'invalid-token';
            }
        })
        .catch(() => {
            this.isValidToken = false;
            this.currentStep = 'invalid-token';
        });
    },
    methods: {
        resetPassword() {
            if (!this.isValidToken) {
                return;
            }

            if (!this.newPassword || !this.confirmPassword) {
                alert('Please fill in all fields');
                return;
            }

            if (this.newPassword !== this.confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Password validation regex
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            if (!passwordRegex.test(this.newPassword)) {
                alert('Password must contain at least 8 characters with at least 1 letter, 1 number, and 1 special character');
                return;
            }

            // For testing purposes
            if (this.newPassword === 'test123#') {
                this.currentStep = 'reset-success';
                return;
            }

            // Reset password
            fetch('https://api.example.com/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: this.$route.query.token,
                    newPassword: this.newPassword
                }),
            })
            .then(response => {
                if (response.ok) {
                    this.currentStep = 'reset-success';
                } else {
                    throw new Error('Failed to reset password');
                }
            })
            .catch(error => {
                console.error('Error resetting password:', error);
                alert('An error occurred. Please try again later.');
            });
        },
        goToLogin() {
            this.$router.push({ name: 'LoginPage' });
        },
        goToForgotPassword() {
            this.$router.push({ name: 'ForgotPassword' });
        }
    }
}
</script>

<style scoped>
.reset-password-page {
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
    position: relative;
}

label {
    display: block;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #4d4d4d;
    font-size: 14px;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    font-size: 14px;
}

.hint {
    display: block;
    font-size: 10px;
    color: #999;
    margin-top: 5px;
    font-family: "Inter-Regular", Helvetica;
}

.character-count {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    color: #999;
    font-family: "Inter-Regular", Helvetica;
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

.invalid-token {
    text-align: center;
}

.invalid-token p {
    color: #666;
    font-family: "Inter-Regular", Helvetica;
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.5;
}

.success-content {
    text-align: center;
}

.success-content img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    margin-bottom: 20px;
}

.success-content h2 {
    color: #333;
    margin-bottom: 10px;
    font-family: "Inter-Bold", Helvetica;
    font-size: 18px;
}

.success-content p {
    color: #666;
    font-family: "Inter-Regular", Helvetica;
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.5;
}
</style>