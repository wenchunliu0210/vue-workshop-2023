import { ref as c, openBlock as s, createElementBlock as a, toDisplayString as l } from "vue";
const r = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, _] of t)
    o[n] = _;
  return o;
}, u = {
  __name: "HelloWorld",
  setup(e) {
    const t = c(0), o = () => {
      t.value++;
    };
    return (n, _) => (s(), a("button", {
      type: "button",
      onClick: o
    }, "count is " + l(t.value), 1));
  }
}, v = /* @__PURE__ */ r(u, [["__scopeId", "data-v-4a27bb39"]]);
const p = {
  __name: "I18nImg",
  setup(e) {
    const t = c(0), o = () => {
      t.value++;
    };
    return (n, _) => (s(), a("button", {
      type: "button",
      onClick: o
    }, "count is " + l(t.value), 1));
  }
}, i = /* @__PURE__ */ r(p, [["__scopeId", "data-v-f11880d5"]]);
export {
  v as HelloWorld,
  i as I18nImg
};
