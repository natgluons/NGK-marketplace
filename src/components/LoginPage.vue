<template>
  <div class="sign-in-page">
    <div class="sign-in-container">
      <div class="maintenance-alert">
        <div class="alert-content">
          <span class="alert-icon">⚠️</span>
          <div class="alert-text">
            <h2 class="alert-title">Service Under Construction</h2>
            <p class="alert-description">
            We're implementing our backend services - login will be available soon.
            </p>
          </div>
        </div>
      </div>
      <div class="content">
        <h1 class="title">Sign in</h1>
        <div class="input-group">
          <label for="username">{{ isWALogin ? 'WhatsApp number*' : 'Username*' }}</label>
          <div v-if="isWALogin" class="whatsapp-input">
            <span class="prefix">+62</span>
            <input id="whatsapp" type="text" v-model="username">
          </div>
          <input v-else id="username" type="text" v-model="username">
        </div>
        <div class="input-group">
          <label for="password">Password*</label>
          <input id="password" type="password" v-model="password">
          <div class="forgot-password">
            <a href="#" @click.prevent="forgotPassword">Forgot password?</a>
          </div>
        </div>
        <button class="sign-in-button" @click="signIn">Sign in</button>
        <div class="toggle-login">
          <a href="#" @click.prevent="toggleLoginMethod">
            {{ isWALogin ? 'Sign in with username' : 'Sign in with WhatsApp number' }}
          </a>
        </div>
        <div class="or-divider">or</div>
        <button class="sign-up-button" @click="signUp">Sign up</button>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '@/services/auth';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      isWALogin: false
    }
  },
  methods: {
    signIn() {
      if (!this.username || !this.password) {
        alert(`Please input your ${this.isWALogin ? 'WhatsApp number' : 'username'} and password to sign in`);
        return;
      }

      // Test cases
      if (this.isWALogin && this.username === '0000' && this.password === 'test123#') {
        alert('Ignoring this fetch as the WhatsApp number and password are used for testing only');
        console.log('Test login successful');
        this.$router.push({ name: 'Home' });
        return;
      }
      if (!this.isWALogin && this.username === 'admin' && this.password === 'admin123#') {
        alert('Ignoring this fetch as the username and password are used for testing only');
        console.log('Test login successful');
        this.$router.push({ name: 'Home' });
        return;
      }

      // Regular login flow
      fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [this.isWALogin ? 'whatsappNumber' : 'username']: this.isWALogin ? '+62' + this.username : this.username,
          password: this.password
        }),
      })
        .then(response => {
          if (response.ok) {
            this.$router.push({ name: 'Home' });
          } else {
            alert('Sign-in failed. Please check your credentials.');
          }
        })
        .catch(error => {
          console.error('Error signing in:', error);
          alert('An error occurred while signing in. Please try again later.');
        });
    },
    toggleLoginMethod() {
      this.isWALogin = !this.isWALogin;
      this.username = '';
      this.password = '';
    },
    forgotPassword() {
      this.$router.push({ name: 'ForgotPassword' });
    },
    signUp() {
      this.$router.push({ name: 'SignUp' });
    }
  }
}
</script>

<style scoped>
.sign-in-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 90px);
  background-color: #ffffff;
  padding-top: 0;
  margin-top: 0;
}

.sign-in-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 0;
  margin-top: 0;
}

.maintenance-alert {
  width: 100%;
  margin: 0;
  padding: 12px 0;
  background-color: #fefce8;
  border-top: 0.5px solid #fef08a;
  border-bottom: 0.5px solid #fef08a;
  position: sticky;
  top: 0;
  z-index: 10;
}

.content {
  width: 300px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
  background-color: #ffffff;
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
  margin-right: 15px;
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

.sign-in-button {
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

.sign-in-button:hover {
  background-color: #eb221e;
  color: #ffffff;
}

.or-divider {
  text-align: center;
  color: #4d4d4d;
  font-family: "Inter-Regular", Helvetica;
  font-size: 14px;
  margin: 15px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.or-divider::before,
.or-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: #c2c2c2;
  margin: 0 5px;
}

.sign-up-button {
  width: 100%;
  padding: 10px;
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

.sign-up-button:hover {
  background-color: #eb221e;
  color: #ffffff;
}

.alert-content {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.alert-icon {
  font-size: 20px;
  line-height: 1;
}

.alert-text {
  flex: 1;
}

.alert-title {
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 15px;
  color: #854d0e;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.alert-description {
  font-family: "Inter-Regular", Helvetica;
  font-size: 13px;
  color: #854d0e;
  margin: 0;
  line-height: 1.4;
}

.forgot-password {
  text-align: right;
  margin-top: 5px;
}

.forgot-password a {
  color: #eb221e;
  text-decoration: none;
  font-size: 14px;
  font-family: "Inter-Regular", Helvetica;
}

.forgot-password a:hover {
  text-decoration: underline;
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

.toggle-login {
  text-align: center;
  margin: 15px 0;
}

.toggle-login a {
  color: #eb221e;
  text-decoration: none;
  font-size: 14px;
  font-family: "Inter-Regular", Helvetica;
}

.toggle-login a:hover {
  text-decoration: underline;
}

/* Add media query for mobile devices */
@media screen and (max-width: 768px) {
  .sign-in-page {
    min-height: calc(100vh - 90px);
    padding-top: 0;
  }

  .maintenance-alert {
    position: sticky;
    top: 0;
  }

  .content {
    margin-top: 15px;
  }
}
</style>