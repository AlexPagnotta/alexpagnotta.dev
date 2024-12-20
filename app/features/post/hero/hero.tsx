import { cx } from "class-variance-authority";
import React from "react";

import { Link } from "../../ui/link";
import { Text } from "../../ui/text";
import { formatPostDate } from "../utils";

import { Award } from "./award/award";

type Props = {
  title: string;
  href?: string;
  date?: string;
  awards?: string[];
  className?: string;
};

export const PostHero = ({ title, href, date, awards, className }: Props) => {
  const formattedDate = date && formatPostDate(date);

  return (
    <div className={cx("flex flex-col items-end", className)}>
      {formattedDate && (
        <Text size="body-2" className="text-theme-color-text-secondary mb-6 lg:mb-8">
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
      <Text size="title-1" asChild className="text-end mb-32">
        <h1>{title}</h1>
      </Text>
      {awards && (
        <div className="flex flex-col gap-6 text-end">
          {awards.map((award, index) => (
            <Award key={index} awardItem={award} />
          ))}
        </div>
      )}
    </div>
  );
};
