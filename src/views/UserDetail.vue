<template>
    <div>
      <h1>User Detail for {{ username }}</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <img :src="'https://scrapifier.com/photoprofile/' + user.avatar" alt="User Avatar">
        <p><strong>Full Name:</strong> {{ user.fullname }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>VIP:</strong> {{ user.isVip ? 'Yes' : 'No' }}</p>
        <p><strong>Staff:</strong> {{ user.isStaff ? 'Yes' : 'No' }}</p>
        <p><strong>TikTok Username:</strong> {{ user.hasTiktok ? user.TiktokUsername : 'N/A' }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserDetail',
    data() {
      return {
        user: null,
        loading: true
      }
    },
    computed: {
      username() {
        return this.$route.params.username;
      }
    },
    async created() {
      await this.fetchUser();
    },
    methods: {
      async fetchUser() {
        try {
          const response = await fetch('https://scrapifier.com/users.json');
          const usersData = await response.json();
          this.user = usersData.find(user => user.username === this.username);
          if (!this.user) {
            console.error('User not found');
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        } finally {
          this.loading = false;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  img {
    max-width: 150px;
    border-radius: 50%;
  }
  </style>
  