import { cx } from "class-variance-authority";

import { Link } from "../../ui/link";
import { Text } from "../../ui/text";
import { formatContentCardDate } from "../dates";
import { ContentType } from "../types";

type Props = {
  title: string;
  type: ContentType;
  date?: string;
  children: string;
  href: string;
  className?: string;
};

const contentTypeCategoryMap = {
  [ContentType.POST]: "Blog",
  [ContentType.PROJECT]: "Project",
};

const cardStyles = ["p-24 flex-1 flex flex-col rounded-md bg-theme-color-card-bg text-theme-color-text-primary"];

export const BaseContentCard = ({ title, type, date, href, children, className }: Props) => {
  const formattedDate = date && formatContentCardDate(date);

  return (
    <article className={cx("w-full pointer-events-none opacity-70", className)}>
      <Link href={href} className="w-full">
        <div className={cx(cardStyles)}>
          <Text size="title-3" asChild className="mb-12">
            <h2>{title}</h2>
          </Text>
          <Text size="body-2" asChild className="mb-32 line-clamp-6">
            <p>{children}</p>
          </Text>
          <Text size="body-1" className="text-theme-color-text-secondary">
            {[contentTypeCategoryMap[type], formattedDate].filter(Boolean).join(" • ")}
          </Text>
        </div>
      </Link>
    </article>
  );
};
