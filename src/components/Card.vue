<template>
    <div class="user-card">
        <img :src="avatar" alt="Avatar" class="user-img" />
        <div class="user-details">
            <h3 class="user-name">{{ fullname }}</h3>
            <p class="user-handle">@{{ username }}</p>
            <div class="badges">
                <span v-if="isVip" class="badge vip">VIP</span>
                <span v-if="isStaff" class="badge staff">Staff</span>
                <span v-if="hasTiktok" class="badge tiktok">TikTok</span>
            </div>
        </div>
        <a class="btn" :href="'./users/' + username">Voir l'utilisateur</a>
    </div>
</template>

<script>
export default {
    name: "UserCard",
    props: {
        avatar: {
            type: String,
            required: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        username: {
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
    },
};
</script>

<style scoped>
.user-card {
    background-color: var(--dark-color);
    border-radius: 12px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    padding-bottom: 2rem;
    box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.4);
    transition: all 0.2s;
}

.user-card:hover {
    transform: translate(0px, 6px);
    filter: brightness(1.1);
    /* background-color: #181212; */
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
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

.user-img {
    width: 100%;
}

.btn {
    width: fit-content;
    margin-top: auto;
}
</style>
