import { cx } from "class-variance-authority";

import { Link } from "../../ui/link";
import { Text } from "../../ui/text";
import { formatContentCardDate } from "../dates";

type Props = {
  title: string;
  category: string;
  date: string;
  children: string;
  href: string;
  className?: string;
};

export const BaseContentCard = ({ title, category, date, href, children, className }: Props) => {
  const formattedDate = date && formatContentCardDate(date);

  return (
    <article
      className={cx(
        "w-full rounded-md bg-theme-color-card-bg text-theme-color-text-primary",
        "pointer-events-none opacity-70", // TODO: Remove when blog posts are ready
        className
      )}
    >
      <Link href={href} className="w-full">
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
      </Link>
    </article>
  );
};
