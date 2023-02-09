<script setup>
const { t } = useI18n({useScope: 'local'})

useHead({
  title: t('message') + ' | JADA Home Improvement LLC'
})
</script>

<template>
    <v-app>
        <v-card
            color="black"
            height="100vh"
        >
            <v-img
                class="my-10"
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
            <v-main
                class="my-12"
            >
                <v-row
                    class="text-center my-12"
                    justify="center"
                    align="center"
                >
                    <v-col>
                        <h1 class="my-12 text-h2">{{ t('message') }}</h1>
                        <v-btn 
                            class="my-12"
                            to="/"
                        >
                            {{ t('button') }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-main>
        </v-card>
        <Footer />
    </v-app>
</template>


<i18n>
    {
        "en": {
            "message": "Page not Found",
            "button": "Go Home",
        },
        "es": {
            "message": "Página no encontrada",
            "button": "Ir al inicio"
        }
    }
</i18n>