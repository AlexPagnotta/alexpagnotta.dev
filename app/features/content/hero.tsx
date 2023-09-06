import { cx } from "class-variance-authority";
import React from "react";

import { Link } from "../ui/link";
import { Text } from "../ui/text";

import { formatContentDate } from "./dates";

type Props = {
  title: string;
  href?: string;
  date?: string;
  // TODO: Awards
  className?: string;
};

export const ContentHero = ({ title, href, date, className }: Props) => {
  const formattedDate = date && formatContentDate(date);

  return (
    <div className={cx("flex flex-col items-end", className)}>
      {formattedDate && (
        <Text size="body-2" className="text-theme-color-text-secondary mb-12 lg:mb-16">
          {formattedDate}
        </Text>
      )}
      {href && (
        <Text size="body-1" weight="regular" className="mb-12 lg:mb-16" asChild>
          <Link href={href} underline arrowIcon newWindow>
            Take a look
          </Link>
        </Text>
      )}
      <Text size="title-1" asChild className="text-end">
        <h1>A new sparky website for Flashy animations, floating windows, retro style, we have everything.</h1>
      </Text>
    </div>
  );
};
