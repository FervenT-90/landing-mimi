<template>
   <section class="my-16">
      <h1 class="pt-6 text-4xl text-center text-white font-primary">
         Our Schedule
      </h1>
      <schedule-element
         class="mt-3"
         svg-src="/svg/morning.min.svg"
         alt="Morning Icon"
         :timetable="['09:00 - 10:00', '10:30 - 11:30', '11:00 - 13:00']"
      />
      <schedule-element
         svg-src="/svg/afternoon.min.svg"
         alt="Afternoon Icon"
         :timetable="[
            '16:30 - 17:30',
            '17:30 - 18:30',
            '19:00 - 20:00',
            '20:00 - 21:00'
         ]"
      />
   </section>
</template>

<script>
import ScheduleElement from '@/components/ScheduleElement.vue';

export default {
   components: {
      ScheduleElement
   }
};
</script>

<style scoped></style>
