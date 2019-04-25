<template>
  <!-- Default form register -->
  <form class= "col-sm-12 col-md-6 offset-md-3 mt-4">
    <p class="h4 text-center mb-4">Sign up</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">Your name</label>
    <input type="text" id="defaultFormRegisterNameEx" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormRegisterEmailEx" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterConfirmEx" class="grey-text">Your password</label>
    <input type="email" id="defaultFormRegisterConfirmEx" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Confirm your password</label>
    <input type="password" id="defaultFormRegisterPasswordEx" class="form-control"/>
    <div class="text-center mt-4">
      <button class="btn btn-primary" type="submit">Register</button>
    </div>
  </form>
  <!-- Default form register -->
</template>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'



export default {
     name: 'SignIn',

}
</script>
<style>

</style>
