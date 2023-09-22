import { cx } from "class-variance-authority";
import { motion } from "framer-motion";
import React from "react";

import { type ShowcaseContentCardProps } from "../showcase";

import { useMediaQuery } from "~/features/dom/hooks/use-media-query";
import { up } from "~/features/dom/utils/screens";
import { Link } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

type Props = ShowcaseContentCardProps & {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const ShowcaseContentCardLayout = ({
  title,
  category,
  href,
  agency,
  className,
  style,
  children,
  ...rest
}: Props) => {
  // TODO: Account for hover supported, so that we also have the "inView" behavior on tablet (?)
  const isMdUp = useMediaQuery(up("md"), true);

  return (
    <motion.article
      className={cx("w-full rounded-md overflow-hidden", className)}
      style={{
        ...style,
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      {...rest}
    >
      <Link href={href} className="w-full">
        <motion.div
          className="relative isolate w-full"
          initial="initial"
          whileHover={isMdUp ? "hover" : undefined}
          whileInView={!isMdUp ? "inView" : undefined}
          viewport={{
            margin: "-30% 0px -30% 0px",
            amount: 0.5,
          }}
        >
          <div className="flex flex-col gap-2 px-[--card-spacing] pt-[--card-spacing] z-1">
            <Text size="title-3" asChild>
              <h2>{title}</h2>
            </Text>
            <Text size="body-1">{[category, agency].filter(Boolean).join(" • ")}</Text>
          </div>
          {children}
        </motion.div>
      </Link>
    </motion.article>
  );
};
