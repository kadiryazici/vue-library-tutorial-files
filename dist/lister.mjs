import { defineComponent as s, openBlock as o, createElementBlock as r, Fragment as u, renderList as h, toDisplayString as i, h as l, createVNode as c } from "vue";
const T = s({
  name: "TheComponent",
  props: {
    items: Array
  }
}), y = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [p, m] of t)
    n[p] = m;
  return n;
};
function C(e, t, n, p, m, _) {
  return o(), r("ul", null, [
    (o(!0), r(u, null, h(e.items, (a) => (o(), r("li", {
      key: a.text
    }, i(a.text), 1))), 128))
  ]);
}
const x = /* @__PURE__ */ y(T, [["render", C]]), f = s({
  name: "TheComponent",
  props: {
    items: Array
  },
  render() {
    var e;
    return l(
      "ul",
      null,
      (e = this.items) == null ? void 0 : e.map((t) => l("li", { key: t.text }, i(t.text)))
    );
  }
}), k = s({
  name: "TheComponent",
  props: {
    items: Array
  },
  render() {
    var e;
    return c("ul", null, [(e = this.items) == null ? void 0 : e.map((t) => c("li", {
      key: t.text
    }, [t.text]))]);
  }
});
export {
  x as TheComponent,
  f as TheComponentTS,
  k as TheComponentTSX
};
