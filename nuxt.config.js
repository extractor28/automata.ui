module.exports = {
    // buildModules: [
    // // Simple usage
    //     '@nuxtjs/onesignal',
    //     '@nuxtjs/pwa',
    //     '@nuxtjs/vuetify',

    //     // With options
    //     ['@nuxtjs/vuetify', { /* module options */ }],
    // ],

    modules: [
        // Simple usage
        '@nuxtjs/onesignal',
        '@nuxtjs/pwa',
        '@nuxtjs/vuetify',
    ],
    /*
  ** Headers of the page
  */
    head: {
        title: 'Automata',
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },
    /*
  ** Customize the progress bar color
  */
    loading: { color: '#3B8070' },
    /*
  ** Build configuration
  */
    build: {
    /*
    ** Run ESLint on save
    */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
    },
    oneSignal: {
        // cdn: true,
        init: {
            allowLocalhostAsSecureOrigin: true,
            appId: '1d118d34-f676-4734-baa5-53eacff8f3f0',
            welcomeNotification: {
                disable: false,
            },
        },
    },
    // pwa: {
    //     workbox: {
    //         swURL: 'OneSignalSDKWorker.js',
    //     },
    // },
};

