<template>
   <div class="md:flex md:items-center md:justify-center ">
      <plan-card />
      <plan-card class="ml-4" />
      <plan-card class="ml-4" />
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
