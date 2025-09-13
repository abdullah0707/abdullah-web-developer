<template>
  <div class="h-screen mx-auto text-center w-full flex flex-col items-center justify-center text-white">
    <div class="mt-7 text-7xl font-bold flex error-status" :title="error.statusCode">404</div>
    <p class="mt-7 text-6xl"> Ooops. </p>
    <p class="mt-7">{{ error.message }}</p>
    <UButton class="mt-7" color="white" variant="solid" size="xl" to="/">Go Home</UButton>
  </div>
</template>

<script setup>
  defineProps(['error'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400');
*{
  background: #131313;
  font-family: 'Fira Mono', monospace;
}
.error-status {
  animation: glitch 1s linear infinite;
  font-size: 96px;
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }

  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }

  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

div:before,
div:after {
  content: attr(title);
  position: absolute;
}

div:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {

  2%,
  64% {
    transform: translate(2px, -2px);
  }

  4%,
  60% {
    transform: translate(-2px, 2px);
  }

  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

div:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {

  2%,
  64% {
    transform: translate(-2px, 0);
  }

  4%,
  60% {
    transform: translate(-2px, 0);
  }

  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}
</style>