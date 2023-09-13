import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../showcase";

import { Link } from "~/features/ui/link";

type Props = ShowcaseContentCardProps;

export const DuolingoFowlLanguageShowcaseContentCard = ({ href, className }: Props) => {
  return (
    <article className={cx("w-full h-full", className)}>
      <Link href={href} className="w-full h-full">
        <div className="w-full h-full bg-[#7391ff] rounded-md" />
      </Link>
    </article>
  );
};
