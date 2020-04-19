<template>
   <div>
      <!-- <nav-bar /> -->
      <staff-card />
   </div>
</template>

<script lang="ts">
import Vue from 'vue';
/* import NavBar from '@/components/NavBar.vue'; */
import StaffCard from '@/components/StaffCard.vue';
export default Vue.extend({
   components: {
      /* NavBar, */
      StaffCard
   }
});
</script>

<style></style>
