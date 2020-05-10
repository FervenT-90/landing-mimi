<template>
   <div
      class="flex flex-col items-center justify-center w-64 p-5 mx-8 mt-4 bg-white rounded shadow-lg"
   >
      <picture>
         <source type="image/webp" :srcset="imgSrc" />
         <img
            class="w-48 h-32 my-3 rounded-full"
            :src="jpgSource"
            alt="Staff image"
         />
      </picture>
      <h1
         class="mt-6 text-base text-2xl font-bold text-center text-gray-700 font-primary"
      >
         {{ fullName }}
      </h1>
      <div
         class="flex flex-col items-center justify-center h-48 p-4 mb-2 text-center"
      >
         <p class="mt-3 text-base text-gray-700 font-secondary">
            {{ description }}
         </p>
      </div>

      <div class="flex flex-row py-5">
         <span class="inline-block px-5 py-3">
            <a target="_blank" :href="facebookUrl"
               ><img
                  class="w-12 h-8"
                  src="../static/svg/facebookMinIcon.svg"
                  alt=""
               />
            </a>
         </span>
         <span class="inline-block px-5 py-3 text-gray-700">
            <a target="_blank" :href="twitterUrl"
               ><img
                  class="w-12 h-8"
                  src="../static/svg/twitterMinIcon.svg"
                  alt=""
               />
            </a>
         </span>
         <span class="inline-block px-5 py-3 text-gray-700">
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
   },
   data() {
      return {
         jpgSource: this.imgSrc.split('.')[0].concat('.jpg')
      };
   }
});
</script>

<style scoped></style>
