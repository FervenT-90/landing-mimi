<template>
   <div
      class="w-64 h-auto rounded shadow-lg p-5 mt-4 flex flex-col bg-white justify-center items-center mx-8"
   >
      <img class="my-3 rounded-full w-24 h-24" :src="imgSrc" alt="hola" />
      <div class="p-4 font-bold text-xl mb-2">
         <h1 class="text-gray-700 font-primary text-base text-2xl">
            {{ fullName }}
         </h1>
      </div>

      <p class="text-gray-700 font-secondary text-center text-base">
         {{ description }}
      </p>

      <div class="flex flex-row py-5">
         <span class="py-3 px-5 inline-block">
            <a target="_blank" :href="facebookUrl"
               ><img
                  class="w-12 h-8"
                  src="../static/svg/facebookMinIcon.svg"
                  alt=""
               />
            </a>
         </span>
         <span class="py-3 px-5 inline-block text-gray-700">
            <a target="_blank" :href="twitterUrl"
               ><img
                  class="w-12 h-8"
                  src="../static/svg/twitterMinIcon.svg"
                  alt=""
               />
            </a>
         </span>
         <span class="py-3 px-5 inline-block text-gray-700">
            <a target="_blank" :href="instagramUrl"
               ><img
                  class="w-12 h-8"
                  src="../static/svg/instagramMinIcon.svg"
                  alt=""
               />
            </a>
         </span>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
   name: 'StaffCard',
   props: {
      imgSrc: {
         type: String,
         default:
            'https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
      },
      fullName: {
         type: String,
         default: 'John Doe'
      },
      description: {
         type: String,
         default: 'I am shy 😳, meet me in person!'
      },
      facebookUrl: {
         type: String,
         default: 'https://www.facebook.com'
      },
      twitterUrl: {
         type: String,
         default: 'https://www.twitter.com'
      },
      instagramUrl: {
         type: String,
         default: 'https://www.instagram.com'
      }
   }
});
</script>

<style scoped></style>
