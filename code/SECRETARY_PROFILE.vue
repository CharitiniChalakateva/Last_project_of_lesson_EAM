<template>
  <div>
    <h1>Secretary Profile</h1>
    <div>
      <p>Username: {{ username }}</p>
      <p>Email: {{ email }}</p>
    </div>

    <!-- Announcements -->
    <h2>Announcements</h2>
    <ul>
      <li v-for="announcement in announcements" :key="announcement.id">
        {{ announcement.title }} - {{ announcement.date }}
      </li>
    </ul>

    <!-- Create Announcement -->
    <h2>Create Announcement</h2>
    <form @submit.prevent="createAnnouncement">
      <div>
        <label for="announcementTitle">Title:</label>
        <input type="text" v-model="newAnnouncementTitle" id="announcementTitle" />
      </div>
      <div>
        <label for="announcementContent">Content:</label>
        <textarea v-model="newAnnouncementContent" id="announcementContent"></textarea>
      </div>
      <button type="submit">Create Announcement</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'Secretary', // Temporary username
      email: 'secretary@example.com', // Temporary email address
      announcements: [
        { id: 1, title: 'Important Announcement', content: '...', date: '2023-01-01' },
        // Mπορεί να γίνει προσθηκη και άλλων ανακοινωσεων
      ],
      newAnnouncementTitle: '',
      newAnnouncementContent: '',
    };
  },

  methods: {
    createAnnouncement() {
      const newAnnouncement = {
        id: this.announcements.length + 1,
        title: this.newAnnouncementTitle,
        content: this.newAnnouncementContent,
        date: new Date().toLocaleDateString(),
      };
      this.announcements.push(newAnnouncement);
    },
  },
};
</script>
