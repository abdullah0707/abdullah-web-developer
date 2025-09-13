import { defineComponent, mergeProps, toRef, computed, useSSRContext } from "C:/Users/abdul/Downloads/abdullah-developer/node_modules/vue/index.mjs";
import { defu } from "C:/Users/abdul/Downloads/abdullah-developer/node_modules/defu/dist/defu.mjs";
import { onClickOutside } from "@vueuse/core";
import { twJoin } from "tailwind-merge";
import { A as arrow, c as _export_sfc, f as useUI, m as mergeConfig, t as twMerge, g as appConfig } from "../server.mjs";
import { u as usePopper } from "./usePopper-CpxAqeoY.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/hookable/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/unctx/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/radix3/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/ufo/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/klona/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "ohash/utils";
import "@iconify/utils/lib/css/icon";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const contextMenu = {
  wrapper: "relative",
  container: "z-20 group",
  width: "",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "overflow-hidden focus:outline-none relative",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  popper: {
    placement: "bottom-start",
    scroll: false
  },
  arrow
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.contextMenu, contextMenu);
const _sfc_main = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    virtualElement: {
      type: Object,
      required: true
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("contextMenu", toRef(props, "ui"), config);
    const popper = computed(() => defu({}, props.popper, ui.value.popper));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    toRef(props, "virtualElement");
    const [, container] = usePopper(popper.value);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.container,
        ui.value.width
      ), props.class);
    });
    onClickOutside(container, () => {
      isOpen.value = false;
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      container
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.isOpen) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      ref: "container",
      class: _ctx.wrapperClass
    }, _ctx.attrs, _attrs))}><template><div>`);
    if (_ctx.popper.arrow) {
      _push(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background])}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div></template></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/ContextMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContextMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ContextMenu as default
};
//# sourceMappingURL=ContextMenu-3kTVOw4z.js.map
