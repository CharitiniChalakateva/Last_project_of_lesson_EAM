<template>
  <div>
    <h1>Grade Monitoring</h1>
    <ul>
      <li v-for="grade in teacherGrades" :key="grade.id">
        <p>Student: {{ grade.studentName }}</p>
        <p>Course: {{ getCourseName(grade.courseId) }}</p>
        <p>Grade: {{ grade.grade }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherGrades: [
        { id: 1, studentName: 'Student 1', courseId: 1, grade: 95 },
        { id: 2, studentName: 'Student 2', courseId: 2, grade: 88 },
      ],
      teacherCourses: [
        { id: 1, name: 'Course 1', teacher: 'Teacher 1' },
        { id: 2, name: 'Course 2', teacher: 'Teacher 2' },
      ],
    };
  },
  methods: {
    getCourseName(courseId) {
      const course = this.teacherCourses.find(course => course.id === courseId);
      return course ? course.name : courseId.toString();
    },
  },
};
</script>
