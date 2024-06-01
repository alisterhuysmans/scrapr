<template>
    <div class="card">
      <img :src="avatar" alt="Avatar" class="avatar" />
      <h2>{{ fullname }}</h2>
      <p class="username">@{{ username }}</p>
      <div class="badges">
        <!-- <span v-if="isVip" class="badge vip">VIP</span> -->
        <!-- <span v-if="isStaff" class="badge staff">Staff</span> -->
        <!-- <span v-if="hasTiktok" class="badge tiktok">TikTok</span><br><br> -->
 </div>
 <a class="bouttonprofile" :href="'./users/' + username">Voir données</a>

    </div>
  </template>
  
  <script>
  export default {
    name: 'UserCard',
    props: {
      avatar: {
        type: String,
        required: true
      },
      fullname: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      isVip: {
        type: Boolean,
        default: false
      },
      isStaff: {
        type: Boolean,
        default: false
      },
      hasTiktok: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>

  .card {
    border-radius: 15px;
    width: 200px;
    background-color: #0F0F0F;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #FFFFFF;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .avatar {
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 15px 15px 0px 0px;
  }
  .badges {
    margin-top: 10px;
  }
  .badge {
    display: inline-block;
    padding: 5px 10px;
    margin: 2px;
    border-radius: 3px;
    font-size: 0.8em;
    color: white;
  }
  .vip {
    background-color: gold;
  }
  .staff {
    background-color: blue;
  }
  .tiktok {
    background-color: red;
  }

  .bouttonprofile{
    background-color: #903749;
    padding: 5px 20px;
    margin-top: 15px !important;
    color: #FFFFFF;
    text-decoration: none;
    border-radius: 15px;
}

.username{
    color: #903749;
}
  </style>
  