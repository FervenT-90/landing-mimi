<template>
   <section id="pricing" class="p-4 my-12 lg:my-10">
      <h1 class="pt-6 text-4xl text-center text-white font-primary"></h1>
      <div class="flex flex-col items-center justify-center mt-6 md:flex-row">
         <plan-card
            :title="$t('planSection.beginner.title')"
            :description="$t('planSection.beginner.description')"
            :price="29.98"
            :services="[
               $t('planSection.services.sessions.eight'),
               $t('planSection.services.towell'),
               $t('planSection.services.bottleOfWater.small')
            ]"
         />
         <plan-card-featured
            :title="$t('planSection.pro.title')"
            :description="$t('planSection.pro.description')"
            :price="49.98"
            :services="[
               $t('planSection.services.sessions.twelve'),
               $t('planSection.services.towell'),
               $t('planSection.services.bottleOfWater.big'),
               $t('planSection.services.pieceOfFruit')
            ]"
         />
         <plan-card
            :title="$t('planSection.unlimited.title')"
            :description="$t('planSection.unlimited.description')"
            :price="79.98"
            :services="[
               $t('planSection.services.sessions.unlimited'),
               $t('planSection.services.towell'),
               $t('planSection.services.bottleOfWater.big'),
               $t('planSection.services.pieceOfFruit'),
               $t('planSection.services.physiotherapy')
            ]"
         />
      </div>
   </section>
</template>

<script>
import PlanCard from '@/components/PlanCard.vue';
import PlanCardFeatured from '@/components/PlanCardFeatured.vue';
export default {
   components: {
      PlanCard,
      PlanCardFeatured
   }
};
</script>

<style scoped></style>
