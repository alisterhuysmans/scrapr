// src/components/UserInfo.vue
<template>
    <div class="user-card">
        <p><strong>Full Name:</strong> {{ user.fullname }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>VIP:</strong> {{ user.isVip ? "Yes" : "No" }}</p>
        <p><strong>Staff:</strong> {{ user.isStaff ? "Yes" : "No" }}</p>
        <p>
            <strong>TikTok Username:</strong>
            {{ user.hasTiktok ? user.TiktokUsername : "N/A" }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped>
.user-card {
    position: relative;
    background-color: var(--dark-color);
    border-radius: 1.2rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    padding: 2rem;
    box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.4);
    transition: all 0.2s;
    margin-bottom: 5rem;
    width: fit-content;
    margin: auto;
    z-index: 3;
}

.user-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    justify-self: start;
    padding: 1rem 2rem;
}

.user-handle {
    color: var(--primary-color);
}
</style>
