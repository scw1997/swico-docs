import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
    enhance({ router }) {
        router.beforeEach((to,from,next) => {
            const {hash,path} = to
            if(hash==='#alias' && path!=='/config.html'){
                next('/config.html#alias')
            }else{
                next()
            }
            console.log('before navigation',to)
        })

        // router.afterEach((to) => {
        //     console.log('after navigation')
        // })
    },
    setup() {},
    rootComponents: [],
})
