<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="user.role === 'student'">
      <h2>Students</h2>
      <p>Here you can see the available courses:</p>
      <ul>
        <li v-for="course in courses" :key="course.id">
          {{ course.title }}
        </li>
      </ul>
      <p>Here you can see the available courses:</p>
      <ul>
        <li v-for="exam in exams" :key="exam.id">
          {{ exam.title }}
        </li>
      </ul>
      <h3>Student Profile</h3>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
    </div>

    <div v-else-if="user.role === 'professor'">
      <h2>Professor</h2>
      <p>Here you can see the courses you teach:</p>
      <ul>
        <li v-for="course in courses" :key="course.id">
          {{ course.title }}
        </li>
      </ul>
      <p>Here you can see the exam results:</p>
      <ul>
        <li v-for="exam in exams" :key="exam.id">
          {{ exam.title }}
        </li>
      </ul>
      <h3>Professor Profile</h3>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
    </div>

    <div v-else-if="user.role === 'secretariat'">
      <h2>Secretariat</h2>
      <p>Here you can see the courses you handle:</p>
      <ul>
        <li v-for="course in courses" :key="course.id">
          {{ course.title }}
        </li>
      </ul>
      <p>Here you can see the exam results:</p>
      <ul>
        <li v-for="exam in exams" :key="exam.id">
          {{ exam.title }}
        </li>
      </ul>
      <h3>Secretariat Profile</h3>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
    </div>

    <div v-else>
      <h2>Visitors</h2>
      <p>Welcome! Please log in to gain access.</p>
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
