function toLowercaseSeparator(key) {
  return key.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function getStyleStr(style) {
  return Object.keys(style).map((key) => `${toLowercaseSeparator(key)}: ${style[key]};`).join(" ");
}
function getPixelRatio() {
  return window.devicePixelRatio || 1;
}
const reRendering = (mutation, watermarkElement) => {
  let flag = false;
  if (mutation.removedNodes.length && watermarkElement) {
    flag = Array.from(mutation.removedNodes).includes(watermarkElement);
  }
  if (mutation.type === "attributes" && mutation.target === watermarkElement) {
    flag = true;
  }
  return flag;
};

export { getPixelRatio, getStyleStr, reRendering, toLowercaseSeparator };
//# sourceMappingURL=utils.mjs.map
