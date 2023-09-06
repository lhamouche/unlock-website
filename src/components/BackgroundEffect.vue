<script setup>
import { onMounted, onUnmounted } from 'vue';

function initEffect() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = document.documentElement.scrollWidth;
    canvas.height = document.documentElement.scrollHeight;

    const font = 15;

    let drops = [];
    for (let i = 0; i < canvas.width / font; i++)
        drops[i] = canvas.height;


    const getRandomChar = () => String.fromCharCode(33 + Math.floor(Math.random() * (126 - 33)));

    return () => {
        ctx.fillStyle = "rgba(0, 0, 0, .05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#F9B233";
        ctx.font = `${font}px JetBrains Mono`;

        for (let i = 0; i < drops.length; i++) {
            ctx.fillText(getRandomChar(), i * font, drops[i] * font);

            if (drops[i] * font > canvas.height && Math.random() > 0.98)
                drops[i] = 0;

            drops[i]++;
        }
    }
}

let draw, drawInterval;

const loadEffect = () => {
    clearInterval(drawInterval)
    draw = initEffect();
    drawInterval = setInterval(draw, 40);
}

onMounted(() => {
    loadEffect();
    window.addEventListener('resize', loadEffect);
})

onUnmounted(() => {
    setInterval(() => {
        clearInterval(drawInterval);
        window.removeEventListener('resize', loadEffect);
    }, 500);
})

</script>

<template>
    <canvas class="block absolute top-0 left-0 bg-black -z-1"></canvas>
</template>
