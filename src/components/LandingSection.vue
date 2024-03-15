<script setup>
import LandingButton from './LandingButton.vue';
</script>

<template>
  <section class="flex h-screen flex-col justify-end bg-background pt-20 font-poppins lg:justify-center">
    <div class="min-h-2/5 mx-auto flex w-11/12 max-w-screen-xl flex-col justify-between gap-y-6 lg:gap-y-10">
      <h1 class="max-w-3xl text-4xl font-bold leading-relaxed lg:text-5xl lg:leading-normal">
        L'association
        <span class="whitespace-nowrap">
          d'
          <span class="bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold text-transparent">
            informatique
          </span>
        </span>
        de l'ENSEIRB-MATMECA
      </h1>
      <p class="w-9/12 text-xl">Le numérique au service des étudiants et de l'associatif</p>
      <div class="flex flex-row flex-wrap gap-4">
        <LandingButton text="Nous découvrir" color="primary" />
        <LandingButton text="Assistance" color="secondary" />
      </div>
    </div>
    <div class="h-32">
      <!-- Banner -->
    </div>
  </section>
</template>
