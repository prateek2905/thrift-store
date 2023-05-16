import { useSearchQuery } from "~/stores/myStore"


export default defineNuxtRouteMiddleware((to, from) => {
    if(!process.server) {
        const store = useSearchQuery()
        console.log('auth', store.loggedIn)
        if((to.fullPath==='/dashboard' || to.fullPath==='/createItem') && store.loggedIn === '0')
            return navigateTo('/login')
        else if((to.fullPath==='/signUp' || to.fullPath==='/login') && store.loggedIn === '1')
            return navigateTo('/dashboard')
    }
})