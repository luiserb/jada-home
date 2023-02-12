<script setup>
const { t } = useI18n({useScope: 'local'})

const tips=[
                {
                    title: 'paintwork',
                    icon: 'mdi-format-paint'
                },
                {
                    title: 'bathroom',
                    icon: 'mdi-toilet'
                },
                {
                    title: 'electricity',
                    icon: 'mdi-flash'
                },
                {
                    title: 'floor',
                    icon: 'mdi-floor-plan'
                },
                {
                    title: 'plumbing',
                    icon: 'mdi-shower'
                },
                {
                    title: 'fence',
                    icon: 'mdi-fence'
                },
                {
                    title: 'airConditioner',
                    icon: 'mdi-air-conditioner'
                }
            ]
</script>

<template>
    <h3
        class="text-white text-center my-12"
    >
        {{ t('quote') }}
    </h3>

    <v-card
        color="secondary"
        class="pa-2 my-sm-9 my-md-1 my-lg-5 rounded-xl elevation-16 text-white"
    >
        <v-row
            justify="center"
            align="center"
        >
            <v-col
                v-for="tip in tips"
                :key="tip"
            >
                <div class="d-flex flex-column text-center py-6">
                    <div class="mb-2">
                        <v-icon 
                            color="primary"
                            :icon="tip.icon" 
                            size="x-large">
                        </v-icon>
                    </div>
                    <p class="text-primary text-subtitle-2 font-weight-bold">{{ t(tip.title) }}</p>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<i18n>
    {
        "en": {
            "paintwork": "Paintwork",
            "bathroom": "Bathroom",
            "electricity": "Electricity",
            "airConditioner": "Air Conditioner",
            "quote": "Make your estimate at no cost",
            "floor": "Floor",
            "plumbing": "Plumbing",
            "fence": "Fence"
        },
        "es": {
            "paintwork": "Pintura",
            "bathroom": "Baños",
            "electricity": "Electricidad",
            "airConditioner": "Aire Acondicionado",
            "quote": "Haga su estimado sin costo alguno",
            "floor": "Piso",
            "plumbing": "Plomeria",
            "fence": "Cercado"
        }
    }
</i18n>
