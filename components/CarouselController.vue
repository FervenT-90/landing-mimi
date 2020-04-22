<template>
   <hooper class="focus:outline-none" :settings="hooperSettings">
      <slide>1</slide>
      <slide>2</slide>
      <slide>3</slide>
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

export default {
   name: 'CarouselController',
   components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation
   },
   data() {
      return {
         hooperSettings: {
            itemsToShow: 1,
            // centerMode: true,
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
   height: 300px;
}
@screen sm {
   .hooper {
      height: 400px;
   }
}
@screen md {
   .hooper {
      height: 500px;
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
