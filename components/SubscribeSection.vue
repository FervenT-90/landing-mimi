<template>
   <section id="subscribe">
      <div
         class="absolute z-0 w-screen h-56 py-56 m-auto opacity-75 bg-black-mimi"
      ></div>
      <div class="z-10 h-16"></div>
      <div class="z-10 flex flex-row items-center justify-around">
         <img
            class="z-10 hidden mr-20 opacity-100 lg:w-3/12 md:w-3/12 md:mr-10 md:block"
            src="/svg/subscribeBirdsSvg.svg"
            alt=""
         />
         <div
            class="relative z-10 flex flex-col items-center justify-center w-64 h-auto"
         >
            <h1 class="pt-6 text-4xl text-center text-white font-primary">
               Newsletter
            </h1>
            <p class="mt-4 text-base text-center text-white font-secondary">
               Want to know about news and get started with a FREE workout?
            </p>
            <input
               class="w-64 h-10 p-4 mt-6 rounded shadow-xl focus:outline-none font-secondary"
               type="text"
               placeholder="Enter your email here..."
            />
            <p
               class="mt-4 text-xs italic text-center text-white font-secondary"
            >
               Remember, feel free to unsubscribe at any time
            </p>
            <button
               class="w-40 h-10 mt-6 font-semibold tracking-wider text-white uppercase rounded shadow-sm focus:outline-none focus:underline bg-violet-mimi hover:bg-orange-mimi"
            >
               Subscribe
            </button>
         </div>
         <img
            class="z-10 hidden ml-20 lg:w-3/12 md:w-3/12 md:ml-10 md:block"
            src="/svg/subscribeRunnerSvg.svg"
            alt=""
         />
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style></style>
