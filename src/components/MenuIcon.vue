<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const bar1 = ref(null);
const bar2 = ref(null);
const bar3 = ref(null);
const isOpen = ref(false);
let tl;

const toggleAnimation = () => {
  if (isOpen.value) tl.reverse();
  else tl.play();
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  tl = gsap.timeline({ paused: true });
  tl.to(bar1.value, { y: 20, rotate: 45, transformOrigin: '50% 50%' });
  tl.to(bar3.value, { y: -20, rotate: -45, transformOrigin: '50% 50%' }, '<');
  tl.to(bar2.value, { x: 40, width: 0 }, '<');
});

defineExpose({
  toggleAnimation,
});
</script>

<template>
  <svg class="cursor-pointer fill-text" xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 0 100 100">
    <rect ref="bar1" width="70" height="8" x="15" y="25" rx="2"></rect>
    <rect ref="bar2" width="70" height="8" x="15" y="45" rx="2"></rect>
    <rect ref="bar3" width="70" height="8" x="15" y="65" rx="2"></rect>
  </svg>
</template>
