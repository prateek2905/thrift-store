import { defineStore } from "pinia";
import axios from "axios";

export const useSearchQuery = defineStore('searchQuery', () => {
    const query = ref('')
    function alter(newQuery) {
        query.value = newQuery
        return 
    }
	axios.get("http://localhost:5000/allProd")
	.then(({data : { products}}) => {
		console.log(products);
	})
	.catch((error) => {
		console.log(error);
	})
	const products = ref([
		{
			name: 'Shirt 3',
			img: "https://picsum.photos/500/300",
			size: 'M',
			price: '800'
		},
		{
			name: 'Shirt 2',
			img: "https://picsum.photos/500/300",
			size: 'L',
			price: '200'
		},
		{
			name: 'Shirt 3',
			img: "https://picsum.photos/500/300",
			size: 'M',
			price: '800'
		},
		{
			name: 'Pant 1',
			img: "https://picsum.photos/500/300",
			size: 'S',
			price: '150'
		},
		{
			name: 'skirt 1',
			img: "https://picsum.photos/500/300",
			size: 'XS',
			price: '69'
		},
		{
			name: 'unnecessarily large garment name',
			img: "https://picsum.photos/500/300",
			size: 'L',
			price: '400'
		}
	])



    return {query, alter, products}
})
