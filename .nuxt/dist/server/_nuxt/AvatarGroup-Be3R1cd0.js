import { defineComponent, toRef, computed, cloneVNode, h } from "C:/Users/abdul/Downloads/abdullah-developer/node_modules/vue/index.mjs";
import { twJoin } from "tailwind-merge";
import { f as useUI, m as mergeConfig, i as getSlotsChildren, t as twMerge, g as appConfig } from "../server.mjs";
import { _ as __nuxt_component_1, a as avatar } from "./Avatar-D7j6ya_B.js";
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
import "vue/server-renderer";
import "ohash/utils";
import "@iconify/utils/lib/css/icon";
import "C:/Users/abdul/Downloads/abdullah-developer/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const avatarGroup = {
  wrapper: "inline-flex flex-row-reverse justify-end",
  ring: "ring-2 ring-white dark:ring-gray-900",
  margin: "-me-1.5 first:me-0"
};
const avatarConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const avatarGroupConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatarGroup, avatarGroup);
const AvatarGroup = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(avatarConfig.size).includes(value);
      }
    },
    max: {
      type: Number,
      default: null
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
  setup(props, { slots }) {
    const { ui, attrs } = useUI("avatarGroup", toRef(props, "ui"), avatarGroupConfig, toRef(props, "class"));
    const children = computed(() => getSlotsChildren(slots));
    const max = computed(() => typeof props.max === "string" ? Number.parseInt(props.max, 10) : props.max);
    const clones = computed(() => children.value.map((node, index) => {
      const vProps = {};
      if (!props.max || max.value && index < max.value) {
        if (props.size) {
          vProps.size = props.size;
        }
        vProps.class = node.props.class || "";
        vProps.class = twMerge(twJoin(vProps.class, ui.value.ring, ui.value.margin), vProps.class);
        return cloneVNode(node, vProps);
      }
      if (max.value !== void 0 && index === max.value) {
        return h(__nuxt_component_1, {
          size: props.size || avatarConfig.default.size,
          text: `+${children.value.length - max.value}`,
          class: twJoin(ui.value.ring, ui.value.margin)
        });
      }
      return null;
    }).filter(Boolean).reverse());
    return () => h("div", { class: ui.value.wrapper, ...attrs.value }, clones.value);
  }
});
export {
  AvatarGroup as default
};
//# sourceMappingURL=AvatarGroup-Be3R1cd0.js.map
