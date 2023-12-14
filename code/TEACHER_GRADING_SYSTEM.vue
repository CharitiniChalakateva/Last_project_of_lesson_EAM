<template>
    <div>
      <h1>Teacher Grading System</h1>
      <form @submit.prevent="submitGrade">
        <div>
          <label for="studentName">Student Name:</label>
          <input type="text" id="studentName" v-model="studentName" />
        </div>
        <div>
          <label for="course">Course:</label>
          <select id="course" v-model="selectedCourse">
            <option v-for="course in teacherCourses" :key="course.id" :value="course.id">
              {{ course.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="grade">Grade:</label>
          <input type="number" id="grade" v-model="grade" />
        </div>
        <div>
          <button type="submit">Submit Grade</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
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
      submitGrade() {
        // Add logic to submit the grade to the backend
        console.log('Grade submitted:', this.studentName, this.selectedCourse, this.grade);
      },
    },
  };
  </script>