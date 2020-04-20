<template>
   <section
      class="w-screen h-full md:h-screen md:flex-row flex flex-col justify-center items-center"
   >
      <staff-card />
      <staff-card
         img-src="https://images.unsplash.com/photo-1579119986241-5e72d26cb690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
         full-name="Mike Flanagang"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
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
