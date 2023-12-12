<template>
    <div>
      <h1>Courses for Students</h1>
      <ul>
        <li v-for="(course, index) in courses" :key="index">
          <course-card :course="course"></course-card>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courses: [
          { name: 'Course 1', teacher: 'Teacher 1' },
          { name: 'Course 2', teacher: 'Teacher 2' },
          { name: 'Course 3', teacher: 'Teacher 3' },
          { name: 'Course 4', teacher: 'Teacher 4' },
        ],
      };
    },
  };
  </script>
  