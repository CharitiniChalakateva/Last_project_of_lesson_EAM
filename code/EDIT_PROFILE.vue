<template>
  <div>
    <h1>Edit Profile</h1>
    <!-- Form for updating the profile -->
    <form @submit.prevent="updateProfile">
      <div>
        <!-- Input for the user's name -->
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <div>
        <!-- Input for the user's email -->
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <!-- Button to submit the form -->
      <button type="submit">Save Changes</button>
    </form>

    <!-- Loader indication while updating profile -->
    <!-- Displayed when 'updatingProfile' is true -->
    <div v-if="updatingProfile">Updating profile...</div>
  </div>
</template>

<script>
// Import the Axios library for making HTTP requests
import axios from 'axios';

export default {
  // Data properties for storing user input and loading state
  data() {
    return {
      name: '', // User's name
      email: '', // User's email
      updatingProfile: false, // Indicates if the profile is being updated
    };
  },
  methods: {
    // Method for handling profile update
    async updateProfile() {
      try {
        // Show loader indication
        this.updatingProfile = true;

        // Send a POST request to the server to update the profile
        const response = await axios.post('/api/update-profile', {
          name: this.name,
          email: this.email,
        });

        // Hide loader indication
        this.updatingProfile = false;

        // Handle the response from the server (e.g., show a success message)
        console.log('Profile updated successfully:', response.data);
      } catch (error) {
        // Hide loader indication
        this.updatingProfile = false;

        // Handle errors (e.g., show an error message)
        console.error('Error updating profile:', error.message);
      }
    },
  },
};
</script>
