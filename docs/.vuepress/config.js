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
          },
        ]
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
        text:'v1.1.0',
        link:'/'
      }
    ],
    sidebar,
  }),

  bundler: webpackBundler(),
})
