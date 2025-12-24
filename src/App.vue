<script setup>
  import Services from './views/Services.vue';
  import Projects from './views/Projects.vue';
</script>

<template>
  <section class="font-montserrat md:text-left mt-25 text-center">
    <h2 class="font-bold font-nunito italic text-2xl">Hello, I'm</h2>
    <h1 class="font-black mt-25 text-7xl uppercase">Clein Wepee</h1>
    <h3 class="font-light mt-2"><span class="text-violet-400">Laravel</span> Developer from Philippines.</h3>
  </section>

  <Services/>
  <Projects/>
</template>