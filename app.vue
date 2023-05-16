<template>
  <div>
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style lang = "scss">
  @import './node_modules/bulma/bulma.sass';

  html {
	background: rgb(230,223,199);
	background: linear-gradient(90deg, rgba(230,223,199,1) 0%, rgba(242,239,230,1) 50%, rgba(230,223,199,1) 100%);
      background-image: url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
      background-repeat: no-repeat;
      background-size: cover;
  background-position: center center;
  }
</style>
