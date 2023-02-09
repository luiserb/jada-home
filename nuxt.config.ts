export default defineNuxtConfig({
    target: 'static',
    ssr: false,
    app: {
        baseURL: '/jada-home/',
        buildAssetsDir: '/static/',
        head:{
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'JADA Home Improvement LLC',
            meta: [
                {
                    name: 'theme-color',
                    content: '#000'
                },
                {
                    name: 'author',
                    content: 'JADA Home Improvement LLC'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:title',
                    content: 'JADA Home Improvement LLC'
                },
                {
                    property: 'og:url',
                    content: 'https://www.jadahome.com.co'
                },
                {
                    property: 'og:image',
                    content: '/jada-home/img/background.jpg'
                },
                {
                    property: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    property: 'twitter:url',
                    content: 'https://www.jadahome.com.co'
                },
                {
                    property: 'twitter:title',
                    content: 'JADA Home Improvement LLC'
                },
                {
                    property: 'twitter:image',
                    content: '/jada-home/img/background.jpg'
                }
            ],
            script: [],
            link: [
                { 
                rel: 'stylesheet', 
                href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
                }
            ]
        },
    },
    css: [
        'vuetify/lib/styles/main.sass',
        'viewerjs/dist/viewer.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/robots',
    ],
    i18n: {
        defaultLocale: 'en',
        locales: [
                {
                    code: 'en',
                    name: 'English',
                    iso: 'en' 
                },
                {
                    code: 'es',
                    name: 'Español',
                    iso: 'es'
                },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: true
        }
    },
    robots: {
        UserAgent: '*',
        Disallow: ''
    }
})
