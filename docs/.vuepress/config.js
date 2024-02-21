import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'SECYWO',
  description: '简易，高效，实用的前端开发框架',

  theme: defaultTheme({
    // logo:'/favicon.ico',
    lastUpdatedText:'上次更新',
    contributors:false,
    navbar: [
        '/',
      {
        text:'指南',
        children:[
          {
            text:'概述',
            link:'/introduce'
          },
          {
            text:'快速上手',
            link:'/start'
          },
          {
            text:'API',
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
    sidebar:[
      {
        text:'概述',
        link:'/introduce'
      },
      {
        text:'快速上手',
        link:'/start'
      },
      {
        text:'API',
        children:[
          {
            text:'配置',
            link:'/config',
          },
          {
            text:'命令行',
            link:'/command',
          },

        ]
      }
    ]
  }),

  bundler: webpackBundler(),
})
