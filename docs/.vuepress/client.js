import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
    enhance({ router }) {
        //控制部分导航路由跳转逻辑
        router.beforeEach((to,from,next) => {
            const {hash,path} = to
            if(['#alias','#console','#copy','#define','#devtool','#plugins','#proxy','#publicpath'].includes(hash) && path!=='/config.html'){
                next(`/config.html${hash}`)
            }else if(['#husky','#config','#dist','#public','#views','#pages','#router','#typings','#index-ejs','#commitlint-config-js'].includes(hash) && path!=='/template.html'){
                next(`/template.html${hash}`)
            }else{
                next()
            }

        })

    },
    setup() {},
    rootComponents: [],
})