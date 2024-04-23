import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
    enhance({ router }) {
        //控制部分导航路由跳转逻辑
        router.beforeEach((to,from,next) => {
            const {hash,path} = to
            if(['#alias','#console','#copy','#define','#devtool','#npmtype','#plugins','#proxy','#publicpath'].includes(hash) && path!=='/swico-config.html'){
                next(`/swico-config.html${hash}`)
            }else if(['#swico,#husky-commitlint','#config','#dist','#public','#layout','#global-ts','#global-less','#pages','#typings','#loading','#index-ejs'].includes(hash) && path!=='/template.html'){
                next(`/template.html${hash}`)
            }else if(['#基本配置','#type','#base','#routes','#路由跳转','#link组件','#路由参数'].includes(hash) && path!=='/router.html'){
                next(`/router.html${hash}`)
            } else{
                next()
            }

        })

    },
    setup() {},
    rootComponents: [],
})
