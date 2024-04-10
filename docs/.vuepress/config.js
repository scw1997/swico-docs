import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'
import sidebar from "./sidebar.js";

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'SWICO',
  description: '简易，高效，实用的前端开发框架',
  base:'/swico-docs/',
  head:   [['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/swico-docs/favicon.ico' }]],
  theme: defaultTheme({
    // logo:'/favicon.ico',
    lastUpdatedText:'上次更新',
    contributors:false,
    toggleColorMode:'切换主题',
    navbar: [
        '/',
      {
        text:'指南',
        children:[
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
        children:[
          {
            text: 'Swico配置',
            link: '/swico-config',
          },
          {
            text:'Swico变量',
            link:'/swico-var'
          },
          {
            text: 'Global配置',
            link: '/swico-global',

          },
          {
            text: 'Link组件',
            link: '/link',

          },
          {
            text: '脚手架',
            link: '/cli',
          }


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
        text:'Git',
        children:[
          {
            text:'Swico',
            link:'https://gitee.com/fanlaBoy/swico.git'
          },
          {
            text:'Swico Vue模板',
            link:'https://gitee.com/fanlaBoy/swico-template-vue'
          },
          {
            text:'Swico React模板',
            link:'https://gitee.com/fanlaBoy/swico-template-react'
          }
        ]
      },
      {
        text:'v1.0.0',
        link:'/'
      }
    ],
    sidebar,
  }),

  bundler: webpackBundler(),
})
