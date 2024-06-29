import path from "path";

import { type ComponentPropsWithoutRef } from "react";

import { Image } from "../../ui/image";

import { extractSizesFromImage, generateBlurPlaceholder } from "./utils.server";

type Props = Omit<ComponentPropsWithoutRef<typeof Image>, "src"> & {
  src: string;
};

export const MdxImage = async ({ src, alt, ...props }: Props) => {
  // Generate blur placeholder and extract image sizes
  // Only run on the server
  const absoluteSrc = path.join("public", src);
  const [blurPlaceholderData, imageSizes] = await Promise.all([
    generateBlurPlaceholder(absoluteSrc),
    extractSizesFromImage(absoluteSrc),
  ]);

  return (
    <Image
      src={src}
      alt={alt}
      sizes="(max-width: 768px) 100vw, 480px"
      rounded
      className="w-full"
      placeholder="blur"
      blurDataURL={blurPlaceholderData}
      {...imageSizes}
      {...props}
    />
  );
};
