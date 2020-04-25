<template>
   <div class="flex flex-col items-center justify-center my-6 md:flex-row">
      <img class="my-4 md:mr-24" :src="svg" alt="Morning icon" />
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
         default: '/svg/morning.min.svg'
      },
      timetable: {
         type: Array,
         default: () => ['09:00 - 10:00', '10:30 - 11:30', '11:00 - 13:00']
      }
   }
};
</script>

<style scoped></style>
