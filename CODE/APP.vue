<template>
  <!-- The main container for the application -->
  <div id="app">
    <!-- Adding the EKPA logo -->
    <img src="./assets/ekpa.png" alt="Λογότυπο ΕΚΠΑ" />
    <!-- The router-view will render the component for the current route -->
    <router-view />
  </div>
</template>

<script>
// Importing components from the 'views' and 'components' folders
import BulkGradeEntry from '@/components/BULK_GRADE_ENTRY.vue';
import CourseCard from './COURSE_CARD.vue';
import CoursesForStudents from '@/views/COURSES_FOR_STUDENTS.vue';
import Dashboard from '@/views/DASHBOARD.vue';
import EditProfile from '@/components/EDIT_PROFILE.vue';
import GradeMonitoring from '@/views/GRADE_MONITORING.vue';
import Login from '@/components/LOGIN.vue';
import Register from '@/components/REGISTER.vue';
import RequestCertificate from '@/components/REQUEST_CERTIFICATE.vue';
import SecretaryProfile from '@/components/SECRETARY_PROFILE.vue';
import Store from './STORE'; // Importing the Vuex store
import StudentProfile from '@/components/STUDENT_PROFILE.vue';
import TeacherGradingSystem from '@/components/TEACHER_GRADING_SYSTEM.vue';
import TeacherProfile from '@/components/TEACHER_PROFILE.vue';
import UserProfile from '@/components/USER_PROFILE.vue';
import VisitorProfile from '@/components/VISITOR_PROFILE.vue';

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
