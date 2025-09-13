import { defineComponent, toRef, computed, cloneVNode, h } from 'vue';
import { twJoin } from 'tailwind-merge';
import { f as useUI, m as mergeConfig, i as getSlotsChildren, t as twMerge, g as appConfig } from './server.mjs';
import { _ as __nuxt_component_1, a as avatar } from './Avatar-CwMiPZA3.mjs';
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
import '@iconify/vue';
import 'vue/server-renderer';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

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

export { AvatarGroup as default };
//# sourceMappingURL=AvatarGroup-RniAYYMu.mjs.map
