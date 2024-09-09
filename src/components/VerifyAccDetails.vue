<template>
    <div class="sign-up-process">
        <div v-if="currentStep === 'verification-success'">
            <img src="@/assets/check.svg" alt="Success" />
            <h2>Verification Success</h2>
            <p>You can now continue to the next step</p>
            <button @click="nextStep" class="continue-button">Continue to Sign Up</button>
        </div>

        <div v-else-if="currentStep === 'account-details'">
            <h2>Account Details</h2>
            <form @submit.prevent="submitAccountDetails">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="username" type="text" id="username" required />
                    <span class="hint">your username will be used as the referral code</span>
                    <span class="character-count">{{ username.length }}/20</span>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" id="password" required />
                    <span class="hint">your password must contain 8 characters with 1 letter, 1 number, and 1 special
                        character</span>
                    <span class="character-count">{{ password.length }}/15</span>
                </div>

                <div class="form-group">
                    <label for="confirm-password">Confirm password</label>
                    <input v-model="confirmPassword" type="password" id="confirm-password" required />
                    <span class="character-count">{{ confirmPassword.length }}/15</span>
                </div>

                <div class="form-group">
                    <label for="referral-code">Referral code (optional)</label>
                    <input v-model="referralCode" type="text" id="referral-code" />
                    <span class="hint">example: ref/username</span>
                    <span class="character-count">{{ referralCode.length }}/15</span>
                </div>

                <button type="submit" class="continue-button">Continue to Sign Up</button>
            </form>
        </div>

        <div v-else-if="currentStep === 'sign-up-completed'">
            <img src="@/assets/check.svg" alt="Completed" />
            <h2>Sign Up Completed</h2>
            <p>You can now sign in to your new account</p>
            <button @click="signIn" class="sign-in-button">Sign In</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MultiStepSignUp',
    data() {
        return {
            currentStep: 'verification-success',
            username: '',
            password: '',
            confirmPassword: '',
            referralCode: ''
        }
    },
    methods: {
        nextStep() {
            const steps = ['verification-success', 'account-details', 'sign-up-completed'];
            const currentIndex = steps.indexOf(this.currentStep);
            if (currentIndex < steps.length - 1) {
                this.currentStep = steps[currentIndex + 1];
            }
        },
        submitAccountDetails() {
            // Validate input
            if (this.validateInput()) {
                // Here you would typically send the data to your backend
                console.log('Account details submitted:', {
                    username: this.username,
                    password: this.password,
                    referralCode: this.referralCode
                });
                this.nextStep();
            }
        },
        validateInput() {
            // Basic validation
            if (this.username.length === 0 || this.username.length > 20) {
                alert('Username must be between 1 and 20 characters');
                return false;
            }
            if (this.password.length < 8 || this.password.length > 15) {
                alert('Password must be between 8 and 15 characters');
                return false;
            }
            if (this.password !== this.confirmPassword) {
                alert('Passwords do not match');
                return false;
            }
            // Add more validation as needed (e.g., password complexity)
            return true;
        },
        signIn() {
            this.$router.push({ name: 'LoginPage' });
        }
    }
}
</script>

<style scoped>
.sign-up-process {
    font-family: 'Inter', sans-serif;
    max-width: 360px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}

h2 {
    color: #333;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #666;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.hint {
    display: block;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}

.character-count {
    display: block;
    text-align: right;
    font-size: 12px;
    color: #999;
}

.continue-button,
.sign-in-button {
    background-color: #f10000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
}

img {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
}
</style>