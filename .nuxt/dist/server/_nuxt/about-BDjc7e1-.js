import { u as useHead, _ as __nuxt_component_1 } from "../server.mjs";
import __nuxt_component_2 from "./Progress-vwzpyUnW.js";
import { ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "C:/Users/abdul/Downloads/abdullah-developer/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("img2.83nRfDRA.png");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s About"
    });
    const technicalSkills = ref([
      { name: "HTML + CSS", i: "97" },
      { name: "Bootstrap", i: "97" },
      { name: "JavaScript", i: "97" },
      { name: "Vue.js", i: "93" },
      { name: "Vuex", i: "93" },
      { name: "Nuxt.js", i: "95" },
      { name: "Restful API/Axios", i: "96" }
    ]);
    const personalSkills = ref([
      { name: "Self-Learning", i: "95" },
      { name: "Work for full time", i: "95" },
      { name: "Work with team", i: "95" },
      { name: "Adapt quickly", i: "95" },
      { name: "Knowledge of design rules", i: "95" },
      { name: "handle with fast situations", i: "95" },
      { name: "Learning and working under stress", i: "95" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_UProgress = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-section h-screen overflow-scroll absolute z-10 left-0 right-0" }, _attrs))}><div class="mt-3 absolute z-10 md:w-11/12 w-10/12"><div class="flex lg:flex-row max-lg:flex-col-reverse items-center"><div class="basis-1/2 max-lg:basis-3/4 text-white"><h1 class="uppercase font-semibold flex text-4xl lg:text-2xl text-white max-sm:text-sm slide-in-top items-center"><div class="content__container"><div class="content__container__text text-flicker-in-glow"> I am a Front-End </div><ul class="content__container__list inline-block px-2"><li class="content__container__list__item leading-4">W E B</li><li class="content__container__list__item leading-4"> v u e . j s </li><li class="content__container__list__item leading-4"> n u x t . j s </li><li class="content__container__list__item leading-4"> D e v e l o p e r </li></ul></div></h1><div class="text-sm md:text-base"><p class="p-3 font-medium"> Fueled by a deep passion for creating seamless and visually captivating user experiences, I specialize as a front-end developer in crafting responsive, accessible, and high-performing web applications tailored to the unique needs of each client. With extensive expertise in HTML, CSS, JavaScript, front-end frameworks like Vue.Js and Nuxt.Js, and modern web development tools, I&#39;m dedicated to delivering cutting-edge digital solutions that engage and delight users. </p><div class="flex justify-between max-lg:flex-col slide-in-bottom text-lg"><p class="text-yellow-400">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "underlined underlined--right",
        target: "_blank",
        to: "https://drive.google.com/file/d/1z3GWygWifqJiJ_EcQQnrA_GLA1kSOV0q/view?usp=sharing"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Download my latest CV `);
          } else {
            return [
              createTextVNode(" Download my latest CV ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p class="text-yellow-400">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "underlined underlined--left",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact with me `);
          } else {
            return [
              createTextVNode(" Contact with me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div><div class="basis-1/2 max-lg:basis-1/4 flex justify-center items-center slide-in-right z-0"><img class="avater-img xl:w-5/12 lg:w-7/12 md:w-5/12 w-8/12 max-w-min rounded-full max-lg:m-5"${ssrRenderAttr("src", _imports_0)}></div></div><div class="flex lg:flex-row max-lg:flex-col items-center gap-10 justify-between w-full mt-10"><div class="w-11/12 max-w-full"><p class="text-xl mb-4 text-white font-medium"> Technical Skills <hr class="w-9 border-yellow-400 border-2 rounded-r-lg"></p><!--[-->`);
      ssrRenderList(unref(technicalSkills), (technicalSkill) => {
        _push(`<!--[--><p class="label absolute text-sm md:text-base text-cool-300"><span class="font-bold px-1">${ssrInterpolate(technicalSkill.name)}</span></p>`);
        _push(ssrRenderComponent(_component_UProgress, {
          class: "my-4",
          color: "amber",
          indicator: "",
          value: technicalSkill.i
        }, null, _parent));
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="w-11/12 max-w-full"><p class="text-xl mb-4 text-white font-medium"> Personal Skills <hr class="w-9 border-yellow-400 border-2 rounded-r-lg"></p><!--[-->`);
      ssrRenderList(unref(personalSkills), (personalSkill) => {
        _push(`<!--[--><p class="label absolute text-xs md:text-base text-cool-300"><span class="font-bold px-1">${ssrInterpolate(personalSkill.name)}</span></p>`);
        _push(ssrRenderComponent(_component_UProgress, {
          class: "my-4",
          color: "amber",
          indicator: "",
          value: personalSkill.i
        }, null, _parent));
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BDjc7e1-.js.map
