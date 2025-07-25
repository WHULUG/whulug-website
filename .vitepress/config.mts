import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "WHULUG",
  description: "武汉大学珞珈极客协会官方网站",
  base: '/whulug-website/', 
  head: [
    [
      'link', 
      { 
        rel: 'icon', 
        href: '/WHULUG.png'
      }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/WHULUG.png',

    nav: [
      { text: '主页', link: '/' },
      {
        text: '关于', // 顶级菜单名
        items: [
          { text: '关于我们', link: '/about/about-us' }, 
          { text: '《珞珈极客之道》', link: '/about/THE_WHULUG_WAY' }, 
          { text: '成员', link: '/about/members' },
        ]
      },
      { text: '文章', link: '/posts/' },
      { text: '加入我们', link: '/join-us' },
    ],

    footer: {
      copyright: 'Copyright © 2025 WHULUG'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WHULUG' }
    ]
  }
})
