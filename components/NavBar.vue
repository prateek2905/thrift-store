<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a> -->

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item" style="font-weight: 900;">
        CU Thrift Store
      </div>
      <NuxtLink to="/" class="navbar-item">
        Home
      </NuxtLink>
      <div class="navbar-item">
      <input class="input2" v-model="query" type="text" placeholder="Search">
    </div>
      <!-- <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> -->
    </div>

    

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons" v-if="store.loggedIn==='0'">
          <NuxtLink to="/SignUp" class="button is-primary">
            <strong>Sign up</strong>
            </NuxtLink>
          
          <NuxtLink to="/login" class="button is-light">
            Log in
          </NuxtLink>
        </div>
      </div>
        <div class="buttons" v-if="store.loggedIn ==='1'">
          <NuxtLink to="/dashboard" class="button is-primary">
            <strong>Welcome {{ store.uid }}</strong>
          </NuxtLink>
        </div>
    </div>
  </div>
</nav>
</template>

<script>
import { useSearchQuery } from "~/stores/myStore"

export default {

  data({ $pinia }) {
    const store = useSearchQuery($pinia)
    console.log(store.loggedIn)
    console.log('navbar', store.loggedIn)
    return {
      store,
      query: '',  
    }
  },
  watch: {
    query(newValue) {
      this.store.alter(newValue)
    }
  }
}

</script>


<style>
  .input2 {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: #dedddd;
  color: #000000;
  font-size: 16px;
}
</style>
