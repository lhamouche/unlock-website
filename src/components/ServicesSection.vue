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
  <div class="m-auto flex w-11/12 md:max-w-[44rem] xl:md:max-w-[67rem] 2xl:max-w-[80rem] md:justify-between flex-wrap justify-center gap-8 2xl:gap-14 font-poppins">
    <ServiceItem v-for="s in services" :icon="s.icon" :title="s.title" :text="s.text" />
    <img src="../assets/img/bee.svg" alt="Abeille" class="m-auto hidden h-44 -rotate-12 xl:block pl-5" />
    <div
      class="flex h-[28rem] max-w-[24rem] md:w-[21rem] xl:max-w-max xl:w-[50rem] 2xl:w-[60rem] xl:h-auto xl:items-start flex-col items-center gap-9 rounded-3xl bg-accent bg-opacity-20 px-10 py-14 overflow-hidden"
    >
      <h3 class="text-3xl xl:text-4xl font-medium">
        Le portail
        <span class="bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold italic text-transparent">
          eirb.fr
        </span>
      </h3>
      <p>
        A travers la page
        <span class="italic">eirb.fr</span>
        , nous proposons un accès rapide à l'ensemble des ressources utilisés par les élèves au quotidient : ENT,
        syllabus, emploi du temps, Moodle, sites des clubs et assos ...
      </p>
      <img src="../assets/img/bee.svg" alt="Abeille" class="h-48 rotate-6 xl:hidden" />
    </div>
  </div>
</template>
