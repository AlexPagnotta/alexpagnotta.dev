import { type StaticImageData } from "next/image";
import { type FC, type SVGProps } from "react";

import AwwwardsLogo from "./awwwards.svg";
import CCA from "./cca.png";
import Fwa from "./fwa.svg";

export const awardsLogos = {
  awwwards: AwwwardsLogo,
  cca: CCA,
  fwa: Fwa,
} as const;

export type AwardLogoName = keyof typeof awardsLogos;

export const awardLogoDataMap: Readonly<
  Record<
    AwardLogoName,
    ({ svg: FC<SVGProps<SVGSVGElement>> } | { image: StaticImageData }) & {
      label: string;
      width: number;
      verticalOffset?: number; // Used to better align the logo with the text
    }
  >
> = {
  awwwards: {
    svg: AwwwardsLogo,
    label: "Awwwards Logo",
    width: 100,
    verticalOffset: -5,
  },
  cca: {
    image: CCA,
    label: "CCA Logo",
    width: 20,
  },
  fwa: {
    svg: Fwa,
    label: "FWA Logo",
    width: 60,
  },
};
