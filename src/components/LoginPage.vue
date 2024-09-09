<template>
  <div class="sign-in-page">
    <div class="content">
      <h1 class="title">Sign in</h1>
      <div class="input-group">
        <label for="username">Username / WhatsApp number</label>
        <input id="username" type="text" v-model="username">
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>
      <button class="sign-in-button" @click="signIn">Sign in</button>
      <div class="or-divider">or</div>
      <button class="sign-up-button" @click="signUp">Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      // Add sign-in logic here
      console.log('Signing in with:', this.username, this.password)
      // Simulate sign-in logic with API call
      fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: this.username, password: this.password }),
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
    signUp() {
      // direct to SignUp.vue
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>

<style scoped>
.sign-in-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: #ffffff;
}

.content {
  top: 50%;
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
</style>