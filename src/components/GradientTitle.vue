<script setup>
const props = defineProps({
  text: String,
  coloredText: String,
});
</script>

<template>
  <div class="text-center py-5 lg:py-10">
    <h2 class="whitespace-nowrap font-poppins text-4xl font-bold lg:text-5xl">
      {{ props.text }}
      <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{{ coloredText }}</span>
    </h2>
  </div>
</template>
