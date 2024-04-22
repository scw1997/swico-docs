export default [
    {
        text:'概述',
        link:'/introduce'
    },
    {
        text:'快速上手',
        link:'/start'
    },
    {
        text:'模板结构',
        link: '/template',
        collapsible:true,
        children:[
            {
                text:'husky/commitlint',
                link:'#husky-commitlint'
            },
            {
                text:'config',
                link:'#config'
            },
            {
                text:'dist',
                link:'#dist'
            },
            {
                text:'public',
                link:'#public'
            },
            {
                text:'layout',
                link:'#layout'
            },
            {
                text:'pages',
                link:'#pages'
            },
            {
                text:'typings',
                link:'#typings'
            },
            {
                text:'index.ejs',
                link:'#index-ejs'
            },
            {
                text:'global.ts',
                link:'#global-ts'
            },
            {
                text:'global.less',
                link:'#global-less'
            },
            {
                text:'loading',
                link:'#loading'
            },



        ]
    },
    {
        text:'路由',
        link:'/router',
        collapsible: true,
        children:[
            {
                text:'基本配置',
                link:'#基本配置',
                children:[
                    {
                        text:'type',
                        link:'#type'
                    },
                    {
                        text:'base',
                        link:'#base'
                    },
                    {
                        text:'routes',
                        link:'#routes'
                    }]
            },

            {
                text:'路由跳转',
                link:'#路由跳转'
            },
            {
                text:'Link组件',
                link:'#link组件'
            },
            {
                text:'路由参数',
                link:'#路由参数'
            },
        ]
    },
    {
        text: '样式',
        link: '/style',
    },
    {
        text: 'Git Hooks',
        link: '/git-hooks',
    },
    {
        text: '环境变量',
        link: '/env',
    },

    {
        text:'API',
        children:[
            {
                text: 'Swico配置',
                collapsible:true,
                link: '/swico-config',
                children:[
                    {
                        text:'alias',
                        link:'#alias'
                    },
                    {
                        text:'console',
                        link:'#console'
                    },
                    {
                        text:'copy',
                        link:'#copy'
                    },
                    {
                        text:'define',
                        link:'#define'
                    },
                    {
                        text:'devtool',
                        link:'#devtool'
                    },
                    {
                        text:'npmType',
                        link:'#npmtype'
                    },

                    {
                        text:'plugins',
                        link:'#plugins'
                    },
                    {
                        text:'proxy',
                        link:'#proxy'
                    },
                    {
                        text:'publicPath',
                        link:'#publicpath'
                    }
                ]
            },
            {
                text: 'Global配置',
                link: '/swico-global',

            },
            {
                text:'history',
                link:'/history',

            },

            {
                text: 'Hooks',
                link: '/hooks',
            },
            {
                text: 'Link组件',
                link: '/link',

            },
            {
                text: '脚手架',
                link: '/cli',

            },



        ]
    },
    {
        text:'常见问题',
        link:'/faq'
    },
    {
        text:'更新日志',
        link:'/log'
    },
]
