import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'SECYWO',
  description: '实用的前端开发框架',

  theme: defaultTheme({

    navbar: ['/', '/get-started'],
  }),

  bundler: webpackBundler(),
})
