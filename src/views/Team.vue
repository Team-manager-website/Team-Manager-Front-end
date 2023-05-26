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
      // GetToken().then(data => {
      //   console.log(data);
      //   token = data;
      // }).catch(error => {
      //   console.error(error);
      // });
      // alert(token);
      

    var option = {
      method: 'GET',
      url: 'http://localhost:8090/account/public',
      headers: {authorization: `Bearer ${this.response}`}
    };
    console.log(option);
 
    axios.request(option).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    
    // fetch('http://localhost:8090/account/public', {
    // headers: {
    //   'Authorization': `Bearer ${this.response}`
    // }
    // })
    // .then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   }
    //   throw new Error('Network response was not ok.');
    // })
    // .then(data => {
    //   console.log(data);
    // }) 
    // .catch(error => {
    //   console.error('There was a problem with the fetch operation:', error);
    // });

    // axios.post('http://localhost:8090/team/CreateTeam', {
    //     input: this.input,
    //   }).then((response) => {
    //     this.response = response.data;
    //   }).catch((error) => {
    //     console.error(error);
    //   });

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
        this.response = response.data.access_token;
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
  