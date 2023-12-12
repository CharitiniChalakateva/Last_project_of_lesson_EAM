<template>
    <div>
      <h1>Teacher Profile</h1>
      <ul>
        <li v-for="(course, index) in teacherCourses" :key="index">
          <course-card :course="course"></course-card>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teacherCourses: [
          { name: 'Course 1', teacher: 'Teacher 1' },
          { name: 'Course 2', teacher: 'Teacher 2' },
        ],
      };
    },
  };
  </script>