// import {
//     Sidebar4EN,
//     Sidebar4ZH,
//     NavItems4EN,
//     NavItems4ZH
//   } from './config/index'

module.exports = {
    title: 'Hooho',
    description: 'Just playing around',
    theme: '@vuepress/theme-default',
    themeConfig: {
        displayAllHeaders: false,
        activeHeaderLinks: false,
        nav: [
            { text: 'JavaScript', link: '/javascript/' },
            { text: 'Vue', link: '/vue/' },
            { text: 'GitHub', link: 'https://github.com/GwanHooPark' , target: '_blank'}
          ],
      
      sidebar: {
        '/javascript/' : [
            {
                title: 'JavaScript',   // required
                path: '/javascript/',      // optional, link of the title, which should be an absolute path and must exist
                initialOpenGroupIndex: -1,
                collapsable: false,
                children: [
                    ['/javascript/', 'introduction'],
                    ['/javascript/bom','BOM'],
                    '/javascript/dom'
                ]
            },
           
        ],
        '/vue/' : [
            {
                title: 'Vue.js',   // required
                path: '/vue/',      // optional, link of the title, which should be an absolute path and must exist
                initialOpenGroupIndex: -1,
                children: [
                    ['/vue/', 'introduction'],
                    ['/vue/test','테스트'],
                    '/vue/test-a'
                ]
            },
            
        ]
   
     }
  },
  plugins: ['@vuepress/back-to-top']
}