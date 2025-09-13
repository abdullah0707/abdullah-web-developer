import { c as buildAssetsURL } from '../_/nitro.mjs';
import { c as _export_sfc, _ as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, ref, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    const navigation = ref([
      { name: "HOME", href: "/" },
      { name: "About", href: "about" },
      { name: "Projects", href: "projects" },
      { name: "Contact", href: "contact" },
      { name: "Service", href: "service" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([{ active: unref(isActive) }, "navbar-action absolute z-50 w-full max-w-full min-w-fit"])}" data-v-843cddda><div class="menu-icon hover-target" data-v-843cddda><span class="menu-icon__line menu-icon__line-left" data-v-843cddda></span><span class="menu-icon__line" data-v-843cddda></span><span class="menu-icon__line menu-icon__line-right" data-v-843cddda></span></div><ul class="nav 2xl:w-2/12 xl:w-1/4 lg:w-1/3 md:w-6/12 w-full flex items-end justify-center h-full flex-col bg-slate-700" data-v-843cddda><li data-v-843cddda><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          onTitle: item.name,
          to: item.href,
          "data-name": item.name,
          class: "glitch-btn my-16"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text w-full flex justify-between" data-v-843cddda${_scopeId}>${ssrInterpolate(item.name)}<span class="arrow-left" data-v-843cddda${_scopeId}><i class="fa-solid fa-angle-right fa-sm ps-4 text-end" data-v-843cddda${_scopeId}></i></span></div><div class="mask mask1" data-v-843cddda${_scopeId}><span data-v-843cddda${_scopeId}>${ssrInterpolate(item.name)}</span></div><div class="mask mask2" data-v-843cddda${_scopeId}><span data-v-843cddda${_scopeId}>${ssrInterpolate(item.name)}</span></div><div class="mask mask3" data-v-843cddda${_scopeId}><span data-v-843cddda${_scopeId}>${ssrInterpolate(item.name)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "text w-full flex justify-between" }, [
                  createTextVNode(toDisplayString(item.name), 1),
                  createVNode("span", { class: "arrow-left" }, [
                    createVNode("i", { class: "fa-solid fa-angle-right fa-sm ps-4 text-end" })
                  ])
                ]),
                createVNode("div", { class: "mask mask1" }, [
                  createVNode("span", null, toDisplayString(item.name), 1)
                ]),
                createVNode("div", { class: "mask mask2" }, [
                  createVNode("span", null, toDisplayString(item.name), 1)
                ]),
                createVNode("div", { class: "mask mask3" }, [
                  createVNode("span", null, toDisplayString(item.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></li></ul></div><div class="menu-nav" data-v-843cddda></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-843cddda"]]);
const _imports_0 = "" + buildAssetsURL("logo-home.BzumgH4o.png");
const _sfc_main = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "font-family": "'Allerta Stencil', sans-serif" } }, _attrs))}><img class="w-24 mx-auto hidden absolute top-0 right-0"${ssrRenderAttr("src", _imports_0)} alt="Logo">`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<div id="particles-js" class="bg-text-container w-full h-full overflow-hidden"></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="_social-links"><ul class="_links-list"><li class="_social-link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.facebook.com/abdullah.mohammed93",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-brands fa-square-facebook text-blue-800 fa-1x"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-brands fa-square-facebook text-blue-800 fa-1x" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="_social-link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.linkedin.com/in/abdullah-mohammed-b47234121/",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-brands fa-linkedin text-blue-900 fa-1x"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-brands fa-linkedin text-blue-900 fa-1x" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="_social-link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://github.com/abdullah0707",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-brands fa-github fa-1x"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-brands fa-github fa-1x" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="_social-link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://wa.me/qr/ZPSAINJL44YEP1",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-brands fa-square-whatsapp text-green-700 fa-1x"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-brands fa-square-whatsapp text-green-700 fa-1x" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="_social-link">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+201094242767" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-solid fa-square-phone text-cyan-700 fa-1x"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-solid fa-square-phone text-cyan-700 fa-1x" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=app-BYurn5i4.mjs.map
