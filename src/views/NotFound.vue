<template>
    <div class="not-found">
      <h1>404 - Page Non Trouvée</h1>
      <p>La page que vous recherchez n'existe pas ou une erreur est survenue.</p>
      <router-link to="/">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  .not-found h1 {
    font-size: 3em;
    color: #e74c3c;
  }
  .not-found p {
    font-size: 1.5em;
  }
  </style>
  