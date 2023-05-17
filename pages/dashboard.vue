<template>
	<div class="container">
		<div class="account">
			<div class="account-info-container">
					<h1>Account Info</h1>
					<p>UID: {{store.uid}}</p>
					<p>Email: {{store.email}}</p>
					<p>Location: CU</p>
					<p>Items for Sale: </p>
					<NuxtLink to="/CreateItem"><button class="button1">New Item</button></NuxtLink>
			</div>
		</div>
		<ProductRow :products="userProducts" v-if="userProducts.length>0" />
		<h1 v-if="userProducts.length===0" >Add Some Products</h1>
	</div>
</template>

<script>
import { useSearchQuery } from '~/stores/myStore'
import axios from "axios"
import ProductRow from '~/components/ProductRow.vue'

	let userProducts = []
	let store

	export default {
    async created() {
        this.store = useSearchQuery();
        this.store.products = (await axios.get("http://localhost:5000/allProd")).data.products;
        this.userProducts = this.store.products.filter((p) => {
            return p.user === this.store.user;
        });
        console.log(this.userProducts);
    },
    data() {
        return {
            formValues: {
                name: "",
                category: "",
                condition: "",
                size: "",
                quanity: 0,
                price: 0,
            },
			store,
			userProducts
        };
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            console.log(event);
            console.log(this.formValues);
        }
    },
    components: { ProductRow }
}

</script>

<style>
        .account{
			font-family: Arial, sans-serif;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-content: center;
		}
        .account-info-container{
            display: flex;
			flex-direction: column;
			align-items: center;
            width: 60%;
            color:#ffeba7;
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
