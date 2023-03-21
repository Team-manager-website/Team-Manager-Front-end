<template>
  <center>
    <div class="app">
      <form action="POST">
          <input type="email" class="InputField" placeholder="Email"/><br/><br/>
          <input type="password" class="InputField" placeholder="Wachtwoord"/><br/>
          <button type="submit" class="SubmitButton">Login</button>
          <router-link type="submit" class="SubmitButton" to="/createaccount">CreateAccount</router-link>       
      </Form>
    </div>
  </center>
</template>

<script>

export default({
  methods: {

}
})
</script>

<style scoped>

</style>