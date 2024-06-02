// src/components/UserInfo.vue
<template>
  <div>
    <p><strong>Full Name:</strong> {{ user.fullname }}</p>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <p><strong>VIP:</strong> {{ user.isVip ? 'Yes' : 'No' }}</p>
    <p><strong>Staff:</strong> {{ user.isStaff ? 'Yes' : 'No' }}</p>
    <p><strong>TikTok Username:</strong> {{ user.hasTiktok ? user.TiktokUsername : 'N/A' }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
