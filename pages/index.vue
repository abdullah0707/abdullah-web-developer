<template>

  <div
    class="custom-section h-full uppercase lg:text-4xl md:text3xl sm:text2xl text-white flex justify-center items-center flex-col overflow-scroll absolute z-10 gap-5 w-full">
    <div class=" space-y-6 font-bold w-fit">

      <div class="showup text-center tracking-widest">ABDULLAH MOHAMED</div>
      <p class="slogan mx-auto w-fit mb-0">
        front-end NUXT.JS
      </p>
      <div class="showup text-center">
        <p class="my-0 mx-auto" style="letter-spacing: .6em;">developer</p>
      </div>
    </div>
    <div class="container-share text-sm sm:text-lg">
      <p class=" text-center mb-3 text-lg">
        Share
        <hr class="w-7 border-yellow-400 border-2 rounded-r-lg text-center mb-3 mx-auto">
        <i class="fa-solid fa-angles-down animate-bounce"></i>
      </p>
      <p class="flex sm:gap-4 gap-2">
        <SocialShare network="email" :styled="false" :label="false" class="hover:text-yellow-400" />
        <span class="relative flex ">
          <span class="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75 rounded-full"></span>
          <span class="w-1">|</span>
        </span>
        <SocialShare network="whatsapp" :styled="false" :label="false" class="hover:text-yellow-400 " />
        <span class="relative flex text-md">
          <span class="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75 rounded-full"></span>
          <span class="w-1">|</span>
        </span>
        <SocialShare network="facebook" :styled="false" :label="false" class="hover:text-yellow-400 " />
        <span class="relative flex ">
          <span class="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75 rounded-full"></span>
          <span class="w-1">|</span>
        </span>
        <SocialShare network="twitter" :styled="false" :label="false" class="hover:text-yellow-400" />
        <span class="relative flex ">
          <span class="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75 rounded-full"></span>
          <span class="w-1">|</span>
        </span>
        <SocialShare network="linkedin" :styled="false" :label="false" class="hover:text-yellow-400" />
      </p>
    </div>
  </div>
  <div class="shadow-title">Welcome to Portfolio</div>
</template>

<script setup>
useHead({
  titleTemplate: "%s Home",
})
definePageMeta({
  layout: 'app'
})
</script>
<style scoped>
.showup {
  animation: showup 7s;
}


@keyframes showup {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.slogan {
  position: relative;
  overflow: hidden;
  height: 1.25em;
  width: 0em;
  border-right: .125em solid #39F;
  box-sizing: content-box;
  letter-spacing: .15em;
  white-space: nowrap;
  animation-name: blink-start, typing, blink-end;
  animation-duration: 1s, 3.5s, 1s;
  animation-timing-function: linear, steps(40, end), linear;
  animation-delay: 1s, 1s, 2s;
  animation-iteration-count: 1, 1, infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;

}

.slogan span {
  overflow: hidden;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-start {

  from,
  to {
    border-color: #39F;
  }

  50% {
    border-color: transparent;
  }
}

@keyframes blink-end {

  from,
  to {
    border-color: #39F;
  }

  100% {
    border-color: transparent;
  }
}

.animate-ping {
  animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {

  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-bounce {
  animation: bounce 1.5s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>