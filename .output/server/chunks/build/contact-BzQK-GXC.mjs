import __nuxt_component_0 from './Notification-Cp1z_tVm.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import './Avatar-CwMiPZA3.mjs';
import 'tailwind-merge';
import '@vueuse/core';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const waiting = ref(false);
    const errors = ref(false);
    const succsess = ref(false);
    const timer = ref(3e3);
    useHead({
      titleTemplate: "%s Contact us"
    });
    const form = ref({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    function onCallback() {
      setTimeout(() => {
        succsess.value = false;
        errors.value = false;
      }, timer.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UNotification = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-section h-screen overflow-scroll absolute z-10 left-0 right-0" }, _attrs))}><h1 class="text-center font-semibold text-white text-6xl py-10"> Contact Me </h1><hr width="50px" class="border-4 mx-auto rounded-full border-amber-400 mb-10"><p class="text-center font-semibold text-white md:text-lg text-sm py-3 mx-auto w-full md:w-3/6"> Whether you&#39;re ready to transform your digital presence or need guidance along the way, we&#39;re here to help. Reach out to our friendly team of experts, and let&#39;s unlock new possibilities together. </p><div class="flex flex-col h-100 justify-center px-6 lg:px-8"><div class="lg:mt-10 mt-2 sm:mx-auto sm:w-full sm:max-w-sm pb-10"><form class="space-y-10 text-sm mx-2" action="#" method="POST"><div class="flex w-full"><i for="name" class="fa-regular fa-user fa-xl border-b-2 pt-5 pe-2 text-yellow-400 border-yellow-400"></i><div class="user-box w-full"><input type="name" name="name" id="name"${ssrRenderAttr("value", unref(form).name)} required class="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-5"><label for="name" class="block"><span class="after:content-[&#39;*&#39;] after:ml-0.5 after:text-red-500 block text-sm font-bold"> Name </span></label></div></div><div class="flex w-full"><i class="fa-regular fa-envelope fa-xl border-b-2 pt-5 pe-2 text-yellow-400 border-yellow-400"></i><div class="user-box w-full"><input type="email" name="email" id="email"${ssrRenderAttr("value", unref(form).email)} required class="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-5"><label for="email"><span class="after:content-[&#39;*&#39;] after:ml-0.5 after:text-red-500 block text-sm font-bold"> Email </span></label></div></div><div class="flex w-full"><i class="fa-solid fa-mobile-screen fa-xl border-b-2 pt-5 pe-2 text-yellow-400 border-yellow-400"></i><div class="user-box w-full"><input type="number" name="phone" id="phone" autocomplete="phone"${ssrRenderAttr("value", unref(form).phone)} required class="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-5"><label for="phone" class="block"><span class="after:content-[&#39;*&#39;] after:ml-0.5 after:text-red-500 block text-sm font-bold"> Phone number </span></label></div></div><div class="flex w-full"><i class="fa-regular fa-pen-to-square fa-xl border-b-2 pt-5 pe-2 text-yellow-400 border-yellow-400"></i><div class="user-box w-full"><input type="text" name="subject" id="subject"${ssrRenderAttr("value", unref(form).subject)} required class="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-5"><label for="subject" class="block"><span class="after:content-[&#39;*&#39;] after:ml-0.5 after:text-red-500 block text-sm font-bold"> Subject </span></label></div></div><div class="flex w-full"><i class="fa-regular fa-message fa-xl border-b-2 pt-6 pe-2 text-yellow-400 border-yellow-400"></i><div class="user-box w-full"><textarea id="message" name="message" type="textarea" required class="mt-1 p-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-5">${ssrInterpolate(unref(form).message)}</textarea><label for="message" class="block"><span class="after:content-[&#39;*&#39;] after:ml-0.5 after:text-red-500 block text-sm font-bold"> Message </span></label></div></div><div><button type="submit" class="flex w-full justify-center btn p-4 relative border-b-2 uppercase text-amber-300 shadow bg-transparent hover:delay-[.5s] transition-all duration-500 hover:text-black before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 before:transition-all before:duration-500 before:bg-amber-300 before:hover:w-full after:absolute after:left-0 after:bottom-0 after:h-0 after:w-full after:transition-all after:duration-500 after:bg-amber-300 after:hover:h-full after:text-black after:-z-10 after:hover:delay-[0.4s] font-bold items-center"><i class="fa-regular fa-paper-plane fa-xl px-2 heartbeat"></i>`);
      if (unref(waiting)) {
        _push(`<!--[--><i class="fa-solid fa-spinner fa-spin-pulse p-1"></i> Loading... <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(waiting)) {
        _push(`<span class="heartbeatf"> Sand Message </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></form></div><div class="my-3 mx-auto w-3/4 md:w-1/4 z-10 absolute bottom-0 md:bottom-5 right-4">`);
      if (unref(succsess)) {
        _push(ssrRenderComponent(_component_UNotification, {
          icon: "i-heroicons-check-circle",
          color: "primary",
          id: 3,
          title: "Your message was sent successfully!",
          description: "Thank you for sending. Your message has been received. I will contact you as soon as possible.",
          "close-button": null,
          callback: onCallback(),
          timeout: unref(timer)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="my-3 mx-auto w-3/4 md:w-1/4 z-10 absolute bottom-0 md:bottom-5 right-4">`);
      if (unref(errors)) {
        _push(ssrRenderComponent(_component_UNotification, {
          icon: "i-heroicons-x-circle",
          color: "red",
          id: 6,
          title: "Your message was not sent!",
          description: "I am sorry that your message did not reach me. Please try sending it again.",
          timeout: unref(timer),
          callback: onCallback(),
          "close-button": null
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-BzQK-GXC.mjs.map
