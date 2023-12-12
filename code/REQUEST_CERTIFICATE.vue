<template>
    <div>
      <h1>Request Certificate</h1>
      <form @submit.prevent="submitRequest">
        <div>
          <label for="course">Course:</label>
          <select v-model="course" id="course">
            <option v-for="course in courses" :key="course.id" :value="course.id">
              {{ course.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="reason">Reason:</label>
          <textarea v-model="reason" id="reason"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        course: '',
        reason: '',
      };
    },
    methods: {
      submitRequest() {
        // Call API to submit request
      },
    },
  };
  </script>
  