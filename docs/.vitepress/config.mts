import { defineConfig } from 'vitepress'
import sidebar from "./sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SWICO",
  base:'/swico-docs/',
  lang:'zh-cn',
  description: '简易，高效，实用的前端开发框架',
  head:   [['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/swico-docs/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local',
      options: {

            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }

      }
    },
    outline:{
      label:'页面导航',
      level:[2,3]
    },
    docFooter:{
      prev:'上一页',
      next:'下一页'
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2024-present'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    nav: [
      {
        text:'首页',
        link:'/',
      },
      {
        text:'指南',
        items:[
          {
            text:'快速上手',
            link:'/start'
          },
          {
            text:'模板结构',
            link:'/template'
          },
          {
            text:'路由',
            link:'/router'
          },
          {
            text:'样式',
            link:'/style'
          },
          {
            text:'Git Hooks',
            link:'/git-hooks'
          },
          {
            text:'环境变量',
            link:'/env'
          },
        ]
      },
      {
        text:'API',
        items:[
          {
            text: 'Swico配置',
            link: '/swico-config',
          },
          {
            text: 'Global配置',
            link: '/swico-global',
          },
          {
            text:'history',
            link:'/history'
          },
          {
            text: 'Hooks',
            link: '/hooks',
          },
          {
            text: 'Link',
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
        link:'/log',
      },

      {
        text:'v2.0.0',
        link:null
      }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/scw1997/swico.git' }
    ]
  }
})
