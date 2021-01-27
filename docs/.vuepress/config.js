module.exports = {
    title: "Shine 的手册",
    description: "来自Shine的技术手册",
    base: '/guide/',
    head: [
        ['link', { href: 'https://baidu.com' }]
      ],
    dest: 'guide',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'JavaScript', link: '/JS/' },
          { text: 'Vue3.0', link: 'https://vue3js.cn/' },
          { text: 'Github', link: 'https://github.com/VeryHandSomeBoy' },
        ],
        sidebarDepth: 2,
        sidebar: [
          {
            title: 'Introduction',
            collapsable: true,
            children: ['/learning/'],
          },
          {
            title: 'JavaScript',
            collapsable: true,
            children: ['/JS/','/JS/data/', '/JS/logistic/',  '/JS/function/',  '/JS/array/', '/JS/object/', '/JS/module/', '/JS/proxy/', '/JS/nodejs/']
          },
          {
            title: 'Project',
            collapsable: true,
            children: ['/project/'],
          },
        ],
      },
}