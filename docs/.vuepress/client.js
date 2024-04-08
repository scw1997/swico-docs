import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
    enhance({ router }) {
        //控制部分导航路由跳转逻辑
        router.beforeEach((to,from,next) => {
            const {hash,path} = to
            if(['#alias','#console','#copy','#define','#devtool','#npmtype','#plugins','#proxy','#publicpath'].includes(hash) && path!=='/config.html'){
                next(`/config.html${hash}`)
            }else if(['#husky','#config','#dist','#public','#layout','#global-ts','#global-less','#pages','#typings','#loading','#index-ejs','#commitlint-config-js'].includes(hash) && path!=='/template.html'){
                next(`/template.html${hash}`)
            }else if(['#基本配置','#type','#base','#routes','#路由跳转','Link组件','#路由参数'].includes(hash) && path!=='/router.html'){
                next(`/router.html${hash}`)
            } else{
                next()
            }

        })

    },
    setup() {},
    rootComponents: [],
})
