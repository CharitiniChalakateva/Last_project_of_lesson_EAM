<template>
  <div>
    <h1>Teacher Profile</h1>
    <ul>
      <li v-for="(course, index) in teacherCourses" :key="index">
        <course-card :course="course"></course-card>
      </li>
    </ul>

    <!-- New Teacher Grading System -->
    <h1>Teacher Grading System</h1>
    <form @submit.prevent="submitGrade">
      <div>
        <label for="studentName">Student Name:</label>
        <input type="text" id="studentName" v-model="studentName" />
      </div>
      <div>
        <label for="selectedCourse">Course:</label>
        <select id="selectedCourse" v-model="selectedCourse">
          <option v-for="course in teacherCourses" :key="course.id" :value="course.id">
            {{ course.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="grade">Grade:</label>
        <input type="number" id="grade" v-model="grade" />
      </div>
      <div>
        <button type="submit">Submit Grade</button>
      </div>
    </form>

    <!-- Grade Monitoring -->
    <h1>Grade Monitoring</h1>
    <ul>
      <li v-for="grade in teacherGrades" :key="grade.id">
        <p>Student: {{ grade.studentName }}</p>
        <p>Course: {{ getCourseName(grade.courseId) }}</p>
        <p>Grade: {{ grade.grade }}</p>
      </li>
    </ul>

    <!-- Bulk Grade Entry -->
    <h1>Bulk Grade Entry</h1>
    <form @submit.prevent="handleFileUpload">
      <div>
        <label for="gradeFile">Upload File:</label>
        <input type="file" id="gradeFile" ref="gradeFile" accept=".csv" />
      </div>
      <div>
        <button type="submit">Submit Grades</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherCourses: [
        { id: 1, name: 'Course 1', teacher: 'Teacher 1' },
        { id: 2, name: 'Course 2', teacher: 'Teacher 2' },
      ],
      studentName: '',
      selectedCourse: null,
      grade: null,
      teacherGrades: [
        { id: 1, studentName: 'Student 1', courseId: 1, grade: 95 },
        { id: 2, studentName: 'Student 2', courseId: 2, grade: 88 },
      ],
    };
  },
  methods: {
    // New Teacher Grading System
    submitGrade() {
      console.log('Grade submitted:', this.studentName, this.selectedCourse, this.grade);
      // Add logic to submit the grade to the backend
    },

    // Grade Monitoring
    getCourseName(courseId) {
      const course = this.teacherCourses.find(course => course.id === courseId);
      return course ? course.name : 'Unknown Course';
    },

    // Bulk Grade Entry
    handleFileUpload() {
      const fileInput = this.$refs.gradeFile;

      if (fileInput.files.length > 0) {
        const uploadedFile = fileInput.files[0];

        // Perform processing on the uploaded file (e.g., read content, parse CSV, etc.)
        // For simplicity, let's just log the file information here
        console.log('Uploaded File:', uploadedFile);
      } else {
        console.error('No file selected.');
      }
    },
  },
};
</script>
