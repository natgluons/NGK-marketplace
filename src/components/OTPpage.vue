<template>
    <div class="otp-verification-page">
        <h1 class="title">Sign Up Verification</h1>

        <div class="otp-input-container">
            <input v-for="(digit, index) in otpDigits" :key="index" v-model="otpDigits[index]" type="text" maxlength="1"
                :ref="`otpInput${index}`" @input="onInput(index)" @keydown.delete="onBackspace(index)" />
        </div>

        <button class="button" @click="verifyOTP">Verify OTP</button>
        <button class="button" @click="changeNumber">Change WhatsApp Number</button>
    </div>
</template>

<script>
export default {
    name: 'OTPpage',
    data() {
        return {
            otpDigits: ['', '', '', '', '', ''],
        }
    },
    methods: {
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
            // For testing purpose, hardcode the OTP as 000000
            const otp = '000000';
            // Uncomment the following block to simulate API call
            /*
            fetch('https://api.example.com/verifyOTP', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: otp }),
            })
                .then(response => {
                    if (response.ok) {
                        console.log('OTP verified successfully:', otp);
                        this.$router.push({ name: 'VerifyAccDetails' }); // Navigate to /verify on successful OTP verification
                    } else {
                        throw new Error('Failed to verify OTP');
                    }
                })
                .catch(error => {
                    console.error('Error verifying OTP:', error);
                    // Handle error, show error message, etc.
                });
            */
            // Simulate OTP verification
            if (this.otpDigits.join('') === otp) {
                console.log('OTP verified successfully:', otp);
                this.$router.push({ name: 'VerifyAccDetails' }); // Navigate to /verify on successful OTP verification
            } else {
                throw new Error('Failed to verify OTP');
            }
        },
        changeNumber() {
            // Logic to go back to the previous page or open a modal to change the number
            // console.log('Changing WhatsApp number');
            this.$router.go(-1);
        },
        goBack() {
            // Logic to navigate back to the previous page
            console.log('Going back to previous page');
        }
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
    /* margin-top: 30px; */
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
</style>