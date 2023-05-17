import { defineStore } from "pinia";

export const useSearchQuery = defineStore('searchQuery', {

    state: () => {
        let uid,flag,user, email
        if(localStorage !== undefined) {
            uid = localStorage.getItem('uid')
            flag = localStorage.getItem('flag')
            user = localStorage.getItem('user')
            email = localStorage.getItem('email')
        }

        let x = ''
        let y = '0'
        let z = ''
        let e = ''

        if (uid)
            x = uid
        if(flag)
            y = flag
        if(user)
            z = user
        if(email)
            e = email

        return {
            query: ref(''),
            user: ref(z),
            uid: ref(x),
            email: ref(e),
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
