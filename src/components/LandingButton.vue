<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: String,
  color: String,
});

const getColor = computed(() => {
  return `bg-${props.color}`;
});
</script>

<template>
  <div :class="getColor" class="rounded-2xl px-7 py-3">
    <p class="whitespace-nowrap">{{ props.text }}</p>
  </div>
</template>
