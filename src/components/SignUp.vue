<template>
    <div class="sign-up-page">
        <div class="div">
            <div class="text-wrapper">Sign up</div>
            <div class="overlap-2">
                <div class="description">Enter your WhatsApp number</div>
            </div>
            <div class="group">
                <div class="overlap-3">
                    <div class="description-3"><strong>+62</strong></div>
                </div>
                <input v-model="whatsappNumber" type="tel" class="whatsapp-input" placeholder="e.g. 81234567890" />
            </div>
            <router-link v-if="whatsappNumber !== ''" to="/otp">
                <button class="send-otp-button" @click="sendOTP">Send OTP to WhatsApp</button>
            </router-link>
            <button v-else class="send-otp-button" @click="sendOTP">Send OTP to WhatsApp</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            whatsappNumber: ''
        }
    },
    methods: {
        sendOTP() {
            if (this.whatsappNumber) {
                // Here you would typically make an API call to send the OTP
                console.log(`Sending OTP to +62${this.whatsappNumber}`);
                // You can add further logic here, such as showing a success message or navigating to the next step
            } else {
                alert('Please enter your WhatsApp number');
            }
        }
    }
}
</script>

<style scoped>
.sign-up-page {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
}

.sign-up-page .div {
    background-color: #ffffff;
    overflow: hidden;
    width: 100%;
    max-width: 360px;
    height: auto;
    min-height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

@media (max-height: 640px) {
    .sign-up-page .div {
        height: 100vh;
    }
}

.sign-up-page .text-wrapper {
    position: absolute;
    width: 160px;
    top: 157px;
    left: 100px;
    font-family: "Inter-Bold", Helvetica;
    font-weight: 700;
    color: #4d4d4d;
    font-size: 20px;
    text-align: center;
    letter-spacing: -0.32px;
    line-height: 2px;
    white-space: nowrap;
}

.sign-up-page .send-otp {
    position: absolute;
    width: 142px;
    height: 29px;
    top: 350px;
    left: 110px;
    cursor: pointer;
}

.send-otp-button {
    width: 80%;
    padding: 10px;
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

.send-otp-button:hover {
    background-color: #eb221e;
    color: #ffffff;
}

.sign-up-page .overlap-2 {
    position: absolute;
    width: 100px;
    height: 17px;
    top: 210px;
    left: 21px;
}

.sign-up-page .description {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #4d4d4d;
    font-size: 14px;
    letter-spacing: 0.28px;
    line-height: 16.8px;
    white-space: nowrap;
}

.sign-up-page .description-2 {
    top: 159px;
    left: 21px;
    color: #4d4d4d;
    position: absolute;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.28px;
    line-height: 16.8px;
    white-space: nowrap;
}

.sign-up-page .group {
    position: absolute;
    width: 321px;
    height: 55px;
    top: 238px;
    left: 21px;
}

.sign-up-page .overlap-3 {
    position: absolute;
    width: 47px;
    height: 30px;
    top: 0px;
    left: 0;
    background-color: #e6e6e6;
    border-radius: 10px;
    border: 0px solid;
    border-color: #ffffff;
}

.sign-up-page .description-3 {
    top: 6px;
    left: 11px;
    color: #000000;
    position: absolute;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.28px;
    line-height: 16.8px;
    white-space: nowrap;
}

.sign-up-page .whatsapp-input {
    position: absolute;
    width: 260px;
    height: 25px;
    top: 0px;
    left: 55px;
    font-family: "Inter-Regular", Helvetica;
    font-size: 14px;
    color: #5a5a5a;
    border: none;
    border-bottom: 1px solid #4d4d4d;
    background: transparent;
    outline: none;
}

.sign-up-page .whatsapp-input::placeholder {
    color: #4d4d4d;
}
</style>