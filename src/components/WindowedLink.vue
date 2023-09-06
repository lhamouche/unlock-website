<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    title: String,
    icon: String,
    link: String
})

const iconAlt = `${props.title} logo`;
const iconSrc = new URL(`../assets/img/${props.icon}`, import.meta.url);
const isOpen = ref(false);
const isRotated = ref(true);
const codeSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${props.link}&size=500x500&color=fff&bgcolor=272727`;

function toggleWindow() {
    isOpen.value = !isOpen.value;
    isRotated.value = !isRotated.value;
}

onMounted(async () => {
    toggleWindow();
});

</script>

<template>
    <div class="min-h-[340px] m-2">
        <div class="max-h-[340px] bg-window-outside border-[5px] border-window-inside rounded-[5px] shadow-[0px_0px_20px_0px_#00000071] overflow-hidden transition-all ease-in-out duration-500"
            :class="{ '!max-h-8': !isOpen }">
            <div class="h-7 flex justify-between align-center bg-window-inside">
                <span class="m-[.1rem] mt-[.16rem]">
                    <img class="h-5" :alt="iconAlt" :src="iconSrc" />
                </span>
                <span class="text-base font-jetbrains">
                    <a class="font-bold hover:opacity-70 transition-opacity ease-in" :href="props.link">{{ props.title }}</a>
                </span>
                <span class="mr-1">
                    <button @click="toggleWindow()">
                        <img id="triangle" class="h-6 opacity-100 hover:opacity-60 transition-all ease-linear" :class="{ '-rotate-180': isRotated }" src="../assets/img/arrow-up-s-fill.svg" />
                    </button>
                </span>
            </div>
            <div class="m-6">
                <img class="w-[250px] pl-[.1rem]" :src="codeSrc" />
            </div>
        </div>
    </div>
</template>

<style scoped>
#triangle {
    filter: invert(83%) sepia(62%) saturate(3249%) hue-rotate(334deg) brightness(103%) contrast(95%);
}
</style>
