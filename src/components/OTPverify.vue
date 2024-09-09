<template>
    <div class="sign-up-process">
        <div v-if="currentStep === 'otp'">
            <div class="otp-verification-page">
                <h1 class="title">Sign Up Verification</h1>

                <div class="otp-input-container">
                    <input v-for="(digit, index) in otpDigits" :key="index" v-model="otpDigits[index]" type="text"
                        maxlength="1" :ref="`otpInput${index}`" @input="onInput(index)"
                        @keydown.delete="onBackspace(index)" />
                </div>

                <button class="button" @click="verifyOTP">Verify OTP</button>
                <button class="button" @click="changeNumber">Change WhatsApp Number</button>
            </div>
        </div>

        <div v-else-if="currentStep === 'verification-success'">
            <div class="sign-up-process">
                <img src="@/assets/check.svg" alt="Success" />
                <h2>Verification Success</h2>
                <p>You can now continue to the next step</p>
                <button @click="accDetails" class="continue-button">Continue to Sign Up</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OTPverify',
    data() {
        return {
            currentStep: 'otp',
            otpDigits: ['', '', '', '', '', ''],
        }
    },
    methods: {
        nextStep() {
            const steps = ['otp', 'verification-success']; // 'account-details', 'sign-up-completed'
            const currentIndex = steps.indexOf(this.currentStep);
            if (currentIndex < steps.length - 1) {
                this.currentStep = steps[currentIndex + 1];
            }
        },
        accDetails() {
            this.$router.push({ name: 'AccDetails' });
        },
        onInput(index) {
            if (this.otpDigits[index].length === 1 && index < 5) {
                this.$refs[`otpInput${index + 1}`][0].focus();
            }
        },
        onBackspace(index) {
            if (this.otpDigits[index] === '' && index > 0) {
                this.$refs[`otpInput${index - 1}`][0].focus();
            }
        },
        verifyOTP() {
            // Simulate OTP verification
            // For testing purpose, hardcode the OTP as 000000
            if (this.otpDigits.join('') !== '000000') {
                if (this.otpDigits.join('') === '') {
                    alert('Please enter your 6-digit OTP code');
                    return;
                }

                fetch('https://api.example.com/verifyOTP', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ otp: this.otpDigits.join('') }),
                })
                    .then(response => {
                        if (response.ok) {
                            console.log('OTP verified successfully:', this.otpDigits.join(''));
                            this.nextStep();
                        } else {
                            alert('Failed to verify OTP');
                        }
                    })
                    .catch(error => {
                        console.error('Error verifying OTP:', error);
                        alert('Error verifying OTP', error);
                        // Handle error, show error message, etc.
                    });
            } else {
                console.log('OTP verified successfully:', '000000 (testing case)');
                this.nextStep();
            }
        },
        changeNumber() {
            this.$router.go(-1);
        },
    }
}
</script>

<style scoped>
.otp-verification-page {
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    align-items: center;
}

@media (max-height: 50vh) {
    .otp-verification-page {
        justify-content: flex-start;
        padding-top: 20px;
    }
}

.title {
    font-size: 18px;
    color: #333;
    margin-bottom: 30px;
}

.otp-input-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.otp-input-container input {
    width: 40px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    border: 1px solid #ccc;
    margin: 3px;
    border-radius: 5px;
}

.button {
    width: 80%;
    padding: 10px 20px;
    margin-top: 10px;
    margin-left: 10%;
    margin-right: 10%;
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

.button:hover {
    background-color: #eb221e;
    color: #ffffff;
}

.sign-up-process img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    /* margin-bottom: 20px; */
}

.continue-button {
    background-color: #f10000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
}

.sign-up-process {
    font-family: 'Inter', sans-serif;
    max-width: 360px;
    margin: auto;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 85vh;
}

h2 {
    color: #333;
    margin-bottom: 1px;
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