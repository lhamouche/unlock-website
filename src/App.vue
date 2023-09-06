<script setup>
import { onMounted, ref } from 'vue';
import CircleType from 'circletype';
import WindowedLink from './components/WindowedLink.vue';
import BackgroundEffect from './components/BackgroundEffect.vue';

const isBgEffectDisplayed = ref(false);

const toggleBgEffect = () => {
    isBgEffectDisplayed.value = !isBgEffectDisplayed.value;
}

onMounted(() => {
    new CircleType(document.getElementById("circleText"));
});
</script>

<template>
    <Transition name="fade">
        <BackgroundEffect v-if="isBgEffectDisplayed" />
    </Transition>
    <header class="flex justify-center items-center z-0">
        <div class="w-full relative h-1 m-8 rounded-lg bg-color-primary"></div>
        <div class="h-full m-[3.3rem] mb-[3.7rem] mt-0 cursor-pointer" @click="toggleBgEffect">
            <div id="circleText" class="text-[21px] h-[3.4rem] leading-[30px] font-header">B • UNLOCK • ENSEIRB-MATMECA CYBERSECURITY CLU</div>
            <img id="logo" class="h-[130px] min-w-[130px]" src="./assets/img/logo.svg" />
        </div>
        <div class="w-full relative h-1 m-8 rounded-lg bg-color-primary"></div>
    </header>
    <main class="w-full min-h-[60vh] flex flex-col justify-around items-center font-jetbrains z-0">
        <div class="text-xl text-center">
            <p class="m-5">Le club de hacking et de cybersécurité de l'<a class="font-bold hover:opacity-70 transition-opacity ease-in duration-200" href="https://enseirb-matmeca.bordeaux-inp.fr/fr">ENSEIRB-MATMECA</a>.</p>
            <p class="m-5">Vous souhaitez apprendre le hacking et la cybersécurité en général ?</p>
            <p class="m-5">Venez lors d'une de nos sessions hebdomadaires !</p>
        </div>
        <div class="w-full m-5 flex flex-row flex-wrap justify-evenly">
            <WindowedLink title="Discord" icon="discord.png" link="https://discord.gg/tySArkKm6u" />
            <WindowedLink title="Facebook" icon="facebook.png" link="https://www.facebook.com/profile.php?id=61550447602998" />
        </div>
    </main>
    <footer class="w-full flex flex-col justify-center items-center">
        <span class="text-base uppercase opacity-20 text-center">2023 • Réalisé par Luxel HAMOUCHE</span>
    </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>