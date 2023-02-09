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
            'sintered',
            'granite',
            'quartz',
            'syntheticMarble',
            'porcelainKitchen'
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
            'laminatedFloor',
            'porcelainFloor',
            'ceramic',
            'wood',
            'stone',
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
            class="my-6 text-center"
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
                class="text-center"
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
            "sintered": "Sintered stone",
            "granite": "Granite",
            "quartz": "Quartz",
            "syntheticMarble": "Synthetic marble",
            "porcelainKitchen": "Porcelain",
            
            "floor": "Floor",
            "laminatedFloor": "Laminated",
            "porcelainFloor": "Porcelain",
            "ceramic": "Ceramic",
            "wood": "Wood",
            "stone": "Stone",
            "vinylFloor": "vinyl Floor",

            "fence": "Fence",
            "screen": "Screen",
            "paintwork": "Paintwork"
        },
        "es": {
            "bathroom": "Baño",

            "kitchen": "Cocina",
            "sintered": "Piedra sinterizada",
            "granite": "Granito",
            "quartz": "Cuarzo",
            "syntheticMarble": "Mármol sintético",
            "porcelainKitchen": "Porcelanato",

            "floor": "Piso",
            "laminatedFloor": "Laminado",
            "porcelainFloor": "Porcelanato",
            "ceramic": "Cerámica",
            "wood": "Madera",
            "stone": "Piedra natural",
            "vinylFloor": "Piso vinílico",

            "fence": "Cercado",
            "screen": "Screen",
            "paintwork": "Pintura"
        }
    }
</i18n>