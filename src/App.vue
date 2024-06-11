<template>
    <SiteHeader />
    <main>
        <RouterView className="content" />
    </main>
    <SiteFooter />
</template>

<script>
import SiteHeader from "./layout/SiteHeader.vue";
import SiteFooter from "./layout/SiteFooter.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteFooter,
    },
};
</script>
<style>
@font-face {
    font-family: "Roboto";
    src: url("./assets/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Roboto";
    src: url("./assets/fonts/Roboto/Roboto-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: "Roboto";
    src: url("./assets/fonts/Roboto/Roboto-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: "Bebas Neue";
    src: url("./assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf")
        format("truetype");
    font-weight: 700;
    font-style: normal;
}

:root {
    --primary-color: #903749;
    --background-color: #1c1c1c;
    --white-color: #fff;
    --light-color: #b9bbbe;
    --dark-color: #141414;
    --body-fonts: "Roboto", "Arial", sans-serif;
    --line-height: 1.5;
}

html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-family: var(--body-fonts);
    font-size: 1.6rem;
    color: var(--light-color);
    background-color: var(--background-color);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    min-height: 100vh;
    padding: 0 20px;
    margin: auto;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: var(--light-color);
}

main {
    flex: 1;
    padding: 5rem 0;
}

a {
    text-decoration: none;
    transition: all 0.2s;
}

.nav-links a:hover {
    filter: brightness(1.5);
}

.page-title {
    text-align: center;
    margin-bottom: 2rem;
}

.btn {
    color: var(--white-color);
    background-color: var(--primary-color);
    padding: 1.2rem;
    text-decoration: none;
    border-radius: 15px;
}
</style>
