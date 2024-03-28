<script setup>
import { ref } from 'vue';
import gsap from 'gsap';
import MenuIcon from './MenuIcon.vue';

const links = [{ name: 'Nos services' }, { name: "L'équipe" }, { name: 'À propos' }];

const menuIcon = ref();
const mobileNav = ref();
const isMobileNavOpen = ref(false);

const toggleMobileNav = () => {
  menuIcon.value.toggleAnimation();
  isMobileNavOpen.value = !isMobileNavOpen.value;
  if (isMobileNavOpen.value) {
    gsap.to(mobileNav.value, { duration: 0.5, marginTop: 0, ease: 'easeInOut' });
    document.documentElement.style.overflowY = 'hidden';
  } else {
    gsap.to(mobileNav.value, { duration: 0.5, marginTop: '-100vh', ease: 'easeInOut' });
    document.documentElement.style.overflowY = 'auto';
  }
};

const checkWindowSize = () => {
  if (window.innerWidth < 768 && isMobileNavOpen.value) document.documentElement.style.overflowY = 'hidden';
  else document.documentElement.style.overflowY = 'auto';
};

window.addEventListener('resize', checkWindowSize);
</script>

<template>
  <div class="fixed z-20 w-screen border-b border-gray-300 bg-background py-3">
    <nav class="mx-auto flex w-11/12 max-w-screen-xl flex-row items-center justify-between">
      <div class="flex flex-row items-center">
        <img src="../assets/logos/round_logo_eirbware.svg" alt="Logo Eirbware" class="h-12" />
        <ul class="hidden flex-row md:flex">
          <li v-for="l in links" class="pl-12 text-xl lg:pl-20">{{ l.name }}</li>
        </ul>
      </div>
      <ul class="hidden rounded-full bg-primary px-4 py-1 text-base font-medium md:block">
        <li>eirb.fr</li>
      </ul>
      <div @click="toggleMobileNav" class="md:hidden">
        <MenuIcon ref="menuIcon" />
      </div>
    </nav>
  </div>
  <div ref="mobileNav" class="fixed z-10 -mt-[100vh] flex h-screen w-screen flex-col bg-background pt-16 md:hidden">
    <ul class="my-auto flex h-4/5 flex-col items-center justify-around">
      <li v-for="l in links" class="text-2xl">{{ l.name }}</li>
      <ul class="block rounded-full bg-primary px-4 py-1 text-xl font-medium">
        <li>eirb.fr</li>
      </ul>
    </ul>
  </div>
</template>
