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
				event.preventDefault()
				// console.log(event)
				// console.log(this.formValues)
                if(this.uid && this.email && this.hosteller && this.password){
                    axios.post("http://localhost:5000/register", this.formValues)
                    .then(function (response) {
                        console.log(response);
              })
              .catch(function ({ response : { status }}) {
                  if(status == 409){
                    outputDiv.innerText = "This user already exists please try again with a new email ID";
                  }
              });
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
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
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
