import { defineStore } from "pinia";

export const useSearchQuery = defineStore('searchQuery', {

    state: () => {
        let uid,flag,user
        if(localStorage !== undefined) {
            uid = localStorage.getItem('uid')
            flag = localStorage.getItem('flag')
            user = localStorage.getItem('user')
        }

        let x = ''
        let y = '0'
        let z = ''

        if (uid)
            x = uid
        if(flag)
            y = flag
        if(user)
            z = user

        return {
            query: ref(''),
            user: ref(z),
            uid: ref(x),
            products: ref([]),
            loggedIn: ref(y)
        }
    },
    actions: {
        alter(newQuery) {
            this.query = newQuery
            return 
        },
    }

})
