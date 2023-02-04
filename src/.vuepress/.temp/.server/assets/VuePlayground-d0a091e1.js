import { defineComponent, ref, shallowRef, computed, onMounted, h as h$1 } from "vue";
import { R, o as ot } from "../app.809c7be5.mjs";
const style = "";
const vuePlayground = "";
const y = () => h$1(R, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((t) => h$1("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$1("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: t }), h$1("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: t })]))), f = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M240.496 272c-13.504 0-25.664 5.632-34.384 14.608l-.048-.048-189.216 189.2A47.664 47.664 0 0 0 0 512c0 13.504 5.616 25.664 14.592 34.368l-.032.064 192 192 .048-.064A47.68 47.68 0 0 0 240 752a48 48 0 0 0 48-48c0-12.992-5.216-24.752-13.616-33.392l.048-.048-158.304-158.32 157.808-157.808-.048-.048A47.808 47.808 0 0 0 288.496 320a48 48 0 0 0-48-48zm784 240c0-14.56-6.608-27.44-16.848-36.24l-189.216-189.2-.032.048A47.872 47.872 0 0 0 784 272a48 48 0 0 0-48 48c0 13.504 5.632 25.664 14.608 34.384l-.048.048L908.368 512.24l-158.32 158.32.048.048A47.808 47.808 0 0 0 736.48 704a48 48 0 0 0 48 48c12.992 0 24.752-5.216 33.408-13.632l.048.064 192-192-.048-.064A47.68 47.68 0 0 0 1024.496 512zM640 128c-20.8 0-38.496 13.232-45.168 31.712L339.2 830.784a48 48 0 0 0 89.968 33.504L684.8 193.216A48 48 0 0 0 640 128z"/></svg>', h = (t) => ot({}, { "autoResize": true, "showCode": false, "showCompileOutput": false, "showImportMap": true, "clearConsole": false, "layout": "vertical", "ssr": false }, JSON.parse(decodeURIComponent(t)));
var S = defineComponent({ name: "VuePlayground", props: { title: { type: String, default: "" }, files: { type: String, required: true }, settings: { type: String, default: "{}" } }, setup(t) {
  const o = ref(true), l = shallowRef(), i = ref(), a = computed(() => h(t.settings)), n = ref(a.value.showCode || false), r = async () => {
    const { ReplStore: u, Repl: c } = await import("@vue/repl");
    l.value = c, i.value = new u({ serializedState: decodeURIComponent(t.files), showOutput: true }), a.value.vueVersion && await i.value.setVueVersion(a.value.vueVersion);
  };
  return onMounted(async () => {
    await r(), o.value = false;
  }), () => [h$1("div", { class: "vue-playground-wrapper" }, [h$1("div", { class: "title-wrapper" }, [t.title ? h$1("div", { class: "title" }, decodeURIComponent(t.title)) : null, h$1("div", { class: "actions" }, [h$1("button", { class: "action", innerHTML: f, onClick: () => {
    n.value = !n.value;
  } })])]), h$1("div", { class: ["repl-container", n.value ? "show-code" : "hide-code"] }, [o.value ? h$1("div", { class: "preview-loading-wrapper" }, h$1(y)) : null, l.value ? h$1(l.value, { store: i.value, ...a.value }) : null])])];
} });
export {
  S as default
};
