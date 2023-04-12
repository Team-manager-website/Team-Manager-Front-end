<script setup>
import {RouterLink, RouterView} from 'vue-router'
<<<<<<< HEAD
import axios from 'axios';
import "@auth0/auth0-vue";
=======


>>>>>>> d58ae27d8d7fa2b9cccef70da40f060e74b0a61c
</script>

<template>
  <nav>
    <ul class="menuItems">
<<<<<<< HEAD
      <li><a href='/' data-item='Home'>Home</a></li>
      <li><a href='#' data-item='About'>About</a></li>
      <li><a href='#' data-item='Contact'>Contact</a></li>
      <li v-if="user.sub"><router-link type="submit" to="/team">Team</router-link></li>
=======
      <li><a href='#' data-item='Home'>Home</a></li>
      <li><a href='#' data-item='About'>About</a></li>
      <li><a href='#' data-item='Contact'>Contact</a></li>
      <li v-if="user.sub" id="loginLi"><router-link type="submit" to="/Team">Team</router-link></li>
>>>>>>> d58ae27d8d7fa2b9cccef70da40f060e74b0a61c
      <li v-if="!user.sub" id="loginLi"><a @click="login" data-item='Blog'>Login / Create Account</a></li>
      <li v-if="user.sub" id="loginLi"><a @click="logout" data-item='Blog'>Logout</a></li>
    </ul>
  </nav>
<<<<<<< HEAD
=======
  <pre>
    <code>{{ user.sub }}</code>
  </pre>
>>>>>>> d58ae27d8d7fa2b9cccef70da40f060e74b0a61c
  <RouterView/>
</template>

<script>
export default {
  data: function () {
    return {
      user: this.$auth0.user
    };
  },
  methods: {
    login() {
      this.$auth0.loginWithPopup();
    },
    logout() {
      this.$auth0.logout({logoutParams: {returnTo: window.location.origin}});
    }
  }
};
</script>