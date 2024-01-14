<template>
    <div>
      <h1>Visitor Profile</h1>
      <div>
        <p>Username: {{ username }}</p>
        <p>Email: {{ email }}</p>
      </div>
  
      <!-- General Announcements -->
      <h2>General Announcements</h2>
      <ul>
        <li v-for="announcement in generalAnnouncements" :key="announcement.id">
          {{ announcement.title }} - {{ announcement.date }}
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
        generalAnnouncements: [
          { id: 1, title: 'Welcome to Our University', content: '...', date: '2023-01-01' },
          { id: 2, title: 'Important Event Coming Up', content: '...', date: '2023-02-15' },
        ],
      };
    },
  };
  </script>
  