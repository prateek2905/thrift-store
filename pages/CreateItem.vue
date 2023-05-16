<template>

        <div class="dashboard-container">
            <h1>Create an Item to Sell</h1>
			<form @submit="handleSubmit" action="#" method="post" class="item-form">
			<label for="item_name">Item Name</label>
			<input type="text" id="item_name" name="item_name" placeholder="Enter item name" v-model="formValues.prodName">

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
			<select id="item_size" name="item_size" v-model="formValues.prodSize">
				<option value="XS">XS</option>
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
			</select>

			<label for="item_quanity">Quantity</label>
			<input type="text" id="item_quantity" name="item_quantity" placeholder="Enter quantity" v-model="formValues.quantity">

			<label for="item_price">Price</label>
			<input type="number" id="item_price" name="item_price" placeholder="Enter item price" v-model="formValues.prodPrice">

			<label for="item_photo">Photo</label>
			<input type="file" id="item_photo" name="item_photo">

			<button type="submit" class="create-item">Create Item</button>
		</form>
	    </div>
</template>

<script>
import axios from "axios";
import { useSearchQuery } from "~/stores/myStore";

export default {

data($pinia) {
	const store = useSearchQuery()
    return {
		store, 
        formValues: {
            prodName: '',
            category: '',
            condition: '',
            prodSize: '',
            quantity: 0,
            prodPrice: 0,
			user: '',
        }
    }
},

methods: {
    handleSubmit(event) {
        event.preventDefault();
		this.formValues.user = this.store.user
        console.log(this.formValues);
		if (this.formValues.prodName && this.formValues.category && this.formValues.condition && this.formValues.prodSize && this.formValues.quantity && this.formValues.prodPrice) {
			axios.post("http://localhost:5000/createProd", this.formValues)
			.then(({data}) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			})
		} else {
			console.log("please provide all the values");
		}
    }
}
}
</script>

<style>
    .dashboard-container {
			display: flex;
            background-color: #f2f2f2;
			flex-direction: column;
			align-items: center;
			height: 100vh;
            width: 100%;
            margin: auto;
		}
        #item_photo{
            margin-bottom: 3%;
        }
</style>