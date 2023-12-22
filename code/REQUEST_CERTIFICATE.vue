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
      course: '',
      reason: '',
    };
  },
  methods: {
    async submitRequest() {
      try {
        // Call the API to make the request
        const response = await axios..post('http://localhost:3000/users', {
          course: this.course,
          reason: this.reason,
        });

        console.log('Request submitted successfully:', response.data);
        .catch(error => {
          // Τhe request has been submitted successfully
          this.error = 'Request has been submitted successfully!';
        });

      } catch (error) {
        console.error('Error submitting request:', error.message);
        .catch(error => {
          // There is an error with the submittion of the request
          this.error = 'Error with the submittion of the request!';
        });
      }
    },
  },
};
</script>
