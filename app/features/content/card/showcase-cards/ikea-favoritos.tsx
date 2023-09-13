import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../showcase";

import { Link } from "~/features/ui/link";

type Props = ShowcaseContentCardProps;

export const IkeaFavoritosShowcaseContentCard = ({ href, className }: Props) => {
  return (
    <article className={cx("w-full h-full", className)}>
      <Link href={href} className="w-full h-full">
        <div className="w-full h-full bg-[#4E63AF] rounded-md" />
      </Link>
    </article>
  );
};
