import { type FC, type SVGProps } from "react";

import ArrowTopRight from "./arrow-top-right.svg";
import ChevronLeft from "./chevron-left.svg";
import ChevronRight from "./chevron-right.svg";
import Hearth from "./hearth.svg";

export const icons = {
  arrowTopRight: ArrowTopRight,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  hearth: Hearth,
} as const;

export type IconName = keyof typeof icons;

export const iconLabelMap: Readonly<Record<IconName, { svg: FC<SVGProps<SVGSVGElement>>; label: string }>> = {
  arrowTopRight: {
    svg: ArrowTopRight,
    label: "Arrow top left",
  },
  chevronLeft: {
    svg: ChevronLeft,
    label: "chevron left",
  },
  chevronRight: {
    svg: ChevronRight,
    label: "chevron right",
  },
  hearth: {
    svg: Hearth,
    label: "hearth",
  },
};
