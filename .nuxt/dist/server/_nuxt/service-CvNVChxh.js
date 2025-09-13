import { mergeProps, useSSRContext } from "C:/Users/abdul/Downloads/abdullah-developer/node_modules/vue/index.mjs";
import { ssrRenderAttrs } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/unctx/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/radix3/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/defu/dist/defu.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/ufo/dist/index.mjs";
import "@vueuse/core";
import "tailwind-merge";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/klona/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "ohash/utils";
import "@iconify/utils/lib/css/icon";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = {
  __name: "service",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s Service"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-section overflow-scroll h-screen" }, _attrs))}><div class="my-auto font-bold"><h1 class="text-center font-semibold text-white text-7xl py-10"> Service </h1><hr width="50px" class="border-4 mx-auto rounded-full border-amber-400 mb-10"><div class="grid grid-flow-row-dense md:grid-cols-2 grid-cols-1"><div class="m-4 bg-transparent z-10"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-u fa-lg pb-1 pe-0.5"></i>X Research </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> It’s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more. </p></div></div><div class="m-4 bg-transparent z-10"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-u fa-lg pb-1 pe-0.5"></i>X Auditing </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues. </p></div></div></div><div class="grid grid-flow-row-dense md:grid-cols-5 grid-cols-1"><div class="m-4 bg-transparent z-10 col-span-2 card"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-u fa-lg pb-1 pe-0.5"></i>X Consultation </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> If you don’t know what kind of service to request from us, don’t worry. We can help and see what fits your business and your budget. </p></div></div><div class="m-4 bg-transparent z-10 col-span-3"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-f fa-lg pb-1"></i>ront End Development </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> We are Front End masters with a deep focus on HTML, CSS, JavaScript The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we’re happy to do so. </p></div></div></div><div class="grid grid-flow-row-dense md:grid-cols-5 grid-cols-1"><div class="m-4 bg-transparent z-10 col-span-3"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-m fa-lg pb-1 pe-0.5"></i> obile Apps Design </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype. </p></div></div><div class="m-4 bg-transparent col-span-2 z-10"><div class="card p-6 rounded-md"><h5 class="text-amber-400 flex items-center"><i class="fa-solid fa-r fa-lg pb-1 pe-0.5"></i>esponsive Web Design </h5><p class="text-[15px] ps-2 border-s-2 text-gray-500 dark:text-gray-400 mt-1"> We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes. </p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=service-CvNVChxh.js.map
