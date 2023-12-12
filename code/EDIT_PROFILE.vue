<template>
    <div>
      <h1>Edit Profile</h1>
      <form @submit.prevent="updateProfile">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" />
        <div>
        <div>    
         <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" />
        <div>
        <button type="submit">Save Changes</button>
      </form>
    <div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
      };
    },
    methods: {
      updateProfile() {
        // Call API to update profile
      },
    },
  };
  </script>