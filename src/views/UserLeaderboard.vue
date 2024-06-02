<template>
    <div>
      <user-leaderboard></user-leaderboard>
    </div>
  </template>
  
  <script>
  import UserLeaderboard from '@/components/UserLeaderboard.vue';
  
  export default {
    name: 'LeaderboardPage',
    components: {
      UserLeaderboard,
    },
  };
  </script>
  