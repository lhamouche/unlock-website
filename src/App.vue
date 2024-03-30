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
  if (targetElement) {
    let pos = targetElement.offsetTop;
    if (window.scrollY > pos && pos > 60) pos -= 60;
    gsap.to(window, { duration: 0.5, scrollTo: pos, ease: 'easeInOut' });
  }
};
</script>

<template>
  <NavBar @scroll-to-section="scrollToSection" />
  <div id="top"><LandingSection /></div>
  <div id="services"><ServicesSection /></div>
  <div id="team"><TeamSection /></div>
  <div id="about"><AboutSection /></div>
  <FooterSection />
</template>
