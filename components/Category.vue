<script setup>
const { t } = useI18n({useScope: 'local'})
import { component as Viewer } from "v-viewer"

const categorys=[
    {
        name: 'bathroom',
        totalImages: 3,
    },
    {
        name: 'kitchen',
        totalImages: 3,
        type:[
            'quartz',
            'granite',
            'marble'
        ],
        video: 0
    },
    {
        name: 'paintwork',
        totalImages: 0,
        video: 1
    },
    {
        name: 'floor',
        totalImages: 4,
        type: [
            'ceramic',
            'porcelainFloor',
            'tecnicalPorcelainFloor',
            'wood',
            'stone',
            'laminatedFloor',
            'vinylFloor'
        ],
        video: 0
    },
    {
        name: 'fence',
        totalImages: 0,
        video: 1
    },
    {
        name: 'screen',
        totalImages: 2,
        video: 0
    }
]

const selectCategory = ref(categorys[0]);
</script>


<template>
    <div class="my-8 text-center">
        <v-chip
            v-for="category in categorys"
            :key="category"
            class="mx-4 my-2 elevation-4"
            @click="selectCategory = category"
            :color="selectCategory.name == category.name ? 'grey-lighten-5' : 'grey-darken-1' "
            size="large"
        >
            {{ t(category.name) }}
        </v-chip>
    </div>

    <div 
        v-if="selectCategory.name != '' " 
        class="text-primary"
    >
        <div
            v-if="selectCategory.name == 'kitchen'"
            class="d-flex justify-center"
        >
            <v-chip
                color="grey-lighten-5"
                prepend-icon="mdi-home"
            >
                {{ t('counter') }}
            </v-chip>
        </div>
    
        <div
            class="mt-2 mb-6 text-center"
            v-if="selectCategory.type"
        >
            <v-chip
                class="ma-2"
                v-for="type in selectCategory.type"
                :key="type"
                color="grey-lighten-5"
                prepend-icon="mdi-checkbox-marked-circle"
            >
                {{ t(type) }}
            </v-chip>
        </div>

        <viewer
            v-if="selectCategory.totalImages >= 1"
        >
            <v-row
                class="text-center mt-4"
                justify="center"
                align="center"
            >
                <v-col
                    v-for="(_id, numberImage) in selectCategory.totalImages"
                    :key="_id"
                >
                    <img
                        class="rounded-lg elevation-8 mx-2 image__content"
                        :src="`img/${selectCategory.name}-${_id}.jpg`"
                        :alt=" `JADA Home Improvement LLC ${selectCategory.name}`"
                    /> 
                </v-col>
            </v-row>
        </viewer>

        <v-row
            v-if="selectCategory.video >= 1"
            class="text-center"
            justify="center"
            align="center"
        >
            <v-col>
                <video 
                    v-for="(_id, numberImage) in selectCategory.video"
                    class="video__content pa-2 pa-sm-5"
                    controls
                >
                    <source 
                        :src="`video/${selectCategory.name}-${_id}.mp4`" 
                        type="video/mp4"
                    >
                </video>
            </v-col>
        </v-row>
    </div>
</template>


<style lang="scss">
    .image__content{
        width: 280px;
        height: 280px;
        object-fit: cover;
    }
    .video__content{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 600px) {
        .video__content{
            width: 400px;
        }
    }


</style>


<i18n>
    {
        "en": {
            "bathroom": "Bathroom",
            
            "kitchen": "Kitchen",
            "counter": "Counter",
            "granite": "Granite",
            "quartz": "Quartz",
            "marble": "Marble",
            
            "floor": "Floor",
            "laminatedFloor": "Laminate floor",
            "porcelainFloor": "Porcelain",
            "ceramic": "Ceramic",
            "technicalPorcelainFloor": "Technical porcelain",
            "wood": "Natural wood",
            "stone": "Natural stone",
            "vinylFloor": "Vinyl floor",

            "fence": "Fence",
            "screen": "Screen",
            "paintwork": "Paintwork"
        },
        "es": {
            "bathroom": "Baño",

            "kitchen": "Cocina",
            "counter": "Encimera",
            "granite": "Granito",
            "quartz": "Cuarzo",
            "marble": "Mármol",

            "floor": "Piso",
            "laminatedFloor": "Piso laminado",
            "porcelainFloor": "Porcelanato",
            "ceramic": "Cerámica",
            "tecnicalPorcelainFloor": "Porcelanato técnico",
            "wood": "Madera natural",
            "stone": "Piedra natural",
            "vinylFloor": "Piso vinílico",

            "fence": "Cercado",
            "screen": "Screen",
            "paintwork": "Pintura"
        }
    }
</i18n>
