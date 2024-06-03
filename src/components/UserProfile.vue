<template>
  <div class="user-profile">
    <h1>User Profile for {{ username }}</h1>
    <img :src="profilePictureUrl" alt="User Avatar">
    <p><strong>Full Name:</strong> {{ fullName }}</p>
    <p><strong>Username:</strong> {{ username }}</p>
    <p v-if="isVip"><strong>VIP:</strong> Yes</p>
    <p v-else><strong>VIP:</strong> No</p>
    <p v-if="isStaff"><strong>Staff:</strong> Yes</p>
    <p v-else><strong>Staff:</strong> No</p>
    <p><strong>TikTok Username:</strong> {{ hasTiktok ? tiktokUsername : 'N/A' }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    username: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    isVip: {
      type: Boolean,
      default: false,
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    hasTiktok: {
      type: Boolean,
      default: false,
    },
    tiktokUsername: {
      type: String,
      default: '',
    },
  },
  computed: {
    profilePictureUrl() {
      return `https://scrapifier.com/photoprofile/${this.username}.jpg`;
    },
  },
};
</script>

<style scoped>
</style>
