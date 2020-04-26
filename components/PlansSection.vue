<template>
   <div
      class="flex flex-col items-center justify-center p-4 my-12 md:flex-row lg:my-10 "
   >
      <plan-card
         title="Beginner"
         description="Perfect for Beginners!"
         :price="29.98"
         :services="[
            '8 sessions (2/week)',
            'Towel included',
            'Small bottle of water'
         ]"
      />
      <plan-card-featured
         title="Pro"
         description="Great for those who take wellness seriously"
         :price="49.98"
         :services="[
            '12 sessions (3/week)',
            'Towel included',
            'Big bottle of water',
            'Piece of fruit at ending of training'
         ]"
      />
      <plan-card
         title="Unlimited"
         description="Unlimited access to services"
         :price="79.98"
         :services="[
            'Unlimited training/week',
            'Towel included',
            'Big bottle of water',
            'Piece of fruit at ending of training',
            '1 FREE physiotherapy session/week'
         ]"
      />
   </div>
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
