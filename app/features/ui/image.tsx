import { type VariantProps, cva } from "class-variance-authority";
import { type ImageProps } from "next/image";
import NextImage from "next/image";
import React from "react";

type Props = VariantProps<typeof imageStyles> & ImageProps;

export const imageStyles = cva("", {
  variants: {
    rounded: {
      true: "rounded-md",
      false: "",
    },
  },
  defaultVariants: {
    rounded: false,
  },
});

export const Image = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLImageElement>) => {
  const { rounded, className, ...imageProps } = props;

  return <NextImage className={imageStyles({ rounded, className })} ref={ref} {...imageProps} />;
});

Image.displayName = "Image";
