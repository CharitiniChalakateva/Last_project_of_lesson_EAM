<template>
  <div>
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
    <h1>User Profile</h1>
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
};
</script>
