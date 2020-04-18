<template>
   <div
      class="flex flex-col items-center justify-center w-2/12 p-5 rounded-md shadow-md"
   >
      <h1 class="mb-2 text-4xl font-semibold text-center font-primary">
         {{ title }}
      </h1>
      <div
         class="flex flex-col items-center justify-center w-40 h-40 my-3 text-2xl text-center text-white rounded-full font-secondary gradient"
      >
         <h4 class="text-4xl font-medium">{{ price }} {{ currency }}</h4>
         <h5>/{{ pricePer }}</h5>
      </div>
      <div class="my-5 text-center font-secondary">
         <p>{{ description }}</p>
      </div>
      <button
         class="hidden px-3 py-1 font-semibold tracking-wider text-white uppercase rounded shadow bg-violet-mimi focus:outline-none focus:underline sm:block hover:bg-orange-mimi active:bg-teal-800"
      >
         Start now!
      </button>
   </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
   props: {
      title: {
         type: String,
         default: 'Title'
      },
      description: {
         type: String,
         default: 'Some description about the plan'
      },
      price: {
         type: String,
         default: '20'
      },
      pricePer: {
         type: String,
         default: 'Month'
      },
      currency: {
         type: String,
         default: '€'
      }
   }
});
</script>

<style scoped></style>
