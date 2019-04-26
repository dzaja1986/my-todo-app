<template>
  <div class="container mt-5">
    <form class="form-horizontal">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h2>Register New User</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 field-label-responsive">
          <label for="name">Name</label>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon" style="width: 2.6rem">
                <i class="fa fa-user"></i>
              </div>
              <input
                v-model="name"
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Milan Miloradovic"
                required
                autofocus
              >
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-control-feedback">
            <span class="text-danger align-middle">
              <!-- Put name validation error messages here -->
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 field-label-responsive">
          <label for="email">E-Mail Address</label>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon" style="width: 2.6rem">
                <i class="fa fa-at"></i>
              </div>
              <input
                v-model="email"
                type="text"
                name="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
                required
                autofocus
              >
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-control-feedback">
            <span class="text-danger align-middle">
              <!-- Put e-mail validation error messages here -->
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 field-label-responsive">
          <label for="password">Password</label>
        </div>
        <div class="col-md-6">
          <div class="form-group has-danger">
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon" style="width: 2.6rem">
                <i class="fa fa-key"></i>
              </div>
              <input
                v-model="password"
                type="password"
                name="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 field-label-responsive">
          <label for="password">Confirm Password</label>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon" style="width: 2.6rem">
                <i class="fa fa-repeat"></i>
              </div>
              <input
              v-model="password1"
                type="password"
                name="password-confirmation"
                class="form-control"
                id="password1"
                placeholder="Confirm Password"
                required
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <button v-on:click="saveRegister" type="submit" class="btn btn-primary">
            <i class="fa fa-user-plus"></i> Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

export default {
  name: "SignIn",
  data() {
    return {
      users: [{ name: "" }, { email: "" }, { password: "" }, { password1: "" }]
    };
  },
  methods: {
      setUsersToLocalStorage(users) {
      window.localStorage.setItem("users", JSON.stringify(users));
    },
    saveRegister(event) {
         event.preventDefault();

        this.users.push({
        name : this.name,
        email : this.email,
        password : this.password,
        password1 : this.password1
      });
      this.setUsersToLocalStorage(this.users);

        this.users.name = "",
        this.users.email = "",
        this.users.password = "",
        this.users.password1 = "";
    },
    
  }
};
</script>

<style scope>
@media (min-width: 768px) {
  .field-label-responsive {
    padding-top: 0.5rem;
    text-align: right;
  }
}
</style>
