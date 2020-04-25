<template>
   <div
      class="flex flex-col items-center justify-center w-full p-5 my-2 bg-white rounded-md shadow-md md:mx-3 lg:my-0 lg:w-2/12"
   >
      <h1 class="mb-2 text-4xl font-semibold text-center font-primary">
         {{ title }}
      </h1>
      <div
         class="flex flex-col items-center justify-center w-40 h-40 my-3 text-2xl text-center text-white rounded-full md:my-1 md:text-lg md:w-32 md:h-32 font-secondary gradient"
      >
         <h4 class="text-2xl font-medium">{{ price }} {{ currency }}</h4>
         <h5>/{{ pricePer }}</h5>
      </div>
      <div class="mt-5 italic text-center font-secondary">
         <p>{{ description }}</p>
      </div>
      <div class="my-5">
         <ul class="text-center font-secondary">
            <li
               v-for="(service, key) of services"
               :key="key"
               :class="{ 'font-bold': key === 0 }"
            >
               {{ service }}
            </li>
         </ul>
      </div>
      <button
         class="px-3 py-1 font-semibold tracking-wider text-white uppercase rounded shadow bg-violet-mimi focus:outline-none focus:underline hover:bg-orange-mimi active:bg-teal-800"
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
         default:
            'Some description about the plan Some description about the plan Some description about the plan Some description about the plan Some description about the plan'
      },
      price: {
         type: Number,
         default: 20
      },
      pricePer: {
         type: String,
         default: 'Month'
      },
      currency: {
         type: String,
         default: '€'
      },
      services: {
         type: Array,
         default: () => ['Towel included', 'Small bottle of water']
      }
   }
});
</script>

<style scoped></style>
