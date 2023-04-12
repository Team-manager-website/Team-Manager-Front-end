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
<script lang="ts">
import axios from 'axios';
export default {
  data() {
    return {
      input: '',
      response: '',
      user: this.$auth0.user
    };
  },
  created(){
    this.checkIfUserIsLogedIn();
  },
  methods: {
    sendTeamName() {
      axios.post('http://localhost:8090/team/CreateTeam', {
        input: this.input,
      }).then((response) => {
        this.response = response.data;
      }).catch((error) => {
        console.error(error);
      });
    },
    checkIfUserIsLogedIn(){
      if(this.user == null){
        this.$router.push('home');
      }
    }
  }
};
</script>
  