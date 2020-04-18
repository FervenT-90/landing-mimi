<template>
   <div>
      <nav-bar />
   </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
   components: {
      NavBar
   }
});
</script>

<style>
.gradient {
   background: linear-gradient(90deg, #fe9c42 0%, #7e21f5 100%);
}
</style>
