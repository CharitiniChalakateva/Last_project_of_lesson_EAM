<template>
  <div>
    <h1>Teacher Grading System</h1>
    <form @submit.prevent="submitGrade">
      <div>
        <label for="studentName">Student Name:</label>
        <input type="text" id="studentName" v-model="studentName" required />
      </div>
      <div>
        <label for="course">Course:</label>
        <select id="course" v-model="selectedCourse" required>
          <option v-for="course in teacherCourses" :key="course.id" :value="course.id">
            {{ course.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="grade">Grade:</label>
        <input type="number" id="grade" v-model="grade" required />
      </div>
      <div>
        <button type="submit">Submit Grade</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      studentName: '',
      selectedCourse: null,
      grade: null,
      teacherCourses: [
        { id: 1, name: 'Course 1', teacher: 'Teacher 1' },
        { id: 2, name: 'Course 2', teacher: 'Teacher 2' },
      ],
    };
  },
  methods: {
    async submitGrade() {
      if (!this.studentName || !this.selectedCourse || !this.grade) {
        console.error('Please fill in all fields.');
        return;
      }

      try {
        const response = await axios.post('/api/submitGrade', {
          studentName: this.studentName,
          courseId: this.selectedCourse,
          grade: this.grade,
        });

        console.log('Grade submitted successfully:', response.data);
        // Grade has been submitted successfully

      } catch (error) {
        console.error('Error submitting grade:', error.message);
        // There is an error with the submittion of the grade
      }
    },
  },
};
</script>
