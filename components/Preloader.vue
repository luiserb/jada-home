<script setup>
const preloader = ref(true);
const hiden = ref(false);

function showPreloader(){
    let main = document.getElementsByTagName('html')[0]
    main.classList.add('preloader-active')
    setTimeout(() =>{
        preloader.value = false;
        hiden.value = true;
        main.classList.remove('preloader-active')
    }, 3000)
}
onMounted(() =>{
    showPreloader()
})
</script>

<template>
    <transition name="modal">
        <div
            v-if="hiden == false"
        >
            <div 
                v-show="preloader"
                class="modal-container"
            >
                <div 
                    style="width: 240px;"
                    class="mb-12"
                >
                    <v-img
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
                </div>

                <v-progress-circular
                    indeterminate
                    color="white"
                >
                </v-progress-circular>
                
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
.modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--v-theme-primary));
    z-index: 99999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    h3{
      position: absolute;
      bottom: 5%;
    }
}
.preloader-active{
    overflow: hidden !important;
}
.modal-enter-active, .modal-leave-active {
    transition: opacity 3s;
}
.modal-enter, .modal-leave-to {
    opacity: 0;
}
</style>
