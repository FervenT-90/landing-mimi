<template>
   <div class="flex flex-col lg:flex lg:flex-row">
      <div class="p-2">
         <img
            :src="
               svgSrc !== '' ? svgSrc : '/svg/carouselSvgs/notFoundSVG.min.svg'
            "
            :alt="title"
         />
      </div>
      <div
         class="flex flex-col items-center justify-center mx-5 mt-10 lg:w-2/5 "
      >
         <h1 class="text-2xl font-primary">{{ title }}</h1>
         <p class="mt-3 text-center font-secondary">{{ description }}</p>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      title: {
         type: String,
         default: 'Title'
      },
      description: {
         type: String,
         default: 'Some default description'
      },
      svgSrc: {
         type: String,
         default: ''
      }
   },
   data() {
      return {
         svg: this.svgSrc
      };
   }
};
</script>

<style scoped></style>
