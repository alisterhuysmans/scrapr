// src/views/UserDetail.vue
<template>
  <div>
    <h1>User Detail for {{ username }}</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <UserAvatar :avatarUrl="'https://scrapifier.com/photoprofile/' + user.avatar"></UserAvatar>
      <UserInfo :user="user"></UserInfo>
      <UserStatsChart v-if="followerGrowthData.length" type="bar" label="Total Follower Gain" :data="followerGrowthData" :colors="backgroundColors"></UserStatsChart>
      <UserStatsChart v-if="stats" type="line" label="Followers" :data="stats.followers_count"></UserStatsChart>
      <UserStatsChart v-if="stats" type="line" label="Following" :data="stats.following_count"></UserStatsChart>
      <UserStatsChart v-if="stats" type="line" label="Posts" :data="stats.posts_count"></UserStatsChart>
    </div>
  </div>
</template>

<script>
import UserAvatar from '../components/UserAvatar.vue';
import UserInfo from '../components/UserInfo.vue';
import UserStatsChart from '../components/UserStatsChart.vue';

export default {
  name: 'UserDetail',
  components: {
    UserAvatar,
    UserInfo,
    UserStatsChart
  },
  data() {
    return {
      user: null,
      stats: null,
      followerGrowthData: [],
      backgroundColors: [],
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
    await this.fetchUserStats();
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
    },
    async fetchUserStats() {
      try {
        const response = await fetch(`https://scrapifier.com/api/usersdata/${this.username}`);
        const statsData = await response.json();
        const stats = {
          followers_count: [],
          following_count: [],
          posts_count: []
        };

        const last14Days = Object.keys(statsData).slice(-14);

        last14Days.forEach(day => {
          const dayStats = statsData[day];
          stats.followers_count.push(dayStats.followers_count);
          stats.following_count.push(dayStats.following_count);
          stats.posts_count.push(dayStats.posts_count);
        });

        this.stats = stats;
        this.calculateFollowerGrowth(stats.followers_count);
      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    },
    calculateFollowerGrowth(totalFollowers) {
      this.followerGrowthData = totalFollowers.map((value, index) => index > 0 ? value - totalFollowers[index - 1] : 0);
      this.backgroundColors = this.followerGrowthData.map(value => {
        if (value > 0) return '#43B581'; // Green for positive
        else if (value < 0) return '#E84545'; // Red for negative
        else return '#b9bbbe1a'; // Grey for zero
      });

      // Ensure zero values have a minimum bar height
      const minBarHeight = 0.1;
      this.followerGrowthData = this.followerGrowthData.map(value => value === 0 ? minBarHeight : value);
    }
  }
}
</script>

<style scoped>
/* Any additional styling for UserDetail.vue can go here */
</style>
