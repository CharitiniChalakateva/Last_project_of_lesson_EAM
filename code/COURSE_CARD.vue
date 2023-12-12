<template>
    <div>
      <h2>{{ course.name }}</h2>
      <p>Taught by {{ course.teacher }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      course: {
        type: Object,
        required: true,
      },
   };
}
  </script>