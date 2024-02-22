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
        text:'API',
        // link:'/api',
        children:[
            {
                text: '配置',
                link: '/config',
                // collapsible:true,
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
            }

        ]
    }
]
