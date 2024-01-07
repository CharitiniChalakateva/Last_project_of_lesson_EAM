<template>
  <!-- The main container for the application -->
  <div id="app">
    <!-- The router-view will render the component for the current route -->
    <router-view />
  </div>
</template>

<script>
// Importing Vue components
import BulkGradeEntry from './components/BulkGradeEntry.vue';
import CourseCard from './components/CourseCard.vue';
import CoursesForStudents from './components/CoursesForStudents.vue';
import Dashboard from './components/Dashboard.vue';
import EditProfile from './components/EditProfile.vue';
import GradeMonitoring from './components/GradeMonitoring.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import RequestCertificate from './components/RequestCertificate.vue';
import SecretaryProfile from './components/SecretaryProfile.vue';
import Store from './store'; 
import StudentProfile from './components/StudentProfile.vue';
import TeacherGradingSystem from './components/TeacherGradingSystem.vue';
import TeacherProfile from './components/TeacherProfile.vue';
import UserProfile from './components/UserProfile.vue';
import VisitorProfile from './components/VisitorProfile.vue';

export default {
  // Component name
  name: 'MyStudies', // Adjusted to PascalCase for consistency

  // Registering components to be used in the template
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
    Store,
    StudentProfile,
    TeacherGradingSystem,
    TeacherProfile,
    UserProfile,
    VisitorProfile,
  },
};
</script>

<style>
/* Styling for the main application container */
#app {
  background-color: #ADD8E6; /* Light blue background color */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
}
</style>
