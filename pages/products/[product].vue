<template>
	<div>
		<div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
  <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-1xl sm:p-20">
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="border-b sm:border-b-0 sm:border-r p-8 relative flex justify-center">
		<img :src="product.img"> 
      </div>
      <div class="p-8 flex flex-col justify-center items-center">
        <h1 class="font-bold text-lg">{{ productName }}</h1>
        <h1 class="font-bold text-lg">{{product.size}}</h1>
        <h1 class="font-bold text-lg">{{product.price}}</h1>
      </div>
    </div>
  </div>
</div>

	</div>

</template>

<script>
import { useSearchQuery } from '~~/stores/myStore'


	let route = ""
	let product
	export default {

		beforeMount() {
			route = useRoute()
			this.productName = route.params.product
			const store = useSearchQuery()
			this.product = store.products.filter((prod) => prod.name === this.productName)[0]
		},

		data() {
			return {
				productName: "",
				product
			}
		},

		methods: {

		}
	}

</script>

<style scoped>
img {
	min-width: 200px;
	border-radius: 23px;
	height: auto;
	padding: 4%;
	width: auto\9;
	/* ie8 */
}
</style>
