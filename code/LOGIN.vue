<template>
  <div>
    <h1>Login</h1>
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
        <button type="submit">Login</button>
      </div>
    </form>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: null      };
    },
    methods: {
      handleSubmit() {
        // User login
        axios
          .post('/api/login', {
            username: this.username,
            password: this.password
          })
          .then(response => {
            // Successful login
            this.error = null;
            // Adapt page for the user
            this.$store.commit('setUser', response.data.user);
            this.$router.push('/');
          })
          .catch(error => {
            // Failed login
            this.error = 'Login failed!';
          });
      }
    }
  };
</script>
