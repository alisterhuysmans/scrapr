<template>
    <SiteHeader />
    <RouterView />
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

:root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --primary-color: #1c1c1c;
    --light-color: #fff;
    --body-fonts: "Roboto", "Arial", sans-serif;
    --line-height: 1.5;
}

html {
    font-size: 62.5%;
}

body {
    font-family: var(--body-fonts);
    font-size: 1.6rem;
    color: var(--light-color);
    background-color: var(--primary-color);
}

#app {
    max-width: 1300px;
    padding: 0 20px;
    margin: auto;
}
</style>
