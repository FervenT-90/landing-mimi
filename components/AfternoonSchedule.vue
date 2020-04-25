<template>
   <div class="flex flex-col items-center justify-center my-6 md:flex-row">
      <img class="my-4 md:mr-24" :src="svg" alt="Afternoon icon" />
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
      svg: {
         type: String,
         default: '/svg/afternoon.min.svg'
      },
      timetable: {
         type: Array,
         default: () => [
            '16:30 - 17:30',
            '17:30 - 18:30',
            '19:00 - 20:00',
            '20:00 - 21:00'
         ]
      }
   }
};
</script>

<style scoped></style>
