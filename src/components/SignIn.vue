<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  v-model.trim="user.firstName"
                  id="firstName"
                  name="firstName"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
                 
                >
                <div
                  v-if="submitted && !$v.user.firstName.required"
                  class="invalid-feedback"
                >First Name is required</div>
                <span
                  v-if="!$v.user.firstName.minLength"
                  class="invalid-feedback"
                >Name must be at least 4 characters</span>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  v-model.trim="user.lastName"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
                >
                <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback"></div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model.trim="user.email"
                  id="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                >
                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                  <span v-if="!$v.user.email.required">Email is required</span>
                  <span v-if="!$v.user.email.email">Email is invalid</span>
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  v-model.trim="user.password"
                  id="password"
                  name="password"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.password.$error }"
                >
                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                  <span v-if="!$v.user.password.required">Password is required</span>
                  <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                </div>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  v-model.trim="user.confirmPassword"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
                >
                <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                  <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                  <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
       /*filters: {
  
  	trim() {
    	return user.trim()
        }
  
  },*/
      submitted: false
    };
  },
  validations: {
    user: {
      firstName: { required, minLength: minLength(4) },
      lastName: {},
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
     /*supertrim(user) {
            this.$el.user = user.replace(/\s/g, '');
    },*/
    handleSubmit(event) {
      event.preventDefault();
      this.setUserToLocalStorage(this.user);

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      

      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
        
      }

      alert("SUCCESS!! :-");
      this.$router.push("/todo-list");
    },
    setUserToLocalStorage(user) {
      window.localStorage.setItem("user", JSON.stringify(user));
    },
       
   
  }
};
</script>