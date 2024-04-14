<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const logos = [
  // { name: 'BAE', url: 'bae.png' },
  // { name: 'BDA', url: 'bda.png' },
  // { name: 'BDE', url: 'bde.png' },
  // { name: 'EirSport', url: 'eirsport.png' },
  // { name: 'Gala Mos\'fête', url: 'gala.png' },
  // { name: 'Le Bar', url: 'bar.png' },
  // { name: 'Bill\'eirb', url: 'billeirb.png' },
  // { name: 'Cook\'eirb', url: 'cookeirb.png' },
  // { name: 'CherieF\'eirb', url: 'cheriefeirb.png' },
  // { name: 'EMK', url: 'emk.png' },
  // { name: 'Game Creation Club', url: 'gcc.png' },
  // { name: 'Œno', url: 'oeno.png' },
  // { name: 'Pix\'eirb', url: 'pixeirb.png' },
  // { name: 'Club Théâtre', url: 'theatre.png' },
  // { name: 'Unlock', url: 'unlock.png' },
  // { name: 'Zik', url: 'zik.png' },
];

const [lw1, lw2] = [ref(null), ref(null)];

const getImageUrl = (name) => new URL(`../assets/logos/${name}`, import.meta.url).href;
const imageUrl = (url) => getImageUrl(url);

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.fromTo([lw1.value, lw2.value], { x: 0 }, { x: '-100%', duration: 30, ease: 'linear' });
});
</script>

<template>
  <div class="flex h-36 w-full flex-row overflow-hidden lg:h-48">
    <div ref="lw1" class="flex min-w-full shrink-0 flex-row items-center justify-around">
      <img v-for="l in logos" :src="imageUrl(l.url)" :alt="'Logo ' + l.name" class="mx-4 h-20 lg:h-28 rounded-full" />
    </div>
    <div ref="lw2" class="flex min-w-full shrink-0 flex-row items-center justify-around">
      <img v-for="l in logos" :src="imageUrl(l.url)" :alt="'Logo ' + l.name" class="mx-4 h-20 lg:h-28 rounded-full" />
    </div>
  </div>
</template>
