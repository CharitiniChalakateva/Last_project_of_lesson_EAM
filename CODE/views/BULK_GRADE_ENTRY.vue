<template>
  <div>
    <h1>Bulk Grade Entry</h1>
    <!-- Prevents the default form submission and invokes the handleFileUpload method -->
    <form @submit.prevent="handleFileUpload">
      <div>
        <label for="gradeFile">Upload File:</label>
        <!-- Accept only Excel files (.xlsx) -->
        <input type="file" id="gradeFile" ref="gradeFile" accept=".xlsx" /> 
        
      </div>
      <div>
        <button type="submit">Submit Grades</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    // Handles the file upload when the form is submitted
    handleFileUpload() {
      const fileInput = this.$refs.gradeFile;

      if (fileInput.files.length > 0) {
        const uploadedFile = fileInput.files[0];

        // Perform processing on the uploaded file (e.g., read content etc.)
        // For simplicity, we log the file information here
        console.log('Uploaded File:', uploadedFile);
      } else {
        console.error('No file selected.');
      }
    },
  },
};
</script>
