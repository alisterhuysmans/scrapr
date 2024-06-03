<template>
  <div>
    <h1>Users</h1>
    <UserSearchBar @search="handleSearch" />
    <div v-if="loading">Loading...</div>
    <div v-else class="user-cards">
      <UserCard
        v-for="user in filteredUsers"
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
import UserSearchBar from '../components/UserSearchBar.vue'

export default {
  name: 'UsersPage',
  components: {
    UserCard,
    UserSearchBar
  },
  data() {
    return {
      users: [],
      loading: true,
      searchQuery: ''
    }
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    filteredUsers() {
      const filter = this.searchQuery.toLowerCase().trim();
      return this.users.filter(user => {
        return user.username.toLowerCase().includes(filter) || user.fullname.toLowerCase().includes(filter);
      });
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('https://scrapifier.com/users.json');
        this.users = await response.json();
      } catch (error) {
        console.error('Error fetching users:', error);
        this.$router.push({ name: 'NotFound' });
      } finally {
        this.loading = false;
      }
    },
    handleSearch(query) {
      this.searchQuery = query;
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
