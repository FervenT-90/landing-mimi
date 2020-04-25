<template>
   <section>
      <h1 class="text-center text-4xl text-white font-primary pt-6">
         Our Team
      </h1>

      <div
         class="my-3 mb-5 md:flex-row flex flex-col justify-center items-center"
      >
         <staff-card />
         <staff-card
            img-src="https://images.unsplash.com/photo-1579119986241-5e72d26cb690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            full-name="Mike Flanagang"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
