<template>
   <section id="team">
      <h1 class="pt-6 text-4xl text-center text-white font-primary">
         Our Team
      </h1>

      <div
         class="flex flex-col items-center justify-center my-3 mb-5 md:flex-row"
      >
         <staff-card
            img-src="/images/womanStaff.webp"
            full-name="Lindsey Bethan Sullivan"
            description="I'm a 28-year-old semi-professional sports person who enjoys binge-watching boxed sets, spreading fake news on Facebook and photography."
         />
         <staff-card
            img-src="/images/manStaff.webp"
            full-name="Justin Shelby Adams"
            description="I'm a 24-year-old semi-professional sports person who enjoys tennis, theatre and competitive dog grooming"
         />
      </div>
   </section>
</template>

<script>
import StaffCard from '@/components/StaffCard.vue';
export default {
   components: {
      StaffCard
   }
};
</script>

<style></style>
