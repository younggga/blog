module.exports = {
    plugins: [ '@vuepress/blog', '@vuepress/back-to-top' ],
    permalink: "/:year/:month/:day/:slug",
    title: 'zzz\'s blog',
    port: 2333,
    description: 'day day down!',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        [ 'link', { rel: 'icon', href: '/images/logo.ico' } ],
        [ 'link', { rel: 'manifest', href: '/images/logo.ico' } ],
        [ 'link', { rel: 'apple-touch-icon', href: '/images/logo.ico' } ],
        [ 'meta', { 'http-quiv': 'pragma', cotent: 'no-cache' } ],
        [ 'meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' } ],
        [ 'meta', { 'http-quiv': 'expires', cotent: '0' } ]
    ],
    evergreen: true,//浏览器兼容性
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 部署到github相关的配置
    markdown: {
        lineNumbers: true, // 代码块是否显示行号
        externalLinks: { target: '_blank', rel: 'noopener noreferrer' }
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '前端入门', link: '/primer/' },
            { text: '前端进阶', link: '/advance/' },
            { text: 'API', link: '/APi/' },
            {
                text: '杂项', items: [
                    { text: 'vuePress', link: '/others/vuepress' },
                ]
            },
            { text: 'Github', link: 'https://github.com/younggga/blog' }
        ],
        lastUpdated: 'Last Updated',
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2
    }
};
