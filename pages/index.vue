<template>
   <div>
      <nav-bar />
      <top-wave />
      <div class="h-16 md:mt-8 md:h-16 lg:h-10 lg:mt-56"></div>
      <carousel-controller />
      <plans-section />
      <schedule-section />
      <staff-section />
      <footer-section />
   </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import TopWave from '@/components/TopWave.vue';
import CarouselController from '@/components/CarouselController.vue';
import PlansSection from '@/components/PlansSection.vue';
import ScheduleSection from '@/components/ScheduleSection.vue';
import StaffSection from '@/components/StaffSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default Vue.extend({
   components: {
      NavBar,
      TopWave,
      CarouselController,
      PlansSection,
      ScheduleSection,
      StaffSection,
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
