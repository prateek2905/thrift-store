<template>
    <body>
        <div class="login-container">
      <h1>Login</h1>
      <form @submit="handleSubmit">
        <input class="input1" type="uid" placeholder="UID" v-model="uid">
        <input class="input1" type="password" placeholder="Password" v-model="password">
        <button type="submit" class="button1">Login</button>
      </form>
      <h1 style="color:red" v-show="wrongCred">Incorrect Credentials</h1>
    </div>  
    </body>
</template>

<script>
import axios from "axios";
import { useSearchQuery } from "~/stores/myStore"


export default {


    data({$pinia}) {
      const store = useSearchQuery($pinia)
      return {
        store,
        uid: "",
        password: "",
        wrongCred: false
      }
    },

    methods: {

      handleSubmit(event) {
        event.preventDefault()
		console.log(this.uid, this.password)
        if(this.uid && this.password){
          axios.post("http://localhost:5000/login", {uid: this.uid, password: this.password})
          .then(({data}) => {
            console.log(data)
            this.handleAuth(data)
          })
          .catch((error) => {
            console.log(error);
            this.wrongCred = true
          })
        }
        else{
          console.log('enter username and pwd')
        }      
      },

      handleAuth(data) {
          this.store.loggedIn = '1'
          this.store.uid = data.uid
          this.store.user = data._id

          if(localStorage!==undefined) {
            localStorage.setItem('flag', '1')
            localStorage.setItem('uid', data.uid)
            localStorage.setItem('user', data._id)
          }

          navigateTo('/dashboard')

      }
    }
  }
</script>

<style>
    body {
      margin: 0;
      height: 100%;
      min-height: 633px;
      padding: 0;
      font-family: sans-serif;
    }

.login-container {
  width: 440px;
  height: 380px;
  margin: 100px auto;
  background-color: #2a2b38;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  padding: 40px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  text-align: center;
}

h1 {
  color: #ffeba7;
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
