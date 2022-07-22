import { defineUserConfig } from 'vuepress'
import { sidebar, navbar, head } from './configs'
// import { defaultTheme } from 'vuepress'
import { localTheme } from './theme'
export default defineUserConfig({
  base: '/notes/',
  lang: 'zh-CN',
  title: '',
  description: '',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  theme: localTheme({
    logo: '/logo.png',
    sidebar,
    navbar,
  })
})