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
    },
    {
        text:'路由',
        link:'/router',
        collapsed: true,
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
        text: '变量',
        link: '/char',
    },
    {
        text: 'Git Hooks',
        link: '/git-hooks',
    },

    {
        text:'API',
        items:[
            {
                text: '配置项',
                link: '/swico-config',

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
