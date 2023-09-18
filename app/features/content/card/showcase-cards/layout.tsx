import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../showcase";

import { Link } from "~/features/ui/link";
import { Text } from "~/features/ui/text";

type Props = ShowcaseContentCardProps & {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const ShowcaseContentCardLayout = ({ title, category, href, agency, className, style, children }: Props) => {
  return (
    <article
      className={cx("w-full rounded-md", className)}
      style={{
        ...style,
      }}
    >
      <Link href={href} className="w-full">
        <div className="relative w-full">
          <div className="flex flex-col gap-2 px-[--card-spacing] pt-[--card-spacing]">
            <Text size="title-3" asChild>
              <h2>{title}</h2>
            </Text>
            <Text size="body-1">{[category, agency].filter(Boolean).join(" • ")}</Text>
          </div>
          {children}
        </div>
      </Link>
    </article>
  );
};
