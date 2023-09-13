import { cx } from "class-variance-authority";

import Logo from "../../assets/duolingo-logo.svg";
import { type ShowcaseContentCardProps } from "../showcase";

import { Link } from "~/features/ui/link";

type Props = ShowcaseContentCardProps;

export const DuolingoFowlLanguageShowcaseContentCard = ({ href, className }: Props) => {
  return (
    <article className={cx("w-full h-full", className)}>
      <Link href={href} className="w-full h-full">
        <div className="w-full h-full flex items-center justify-center bg-[#57bff7] rounded-md ">
          <Logo className="h-128" />
        </div>
      </Link>
    </article>
  );
};
