<script setup>
const props = defineProps({
  text: String,
  color: String,
});
</script>

<template>
  <div :class="props.color" class="cursor-pointer rounded-2xl px-7 py-3 duration-200 hover:opacity-90">
    <p class="whitespace-nowrap">{{ props.text }}</p>
  </div>
</template>
