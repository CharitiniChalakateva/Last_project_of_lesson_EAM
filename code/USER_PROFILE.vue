<template>
  <div>
    <h1>User Profile</h1>
    <div>
      <p>Username: {{ username }}</p>
      <p>Email: {{ email }}</p>
    </div>
    <h1>Available Courses</h1>
    <ul>
      <li v-for="course in courses" :key="course.id">
        {{ course.title }}
      </li>
    </ul>
    <h1>Available Grades</h1>
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
      exams: [],
    };
  },
  mounted() {
    // Adapt page for the user
    this.username = this.$store.state.user.username;
    this.email = this.$store.state.user.email;
  },
  computed: {
    // Available courses and grades for the user
    courses() {
      return this.$store.state.courses.filter(course => course.user_id === this.user.id);
    },
    exams() {
      return this.$store.state.exams.filter(exam => exam.user_id === this.user.id);
    },
  },
};
</script>
