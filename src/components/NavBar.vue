<script setup>
import { ref } from 'vue';
import MenuIcon from './MenuIcon.vue';

const links = [{ name: 'Nos services' }, { name: "L'équipe" }, { name: 'À propos' }];

const menuIcon = ref();
const isMobileNavOpen = ref(false);

const toggleMobileNav = () => {
  menuIcon.value.toggleAnimation();
  isMobileNavOpen.value = !isMobileNavOpen.value;
};
</script>

<template>
  <div class="fixed w-screen border-b border-gray-300 bg-background py-3 z-10">
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
</template>
