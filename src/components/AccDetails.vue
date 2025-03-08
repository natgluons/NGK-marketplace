<template>
    <div class="sign-up-process">
        <div v-if="currentStep === 'account-details'">
            <h2>Account Details</h2>
            <form @submit.prevent="submitAccountDetails">
                <div class="form-group">
                    <label for="username">Username*</label>
                    <input v-model="username" type="text" id="username" required />
                    <div class="hint-count-wrapper">
                        <span class="hint">must contain at least 1 letter, your username can be used as a referral code for others when signing up</span>
                        <span class="character-count">{{ username.length }}/20</span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="password">Password*</label>
                    <input v-model="password" type="password" id="password" required />
                    <div class="hint-count-wrapper">
                        <span class="hint">must contain at least 8 characters with at least 1 letter, 1 number, and
                            1 special character</span>
                        <span class="character-count">{{ password.length }}/32</span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="confirm-password">Confirm password*</label>
                    <input v-model="confirmPassword" type="password" id="confirm-password" required />
                    <div class="hint-count-wrapper">
                        <span class="character-count">{{ confirmPassword.length }}/32</span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="referral-code">Referral code (optional)</label>
                    <input v-model="referralCode" type="text" id="referral-code" />
                    <div class="hint-count-wrapper">
                        <span class="hint">enter your referral's username (can be found in their "Account" section)</span>
                        <span class="character-count">{{ referralCode.length }}/15</span>
                    </div>
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
    name: 'AccDetails',
    data() {
        return {
            currentStep: 'account-details',
            username: '',
            password: '',
            confirmPassword: '',
            referralCode: ''
        }
    },
    methods: {
        nextStep() {
            const steps = ['account-details', 'sign-up-completed'];
            const currentIndex = steps.indexOf(this.currentStep);
            if (currentIndex < steps.length - 1) {
                this.currentStep = steps[currentIndex + 1];
            }
        },
        submitAccountDetails() {
            // Validate input (add admin account for testing)
            if (this.validateInput() || (this.username === 'admin' && this.password === 'admin123#')) {
                if (!(this.username === 'admin' && this.password === 'admin123#')) {
                    // First check if username exists
                    fetch('https://api.example.com/check-username', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: this.username
                        }),
                    })
                    .then(response => {
                        if (response.ok) {
                            // Username is available, proceed with account creation
                            return fetch('https://api.example.com/submitAccountDetails', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    username: this.username,
                                    password: this.password,
                                    referralCode: this.referralCode
                                }),
                            });
                        } else {
                            alert('Username taken, please change your username to continue');
                            throw new Error('Username already exists');
                        }
                    })
                    .then(response => {
                        if (response.ok) {
                            console.log('Account details submitted successfully:', {
                                username: this.username,
                                password: this.password,
                                referralCode: this.referralCode
                            });
                            this.nextStep();
                        } else {
                            throw new Error('Failed to submit account details');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        if (error.message !== 'Username already exists') {
                            alert('An error occurred while submitting account details. Please try again later.');
                        }
                    });
                } else {
                    alert('Ignoring this fetch as this username and password are used for testing purpose.');
                    console.log('Account details submitted successfully:', {
                        username: this.username,
                        password: this.password,
                        referralCode: this.referralCode
                    });
                    this.nextStep();
                }
            }
        },
        validateInput() {
            // Basic validation
            if (this.username.length === 0 || this.username.length > 15) {
                alert('Username must be between 1 and 15 characters');
                return false;
            }
            if (!/[a-zA-Z]/.test(this.username)) {
                alert('Username must contain at least 1 letter');
                return false;
            }
            if (this.password.length < 8 || this.password.length > 32) {
                alert('Password must be between 8 and 32 characters');
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
            // Logic to navigate to sign-in page or perform sign-in action
            console.log('Navigating to sign-in page');
            this.$router.push({ name: 'LoginPage' });
        }
    }
}
</script>

<style scoped>
.hint-count-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hint {
    font-size: 10px;
    color: #999;
}

.character-count {
    font-size: 10px;
    color: #999;
    margin-left: auto;
    /* Ensures the character count stays on the right */
    text-align: right;
}

.sign-up-process {
    font-family: 'Inter', sans-serif;
    max-width: 360px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 85%;
}

h2 {
    color: #333;
    margin-bottom: 0px;
    font-size: 1.3em;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
    margin-right: 17px;
}

label {
    display: block;
    margin-bottom: 1px;
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