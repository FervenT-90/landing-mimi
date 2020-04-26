<template>
   <div class="flex flex-col items-center justify-center mb-6 md:flex-row">
      <img class="my-4 md:mr-24" :src="svgSrc" :alt="alt" />
      <ul class="text-lg text-center text-white font-secondary">
         <li v-for="(time, key) of timetable" :key="key">
            {{ time }}
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   props: {
      svgSrc: {
         type: String,
         default: '/svg/defaultSchedule.min.svg'
      },
      alt: {
         type: String,
         default: 'Default shedule icon'
      },
      timetable: {
         type: Array,
         default: () => [
            '00:00 - 00:00',
            '00:00 - 00:00',
            '00:00 - 00:00',
            '00:00 - 00:00'
         ]
      }
   }
};
</script>

<style scoped></style>
