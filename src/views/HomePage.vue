<template>
    <section class="hero-section">
        <h1>Scrapr</h1>
        <p>Votre site de statistiques Instagram</p>
    </section>
    <section class="specs-section">
        <div class="spec-card">
            <div class="img-container">
                <img src="../assets/icons/rocket.gif" alt="rocket" />
            </div>
            <h2>Suivez vos abonnés</h2>
            <p>
                Obtenez des données en temps réel sur l'évolution de votre
                nombre d'abonnés et suivez les tendances de croissance.
            </p>
        </div>
        <div class="spec-card">
            <div class="img-container">
                <img src="../assets/icons/chart.gif" alt="chart" />
            </div>
            <h2>Graphiques en direct</h2>
            <p>
                Suivez en direct le graphique de l'évolution de vos abonnés en
                détails, chaque jours le data est mis a jours automatiquement.
            </p>
        </div>
        <div class="spec-card">
            <div class="img-container">
                <img src="../assets/icons/network.gif" alt="network" />
            </div>
            <h2>Données accessibles partout</h2>
            <p>
                Ayez accès a vos données partout sans aucune limite, le moteur
                API de Scrapr est accessible et a votre disposition
                gratuitement.
            </p>
        </div>
    </section>
    <section class="cta-section">
        <h2>
            Récupérez des statistiques précises sur votre compte Instagram !
        </h2>
        <p>
            Suivez vos abonnés, engagement et plus encore avec le puissant
            moteur d'analyse de Scrapifier.
        </p>
        <a class="btn" href="/users">Commencer</a>
    </section>
</template>

<script>
export default {
    name: "HomePage",
};
</script>

<style scoped>
.hero-section {
    width: fit-content;
    margin: auto;
    border-radius: 8px;
    text-align: center;
    padding-bottom: 3rem;
}
.hero-section h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
}

.hero-section p {
    font-size: 2.4rem;
}

.specs-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
}

.spec-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem;
}

.img-container {
    background-color: var(--primary-color);
    padding: 0.5rem;
    width: fit-content;
    border-radius: 1.2rem;
    margin-bottom: 1rem;
}

.img-container img {
    width: 6rem;
}

.spec-card h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.spec-card p {
    max-width: 30rem;
}

.cta-section {
    display: flex;
    flex-direction: column;
    background-color: var(--dark-color);
    padding: 2rem;
    border-radius: 1.2rem;
    text-align: center;
}

.cta-section h2 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
}

.cta-section p {
    margin-bottom: 4rem;
}

.cta-section a {
    width: fit-content;
    align-self: center;
}
</style>
