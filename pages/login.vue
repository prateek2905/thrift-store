<template>
    <body>
        <div class="login-container">
      <h1>Login</h1>
      <form @submit="handleSubmit">
        <input class="input1" type="uid" placeholder="UID" v-model="uid">
        <input class="input1" type="password" placeholder="Password" v-model="password">
        <button type="submit" class="button1">Login</button>
      </form>
    </div>  
    </body>
</template>

<script>
  export default {

    data() {
      return {
        uid: "",
        password: "",
      }
    },

    methods: {
      handleSubmit(event) {
        event.preventDefault()
        if(this.uid==='' && this.password==='')
          console.log('enter username and pwd')
        else
          console.log('submitted')
      }
    }
  }
</script>

<style>
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }

.login-container {
  width: 400px;
  margin: 100px auto;
  background: #fff;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

.input1 {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 20px;
  background: #f5f5f5;
  color: #333;
  font-size: 16px;
}

.button1 {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  
}

button:hover {
  background: #0069d9;
}

</style>