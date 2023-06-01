<template>
  <center>
    <div class="app">
        <input type="text" v-model="name" class="InputField" placeholder="Name"/><br/><br/>
        <button @click="makeAccount" type="submit" class="SubmitButton">Create Account</button>
    </div>
  </center>
</template>

<script>
import axios from 'axios';
export default ({
  data() {
    return {
      name: '',
      response: '',
      user: this.$auth0.user, 
      token: ''
    };
  },
  methods: {
    makeAccount() {
      var option = {
      method: 'POST',
      url: 'api/account/CreateAccount',
      data: {
        name: this.name,
        userId: this.user.sub
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
    // axios.post('http://localhost:8090/account/CreateAccount', {
    //     name: this.name,
    //     userId: this.user.sub,
    //   }).then((response) => {
    //     this.response = response.data;
    //   }).catch((error) => {
    //     console.error(error);
    //   });
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
})
</script>

<style scoped>

</style>