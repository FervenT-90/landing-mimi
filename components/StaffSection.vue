<template>
   <section id="team">
      <h1 class="pt-6 text-4xl text-center text-white font-primary">
         {{ $t('staffSection.title') }}
      </h1>

      <div
         class="flex flex-col items-center justify-center my-3 mb-5 md:flex-row"
      >
         <staff-card
            img-src="/images/womanStaff.webp"
            full-name="Lindsey Bethan Sullivan"
            :description="$t('staffSection.staffCard.staffOneDescription')"
         />
         <staff-card
            img-src="/images/manStaff.webp"
            full-name="Justin Shelby Adams"
            :description="$t('staffSection.staffCard.staffTwoDescription')"
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
