<script setup>
const props = defineProps({
  icon: String,
  title: String,
  text: String,
});

const getImageUrl = (name) => new URL(`../assets/icons/${name}`, import.meta.url).href;
const imageUrl = (url) => getImageUrl(url);
</script>

<template>
  <div
    class="flex h-[28rem] max-w-[24rem] md:w-[21rem] 2xl:w-[23rem] flex-col items-center gap-9 rounded-3xl bg-secondary bg-opacity-20 px-10 py-14"
  >
    <img :src="imageUrl(props.icon)" alt="Icon" class="h-20" />
    <h3 class="text-3xl font-medium">{{ props.title }}</h3>
    <p>{{ props.text }}</p>
  </div>
</template>
