import { jsx, jsxs } from "../../_npm/react@18.3.1/jsx-runtime._esm.js";
export function Card({ title, children } = {}) {
  return /* @__PURE__ */ jsxs("div", { className: "card", children: [
    title ? /* @__PURE__ */ jsx("h2", { children: title }) : null,
    children
  ] });
}
