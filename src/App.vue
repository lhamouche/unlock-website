<script setup>
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import NavBar from './components/NavBar.vue';
import LandingSection from './components/LandingSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import FooterSection from './components/FooterSection.vue';
import TeamSection from './components/TeamSection.vue';
import AboutSection from './components/AboutSection.vue';

gsap.registerPlugin(ScrollToPlugin);

const scrollToSection = (target) => {
  const targetElement = document.getElementById(target);
  if (targetElement) gsap.to(window, { duration: .5, scrollTo: '#' + target, ease: 'easeInOut' });
};
</script>

<template>
  <NavBar @scroll-to-section="scrollToSection" />
  <LandingSection id="top" />
  <ServicesSection id="services" />
  <TeamSection id="team" class="h-[200vh]" />
  <AboutSection id="about" />
  <FooterSection />
</template>
