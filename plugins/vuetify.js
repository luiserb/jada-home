import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const themeDefault = {
    colors: {
        primary: '#000',
        secondary: '#fff',
    },
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'themeDefault',
            themes:{
                themeDefault
            }
        },
        icons:{
            defaultSet: 'mdi'
        }
    })
    nuxtApp.vueApp.use(vuetify)
})
