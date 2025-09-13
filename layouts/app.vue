<template>
   <div style="font-family: 'Allerta Stencil', sans-serif;">
      <img class="w-24 mx-auto hidden absolute top-0 right-0" src="../assets/image/logo-home.png" alt="Logo">
      <Navbar />
      <!-- <div class="bg-text-container w-full overflow-hidden">
         <div class="animate-text">
            <span class="text-animate-bg">Front-End Developer&nbsp;</span>
            <span class="text-animate-bg">abdullah mohamed&nbsp;</span>
         </div>
         <div class="animate-text left">
            <span class="text-animate-bg">abdullah mohamed&nbsp;</span>
            <span class="text-animate-bg">Front-End Developer&nbsp;</span>
         </div>
         <div class="animate-text">
            <span class="text-animate-bg">Front-End Developer&nbsp;</span>
            <span class="text-animate-bg">abdullah mohamed&nbsp;</span>
         </div>
      </div> -->
      <div id="particles-js" class="bg-text-container w-full h-full overflow-hidden"></div>
      <slot />
      <div class="_social-links">
         <ul class="_links-list">
            <li class="_social-link">
               <NuxtLink to="https://www.facebook.com/abdullah.mohammed93" target="_blank">
                  <i class="fa-brands fa-square-facebook text-blue-800 fa-1x"></i>
               </NuxtLink>
            </li>
            <li class="_social-link">
               <NuxtLink to="https://www.linkedin.com/in/abdullah-mohammed-b47234121/" target="_blank"><i
                     class="fa-brands fa-linkedin text-blue-900 fa-1x"></i></NuxtLink>
            </li>
            <li class="_social-link">
               <NuxtLink to="https://github.com/abdullah0707" target="_blank">
                  <i class="fa-brands fa-github fa-1x"></i>
               </NuxtLink>
            </li>
            <li class="_social-link">
               <NuxtLink to="https://wa.me/qr/ZPSAINJL44YEP1" target="_blank">
                  <i class="fa-brands fa-square-whatsapp text-green-700 fa-1x"></i>
               </NuxtLink>
            </li>
            <li class="_social-link">
               <NuxtLink to="tel:+201094242767">
                  <i class="fa-solid fa-square-phone text-cyan-700 fa-1x"></i>
               </NuxtLink>
            </li>
         </ul>
      </div>
   </div>
</template>

<script setup>
onMounted(() => {
   // child.value will hold an instance of <Child />
   particlesJS("particles-js", {
      "particles": {
         "number": {
            "value": 33,
            "density": {
               "enable": true,
               "value_area": 1420.4657549380909
            }
         },
         "color": {
            "value": "#ffffff"
         },
         "shape": {
            "type": "triangle",
            "stroke": {
               "width": 0,
               "color": "#000000"
            },
            "polygon": {
               "nb_sides": 5
            },
            "image": {
               "src": "img/github.svg",
               "width": 100,
               "height": 100
            }
         },
         "opacity": {
            "value": 0.06313181133058181,
            "random": false,
            "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
            }
         },
         "size": {
            "value": 11.83721462448409,
            "random": true,
            "anim": {
               "enable": false,
               "speed": 40,
               "size_min": 0.1,
               "sync": false
            }
         },
         "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
         },
         "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 1200
            }
         }
      },
      "interactivity": {
         "detect_on": "canvas",
         "events": {
            "onhover": {
               "enable": true,
               "mode": "repulse"
            },
            "onclick": {
               "enable": true,
               "mode": "push"
            },
            "resize": true
         },
         "modes": {
            "grab": {
               "distance": 400,
               "line_linked": {
                  "opacity": 1
               }
            },
            "bubble": {
               "distance": 400,
               "size": 40,
               "duration": 2,
               "opacity": 8,
               "speed": 3
            },
            "repulse": {
               "distance": 200,
               "duration": 0.4
            },
            "push": {
               "particles_nb": 4
            },
            "remove": {
               "particles_nb": 2
            }
         }
      },
      "retina_detect": true
   });
})
</script>
<style></style>