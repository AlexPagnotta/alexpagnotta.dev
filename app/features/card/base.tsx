import { cx } from "class-variance-authority";

import { Link } from "../ui/link";
import { Text } from "../ui/text";

type Props = {
  title: string;
  infoText: string;
  children: string;
  href: string;
  className?: string;
};

const cardStyles = ["p-32 flex flex-col rounded-md bg-theme-color-card-bg text-theme-color-text-primary"];

export const BaseCard = ({ title, infoText, href, children, className }: Props) => {
  return (
    <article className={cx("w-full h-full", className)}>
      <Link href={href}>
        <div className={cx(cardStyles)}>
          <Text size="title-2" asChild className="mb-16">
            <h2>{title}</h2>
          </Text>
          <Text size="body-2" asChild className="mb-32 line-clamp-4">
            <p>{children}</p>
          </Text>
          <Text size="body-1" className="text-theme-color-text-secondary">
            {infoText}
          </Text>
        </div>
      </Link>
    </article>
  );
};
