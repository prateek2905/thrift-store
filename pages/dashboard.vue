<template>
    <div class="account">
        

        <div class="account-info-container">
            
                <h1>Account Info</h1>
                <p>Username: </p>
                <p>Email: </p>
                <p>Phone: </p>
                <p>Location: </p>
                <p>Items for Sale: </p>
				<NuxtLink to="/CreateItem"><button class="button1">New Item</button></NuxtLink>
        </div>
    </div>
</template>

<script>

	export default {

		data() {
			return {
				formValues: {
					name: '',
					category: '',
					condition: '',
					size: '',
					quanity: 0,
					price: 0,
				}
			}
		},

		methods: {
			handleSubmit(event) {
				event.preventDefault()
				console.log(event)
				console.log(this.formValues)
			}
		}
	}

</script>

<style>
        .account{
			font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-content: center;
		}
        .account-info-container{
            display: flex;
			flex-direction: column;
			align-items: center;
			height: 100vh;
            width: 60%;
            
        }
		.item-form {
			background-color: #fff;
			padding: 20px;
			border-radius: 5px;
			box-shadow: 0px 0px 10px #888;
			margin: 0 auto;
			max-width: 500px;
		}

		#item_price, #item_name, #item_quantity, select, textarea {
			width: 100%;
			padding: 12px;
			border: 1px solid #ccc;
			border-radius: 4px;
			resize: vertical;
		}

		label {
			font-weight: bold;
			display: block;
			margin-bottom: 10px;
		}

		.create-item {
			background-color: #4CAF50;
			color: #fff;
			padding: 12px 20px;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			float: right;
		}

		.create-item:hover {
			background-color: #333
		}

		.dashboard-container {
			display: flex;
			flex-direction: column;
			/* justify-content: center; */
			align-items: center;
			height: 100vh;
            width: 40%;
		}
        #item_photo{
            margin-bottom: 3%;
        }
</style>
