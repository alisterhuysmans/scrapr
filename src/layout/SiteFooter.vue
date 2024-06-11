<template>
    <footer>
        <p>© 2024 Scrapr. All rights reserved.</p>
        <nav class="nav-links">
            <a href="#">Documentation</a>
            <a href="#">Politique de confidentalité</a>
            <a href="#">Contactez-nous</a>
        </nav>
    </footer>
</template>

<script>
export default {
    name: "SiteFooter",
};
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    font-size: 1.4rem;
}

@media (max-width: 768px) {
    footer {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
