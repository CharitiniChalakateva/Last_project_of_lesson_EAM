<template>
  <!-- The main container for the application -->
  <div id="app">
    <!-- Adding the EKPA logo -->
    <img src="/ekpa.png" alt="Λογότυπο ΕΚΠΑ" />
    <!-- The router-view will render the component for the current route -->
    <router-view />
  </div>
</template>

<script>
// Importing components from the 'views' folder
import BulkGradeEntry from '@/views/BulkGradeEntry.vue';
import CourseCard from '@/views/CourseCard.vue';
import CoursesForStudents from '@/views/CoursesForStudents.vue';
import Dashboard from '@/views/Dashboard.vue';
import EditProfile from '@/views/EditProfile.vue';
import GradeMonitoring from '@/views/GradeMonitoring.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import RequestCertificate from '@/views/RequestCertificate.vue';
import SecretaryProfile from '@/views/SecretaryProfile.vue';
import Store from '@/store'; // Importing the Vuex store
import StudentProfile from '@/views/StudentProfile.vue';
import TeacherGradingSystem from '@/views/TeacherGradingSystem.vue';
import TeacherProfile from '@/views/TeacherProfile.vue';
import UserProfile from '@/views/UserProfile.vue';
import VisitorProfile from '@/views/VisitorProfile.vue';

export default {
  // Component name
  name: 'MyStudies',

  // Importing components into the components property
  components: {
    BulkGradeEntry,
    CourseCard,
    CoursesForStudents,
    Dashboard,
    EditProfile,
    GradeMonitoring,
    Login,
    Register,
    RequestCertificate,
    SecretaryProfile,
    StudentProfile,
    TeacherGradingSystem,
    TeacherProfile,
    UserProfile,
    VisitorProfile,
  },
  // Importing the Vuex store
  store: Store,
};
</script>

<style>
/* Styling for the main application container */
#app {
  background-color: #ADD8E6; /* Light blue background color */
  min-height: 100vh;
  display: flex;
  flex-direction: column; /* Align items in a column */
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
}

/* Styling for the EKPA logo */
#app img {
  width: 200px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 20px; /* Add some bottom margin */
}
</style>
