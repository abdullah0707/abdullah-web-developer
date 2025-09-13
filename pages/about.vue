<template>
  <div class="custom-section h-screen overflow-scroll absolute z-10 left-0 right-0">
    <div class="mt-3 absolute z-10 md:w-11/12 w-10/12 ">
      <div class="flex lg:flex-row max-lg:flex-col-reverse items-center">
        <div class="basis-1/2 max-lg:basis-3/4 text-white ">
          <h1
            class="uppercase font-semibold flex text-4xl lg:text-2xl text-white max-sm:text-sm slide-in-top items-center">
            <div class="content__container">
              <div class="content__container__text text-flicker-in-glow">
                I am a Front-End
              </div>
              <ul class="content__container__list inline-block px-2">
                <li class="content__container__list__item leading-4">W E B</li>
                <li class="content__container__list__item leading-4">
                  v u e . j s
                </li>
                <li class="content__container__list__item leading-4">
                  n u x t . j s
                </li>
                <li class="content__container__list__item leading-4">
                  D e v e l o p e r
                </li>
              </ul>
            </div>
          </h1>
          <div class="text-sm md:text-base ">
            <p class="p-3 font-medium">
              Fueled by a deep passion for creating seamless and visually captivating user experiences,
              I specialize as
              a front-end developer in crafting responsive, accessible, and high-performing web applications tailored to
              the unique needs of each client. With extensive expertise in HTML, CSS, JavaScript, front-end frameworks
              like Vue.Js and Nuxt.Js, and modern web development tools, I'm dedicated to delivering cutting-edge
              digital solutions that engage and delight users.
            </p>
            <div class="flex justify-between max-lg:flex-col slide-in-bottom text-lg">
              <p class="text-yellow-400">
                <NuxtLink class="underlined underlined--right" target="_blank"
                  to="https://drive.google.com/file/d/1z3GWygWifqJiJ_EcQQnrA_GLA1kSOV0q/view?usp=sharing">
                  Download my latest CV
                </NuxtLink>
              </p>
              <p class="text-yellow-400">
                <NuxtLink class="underlined underlined--left" to="/contact">
                  Contact with me
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
        <div class="basis-1/2 max-lg:basis-1/4 flex justify-center items-center slide-in-right z-0">
          <!-- <img class="w-5/12 max-w-min rounded-full max-md:m-5 bg-stone-500 user mb-6" src="../assets/image/p.jpg" /> -->
          <img class="avater-img xl:w-5/12 lg:w-7/12 md:w-5/12 w-8/12 max-w-min rounded-full max-lg:m-5" src='../assets/image/img2.png' />
        </div>
      </div>
      <!-- <h2 class="text-center font-semibold text-6xl text-white mb-4 mt-10 md:mt-10 lg:mt-0">
        My Skills
      </h2> -->
      <div class="flex lg:flex-row max-lg:flex-col items-center gap-10 justify-between w-full mt-10">
        <div class="w-11/12 max-w-full">
          <p class="text-xl mb-4 text-white font-medium">
            Technical Skills
            <hr class="w-9 border-yellow-400 border-2 rounded-r-lg">
          </p>
          <template v-for="technicalSkill in technicalSkills" :key="technicalSkill.name">
            <p class="label absolute text-sm md:text-base text-cool-300">
              <span class="font-bold px-1">
                {{ technicalSkill.name }}
              </span>
            </p>
            <UProgress class="my-4" color="amber" indicator :value="technicalSkill.i" />
          </template>
        </div>
        <div class="w-11/12 max-w-full">
          <p class="text-xl mb-4 text-white font-medium">
            Personal Skills
            <hr class="w-9 border-yellow-400 border-2 rounded-r-lg">
          </p>
          <template v-for="personalSkill in personalSkills" :key="personalSkill.name">
            <p class="label absolute text-xs md:text-base text-cool-300">
              <span class="font-bold px-1">
                {{ personalSkill.name }}
              </span>
            </p>
            <UProgress class="my-4" color="amber" indicator :value="personalSkill.i" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s About",
});
definePageMeta({
  layout: "app",
});
const technicalSkills = ref([
  { name: "HTML + CSS", i: "97" },
  { name: "Bootstrap", i: "97" },
  { name: "JavaScript", i: "97" },
  { name: "Vue.js", i: "93" },
  { name: "Vuex", i: "93" },
  { name: "Nuxt.js", i: "95" },
  { name: "Restful API/Axios", i: "96" },
]);
const personalSkills = ref([
  { name: "Self-Learning", i: "95" },
  { name: "Work for full time", i: "95" },
  { name: "Work with team", i: "95" },
  { name: "Adapt quickly", i: "95" },
  { name: "Knowledge of design rules", i: "95" },
  { name: "handle with fast situations", i: "95" },
  { name: "Learning and working under stress", i: "95" },
]);
</script>

<style>
.avater-img {
  --s: 10%;
  /* image size */
  --b: 6px;
  /* border thickness */
  --c: #e9ecef;
  /* border color */
  --cb: #e9ecef;
  /* background color */
  --f: 1;
  /* initial scale */


  aspect-ratio: 1;
  padding-top: calc(var(--s)/5);
  cursor: pointer;
  border-radius: 0 0 999px 999px;
  --_g: 50%/calc(100%/var(--f)) 100% no-repeat content-box;
  --_o: calc((1/var(--f) - 1)*var(--s)/2 - var(--b));

  background:
    radial-gradient(circle closest-side,
      var(--cb) calc(99% - var(--b)), var(--c) calc(100% - var(--b)) 99%, #0000) var(--_g);
  -webkit-mask:
    linear-gradient(#000 0 0) no-repeat 50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%,
    radial-gradient(circle closest-side, #000 99%, #0000) var(--_g);
  transform: scale(var(--f));
  transition: .5s;
}

.avater-img:hover {
  --f: 1.3;
  /* hover scale */
}
</style>