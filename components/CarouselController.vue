<template>
   <hooper class="focus:outline-none" :settings="hooperSettings">
      <slide
         ><carousel-element
            title="Personal Training"
            description="Our training sessions are performed in small groups and are always led by our coaches"
            svg-src="/svg/carouselSvgs/personalTraining.min.svg"
      /></slide>
      <slide
         ><carousel-element
            title="Book your Training"
            description="You don't have to call or stop by the box to book your workouts. From anywhere and at any time you can check availability and sign up through our mobile app"
            svg-src="/svg/carouselSvgs/bookYourTraining.min.svg"
      /></slide>
      <slide
         ><carousel-element
            title="Keep in Touch"
            description="You don't have to call or stop by the box to book your workouts. From anywhere and at any time you can check availability and sign up through our mobile app"
            svg-src="/svg/carouselSvgs/keepInTouch.min.svg"
      /></slide>
      <slide>
         <carousel-element />
      </slide>
      <hooper-navigation
         slot="hooper-addons"
         class="invisible md:visible"
      ></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
   </hooper>
</template>

<script>
import {
   Hooper,
   Slide,
   Pagination as HooperPagination,
   Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';

import CarouselElement from '@/components/CarouselElement.vue';

export default {
   name: 'CarouselController',
   components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
      CarouselElement
   },
   data() {
      return {
         hooperSettings: {
            itemsToShow: 1,
            centerMode: true,
            infiniteScroll: true,
            autoPlay: true,
            playSpeed: 4500,
            transition: 500
         }
      };
   }
};
</script>

<style>
.hooper {
   height: 470px;
}

@screen md {
   .hooper {
      height: 650px;
   }
}

@screen lg {
   .hooper {
      height: 550px;
   }
}

.hooper-slide {
   @apply text-white;
   display: flex;
   justify-content: center;
   align-items: center;
}

.hooper-indicator {
   @apply w-6;
   box-sizing: border-box;
   @apply bg-black-mimi;
   height: 1px;
}
.hooper-indicator.is-active {
   @apply bg-black-mimi;
   height: 3px;
}

.hooper-prev:focus {
   @apply outline-none;
}

.hooper-prev svg {
   @apply text-black-mimi;
   height: 50px;
   width: 50px;
}

.hooper-next:focus {
   @apply outline-none;
}

.hooper-next svg {
   @apply text-black-mimi;
   height: 50px;
   width: 50px;
}

/* .hooper-pagination {
} */

/* .hooper-track {
}
.hooper-list {
} */
</style>
