<script setup>
import LandingButton from './LandingButton.vue';
import LogoBanner from './LogoBanner.vue';
</script>

<template>
  <section class="flex h-screen flex-col justify-end bg-background pt-20 font-poppins">
    <div
      class="min-h-2/5 mx-auto flex h-full w-11/12 max-w-screen-xl flex-col justify-end gap-y-[4%] pb-5 lg:justify-center lg:gap-y-[7%]"
    >
      <div class="-mb-3 ml-[45%] sm:ml-[55%]">
        <img
          src="../assets/img/Core_3.svg"
          class="-rotate-18 h-36 sm:h-44 lg:absolute lg:bottom-[22%] lg:right-[25%] lg:h-56 xl:right-[30%] 2xl:right-[35%] xl:h-64"
        />
      </div>
      <h1 class="max-w-3xl text-4xl font-bold leading-relaxed lg:-mt-20 lg:text-5xl lg:leading-normal">
        L'association
        <span class="whitespace-nowrap">
          d'
          <span class="bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold text-transparent">
            informatique
          </span>
        </span>
        de l'ENSEIRB-MATMECA
      </h1>
      <p class="w-10/12 pb-2 text-xl">Le numérique au service des étudiants et de l'associatif</p>
      <div class="flex flex-row flex-wrap gap-5">
        <LandingButton text="Nous découvrir" color="bg-primary" />
        <LandingButton text="Assistance" color="bg-secondary" />
      </div>
    </div>
    <LogoBanner />
  </section>
</template>
