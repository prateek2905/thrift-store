<template>
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
</template>

<script>
import NavBar from './NavBar.vue'
import ProductRow from './ProductRow.vue'
import ProductCard from './ProductCard.vue'
import { useSearchQuery } from "~/stores/myStore"

const RecentlyAdded = []
const DiscountPrice = []

let store

export default {

	name: 'App',

	beforeMount() {
		this.store = useSearchQuery()
		
		if(this.RecentlyAdded.length===0) {
			if(this.RecentlyAdded.length===0) {
				for(let i=0;i<this.store.products.length/2;i++) {
					this.RecentlyAdded.push(this.store.products[i])
					this.DiscountPrice.push(this.store.products[i+this.store.products.length/2])
				}
			}
		}
	},

	data() {

		return {
			RecentlyAdded,
			DiscountPrice,
			store: this.store
		};
	},

	components: {
		NavBar,
		ProductRow,
		ProductCard
	},
	methods: {
    filteredList(products) {
      return products.filter(p => {
        return p.name.toLowerCase().includes(this.store.query.toLowerCase())
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
	background-color: #dfcdb3;
	margin: 2rem;
    box-shadow: 2px 2px 11px 1px grey;
}

.RAHeading h1{
	font-size: xx-large;
	font-weight: bold;
	text-align: center;
	color: #da4339;
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
