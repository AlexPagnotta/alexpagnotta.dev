import { type FC, type SVGProps } from "react";

import ArrowTopLeft from "./arrow-top-left.svg";
import Hearth from "./hearth.svg";

export const icons = {
  arrowTopLeft: ArrowTopLeft,
  hearth: Hearth,
} as const;

export type IconName = keyof typeof icons;

export const iconLabelMap: Readonly<Record<IconName, { svg: FC<SVGProps<SVGSVGElement>>; label: string }>> = {
  arrowTopLeft: {
    svg: ArrowTopLeft,
    label: "Arrow top left",
  },
  hearth: {
    svg: Hearth,
    label: "hearth",
  },
};
