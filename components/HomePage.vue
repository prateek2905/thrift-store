<template>
	<body>
	<div class="grid-container">
	<br>
	<div class="RAHeading">
		<h1>Recently Added</h1>
	</div>

	<ProductRow :products="filteredList(RecentlyAdded)" />

	<div class="RAHeading">
		<h1>Top Deals</h1>
	</div>
	
	<ProductRow :products="filteredList(DiscountPrice)" />

	</div>
</body>
</template>

<script>
import NavBar from './NavBar.vue'
import ProductRow from './ProductRow.vue'
import ProductCard from './ProductCard.vue'
import { useSearchQuery } from "~/stores/myStore"
import axios from "axios";

const DiscountPrice = []

let store

export default {

	name: 'App',

	async created() {
		this.store = useSearchQuery()

		try {
			this.store.products = (await axios.get("http://localhost:5000/allProd")).data.products
		}
		catch(err) {
			console.log(err);	
		}
	},

	data() {
		return {
			store: this.store
		};
	},

	components: {
		NavBar,
		ProductRow,
		ProductCard
	},

	computed: {
		RecentlyAdded() {
			let l = []
			for(let i=0;i<this.store.products.length/2;i++) {
				l.push(this.store.products[i])
			}
			return l
		},
		DiscountPrice() {
			let l = []
			for(let i=0;i<this.store.products.length/2;i++) {
				l.push(this.store.products[i+Math.floor(this.store.products.length/2)])
			}
			return l
		},
	},

	methods: {
    filteredList(products) {
      	return products.filter(p => {
		  if(p)
      	  return p.prodName.toLowerCase().includes(this.store.query.toLowerCase())
      	})
    },

  },
};
</script>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

.RAHeading {
	border-radius: 20px;
	background-color: #252a33;
	margin: 2rem;
    box-shadow: 2px 2px 11px 1px grey;
}

.RAHeading h1{
	font-size: xx-large;
	font-weight: bold;
	text-align: center;
	color: #ffeba7;
	padding: 0.5rem;
}
.input2 {
  display: flex;
  align-items: center;
  margin-top: 6px;
  width: 20%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: #d2cdcd;
  color: #333;
  font-size: 16px;
}
</style>
