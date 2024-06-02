// src/components/UserAvatar.vue
<template>
  <img :src="avatarUrl" alt="User Avatar">
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String,
      required: true
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
