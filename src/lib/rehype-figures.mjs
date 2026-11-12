// On work pages, turn an image paragraph and the line after it into
//   <figure><img><figcaption>caption</figcaption></figure>
// so each photo can hang with its title as a wall label. Both of these work:
//
//   ![](./photo.jpg)        ![](./photo.jpg)
//                           Title
//   Title
const isWhitespace = (n) => n.type === "text" && !n.value.trim();
const isEl = (n, tag) => n?.type === "element" && n.tagName === tag;
const content = (p) => p.children.filter((c) => !isWhitespace(c));
const textOf = (nodes) =>
  nodes.map((n) => (n.type === "text" ? n.value : n.children ? textOf(n.children) : "")).join("");

export default function rehypeFigures() {
  return (tree, file) => {
    const path = String(file.path ?? file.history?.[0] ?? "");
    if (!/[\\/]content[\\/]work[\\/]/.test(path)) return;

    const out = [];
    const nodes = tree.children;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const parts = isEl(node, "p") ? content(node) : [];
      if (!isEl(parts[0], "img")) {
        out.push(node);
        continue;
      }
      // Caption on the same paragraph, after a line break.
      let caption = parts.slice(1);
      while (caption.length && (isEl(caption[0], "br") || isWhitespace(caption[0]))) caption.shift();
      // Otherwise the next paragraph, if it has no image of its own.
      if (!caption.length) {
        let j = i + 1;
        while (j < nodes.length && isWhitespace(nodes[j])) j++;
        const next = nodes[j];
        if (isEl(next, "p") && !content(next).some((c) => isEl(c, "img"))) {
          caption = next.children;
          i = j;
        }
      }
      const img = parts[0];
      const children = [img];
      if (caption.length) {
        // Use the title as alt text unless the image already has one.
        if (!img.properties.alt) img.properties.alt = textOf(caption).trim();
        children.push({ type: "element", tagName: "figcaption", properties: {}, children: caption });
      }
      out.push({ type: "element", tagName: "figure", properties: {}, children });
    }
    tree.children = out;
  };
}
