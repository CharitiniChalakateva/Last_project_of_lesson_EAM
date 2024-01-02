<template>
    <!-- The main container for the application -->
    <div id="app">
        <!-- Display a welcome message using data property 'greeting' -->
      <h1>{{ greeting }}</h1>
      <!-- Render the components of the current route -->
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Data proprty 'greeting' stores a welcome message 
        greeting: 'Welcome to Your Vue App!',
      };
    },
  };
  </script>
  
  <style>
  /* Styling for the main application container */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif; /* Set font family */
    text-align: center; /* Center-align text */
    color: #2c3e50; /* Set text color */
    margin-top: 60px; /* Add top magrin */
  }
  
  /* Styling for the 'h1' element */
  h1 {
    font-size: 2em; /* Set font size for 'h1' element */
    margin-bottom: 20px; /* Add bottom magrin to 'h1' element */
  }
  </style>
  