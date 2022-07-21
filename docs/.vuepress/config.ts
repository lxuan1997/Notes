import { defineUserConfig } from 'vuepress'
import { sidebar, navbar, head } from './configs'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/notes/',
  lang: 'zh-CN',
  title: 'Hello 🖐！',
  description: '',
  head,
  theme: defaultTheme({
    sidebar,
    navbar
  })
})