<template>
    <div>
      <h1>Student Profile</h1>
      <div>
        <p>Username: {{ username }}</p>
        <p>Email: {{ email }}</p>
      </div>
  
      <!-- Enrolled Courses -->
      <h2>Enrolled Courses</h2>
      <ul>
        <li v-for="enrolledCourse in enrolledCourses" :key="enrolledCourse.id">
          {{ enrolledCourse.title }} - {{ enrolledCourse.teacher }}
        </li>
      </ul>
  
      <!-- Grades -->
      <h2>Grades</h2>
      <ul>
        <li v-for="grade in grades" :key="grade.id">
          {{ grade.course }} - Grade: {{ grade.grade }}
        </li>
      </ul>
  
      <!-- Course Declaration -->
      <h2>Course Declaration</h2>
      <form @submit.prevent="submitDeclaration">
        <div>
          <label for="selectedCourse">Select Course:</label>
          <select id="selectedCourse" v-model="selectedCourse">
            <option v-for="course in availableCourses" :key="course.id" :value="course.id">
              {{ course.title }} - {{ course.teacher }}
            </option>
          </select>
        </div>
        <div>
          <button type="submit">Declare Course</button>
        </div>
      </form>
  
      <!-- Declaration History -->
      <h2>Declaration History</h2>
      <ul>
        <li v-for="declaration in declarationHistory" :key="declaration.id">
          {{ declaration.course }} - Status: {{ declaration.status }}
        </li>
      </ul>
  
      <!-- Certificate Request -->
      <h2>Certificate Request</h2>
      <form @submit.prevent="submitCertificateRequest">
        <div>
          <label for="certificateType">Select Certificate Type:</label>
          <select id="certificateType" v-model="certificateType">
            <option value="transcript">Transcript</option>
            <option value="military">Military Service</option>
            <!-- Add more certificate types as needed -->
          </select>
        </div>
        <div>
          <button type="submit">Request Certificate</button>
        </div>
      </form>
  
      <!-- Certificate History -->
      <h2>Certificate History</h2>
      <ul>
        <li v-for="certificate in certificateHistory" :key="certificate.id">
          {{ certificate.type }} - Status: {{ certificate.status }}
          <button @click="downloadCertificate(certificate.id)">Download</button>
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
          enrolledCourses: [],
          grades: [],
          availableCourses: [], // Assuming there's an API endpoint for fetching available courses
          selectedCourse: null,
          declarationHistory: [], // Assuming there's an API endpoint for fetching declaration history
          certificateType: 'transcript',
          certificateHistory: [], // Assuming there's an API endpoint for fetching certificate history
        };
      },
      mounted() {
        this.username = this.$store.state.user.username;
        this.email = this.$store.state.user.email;
        this.fetchEnrolledCourses();
        this.fetchGrades();
        this.fetchAvailableCourses();
        this.fetchDeclarationHistory();
        this.fetchCertificateHistory();
      },
    methods: {
    async fetchEnrolledCourses() {
      try {
        const response = await axios.get('/api/enrolled-courses');
        this.enrolledCourses = response.data;
      } catch (error) {
        console.error('Error fetching enrolled courses:', error.message);
      }
    },

    async fetchGrades() {
      try {
        const response = await axios.get('/api/grades');
        this.grades = response.data;
      } catch (error) {
        console.error('Error fetching grades:', error.message);
      }
    },

    async fetchAvailableCourses() {
      try {
        const response = await axios.get('/api/available-courses');
        this.availableCourses = response.data;
      } catch (error) {
        console.error('Error fetching available courses:', error.message);
      }
    },

    async fetchDeclarationHistory() {
      try {
        const response = await axios.get('/api/declaration-history');
        this.declarationHistory = response.data;
      } catch (error) {
        console.error('Error fetching declaration history:', error.message);
      }
    },

    async fetchCertificateHistory() {
      try {
        const response = await axios.get('/api/certificate-history');
        this.certificateHistory = response.data;
      } catch (error) {
        console.error('Error fetching certificate history:', error.message);
      }
    },

    async submitDeclaration() {
      try {
        const response = await axios.post('/api/declare-course', {
          courseId: this.selectedCourse,
        });
        console.log('Declaration submitted successfully:', response.data);
        this.fetchDeclarationHistory(); // Refresh the declaration history
      } catch (error) {
        console.error('Error submitting declaration:', error.message);
      }
    },

    async submitCertificateRequest() {
      try {
        const response = await axios.post('/api/request-certificate', {
          certificateType: this.certificateType,
        });
        console.log('Certificate request submitted successfully:', response.data);
        this.fetchCertificateHistory(); // Refresh the certificate history
      } catch (error) {
        console.error('Error submitting certificate request:', error.message);
      }
    },

    async downloadCertificate(certificateId) {
      try {
        const response = await axios.get(`/api/download-certificate/${certificateId}`, {
          responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `certificate_${certificateId}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading certificate:', error.message);
      }
    },
  }
};
</script>
   