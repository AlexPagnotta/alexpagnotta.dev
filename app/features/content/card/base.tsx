import { cx } from "class-variance-authority";
import { motion } from "framer-motion";

import { Link } from "../../ui/link";
import { Text } from "../../ui/text";
import { formatContentCardDate } from "../dates";

import { CardInitialAnimationProps } from "./initial-animation";

type Props = {
  index: number;
  title: string;
  category: string;
  date: string;
  children: string;
  href: string;
  disabled?: boolean;
  className?: string;
  isMdUp?: boolean;
  enableInitialAnimation?: boolean;
  onInitialAnimationComplete?: () => void;
};

export const BaseContentCard = ({
  index,
  title,
  category,
  date,
  href,
  children,
  className,
  disabled,
  isMdUp,
  enableInitialAnimation,
  onInitialAnimationComplete,
}: Props) => {
  const formattedDate = date && formatContentCardDate(date);

  return (
    <Link href={href} className="w-full">
      <motion.article
        className={cx(
          "w-full rounded-md bg-theme-color-card-bg text-theme-color-text-primary",
          disabled && "pointer-events-none opacity-70", // TODO: Remove disabled prop when blog is ready
          className
        )}
        {...(enableInitialAnimation
          ? CardInitialAnimationProps({ index, cardDisabled: disabled, isMdUp, onInitialAnimationComplete })
          : {})}
      >
        <div className="p-[--card-spacing] flex-1 flex flex-col">
          <Text size="title-3" asChild className="mb-16">
            <h2>{title}</h2>
          </Text>
          <Text size="body-2" asChild className="mb-32 line-clamp-6">
            <p>{children}</p>
          </Text>
          <Text size="body-1" className="text-theme-color-text-secondary">
            {[category, formattedDate].join(" • ")}
          </Text>
        </div>
      </motion.article>
    </Link>
  );
};
