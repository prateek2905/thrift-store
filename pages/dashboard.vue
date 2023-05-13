<template>
    <div class="account">
        <div class="dashboard-container">
            <h1>Create an Item to Sell</h1>
		<form @submit="handleSubmit" action="#" method="post" class="item-form">
			<label for="item_name">Item Name</label>
			<input type="text" id="item_name" name="item_name" placeholder="Enter item name" v-model="formValues.name">

			<label for="item_category">Category</label>
			<select id="item_category" name="item_category" v-model="formValues.category">
				<option value="clothing">Clothing</option>
				<option value="accessories">Accessories</option>
			</select>

			<label for="item_condition">Condition</label>
			<select id="item_condition" name="item_condition" v-model="formValues.condition">
				<option value="new">New</option>
				<option value="like new">Like New</option>
				<option value="good">Good</option>
				<option value="fair">Fair</option>
				<option value="poor">Poor</option>
			</select>

			<label for="item_size">Size</label>
			<select id="item_size" name="item_size" v-model="formValues.size">
				<option value="XS">XS</option>
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
			</select>

			<label for="item_quanity">Quantity</label>
			<input type="text" id="item_quantity" name="item_quantity" placeholder="Enter quantity" v-model="formValues.quanity">

			<label for="item_price">Price</label>
			<input type="number" id="item_price" name="item_price" placeholder="Enter item price" v-model="formValues.price">

			<label for="item_photo">Photo</label>
			<input type="file" id="item_photo" name="item_photo">

			<button type="submit" class="create-item">Create Item</button>
		</form>
	    </div>

        <div class="account-info-container">
            
                <h1>Account Info</h1>
                <p>Username: </p>
                <p>Email: </p>
                <p>Phone: </p>
                <p>Location: </p>
                <p>Items for Sale: </p>
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
