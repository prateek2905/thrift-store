import { useSearchQuery } from "~/stores/myStore"


export default defineNuxtRouteMiddleware((to, from) => {
    if(to.fullPath==='/dashboard' || to.fullPath==='/CreateItem') {
        const store = useSearchQuery()
        if(store.loggedIn==='0')
            return navigateTo('/login')
    }
})