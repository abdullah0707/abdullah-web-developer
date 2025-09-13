import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "service",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s Service"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-section overflow-scroll h-screen" }, _attrs))}><div class="my-auto font-bold"><h1 class="text-center font-semibold text-white text-7xl py-10"> Service </h1><hr width="50px" class="border-4 mx-auto rounded-full border-amber-400 mb-10"><div class="grid grid-flow-row-dense md:grid-cols-2 grid-cols-1"><div class="m-4 bg-transparent z-10"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-u fa-lg pb-1 pe-0.5"></i>X Research </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> It\u2019s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more. </p></div></div><div class="m-4 bg-transparent z-10"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-u fa-lg pb-1 pe-0.5"></i>X Auditing </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues. </p></div></div></div><div class="grid grid-flow-row-dense md:grid-cols-5 grid-cols-1"><div class="m-4 bg-transparent z-10 col-span-2 card"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-u fa-lg pb-1 pe-0.5"></i>X Consultation </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> If you don\u2019t know what kind of service to request from us, don\u2019t worry. We can help and see what fits your business and your budget. </p></div></div><div class="m-4 bg-transparent z-10 col-span-3"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-f fa-lg pb-1"></i>ront End Development </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> We are Front End masters with a deep focus on HTML, CSS, JavaScript The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we\u2019re happy to do so. </p></div></div></div><div class="grid grid-flow-row-dense md:grid-cols-5 grid-cols-1"><div class="m-4 bg-transparent z-10 col-span-3"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-m fa-lg pb-1 pe-0.5"></i> obile Apps Design </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype. </p></div></div><div class="m-4 bg-transparent col-span-2 z-10"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-r fa-lg pb-1 pe-0.5"></i>esponsive Web Design </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes. </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=service-DbbPC912.mjs.map
