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
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      const src =
        typeof props.src === "string" ? wikimediaUrl(props.src) : props.src;
      const caption = props.alt || "";
      return (
        <figure style={{ margin: "1.5rem 0", maxWidth: "50%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...props}
            src={src}
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 8,
              ...props.style,
            }}
          />
          {caption && (
            <figcaption
              style={{
                marginTop: "0.4rem",
                fontSize: "0.85rem",
                color: "#666",
                lineHeight: 1.4,
              }}
            >
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
  };
}
