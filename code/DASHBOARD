<template>
    <div>
      <h1>Διαθέσιμα Μαθήματα</h1>
      <ul>
        <li v-for="course in courses" :key="course.id">
          {{ course.title }}
        </li>
      </ul>
      <h1>Διαθέσιμες Βαθμολογίες</h1>
      <ul>
        <li v-for="exam in exams" :key="exam.id">
          {{ exam.title }}
        </li>
      </ul>
      <h1>Προφίλ Χρήστη</h1>
      <div>
        <p>Username: {{ user.username }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      courses() {
        return this.$store.state.courses;
      },
      exams() {
        return this.$store.state.exams;
      },
      user() {
        return this.$store.state.user;
      }
    }
  }
  </script>