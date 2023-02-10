<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const socialLinks = [
    {
        icon: 'mdi-facebook',
        value: 'JADA Home Improvement LLC'
    },
    {
        icon: 'mdi-instagram',
        value: 'jadahomeimprovement'
    },
    {
        icon: 'mdi-at',
        value: 'JADAllc2023@gmail.com'
    }  
]

</script>


<template>
    <v-footer
      app
      absolute
      class="text-center text-white d-flex flex-column"
      color="primary"
    >

      <v-img
        v-for="lenguaje in availableLocales"
        :key="lenguaje"
        @click.prevent.stop="setLocale(lenguaje.code)"
        width="32px"
        height="32px"
        :src="`img/${lenguaje.code}.png`"
      ></v-img>
        
      <v-row 
        class="my-3"
        justify="center"
        align="center"
        no-gutters
      >

       <v-col
          v-if="locale == 'en'"
       >
          <v-chip
            class="ma-1"
            color="secondary"
          >
            <v-icon start icon="mdi-phone"></v-icon>
            +1 407 3648272
          </v-chip>
       </v-col>

       <v-col
          v-else-if="locale == 'es'"
       >
          <v-chip
            class="ma-1"
            color="secondary"
          >
              <v-icon start icon="mdi-phone"></v-icon>
              +1 321 3805228
          </v-chip>
       </v-col>
        
        <v-col
            v-for="link in socialLinks"
        >
            <v-chip
              class="ma-1"
              color="secondary"
            >
              <v-icon start :icon="link.icon"></v-icon>
              {{link.value}}
            </v-chip>
        </v-col>

      </v-row>
        
      <div class="mb-5 text-secondary" >
          <strong>JADA Home Improvement LLC</strong> - {{ new Date().getFullYear() }}
      </div>
  </v-footer>
</template>
