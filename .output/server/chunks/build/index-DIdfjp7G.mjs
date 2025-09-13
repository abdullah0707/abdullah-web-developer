import { mergeProps, unref, ref, computed, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { c as _export_sfc, u as useHead, a as useRuntimeConfig, b as useRoute } from './server.mjs';
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

const bluesky = {
  name: "Bluesky",
  shareUrl: "https://bsky.app/intent/compose?text=[u]",
  icon: {
    // iconify: ri:bluesky-fill
    viewBox: "0 0 24 24",
    path: "M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"
  },
  color: "#1185FE"
};
const email = {
  name: "Email",
  shareUrl: "mailto:?body=[u]",
  args: {
    title: "&subject=[t]"
  },
  icon: {
    // iconify: ic:round-mail
    viewBox: "0 0 24 24",
    path: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
  },
  color: "#7e7e7e"
};
const facebook = {
  name: "Facebook",
  shareUrl: "https://www.facebook.com/sharer/sharer.php?u=[u]",
  icon: {
    // iconify: ri:facebook-fill
    viewBox: "0 0 24 24",
    path: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
  },
  color: "#0866FF"
};
const line = {
  name: "LINE",
  shareUrl: "https://social-plugins.line.me/lineit/share?url=[u]",
  args: {
    title: "&text=[t]"
  },
  icon: {
    // iconify: ri:line-fill
    viewBox: "0 0 24 24",
    path: "M18.664 10.84a.526.526 0 0 1-.526.525h-1.462v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938h1.463c.29 0 .524.237.524.525m-4.098 2.485a.54.54 0 0 1-.166.025a.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525c.287 0 .525.238.525.525v3.976a.524.524 0 0 1-.36.497m-4.95.027a.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525c.289 0 .524.238.524.525v3.976a.527.527 0 0 1-.526.524m-1.53 0H6.099a.528.528 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525c.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05m3.915-10.78c-5.513 0-10 3.643-10 8.118c0 4.01 3.558 7.369 8.363 8.007c.325.068.769.215.881.492c.1.25.066.638.032.9l-.137.85c-.037.25-.2.988.874.537c1.076-.449 5.764-3.398 7.864-5.812C21.314 14.089 22 12.477 22 10.69c0-4.475-4.488-8.118-10-8.118"
  },
  color: "#06C655"
};
const linkedin = {
  name: "LinkedIn",
  shareUrl: "https://www.linkedin.com/sharing/share-offsite/?url=[u]",
  icon: {
    // iconify: ri:linkedin-fill
    viewBox: "0 0 24 24",
    path: "M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
  },
  color: "#0A66C2"
};
const pinterest = {
  name: "Pinterest",
  shareUrl: "https://pinterest.com/pin/create/button/?url=[u]",
  args: {
    title: "&description=[t]",
    image: "&media=[i]"
  },
  icon: {
    // iconify: jam:pinterest
    viewBox: "-4.5 -2 24 24",
    path: "M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705c-.563-4.12.829-7.215 1.475-10.5c-1.102-1.91.133-5.755 2.457-4.808c2.86 1.166-2.477 7.102 1.106 7.844c3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897C.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44c.59 4.416-1.823 9.2-6.142 8.855c-1.171-.093-1.663-.69-2.58-1.265"
  },
  color: "#BD081C"
};
const pocket = {
  name: "Pocket",
  shareUrl: "https://getpocket.com/edit?url=[u]",
  icon: {
    // iconify: fe:pocket
    viewBox: "0 0 24 24",
    path: "M21.902 4.194A1.82 1.82 0 0 0 20.197 3H3.813A1.823 1.823 0 0 0 2 4.814v6.035l.069 1.2c.29 2.73 1.707 5.116 3.9 6.779c.038.03.078.059.118.089l.025.018a9.897 9.897 0 0 0 3.91 1.727a10.06 10.06 0 0 0 4.05-.014a.261.261 0 0 0 .064-.023a9.906 9.906 0 0 0 3.753-1.691l.025-.018c.04-.03.08-.058.119-.09c2.192-1.663 3.609-4.048 3.898-6.778l.069-1.2V4.814a1.792 1.792 0 0 0-.098-.62m-4.235 6.287l-4.704 4.513a1.372 1.372 0 0 1-1.899 0L6.36 10.48a1.371 1.371 0 1 1 1.898-1.979l3.756 3.601l3.756-3.6a1.372 1.372 0 0 1 1.898 1.978"
  },
  color: "#EF3F56"
};
const reddit = {
  name: "Reddit",
  shareUrl: "https://www.reddit.com/submit?url=[u]",
  args: {
    title: "&title=[t]"
  },
  icon: {
    // iconify: ri:reddit-line
    viewBox: "0 0 24 24",
    path: "m11.053 7.815l.751-3.536a2 2 0 0 1 2.372-1.54l3.196.68a2 2 0 1 1-.415 1.956l-3.197-.68l-.666 3.135c1.785.137 3.558.73 5.164 1.7A3.192 3.192 0 0 1 23 12.203v.021a3.193 3.193 0 0 1-1.207 2.55a2.852 2.852 0 0 1-.008.123c0 3.998-4.45 7.03-9.799 7.03c-5.333 0-9.708-3.024-9.705-6.953a5.316 5.316 0 0 1-.01-.181a3.193 3.193 0 0 1 3.454-5.35a11.446 11.446 0 0 1 5.329-1.628m9.285 5.526a1.19 1.19 0 0 0 .662-1.075a1.192 1.192 0 0 0-2.016-.806l-.585.56l-.67-.455c-1.615-1.098-3.452-1.725-5.23-1.764h-1.006c-1.875.028-3.652.6-5.237 1.675l-.664.45l-.583-.55a1.192 1.192 0 1 0-1.315 1.952l.633.29l-.053.695a3.95 3.95 0 0 0 .003.584c0 2.71 3.356 5.03 7.708 5.03c4.371 0 7.799-2.336 7.802-5.107a3.304 3.304 0 0 0 0-.507l-.052-.672zM6.951 13.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m7 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m-1.985 5.103c-1.397 0-2.766-.37-3.881-1.21a.424.424 0 0 1 .597-.597c.945.693 2.123.99 3.269.99s2.33-.275 3.284-.959a.439.439 0 0 1 .732.206a.469.469 0 0 1-.12.423c-.683.797-2.483 1.147-3.88 1.147"
  },
  color: "#FF4500"
};
const skype = {
  name: "Skype",
  shareUrl: "https://web.skype.com/share?url=[u]",
  args: {
    title: "&text=[t]"
  },
  icon: {
    // iconify: ri:skype-fill
    viewBox: "0 0 24 24",
    path: "M13.31 20.4a8.5 8.5 0 0 1-9.71-9.71a5.25 5.25 0 0 1 7.09-7.09a8.5 8.5 0 0 1 9.71 9.71a5.25 5.25 0 0 1-7.09 7.09m-1.257-3.244h-.04c2.872 0 4.303-1.386 4.303-3.243c0-1.198-.551-2.471-2.726-2.958l-1.983-.44c-.755-.172-1.622-.4-1.622-1.115s.62-1.213 1.724-1.213c2.23 0 2.027 1.528 3.131 1.528c.576 0 1.093-.342 1.093-.93c0-1.37-2.197-2.4-4.056-2.4c-2.021 0-4.173.859-4.173 3.144c0 1.098.394 2.27 2.56 2.813l2.689.671c.816.202 1.018.659 1.018 1.072c0 .687-.684 1.358-1.918 1.358c-2.417 0-2.078-1.857-3.374-1.857c-.58 0-1.003.398-1.003.971c0 1.114 1.352 2.598 4.377 2.598"
  },
  color: "#00AFF0"
};
const telegram = {
  name: "Telegram",
  shareUrl: "https://t.me/share/url?url=[u]",
  args: {
    title: "&text=[t]"
  },
  icon: {
    // iconify: icon-park-outline:telegram
    viewBox: "0 0 48 48",
    path: "M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948c-.432-.325-8.094-5.195-10.792-7.575c-.756-.65-1.62-1.948.108-3.463L33.649 18.13c1.295-1.3 2.59-4.33-2.806-.65l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15"
  },
  color: "#26A5E4"
};
const threads = {
  name: "Threads",
  shareUrl: "https://www.threads.net/intent/post?url=[u]",
  args: {
    title: "&text=[t]"
  },
  icon: {
    // iconify: ri:threads-fill
    viewBox: "0 0 24 24",
    path: "M16.705 11.108c-.162-2.987-1.794-4.697-4.534-4.714c-1.652-.01-3.033.69-3.879 1.973L9.8 9.4c.634-.961 1.635-1.16 2.36-1.153c.903.006 1.583.268 2.024.78c.32.372.535.887.642 1.536q-1.202-.204-2.59-.125c-2.606.15-4.28 1.67-4.168 3.781c.057 1.071.59 1.993 1.502 2.595c.77.509 1.764.757 2.795.701c1.363-.075 2.432-.594 3.178-1.545c.566-.722.924-1.658 1.082-2.836c.65.392 1.13.907 1.397 1.527c.452 1.054.478 2.786-.935 4.198c-1.238 1.236-2.726 1.772-4.975 1.788c-2.495-.018-4.382-.819-5.608-2.378c-1.15-1.46-1.743-3.57-1.765-6.269c.022-2.7.616-4.809 1.765-6.27c1.226-1.559 3.113-2.359 5.608-2.377c2.513.019 4.432.822 5.706 2.39c.625.768 1.095 1.734 1.406 2.86l1.766-.47c-.377-1.387-.969-2.582-1.774-3.573c-1.633-2.01-4.033-3.039-7.11-3.06c-3.071.021-5.432 1.055-7.019 3.071c-1.411 1.795-2.14 4.306-2.164 7.436c.024 3.13.753 5.627 2.164 7.422c1.587 2.016 3.96 3.05 7.03 3.071c2.731-.019 4.655-.734 6.24-2.317c2.075-2.073 2.012-4.67 1.329-6.264c-.525-1.225-1.57-2.206-2.98-2.81m-4.438 4.557c-1.142.064-2.328-.448-2.387-1.546c-.043-.814.58-1.722 2.457-1.83a9.4 9.4 0 0 1 2.533.174c-.216 2.702-1.485 3.14-2.603 3.202"
  },
  color: "#000000"
};
const viber = {
  name: "Viber",
  shareUrl: "viber://forward?text=[u]",
  args: {
    title: "%20[t]"
  },
  icon: {
    // iconify: simple-icons:viber
    viewBox: "0 0 24 24",
    path: "M11.4 0C9.473.028 5.333.344 3.02 2.467C1.302 4.187.696 6.7.633 9.817S.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302c.407-.44.972-1.084 1.397-1.58c3.85.326 6.812-.416 7.15-.525c.776-.252 5.176-.816 5.892-6.657c.74-6.02-.36-9.83-2.34-11.546c-.596-.55-3.006-2.3-8.375-2.323c0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017c4.542.02 6.717 1.388 7.222 1.846c1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395c-.28.09-2.882.737-6.153.524c0 0-2.436 2.94-3.197 3.704c-.12.12-.26.167-.352.144c-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895c.054-2.604.543-4.738 1.996-6.173c1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602a.304.304 0 0 0-.004.607c1.624.01 2.946.537 4.028 1.592c1.073 1.046 1.62 2.468 1.633 4.334c.002.167.14.3.307.3a.304.304 0 0 0 .3-.304c-.014-1.984-.618-3.596-1.816-4.764c-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695a.98.98 0 0 0-.616.117l-.01.002c-.43.247-.816.562-1.146.932l-.008.008q-.4.484-.46.948a.6.6 0 0 0-.007.14q0 .205.065.4l.013.01c.135.48.473 1.276 1.205 2.604c.42.768.903 1.5 1.446 2.186q.405.517.87.984l.132.132q.466.463.984.87a15.5 15.5 0 0 0 2.186 1.447c1.328.733 2.126 1.07 2.604 1.206l.01.014a1.3 1.3 0 0 0 .54.055q.466-.055.948-.46c.004 0 .003-.002.008-.005c.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12c-.004 0-.698-.58-1.037-.83q-.54-.383-1.113-.71c-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246c-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248a13 13 0 0 0-.71-1.115a28 28 0 0 0-.83-1.035a.82.82 0 0 0-.502-.297zm4.49.88a.303.303 0 0 0-.018.606c1.16.085 2.017.466 2.645 1.15c.63.688.93 1.524.906 2.57a.306.306 0 0 0 .61.013c.025-1.175-.334-2.193-1.067-2.994c-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63a.305.305 0 0 0-.3.287c-.008.167.12.31.288.32c.523.028.875.175 1.113.422c.24.245.388.62.416 1.164a.304.304 0 0 0 .605-.03c-.03-.644-.215-1.178-.58-1.557c-.367-.378-.893-.574-1.52-.607h-.018z"
  },
  color: "#7360f2"
};
const whatsapp = {
  name: "WhatsApp",
  shareUrl: "https://api.whatsapp.com/send?text=[u]",
  args: {
    title: "%20[t]"
  },
  icon: {
    // iconify: ri:whatsapp-line
    viewBox: "0 0 24 24",
    path: "m7.254 18.494l.724.423A7.953 7.953 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.953 9.953 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355zM8.392 7.308c.134-.01.269-.01.403-.004c.054.004.108.01.162.016c.159.018.334.115.393.249c.298.676.588 1.357.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11c.062.026.126.048.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.158 1.158 0 0 1-.21.302a2.381 2.381 0 0 1-.33.288c-.082.062-.125.09-.125.09a5.063 5.063 0 0 1-.383.22a1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.472 3.472 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1"
  },
  color: "#25D366"
};
const x = {
  name: "X",
  shareUrl: "https://x.com/intent/post?url=[u]",
  args: {
    title: "&text=[t]",
    user: "&via=[uid]",
    hashtags: "&hashtags=[h]"
  },
  icon: {
    // iconify: ri:twitter-x-fill
    viewBox: "0 0 24 24",
    path: "M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
  },
  color: "#000000"
};
const networksBase = {
  // Social Networks
  facebook,
  x,
  linkedin,
  pinterest,
  reddit,
  bluesky,
  threads,
  // Read it later
  pocket,
  // Instant Messaging
  whatsapp,
  telegram,
  skype,
  line,
  viber,
  // Other
  email
};
const networksAlias = {
  twitter: x
};
const networksIndex = {
  ...networksBase,
  ...networksAlias
};
const defaultOptions = {
  network: "",
  url: void 0,
  title: void 0,
  user: void 0,
  hashtags: void 0,
  image: void 0
};
function useSocialShare(options = defaultOptions) {
  const { network, url, title, user, hashtags, image } = options;
  const moduleOptions = useRuntimeConfig().public.socialShare;
  const selectedNetwork = ref({ ...networksIndex[network] });
  const route = useRoute();
  const pageUrl = computed(() => {
    if (url !== void 0) {
      return new URL(url).href;
    }
    if (moduleOptions.baseUrl !== "") {
      return new URL(route.fullPath, moduleOptions.baseUrl).href;
    }
    return "";
  });
  const fullShareUrl = computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const shareUrl = selectedNetwork.value.shareUrl;
    const argTitle = ((_a = selectedNetwork.value.args) == null ? void 0 : _a.title) && title ? (_b = selectedNetwork.value.args) == null ? void 0 : _b.title : "";
    const argUser = ((_c = selectedNetwork.value.args) == null ? void 0 : _c.user) && user ? (_d = selectedNetwork.value.args) == null ? void 0 : _d.user : "";
    const argHashtags = ((_e = selectedNetwork.value.args) == null ? void 0 : _e.hashtags) && hashtags ? (_f = selectedNetwork.value.args) == null ? void 0 : _f.hashtags : "";
    const argImage = ((_g = selectedNetwork.value.args) == null ? void 0 : _g.image) && image ? (_h = selectedNetwork.value.args) == null ? void 0 : _h.image : "";
    let fullUrl = shareUrl + argTitle + argUser + argHashtags + argImage;
    fullUrl = fullUrl.replace(/\[u\]/i, encodeURIComponent(pageUrl.value)).replace(/\[t\]/i, title || "").replace(/\[uid\]/i, user || "").replace(/\[h\]/i, hashtags || "").replace(/\[i\]/i, image || "");
    return new URL(fullUrl).href;
  });
  selectedNetwork.value.shareUrl = fullShareUrl.value;
  delete selectedNetwork.value.args;
  return selectedNetwork;
}
const _sfc_main$1 = {
  __name: "SocialShare",
  __ssrInlineRender: true,
  props: {
    // Style props
    styled: { type: Boolean, default: void 0 },
    label: { type: Boolean, default: void 0 },
    icon: { type: Boolean, default: void 0 },
    // Data props
    network: { type: String, required: true },
    url: { type: String, default: void 0 },
    title: { type: String, default: void 0 },
    user: { type: String, default: void 0 },
    hashtags: { type: String, default: void 0 },
    image: { type: String, default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const moduleOptions = useRuntimeConfig().public.socialShare;
    const isStyled = props.styled !== void 0 ? props.styled : moduleOptions.styled;
    const isLabeled = props.label !== void 0 ? props.label : moduleOptions.label;
    const hasIcon = props.icon !== void 0 ? props.icon : moduleOptions.icon;
    const selectedNetwork = useSocialShare({
      network: props.network,
      url: props.url,
      title: props.title,
      user: props.user,
      hashtags: props.hashtags,
      image: props.image
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: ["social-share-button", [`social-share-button--${__props.network}`, { "social-share-button--styled": unref(isStyled) }]],
        href: unref(selectedNetwork).shareUrl,
        style: `--color-brand:${unref(selectedNetwork).color}`,
        "aria-label": `Share with ${unref(selectedNetwork).name}`,
        target: "_blank"
      }, _attrs))}>`);
      if (unref(hasIcon)) {
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(`<svg class="social-share-button__icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em"${ssrRenderAttr("viewBox", `${unref(selectedNetwork).icon.viewBox}`)}><path fill="currentColor"${ssrRenderAttr("d", `${unref(selectedNetwork).icon.path}`)}></path></svg>`);
        }, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLabeled)) {
        _push(`<span class="social-share-button__label">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`Share`);
        }, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@stefanobartoletti/nuxt-social-share/dist/runtime/SocialShare.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s Home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SocialShare = _sfc_main$1;
      _push(`<!--[--><div class="custom-section h-full uppercase lg:text-4xl md:text3xl sm:text2xl text-white flex justify-center items-center flex-col overflow-scroll absolute z-10 gap-5 w-full" data-v-81d22545><div class="space-y-6 font-bold w-fit" data-v-81d22545><div class="showup text-center tracking-widest" data-v-81d22545>ABDULLAH MOHAMED</div><p class="slogan mx-auto w-fit mb-0" data-v-81d22545> front-end NUXT.JS </p><div class="showup text-center" data-v-81d22545><p class="my-0 mx-auto" style="${ssrRenderStyle({ "letter-spacing": ".6em" })}" data-v-81d22545>developer</p></div></div><div class="container-share text-sm sm:text-lg" data-v-81d22545><p class="text-center mb-3 text-lg" data-v-81d22545> Share <hr class="w-7 border-yellow-400 border-2 rounded-r-lg text-center mb-3 mx-auto" data-v-81d22545><i class="fa-solid fa-angles-down animate-bounce" data-v-81d22545></i></p><p class="flex sm:gap-4 gap-2" data-v-81d22545>`);
      _push(ssrRenderComponent(_component_SocialShare, {
        network: "email",
        styled: false,
        label: false,
        class: "hover:text-yellow-400"
      }, null, _parent));
      _push(`<span class="relative flex" data-v-81d22545><span class="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75 rounded-full" data-v-81d22545></span><span class="w-1" data-v-81d22545>|</span></span>`);
      _push(ssrRenderComponent(_component_SocialShare, {
        network: "whatsapp",
        styled: false,
        label: false,
        class: "hover:text-yellow-400"
      }, null, _parent));
      _push(`<span class="relative flex text-md" data-v-81d22545><span class="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75 rounded-full" data-v-81d22545></span><span class="w-1" data-v-81d22545>|</span></span>`);
      _push(ssrRenderComponent(_component_SocialShare, {
        network: "facebook",
        styled: false,
        label: false,
        class: "hover:text-yellow-400"
      }, null, _parent));
      _push(`<span class="relative flex" data-v-81d22545><span class="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75 rounded-full" data-v-81d22545></span><span class="w-1" data-v-81d22545>|</span></span>`);
      _push(ssrRenderComponent(_component_SocialShare, {
        network: "twitter",
        styled: false,
        label: false,
        class: "hover:text-yellow-400"
      }, null, _parent));
      _push(`<span class="relative flex" data-v-81d22545><span class="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75 rounded-full" data-v-81d22545></span><span class="w-1" data-v-81d22545>|</span></span>`);
      _push(ssrRenderComponent(_component_SocialShare, {
        network: "linkedin",
        styled: false,
        label: false,
        class: "hover:text-yellow-400"
      }, null, _parent));
      _push(`</p></div></div><div class="shadow-title" data-v-81d22545>Welcome to Portfolio</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81d22545"]]);

export { index as default };
//# sourceMappingURL=index-DIdfjp7G.mjs.map
