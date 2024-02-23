import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'
import sidebar from "./sidebar.js";

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'SECYWO',
  description: '简易，高效，实用的前端开发框架',
  base:'/secywo-docs/',
  head:   [['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/secywo-docs/favicon.co' }]],
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
            text:'概述',
            link:'/introduce',
            rel:'noopener'
          },
          {
            text:'快速上手',
            link:'/start'
          },
          {
            text:'模板结构',
            link:'/template'
          },
          {
            text:'配置',
            link:'/config'
          }
        ]
      },
      {
        text:'Git',
        children:[
          {
            text:'Secywo',
            link:'https://gitee.com/fanlaBoy/secywo.git'
          },
          {
            text:'Secywo Vue模板',
            link:'https://gitee.com/fanlaBoy/secywo-template-vue'
          },
          {
            text:'Secywo React模板',
            link:'https://gitee.com/fanlaBoy/secywo-template-react'
          }
        ]
      },
      {
        text:'v1.0',
        link:'/'
      }
    ],
    sidebar,
  }),

  bundler: webpackBundler(),
})
