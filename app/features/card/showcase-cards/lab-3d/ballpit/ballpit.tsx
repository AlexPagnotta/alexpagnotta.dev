import { cx } from "class-variance-authority";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

import { type ShowcaseContentCardProps } from "../../../showcase";
import { ShowcaseContentCardLayout } from "../../layout";

const BallpitContentCardScene = dynamic(() => import("./scene").then((mod) => mod.BallpitContentCardScene), {
  ssr: false,
});

type Props = ShowcaseContentCardProps;

export const BallpitContentCard = ({ className, ...rest }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(wrapperRef, { once: true });

  return (
    <ShowcaseContentCardLayout
      ref={wrapperRef}
      fullCardLink={false}
      className={cx("bg-[--color-ballpit-card-bg] text-[--color-ballpit-card-text] min-h-[30rem] h-0", className)}
      {...rest}
    >
      {isInView && <BallpitContentCardScene className="absolute inset-0 -z-10" />}
    </ShowcaseContentCardLayout>
  );
};
