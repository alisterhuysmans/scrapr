<template>
    <header>
        <div class="logo">
            <a href="/"><img src="../assets/images/logo.png" alt="Logo" /></a>
        </div>
        <nav class="nav-links">
            <router-link to="/">Accueil</router-link>
            <router-link to="/users">Utilisateurs</router-link>
            <router-link to="/leaderboard">Leaderboard</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "SiteHeader",
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
}

.nav-links a {
    font-size: 1.8rem;
}

@media (max-width: 468px) {
    header {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
