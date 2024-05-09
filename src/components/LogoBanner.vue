<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const logos = [
  { name: 'BAE', url: 'bae.png', link: 'https://bae.eirb.fr' },
  { name: 'BDA', url: 'bda.png', link: 'https://bda.eirb.fr' },
  { name: 'BDE', url: 'bde.png', link: 'https://bde.eirb.fr' },
  { name: 'EirSport', url: 'eirsport.png', link: 'https://eirsport.eirb.fr' },
  { name: "Gala Mos'fête", url: 'gala.png', link: 'https://gala.eirb.fr' },
  { name: 'Le Bar', url: 'bar.png', link: 'https://bar.eirb.fr' },
  { name: "Bill'eirb", url: 'billeirb.png', link: 'https://bill.eirb.fr' },
  { name: "Cook'eirb", url: 'cookeirb.png', link: 'https://cook/eirb.fr' },
  { name: "CherieF'eirb", url: 'cheriefeirb.png', link: 'https://radio.eirb.fr' },
  { name: 'EMK', url: 'emk.png', link: 'https://emk.eirb.fr' },
  { name: 'Game Creation Club', url: 'gcc.png', link: 'https://gcc.eirb.fr' },
  { name: 'Œno', url: 'oeno.png', link: 'https://oeno.eirb.fr' },
  { name: "Pix'eirb", url: 'pixeirb.png', link: 'https://pix.eirb.fr' },
  { name: 'Club Théâtre', url: 'theatre.png', link: 'https://theatre.eirb.fr' },
  { name: 'Unlock', url: 'unlock.png', link: 'https://unlock.eirb.fr' },
  { name: 'Zik', url: 'zik.png', link: 'https://zik.eirb.fr' },
].sort(() => Math.random() - 0.5);

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
      <a v-for="l in logos" :href="l.link" target="_blank">
        <img :src="imageUrl(l.url)" :alt="'Logo ' + l.name" class="mx-4 h-20 rounded-full lg:h-28" />
      </a>
    </div>
    <div ref="lw2" class="flex min-w-full shrink-0 flex-row items-center justify-around">
      <a v-for="l in logos" :href="l.link" target="_blank">
        <img :src="imageUrl(l.url)" :alt="'Logo ' + l.name" class="mx-4 h-20 rounded-full lg:h-28" />
      </a>
    </div>
  </div>
</template>
