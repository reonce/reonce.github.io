const n = "mindmap", a = (t) => t.match(/^\s*mindmap/) !== null, o = async () => {
  const { diagram: t } = await import("./diagram-definition.0faef4c2-c9397a09.js");
  return { id: n, diagram: t };
}, r = {
  id: n,
  detector: a,
  loader: o
};
export {
  r as default
};
