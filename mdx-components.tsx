import type { MDXComponents } from "mdx/types";

function wikimediaUrl(src: string): string {
  if (src.includes("commons.wikimedia.org/wiki/Special:FilePath/")) {
    return `${src}${src.includes("?") ? "&" : "?"}width=800`;
  }
  return src;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...props}
        src={typeof props.src === "string" ? wikimediaUrl(props.src) : props.src}
        loading="lazy"
        style={{ maxWidth: "100%", height: "auto", ...props.style }}
      />
    ),
  };
}
