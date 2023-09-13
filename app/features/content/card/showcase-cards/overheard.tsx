import { cx } from "class-variance-authority";

import Logo from "../../assets/overheard-logo.svg";
import { type ShowcaseContentCardProps } from "../showcase";

import { Link } from "~/features/ui/link";

type Props = ShowcaseContentCardProps;

export const OverheardShowcaseContentCard = ({ href, className }: Props) => {
  return (
    <article className={cx("w-full h-full", className)}>
      <Link href={href} className="w-full h-full">
        <div className="w-full h-full flex items-center justify-center bg-[#FEDB80] text-white rounded-md ">
          <Logo className="h-100 -translate-y-12 drop-shadow-[-2px_2px_0_#F9C745]" />
        </div>
      </Link>
    </article>
  );
};
