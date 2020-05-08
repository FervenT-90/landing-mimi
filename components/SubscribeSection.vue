<template>
   <section id="subscribe">
      <div
         class="absolute z-0 w-screen h-56 py-56 m-auto opacity-75 xl:py-64 bg-black-mimi"
      ></div>
      <div class="z-10 h-16"></div>
      <div class="z-10 flex flex-row items-center justify-around">
         <img
            class="z-10 hidden mr-20 opacity-100 lg:w-3/12 md:w-3/12 md:mr-10 md:block"
            src="/svg/newsletter.min.svg"
            alt=""
         />
         <div
            class="relative z-10 flex flex-col items-center justify-center w-64 h-auto"
         >
            <h1 class="text-4xl text-center text-white font-primary">
               Newsletter
            </h1>
            <p
               id="description"
               class="mt-4 text-base text-center text-white font-secondary"
            >
               {{ $t('subscribeSection.description') }}
            </p>
            <input
               class="w-64 h-10 p-4 mt-6 rounded shadow-xl focus:outline-none font-secondary"
               type="text"
               :placeholder="$t('subscribeSection.inputPlaceholder')"
            />
            <p
               class="mt-4 text-xs italic text-center text-white font-secondary"
            >
               {{ $t('subscribeSection.unsubscribe') }}
            </p>
            <button
               class="w-40 h-10 mt-6 font-semibold tracking-wider text-white uppercase rounded shadow-sm focus:outline-none focus:underline bg-violet-mimi hover:bg-orange-mimi"
            >
               {{ $t('subscribeSection.button') }}
            </button>
         </div>
         <img
            class="z-10 hidden ml-20 lg:w-3/12 md:w-3/12 md:ml-10 md:block"
            src="/svg/newsletterStart.min.svg"
            alt=""
         />
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style></style>
