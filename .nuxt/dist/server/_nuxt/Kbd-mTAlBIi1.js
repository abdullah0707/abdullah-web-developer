import { defineComponent, mergeProps, toRef, computed, useSSRContext } from "C:/Users/abdul/Downloads/abdullah-developer/node_modules/vue/index.mjs";
import { twJoin } from "tailwind-merge";
import { c as _export_sfc, m as mergeConfig, f as useUI, t as twMerge, g as appConfig } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/hookable/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/unctx/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/radix3/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/defu/dist/defu.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/ufo/dist/index.mjs";
import "@vueuse/core";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/klona/dist/index.mjs";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "ohash/utils";
import "@iconify/utils/lib/css/icon";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const kbd = {
  base: "inline-flex items-center justify-center text-gray-900 dark:text-white",
  padding: "px-1",
  size: {
    xs: "h-4 min-w-[16px] text-[10px]",
    sm: "h-5 min-w-[20px] text-[11px]",
    md: "h-6 min-w-[24px] text-[12px]"
  },
  rounded: "rounded",
  font: "font-medium font-sans",
  background: "bg-gray-100 dark:bg-gray-800",
  ring: "ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",
  default: {
    size: "sm"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.kbd, kbd);
const _sfc_main = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
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
  setup(props) {
    const { ui, attrs } = useUI("kbd", toRef(props, "ui"), config);
    const kbdClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.padding,
        ui.value.rounded,
        ui.value.font,
        ui.value.background,
        ui.value.ring
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      kbdClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<kbd${ssrRenderAttrs(mergeProps({ class: _ctx.kbdClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.value)}`);
  }, _push, _parent);
  _push(`</kbd>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Kbd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Kbd-mTAlBIi1.js.map
