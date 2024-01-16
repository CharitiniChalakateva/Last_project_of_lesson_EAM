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
import axios from 'axios';

export default {
  data() {
    return {
      courses: [], // Make sure you have the courses data
      course: '',
      reason: '',
      error: null,
    };
  },
  methods: {
    async submitRequest() {
      try {
        // Call the API to make the request
        const response = await axios.post('http://localhost:3000/certificate-request', {
          course: this.course,
          reason: this.reason,
        });

        console.log('Request submitted successfully:', response.data);
        // Reset the form after successful submission
        this.course = '';
        this.reason = '';
        this.error = null;
      } catch (error) {
        console.error('Error submitting request:', error.message);
        this.error = 'Error submitting request.';
      }
    },
  },
};
</script>
