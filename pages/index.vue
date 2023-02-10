<script setup>
useHead({
  title: 'JADA Home Improvement LLC'
})

const { t } = useI18n({useScope: 'local'})

const links = [
    {
        name: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/jadahomeimprovement'
    },
    {
        name: 'Facebook',
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/people/JADA-home-improvement-LLC/100089202805864/?mibextid=ZbWKwL'
    }
]

function toLink(link){
    window.open(link);
}

</script>


<template>
    <video-background 
        class="home__contain"
        src="video/background.mp4"
        overlay="linear-gradient(0deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .25))" 
    >
        <v-container>
            <v-row
                class="text-center"
                justify="center"
                align="center"
            >
                <v-col
                    lg="6"
                >
                    <v-img
                        class="mb-7"
                        height="120px"
                        src="img/logo.png"
                        alt="JADA Home Improvement LLC Logo"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="white"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                    
                    <h1 
                        class="text-h3 text-sm-h2 text-md-h1 my-8 text-lg-h1 text-white mb-4 my-sm-5 font-weight-bold"
                    >
                        {{ t('title') }}
                    </h1>

                    <p 
                        class="my-8 my-sm-12 text-white text-subtitle-2 text-sm-subtitle-1 text-sm-h6"
                    >
                        {{ t('subtitle') }}
                    </p>

                    <v-btn
                        color="green"
                        class="rounded-lg mt-5 elevation-12"
                        prepend-icon="mdi-whatsapp"
                        @click="toLink('https://api.whatsapp.com/send?phone='+ t('phone'))"
                    >
                        {{ t('contactUs') }}
                    </v-btn>

                    <div
                        class="mt-7 mt-sm-10"
                    >
                        <v-btn
                            class="mx-5 mt-6 mt-sm-10"
                            v-for="link in links"
                            :key="link"
                            icon
                            @click="toLink(link.link)"
                        >
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </video-background>

    <section
        class="pa-10"
    >
        <v-container>
            <v-row
                class="text-center"
                justify="center"
                align="center"
            >
                <v-col
                    sm="8"
                    lg="6"
                    xl="4"
                >
                    <p class="text-secondary text-subtitle-2 text-sm-subtitle-1">
                        {{ t('aboutUsContent') }}
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <v-row
            justify="center"
            align="center"
        >
            <v-col
                sm="8"
                lg="5"
                xl="6"
            >
                <Guide />
            </v-col>
        </v-row>
        <Category />
    </section>
</template>


<style lang="scss">
    .home__contain{
        height: calc(100vh - var(--v-layout-top));
    }
    section{
        background-color: rgba(var(--v-theme-primary));
    }
</style>


<i18n>
    {
        "en": {
            "title": "We build and design the home of your dreams",
            "subtitle": "We are the leading company in remodeling and residential and commercial construction",
            "contactUs": "Contact us",
            "aboutUsContent": "We are the leading company in residential and commercial remodeling and construction, chosen for our modern designs that we develop with highly qualified personnel, optimizing costs to offer different options to clients. Our mission is to maintain high quality standards with customer service, contributing to the development of the country and achieving high levels of evolution in interior and exterior remodeling",
            "phone": "14073648272"
        },
        "es": {
            "title": "Construimos y diseñamos el hogar de tus sueños",
            "subtitle": "Somos la compañía lider en remodelación y construcción residencial y comercial",
            "contactUs": "Contactanos",
            "aboutUsContent": "Somos la empresa líder en remodelación y construcción residencial y comercial, elegida por nuestros diseños modernos que desarrollamos con personal altamente calificado, optimizando costos para ofrecer diferentes opciones a los clientes. Nuestra mision es mantener altos estándares de calidad con el servicio al cliente contribuyendo al desarrollo del país y logrando altos niveles de evolución en remodelaciones de interiores y exteriores",
            "phone": "13213805228"
        }
    }
</i18n>
