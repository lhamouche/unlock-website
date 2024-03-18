<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const logos = [
  { name: 'Eirbware', url: 'round_logo_eirbware.svg' }
];

const lw1 = ref(null);
const lw2 = ref(null);

const getImageUrl = (name) => new URL(`../assets/logos/${name}`, import.meta.url).href;
const imageUrl = (url) => getImageUrl(url);

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.fromTo([lw1.value, lw2.value], { x: 0 }, { x: '-100%', duration: 30, ease: 'linear' });
});
</script>

<template>
  <div class="flex h-36 w-full flex-row overflow-hidden lg:h-48">
    <div v-for="w in ['lw1', 'lw2']" :ref="w" class="flex min-w-full shrink-0 flex-row items-center justify-around">
      <img v-for="l in logos" :src="imageUrl(l.url)" :alt="'Logo ' + l.name" class="mx-4 h-20 lg:h-28" />
    </div>
  </div>
</template>
