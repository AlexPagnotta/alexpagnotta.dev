"use client";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { cx } from "class-variance-authority";

import { Image } from "~/features/ui/image";

import { type AwardLogoName, awardLogoDataMap } from "./assets/map";

type Props = {
  name: AwardLogoName;
  className?: string;
};

export const AwardLogo = ({ name, className, ...rest }: Props) => {
  const { label, width, ...src } = awardLogoDataMap[name];

  return (
    <span
      className={cx("inline-block", className)}
      style={{
        width: `${width}px`,
        marginTop: src.verticalOffset ? `${src.verticalOffset}px` : undefined,
      }}
      {...rest}
    >
      {"svg" in src ? (
        <AccessibleIcon.Root label={label}>
          <src.svg className="w-full" />
        </AccessibleIcon.Root>
      ) : (
        <Image src={src.image} alt={label} quality={80} sizes="100px" placeholder="blur" className="w-full" />
      )}
    </span>
  );
};
