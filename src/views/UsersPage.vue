<!-- src/views/UsersPage.vue -->
<template>
  <div>
    <h1>Users</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="user-cards">
      <UserCard
        v-for="user in users"
        :key="user.username"
        :avatar="'https://scrapifier.com/photoprofile/' + user.avatar"
        :fullname="user.fullname"
        :username="user.username"
        :isVip="user.isVip"
        :isStaff="user.isStaff"
        :hasTiktok="user.hasTiktok"
      />
    </div>
  </div>
 
</template>

<script>
import UserCard from '../components/Card.vue'

export default {
  name: 'UsersPage',
  components: {
    UserCard
  },
  data() {
    return {
      users: [],
      loading: true
    }
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('https://scrapifier.com/users.json');
        this.users = await response.json();
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.user-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
