<script setup>
const props = defineProps({
  icon: String,
  title: String,
  text: String,
});

const getImageUrl = (name) => new URL(`../assets/img/${name}`, import.meta.url).href;
const imageUrl = (url) => getImageUrl(url);
</script>

<template>
  <div
    class="m-auto flex h-[28rem] max-w-[25rem] flex-col items-center gap-9 rounded-3xl bg-secondary bg-opacity-20 px-10 py-16 font-poppins"
  >
    <img :src="imageUrl(props.icon)" alt="Icon Assistance" class="h-20" />
    <h3 class="text-4xl font-medium">{{ props.title }}</h3>
    <p>{{ props.text }}</p>
  </div>
</template>
