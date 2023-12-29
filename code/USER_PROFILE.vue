<template>
  <div>
    <h1>User Profile</h1>
    <div>
      <p>Username: {{ username }}</p>
      <p>Email: {{ email }}</p>
    </div>
    <h1>Available Courses</h1>
    <ul>
      <li v-for="course in userCourses" :key="course.id">
        {{ course.title }}
      </li>
    </ul>
    <h1>Available Exams</h1>
    <ul>
      <li v-for="exam in userExams" :key="exam.id">
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
    };
  },
  computed: {
    // User data from the store
    user() {
      return this.$store.state.user;
    },
    // Filtered courses and exams for the user
    userCourses() {
      return this.$store.state.courses.filter(course => course.user_id === this.user.id);
    },
    userExams() {
      return this.$store.state.exams.filter(exam => exam.user_id === this.user.id);
    },
  },
  mounted() {
    // Adapt page for the user
    this.username = this.user.username;
    this.email = this.user.email;
  },
};
</script>
