<script setup>
const props = defineProps({
  text: String,
  color: String,
});
</script>

<template>
  <div :class="props.color" class="rounded-2xl px-7 py-3">
    <p class="whitespace-nowrap">{{ props.text }}</p>
  </div>
</template>
