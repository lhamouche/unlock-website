<script setup>
import GradientTitle from './GradientTitle.vue';
import ServiceItem from './ServiceItem.vue';

const services = [
  {
    icon: 'build_FILL0_wght400_GRAD0_opsz24.svg',
    title: 'Assistances',
    text: "Tout au long de l'année, nous accompagnons les étudiants dans l'installation, la prise en main et la maintenance de leur environnement de travail.",
  },
  {
    icon: 'dns_FILL0_wght400_GRAD0_opsz24.svg',
    title: 'Hébergement',
    text: 'Nous mettons à disposition nos serveurs aux différents clubs et associations et fournissons des conseils dans la création de services web.',
  },
  {
    icon: 'school_FILL0_wght400_GRAD0_opsz24.svg',
    title: 'Formations',
    text: 'Nous dispensons chaque année des formations portant sur différents outils et languages comme Git, VSCode, ou gdb et valgrind.',
  },
];
</script>

<template>
  <GradientTitle text="Nos" coloredText="services" />
  <div class="m-auto flex w-11/12 max-w-screen-xl flex-wrap gap-10">
    <ServiceItem v-for="s in services" :icon="s.icon" :title="s.title" :text="s.text" />
  </div>
</template>
