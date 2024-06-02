<template>
    <div class="leaderboard">
      <h3>Classement des abonnés par utilisateurs</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Croissance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in leaderboard" :key="user.username">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td :class="{'gain': user.growth > 0, 'loss': user.growth < 0, 'neutral': user.growth === 0}">
              {{ user.growth > 0 ? '+' : '' }}{{ user.growth === 0 ? '=' : user.growth }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserLeaderboard',
    data() {
      return {
        leaderboard: [],
      };
    },
    methods: {
      async fetchLeaderboard() {
        try {
          const response = await axios.get('https://scrapifier.com/users.json');
          const users = response.data;
  
          const growthPromises = users.map(async user => {
            const userResponse = await axios.get(`https://scrapifier.com/api/usersdata/${user.username}`);
            const data = userResponse.data;
            const dates = Object.keys(data).sort((a, b) => a - b);
            
            if (dates.length < 2) {
              return {
                username: user.username,
                growth: 0, // Assumer aucune croissance si les données sont insuffisantes
              };
            }
            
            const initialFollowers = data[dates[0]].followers_count;
            const latestFollowers = data[dates[dates.length - 1]].followers_count;
            const growth = latestFollowers - initialFollowers;
            return {
              username: user.username,
              growth,
            };
          });
  
          const leaderboard = await Promise.all(growthPromises);
          this.leaderboard = leaderboard.sort((a, b) => b.growth - a.growth);
        } catch (error) {
          console.error('Erreur lors de la récupération du leaderboard:', error);
        }
      },
    },
    mounted() {
      this.fetchLeaderboard();
    },
  };
  </script>
  
  <style scoped>
  .leaderboard {
    background-color: #2c2c2e;
    border: 1px solid #444;
    padding: 1em;
    border-radius: 8px;
    color: white;
  }
  .leaderboard h3 {
    color: #e74c3c;
    text-align: center;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1em;
  }
  th, td {
    border: 1px solid #444;
    padding: 0.5em;
    text-align: left;
  }
  th {
    background-color: #444;
  }
  .gain {
    color: green;
  }
  .loss {
    color: red;
  }
  .neutral {
    color: yellow;
  }
  </style>
  