<template>
  <center>
    <div class="app">
      <form action="POST">
        <input type="text" v-model="name" class="InputField" placeholder="Name"/><br/><br/>
        <button @click="makeAccount" type="submit" class="SubmitButton">Create Account</button>
      </Form>
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
      user: this.$auth0.user
    };
  },
  methods: {
    makeAccount() {
      axios.post('http://localhost:8090/account/CreateAccount', {
        name: this.name,
        userId: this.user.sub,
      }).then((response) => {
        this.response = response.data;
      }).catch((error) => {
        console.error(error);
      });
    }
  }
})
</script>

<style scoped>

</style>