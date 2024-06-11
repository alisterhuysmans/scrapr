// src/components/UserAvatar.vue
<template>
    <img :src="avatarUrl" alt="User Avatar" />
</template>

<script>
export default {
    props: {
        avatarUrl: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
img {
    width: 100%;
    border-radius: 1.2rem;
    height: 20rem;
    object-fit: contain;
    margin: auto;
    transform: translateY(5rem);
}
</style>
