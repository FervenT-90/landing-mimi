<template>
   <div>
      <nav-bar />
      <div
         class="absolute right-0 z-20 invisible text-right text-white xl:visible xl:mt-12 xl:mr-20 xl:text-6xl font-primary "
      >
         <p>Functional Training</p>
         <p>Box</p>
      </div>
      <div class="absolute z-10 w-full">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
               fill="#333"
               d="M0 192l48-16c48-16 144-48 240-53.3C384 117 480 139 576 160c96 21 192 43 288 53.3 96 10.7 192 10.7 288 26.7s192 48 240 64l48 16V0H0z"
            />
         </svg>
      </div>
      <div class="h-16 md:mt-8 md:h-16 lg:h-10 lg:mt-56"></div>
      <carousel-controller />
      <plans-section />
      <footer-section />
   </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import CarouselController from '@/components/CarouselController.vue';
import PlansSection from '@/components/PlansSection.vue';
import FooterSection from '@/components/FooterSection.vue';
export default Vue.extend({
   components: {
      NavBar,
      CarouselController,
      PlansSection,
      FooterSection
   }
});
</script>

<style>
body {
   overflow-x: hidden;
}
.gradient {
   background: linear-gradient(90deg, #fe9c42 0%, #7e21f5 100%);
}

::-webkit-scrollbar {
   width: 10px;
   background: linear-gradient(to bottom, #fe9c42 0%, #7e21f5 100%);
}
::-webkit-scrollbar-thumb {
   background: #333;
   border-radius: 5px;
}
</style>
