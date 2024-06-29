import { type ComponentPropsWithoutRef } from "react";

import { Video } from "../ui/video";

export const MdxVideo = ({ src, ...props }: ComponentPropsWithoutRef<typeof Video>) => {
  return <Video src={src} rounded className="w-full" playsInline {...props} />;
};
