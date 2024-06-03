<template>
    <div class="history-card">
      <h3>Historique des gains (14 jours)</h3>
      <ul>
        <li v-for="(entry, index) in history" :key="index">
          <span class="date">{{ entry.date }}</span>
          <span class="followers">{{ entry.followers }} followers</span>
          <span :class="{'gain': entry.gain > 0, 'loss': entry.gain < 0, 'neutral': entry.gain === 0}">
            <span v-if="entry.gain > 0">+{{ entry.gain }}<span class="arrow-up">⬆️</span></span>
            <span v-else-if="entry.gain < 0">{{ entry.gain }}<span class="arrow-down">⬇️</span></span>
            <span v-else class="arrow-equal">=</span>
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      username: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        history: [],
      };
    },
    methods: {
      async fetchHistory() {
        try {
          const response = await axios.get(`https://scrapifier.com/api/usersdata/${this.username}`);
          const data = response.data;
          const history = [];
  
          const dates = Object.keys(data).sort((a, b) => b - a).slice(0, 14);
          for (let i = 0; i < dates.length - 1; i++) {
            const date = new Date(parseInt(dates[i], 10) * 1000);
            const followers = data[dates[i]].followers_count;
            const gain = data[dates[i]].followers_count - data[dates[i + 1]].followers_count;
            history.push({
              date: date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
              followers,
              gain,
            });
          }
          this.history = history;
        } catch (error) {
          console.error('Erreur lors de la récupération de l\'historique:', error);
          this.$router.push({ name: 'NotFound' });
        }
      },
    },
    mounted() {
      this.fetchHistory();
    },
  };
  </script>
  
  <style scoped>
  .history-card {
    background-color: #2c2c2e;
    border: 1px solid #444;
    padding: 1em;
    border-radius: 8px;
    color: white;
  }
  .history-card h3 {
    color: #e74c3c;
    text-align: center;
  }
  .history-card ul {
    list-style-type: none;
    padding: 0;
  }
  .history-card li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1c1c1e;
    padding: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 4px;
  }
  .date {
    flex: 1;
    color: #b3b3b3;
  }
  .followers {
    flex: 2;
    text-align: center;
    color: #b3b3b3;
  }
  .gain {
    flex: 1;
    text-align: right;
    color: green;
  }
  .loss {
    flex: 1;
    text-align: right;
    color: red;
  }
  .neutral {
    flex: 1;
    text-align: right;
    color: yellow;
  }
  .arrow-up,
  .arrow-down,
  .arrow-equal {
    margin-left: 0.5em;
  }
  </style>
  