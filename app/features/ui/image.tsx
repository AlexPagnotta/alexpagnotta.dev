"use client";

import { type VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
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

const ImageComponent = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLImageElement>) => {
  const { rounded, className, ...imageProps } = props;

  return <NextImage className={imageStyles({ rounded, className })} ref={ref} {...imageProps} />;
});

ImageComponent.displayName = "Image";

const Image = motion(ImageComponent);

export { Image };
