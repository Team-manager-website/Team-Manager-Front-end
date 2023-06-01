<template>
    <center>
      <div class="app">
        <input type="text" id="input" v-model="input" class="InputField" placeholder="Team Name"/><br/><br/>
        <button @click="sendTeamName" type="submit" class="SubmitButton">Create Team</button>
        <div v-if="response">{{ response }}</div>
      </div>
      <!-- <pre>
    <code>{{ user.sub }}</code>
  </pre> -->
    </center>
</template>

<script>

import { default as axios } from 'axios';

//import { GetToken } from '../security/SecurityConfig.js'

export default {
  data() {
    return {
      input: '',
      response: '',
      user: this.$auth0.user,
      token: ''
    };
  },
  created(){
    this.checkIfUserIsLogedIn();
  },
  methods: {
    sendTeamName() {
    var option = {
      method: 'POST',
      url: 'api/team/CreateTeam',
      data: {
        input: this.input
      },
      headers: {authorization: `Bearer ${this.token}`}
    };
    console.log(option);
 
    axios.request(option).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    },
    checkIfUserIsLogedIn(){
      if(this.user == null){
        this.$router.push('home');
      }
    },
    async getAccesToken(){
      const options = {
        method: 'POST',
        url: 'https://dev-gm2f3obz.us.auth0.com/oauth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: '5CKT7yhQg9brQub922v5AVt2ZbgU13QL',
          client_secret: '0dYaxu_EVlDiuJdLrFCEnZ5UxDVkA_oR97OIZ21kokFsUjLPo-IZdtpWjxo6vlNQ',
          audience: 'http://teammanager/api'
        })
      };

      axios.request(options).then(response => {
        this.token = response.data.access_token;
      }).catch(error => {
        console.error(error);
      });
    } 
  },
  beforeMount(){ 
      this.getAccesToken();
  } 
};
</script>
  