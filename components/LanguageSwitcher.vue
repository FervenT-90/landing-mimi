<template>
   <div
      class="relative items-center text-white md:px-3 md:ml-5 md:justify-center md:flex md:border-l-2 md:border-r-2 md:border-orange-mimi"
   >
      <p class="hidden mr-2 tracking-wider font-primary md:block">
         {{ selectedLanguage }}
      </p>
      <button
         class="relative z-50 block w-8 h-8 mr-3 overflow-hidden md:mr-0 focus:outline-none"
         @click="isOpen = !isOpen"
      >
         <img
            class="object-cover w-full h-full"
            src="/svg/languageIcon.svg"
            alt="Language"
         />
      </button>
      <button
         v-if="isOpen"
         class="fixed inset-0 z-50 w-full h-full bg-black opacity-50 cursor-default"
         tabindex="-1"
         @click="isOpen = false"
      ></button>
      <div
         v-if="isOpen"
         class="absolute left-0 right-0 z-50 w-16 mt-4 rounded-lg shadow-xl md:mt-16 bg-orange-mimi"
      >
         <a
            href="#"
            class="block px-4 py-2 text-center text-black-mimi hover:text-white"
            :class="selectedLanguage === 'EN' ? 'underline' : ''"
            @click="swapToEnglish()"
            >EN</a
         >
         <a
            href="#"
            class="block px-4 py-2 text-center text-black-mimi hover:text-white"
            :class="selectedLanguage === 'ES' ? 'underline' : ''"
            @click="swapToSpanish()"
            >ES</a
         >
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isOpen: false,
         selectedLanguage: 'EN'
      };
   },
   methods: {
      swapToEnglish() {
         this.selectedLanguage = 'EN';
         this.isOpen = false;
      },
      swapToSpanish() {
         this.selectedLanguage = 'ES';
         this.isOpen = false;
      }
   }
};
</script>

<style scoped></style>
