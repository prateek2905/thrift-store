<template>
	<div class="row">
		<div v-for="product in products" :key="product.name" class="container">
			<NuxtLink :to="`products/${product.prodName}`">
				<ProductCard>
					<template v-slot:img>
						<img src="https://picsum.photos/500/300" alt="">
					</template>
					<template v-slot:info-left>
						<span>{{ product.prodName }}</span><span>{{ product.prodSize }}</span>
					</template>
					<template v-slot:info-right>
						<span>{{ product.prodPrice }}</span>
					</template>
				</ProductCard>
			</NuxtLink>
		</div>
	</div>
</template>

<script>
    import ProductCard from './ProductCard.vue';

    export default {
        props: ['products'],
    }

    components: {
        ProductCard
    }

</script>

<style scoped>

.row {
	display: flex;
    flex-wrap: nowrap;
	gap: 100px;
	padding: 2rem;
	justify-content: space-between;
	overflow-x: auto;
	overflow-y: hidden;
}

.container {
	display: flex;
	gap: 6.7rem;
}

.container:not(:last-child):after {
	content: "";
	border-right: solid 5px #8e8d8a;
	border-radius: 100%;
	height: 79%;
	align-self: center;
	box-shadow: 1px 1px 10px 3px lightgrey;
}

img {
	min-width: 200px;
	border-radius: 23px;
	height: auto;
	padding: 4%;
	width: auto\9;
	/* ie8 */
}

</style>
