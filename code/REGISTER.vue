<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="passwordConfirm">Password (confirm):</label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        passwordConfirm: '',
        error: null
      };
    },
    methods: {
      handleSubmit() {
        // User registration
        axios
          .post('/api/register', {
            username: this.username,
            password: this.password,
            passwordConfirm: this.passwordConfirm
          })
          .then(response => {
            // Registration successful
            this.error = null;
            // Adapt page for the user
            this.$store.commit('setUser', response.data.user);
            this.$router.push('/');
          })
          .catch(error => {
            // Registration failed
            this.error = 'Registration failed!';
          });
      }
    }
  };
</script>
