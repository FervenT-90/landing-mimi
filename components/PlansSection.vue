<template>
   <div
      class="flex flex-col items-center justify-center p-4 md:flex-row lg:my-10 "
   >
      <plan-card />
      <plan-card />
      <plan-card />
   </div>
</template>

<script>
import PlanCard from '@/components/PlanCard.vue';
export default {
   components: {
      PlanCard
   }
};
</script>

<style scoped></style>
