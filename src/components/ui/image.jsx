import * as React from "react";
import { cn } from "@/lib/utils";
import { assets } from "@/data/assets";

// Plain <img> for local files in /public/images.
// fittingType "fill" crops to cover the box, "fit" shows the whole image (object-contain).
// Pass loading="eager" for above-the-fold images such as the logo and hero.
const Image = React.forwardRef(({ src, fittingType = "fill", className, loading = "lazy", onError, ...props }, ref) => {
  const [imgSrc, setImgSrc] = React.useState(src || assets.fallback);
  React.useEffect(() => { setImgSrc(src || assets.fallback); }, [src]);

  return (
    <img
      ref={ref}
      src={imgSrc}
      loading={loading}
      decoding="async"
      {...props}
      // inline-block + baseline match the <span> wrapper the previous CDN-resizing version rendered, so layouts are unchanged
      className={cn("inline-block align-baseline", fittingType === "fit" ? "object-contain" : "object-cover", className)}
      onError={(e) => {
        if (imgSrc !== assets.fallback) setImgSrc(assets.fallback);
        onError?.(e);
      }}
    />
  );
});
Image.displayName = "Image";

export { Image };
