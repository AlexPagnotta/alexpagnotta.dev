"use client";

import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

type Props = VariantProps<typeof videoStyles> & React.ComponentPropsWithoutRef<"video">;

export const videoStyles = cva("", {
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

export const Video = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLVideoElement>) => {
  const { rounded, className, ...videoProps } = props;

  return <video className={videoStyles({ rounded, className })} ref={ref} {...videoProps} />;
});

Video.displayName = "Video";
