<script setup>
const { t } = useI18n({useScope: 'local'})

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const metadata = [
    {
        property: 'description',
        content: 'description'
    },
    {
        property: 'og:description',
        content: 'description'
    },
    {
        property: 'twitter:description',
        content: 'description'
    }
]

</script>


<template>
    <Html 
        :lang="head.htmlAttrs.lang"
    >
        <Meta 
            v-for="meta in metadata" :key="meta"
            :property="meta.property" 
            :content="t(meta.content)" 
        />
    </Html>

    <v-app>
        <v-main>
            <NuxtPage />
        </v-main>
        <Footer />
        <Preloader />
    </v-app>
</template>

<style lang="scss">
*{
    line-height: 1.2 !important;
}
ul{
    padding: 0;
    list-style: none;
}

a{
    text-decoration: none;
}

.video-wrapper{
  display: block !important;
}

::-webkit-scrollbar {
  width: 9.5px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-button{
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: #757575; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #424242; 
}

</style>

<i18n>
    {
        "en": {
            "description": "Colombian company focused on decoration and residential construction in Colombia and the United States"
        },
        "es": {
            "description": "Empresa colombiana enfocada en la decoración y construcción residencial en Colombia y en Estados Unidos"
        }
    }
</i18n>