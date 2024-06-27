import { type FC, type SVGProps } from "react";

import ArrowTopRight from "./arrow-top-right.svg";
import ChevronLeft from "./chevron-left.svg";
import Github from "./github.svg";
import ChevronRight from "./chevron-right.svg";
import Heart from "./heart.svg";
import Minus from "./minus.svg";
import Plus from "./plus.svg";

export const icons = {
  arrowTopRight: ArrowTopRight,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  github: Github,
  heart: Heart,
  minus: Minus,
  plus: Plus,
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
  github: {
    svg: Github,
    label: "github",
  },
  heart: {
    svg: Heart,
    label: "heart",
  },
  minus: {
    svg: Minus,
    label: "minus",
  },
  plus: {
    svg: Plus,
    label: "plus",
  },
};
