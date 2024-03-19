<script setup>
const props = defineProps({
  text: String,
  coloredText: String,
});
</script>

<template>
  <div class="text-center">
    <h2 class="font-poppins text-4xl font-bold whitespace-nowrap">
      {{ props.text + ' ' }}
      <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{{ coloredText }}</span>
    </h2>
  </div>
</template>
