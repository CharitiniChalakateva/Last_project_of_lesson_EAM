<template>
    <div>
      <h1>Προφίλ Χρήστη</h1>
      <div>
        <p>Username: {{ username }}</p>
        <p>Email: {{ email }}</p>
      </div>
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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        courses: [],
        exams: []
      }
    },
    mounted() {
      // Προσαρμογή σελίδας για τον χρήστη store.commit('setUser', this.$route.params.user);
    },
    computed: {
      // Διαθέσιμα μαθήματα και βαθμολογίες για τον χρήστη
      courses() {
  .$store.state.courses.filter(course => course.user_id === this.user.id);
      },
      exams() {
        return this.$store.state.exams.filter(exam => exam.user_id === this.user.id);
      }
    }
  }
  </script>
  