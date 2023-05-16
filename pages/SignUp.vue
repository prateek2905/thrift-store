<template>
    <div class="page">
        <div class="signup">
            <h1>SignUp to our Thrift Store</h1>
            <form class="form" @submit="handleSubmit">
                <input class="input1" type="text" placeholder="UID" v-model="formValues.uid">
                <input class="input1" type="email" placeholder="Email" v-model="formValues.email">
                <div class="input1">Hosteller: <input type="checkbox" v-model="formValues.hosteller"></div>
                <input class="input1" type="password" placeholder="Password" v-model="formValues.password">
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
	export default {

		data() {
			return {
				formValues: {
					uid: '',
					email: '',
					hosteller: false,
					password: '',
				}
			}
		},

		methods: {
			handleSubmit(event) {
				event.preventDefault();
                if(this.formValues.uid && this.formValues.email && this.formValues.hosteller && this.formValues.password){
                    axios.post("http://localhost:5000/register", {...this.formValues})
                    .then(({data, status}) => {
                        console.log(data);
                        this.$router.push('/dashboard');
              })
              .catch(function (response) {
                const {status} = response;
                console.log(response);
                  if(status == 409){
                    console.log("duplicate user")
                  }else{
                    console.log(response);
                  }
              });
                }else{
                    console.log("please fill all the values");
                }
			}
		}
	}

</script>

<style>

    h1{
        color: #333;
        font-size: 30px;
        font-weight: bold;
    }
    
    .page{
      height: 732px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .signup{
      background-color: white;
      border-radius: 15px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      -ms-border-radius: 15px;
      -o-border-radius: 15px;
      margin: 100px auto;
      padding: 34px;
      width: 440px;
  background-color: #2a2b38;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  padding: 40px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  
      width: 30%;
    }
    .form{
        display: flex;
        flex-direction: column;   
    }

    .form button {
	  font-family: "Roboto", sans-serif;
	  text-transform: uppercase;
	  outline: 0;
	  background: #4CAF50;
	  width: 100%;
	  border: 0;
	  padding: 15px;
	  color: #FFFFFF;
	  font-size: 14px;
	  -webkit-transition: all 0.3 ease;
	  transition: all 0.3 ease;
	  cursor: pointer;
	  margin-top: 5%;
	}

	.form button:hover,.form button:active,.form button:focus {
	  background: #333;
	}
</style>
