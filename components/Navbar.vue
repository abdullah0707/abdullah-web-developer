<template>
  <div class="navbar-action absolute z-50 w-full max-w-full min-w-fit" :class="{ active: isActive }"
    @click="isActive = !isActive">
    <div class="menu-icon hover-target">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>
    <ul class="nav 2xl:w-2/12 xl:w-1/4 lg:w-1/3 md:w-6/12 w-full flex items-end justify-center h-full flex-col bg-slate-700">
      <li >
        <NuxtLink v-for="item in navigation" :key="item.name" @title="item.name" :to="item.href" :data-name="item.name"
          class="glitch-btn my-16">

          <div class="text w-full flex justify-between">{{ item.name }}<span class="arrow-left">
              <i class="fa-solid fa-angle-right fa-sm ps-4 text-end"></i>
            </span></div>

          <div class="mask mask1">
            <span>{{ item.name }}</span>
          </div>

          <div class="mask mask2">
            <span>{{ item.name }}</span>
          </div>

          <div class="mask mask3">
            <span>{{ item.name }}</span>
          </div>
        </NuxtLink>
      </li>
      <!-- <a class="glitch-btn" href="#" target="_blank">
        <div class="text">ABOUT ME<span class="arrow-left">&nbsp></span></div>

        <div class="mask mask1">
          <span>ABOUT ME</span>
        </div>

        <div class="mask mask2">
          <span>ABOUT ME</span>
        </div>

        <div class="mask mask3">
          <span>ABOUT ME</span>
        </div>
      </a> -->
    </ul>
  </div>

  <div class="menu-nav"></div>
</template>

<script setup>
const isActive = ref(false);
const navigation = ref([
  { name: "HOME", href: "/" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
  { name: "Service", href: "service" },
]);
</script>
<style scoped>

@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");


a {
  text-decoration: none;
  color: #ffd000;
}

.glitch-btn {
  display: inline-block;
  transform: translate(-50%, -50%);
  font-size: 36px;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  color: #afafaf;
}

.glitch-btn .mask {
  position: absolute;
  width: 100%;
  overflow: arrow-left;
  display: none;
}

.glitch-btn .mask span {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 100%;
  top: -100%;
}

.glitch-btn:hover {
  color: #4e4e4e;
}

.glitch-btn:hover:before {
  background: #ffd000;
  transform: translateX(120%) scaleX(3) scaleY(0.8);
}

.glitch-btn:before {
  content: "";
  position: absolute;
  left: -15%;
  top: -20%;
  background: #4e4e4e;
  width: 40%;
  height: 140%;
  padding: 0px;
  z-index: -1;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.glitch-btn:after {
  content: "";
  position: absolute;
  left: -5%;
  top: 105%;
  background: #ffd000;
  width: 112%;
  height: 10%;
  padding: 0px;
  z-index: -1;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.glitch-btn:hover:after {
  background: #dedede;
  transform: translateX(-55%) translateY(-600%) rotate(90deg) scaleX(0.3);
}

.glitch-btn .mask1 {
  height: 20%;
  top: 19%;
}

.glitch-btn .mask2 {
  height: 30%;
  top: 35%;
}

.glitch-btn .mask3 {
  height: 57%;
  top: 63%;
}

.arrow-left {
  opacity: 0;
}

.glitch-btn:hover .mask1 {
  animation: glitchin1 0.2s 0.3s both;
}

.glitch-btn:hover .mask2 {
  animation: glitchin2 0.2s 0.2s both;
}

.glitch-btn:hover .mask3 {
  animation: glitchin1 0.2s 0.2s both;
}

.glitch-btn:hover .arrow-left {
  animation: fade-in 0.1s 0.2s forwards;
}

.glitch-btn:hover .text {
  animation: fade-in 0.1s 0.2s forwards;

}

.glitch-btn:hover .mask {
  display: block;
}

@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes glitchin1 {
  100% {
    opacity: 0;
    transform: translate(0px, 0px);
  }

  95% {
    opacity: 1;
    -webkit-transform: translate(0.5px, 0.05px);
    transform: translate(0.5px, 0.05px);
  }

  90% {
    -webkit-transform: translate(0.6px, -0.3px);
    transform: translate(0.6px, -0.3px);
  }

  85% {
    -webkit-transform: translate(1.2px, 0px);
    transform: translate(1.2px, 0px);
  }

  80% {
    -webkit-transform: translate(1.2px, 0.2px);
    transform: translate(1.2px, 0.2px);
  }

  75% {
    -webkit-transform: translate(0.5px, 1px);
    transform: translate(0.5px, 1px);
  }

  70% {
    -webkit-transform: translate(0.3px, 1.2px);
    transform: translate(0.3px, 1.2px);
  }

  65% {
    -webkit-transform: translate(-2.1px, 0.7px);
    transform: translate(-2.1px, 0.7px);
  }

  60% {
    -webkit-transform: translate(3.6px, 0.4px);
    transform: translate(3.6px, 0.4px);
  }

  55% {
    -webkit-transform: translate(0.45px, 1.8px);
    transform: translate(0.45px, 1.8px);
  }

  50% {
    -webkit-transform: translate(-3px, -1px);
    transform: translate(-3px, -1px);
  }

  45% {
    -webkit-transform: translate(-4.4px, 1.1px);
    transform: translate(-4.4px, 1.1px);
  }

  40% {
    -webkit-transform: translate(-4.2px, 2.4px);
    transform: translate(-4.2px, 2.4px);
  }

  35% {
    -webkit-transform: translate(2.6px, 1.3px);
    transform: translate(2.6px, 1.3px);
  }

  30% {
    -webkit-transform: translate(-1.4px, 2.8px);
    transform: translate(-1.4px, 2.8px);
  }

  25% {
    -webkit-transform: translate(6px, 0.75px);
    transform: translate(6px, 0.75px);
  }

  20% {
    -webkit-transform: translate(0px, -1.6px);
    transform: translate(0px, -1.6px);
  }

  15% {
    -webkit-transform: translate(-5.95px, -0.85px);
    transform: translate(-5.95px, -0.85px);
  }

  10% {
    -webkit-transform: translate(3.6px, 3.6px);
    transform: translate(3.6px, 3.6px);
  }

  5% {
    -webkit-transform: translate(-0.95px, -0.95px);
    transform: translate(-0.95px, -0.95px);
  }

  1% {
    opacity: 1;
  }
}

@keyframes glitchin1 {
  100% {
    opacity: 0;
    transform: translate(0px, 0px);
  }

  95% {
    opacity: 1;
    -webkit-transform: translate(0.5px, 0.05px);
    transform: translate(0.5px, 0.05px);
  }

  90% {
    -webkit-transform: translate(0.6px, -0.3px);
    transform: translate(0.6px, -0.3px);
  }

  85% {
    -webkit-transform: translate(1.2px, 0px);
    transform: translate(1.2px, 0px);
  }

  80% {
    -webkit-transform: translate(1.2px, 0.2px);
    transform: translate(1.2px, 0.2px);
  }

  75% {
    -webkit-transform: translate(0.5px, 1px);
    transform: translate(0.5px, 1px);
  }

  70% {
    -webkit-transform: translate(0.3px, 1.2px);
    transform: translate(0.3px, 1.2px);
  }

  65% {
    -webkit-transform: translate(-2.1px, 0.7px);
    transform: translate(-2.1px, 0.7px);
  }

  60% {
    -webkit-transform: translate(3.6px, 0.4px);
    transform: translate(3.6px, 0.4px);
  }

  55% {
    -webkit-transform: translate(0.45px, 1.8px);
    transform: translate(0.45px, 1.8px);
  }

  50% {
    -webkit-transform: translate(-3px, -1px);
    transform: translate(-3px, -1px);
  }

  45% {
    -webkit-transform: translate(-4.4px, 1.1px);
    transform: translate(-4.4px, 1.1px);
  }

  40% {
    -webkit-transform: translate(-4.2px, 2.4px);
    transform: translate(-4.2px, 2.4px);
  }

  35% {
    -webkit-transform: translate(2.6px, 1.3px);
    transform: translate(2.6px, 1.3px);
  }

  30% {
    -webkit-transform: translate(-1.4px, 2.8px);
    transform: translate(-1.4px, 2.8px);
  }

  25% {
    -webkit-transform: translate(6px, 0.75px);
    transform: translate(6px, 0.75px);
  }

  20% {
    -webkit-transform: translate(0px, -1.6px);
    transform: translate(0px, -1.6px);
  }

  15% {
    -webkit-transform: translate(-5.95px, -0.85px);
    transform: translate(-5.95px, -0.85px);
  }

  10% {
    -webkit-transform: translate(3.6px, 3.6px);
    transform: translate(3.6px, 3.6px);
  }

  5% {
    -webkit-transform: translate(-0.95px, -0.95px);
    transform: translate(-0.95px, -0.95px);
  }

  1% {
    opacity: 1;
  }
}

@-webkit-keyframes glitchin2 {
  100% {
    opacity: 0;
    transform: translate(0px, 0px);
  }

  95% {
    opacity: 1;
    -webkit-transform: translate(-0.5px, -0.05px);
    transform: translate(-0.5px, -0.05px);
  }

  90% {
    -webkit-transform: translate(-0.6px, 0.3px);
    transform: translate(-0.6px, 0.3px);
  }

  85% {
    -webkit-transform: translate(-1.2px, 0px);
    transform: translate(-1.2px, 0px);
  }

  80% {
    -webkit-transform: translate(-1.2px, -0.2px);
    transform: translate(-1.2px, -0.2px);
  }

  75% {
    -webkit-transform: translate(-0.5px, -1px);
    transform: translate(-0.5px, -1px);
  }

  70% {
    -webkit-transform: translate(-0.3px, -1.2px);
    transform: translate(-0.3px, -1.2px);
  }

  65% {
    -webkit-transform: translate(2.1px, -0.7px);
    transform: translate(2.1px, -0.7px);
  }

  60% {
    -webkit-transform: translate(-3.6px, -0.4px);
    transform: translate(-3.6px, -0.4px);
  }

  55% {
    -webkit-transform: translate(-0.45px, -1.8px);
    transform: translate(-0.45px, -1.8px);
  }

  50% {
    -webkit-transform: translate(3px, 1px);
    transform: translate(3px, 1px);
  }

  45% {
    -webkit-transform: translate(4.4px, -1.1px);
    transform: translate(4.4px, -1.1px);
  }

  40% {
    -webkit-transform: translate(4.2px, -2.4px);
    transform: translate(4.2px, -2.4px);
  }

  35% {
    -webkit-transform: translate(-2.6px, -1.3px);
    transform: translate(-2.6px, -1.3px);
  }

  30% {
    -webkit-transform: translate(1.4px, -2.8px);
    transform: translate(1.4px, -2.8px);
  }

  25% {
    -webkit-transform: translate(-6px, -0.75px);
    transform: translate(-6px, -0.75px);
  }

  20% {
    -webkit-transform: translate(0px, 1.6px);
    transform: translate(0px, 1.6px);
  }

  15% {
    -webkit-transform: translate(5.95px, 0.85px);
    transform: translate(5.95px, 0.85px);
  }

  10% {
    -webkit-transform: translate(-3.6px, -3.6px);
    transform: translate(-3.6px, -3.6px);
  }

  5% {
    -webkit-transform: translate(0.95px, 0.95px);
    transform: translate(0.95px, 0.95px);
  }

  1% {
    opacity: 1;
  }
}

@keyframes glitchin2 {
  100% {
    opacity: 0;
    transform: translate(0px, 0px);
  }

  95% {
    opacity: 1;
    -webkit-transform: translate(-0.5px, -0.05px);
    transform: translate(-0.5px, -0.05px);
  }

  90% {
    -webkit-transform: translate(-0.6px, 0.3px);
    transform: translate(-0.6px, 0.3px);
  }

  85% {
    -webkit-transform: translate(-1.2px, 0px);
    transform: translate(-1.2px, 0px);
  }

  80% {
    -webkit-transform: translate(-1.2px, -0.2px);
    transform: translate(-1.2px, -0.2px);
  }

  75% {
    -webkit-transform: translate(-0.5px, -1px);
    transform: translate(-0.5px, -1px);
  }

  70% {
    -webkit-transform: translate(-0.3px, -1.2px);
    transform: translate(-0.3px, -1.2px);
  }

  65% {
    -webkit-transform: translate(2.1px, -0.7px);
    transform: translate(2.1px, -0.7px);
  }

  60% {
    -webkit-transform: translate(-3.6px, -0.4px);
    transform: translate(-3.6px, -0.4px);
  }

  55% {
    -webkit-transform: translate(-0.45px, -1.8px);
    transform: translate(-0.45px, -1.8px);
  }

  50% {
    -webkit-transform: translate(3px, 1px);
    transform: translate(3px, 1px);
  }

  45% {
    -webkit-transform: translate(4.4px, -1.1px);
    transform: translate(4.4px, -1.1px);
  }

  40% {
    -webkit-transform: translate(4.2px, -2.4px);
    transform: translate(4.2px, -2.4px);
  }

  35% {
    -webkit-transform: translate(-2.6px, -1.3px);
    transform: translate(-2.6px, -1.3px);
  }

  30% {
    -webkit-transform: translate(1.4px, -2.8px);
    transform: translate(1.4px, -2.8px);
  }

  25% {
    -webkit-transform: translate(-6px, -0.75px);
    transform: translate(-6px, -0.75px);
  }

  20% {
    -webkit-transform: translate(0px, 1.6px);
    transform: translate(0px, 1.6px);
  }

  15% {
    -webkit-transform: translate(5.95px, 0.85px);
    transform: translate(5.95px, 0.85px);
  }

  10% {
    -webkit-transform: translate(-3.6px, -3.6px);
    transform: translate(-3.6px, -3.6px);
  }

  5% {
    -webkit-transform: translate(0.95px, 0.95px);
    transform: translate(0.95px, 0.95px);
  }

  1% {
    opacity: 1;
  }
}
</style>