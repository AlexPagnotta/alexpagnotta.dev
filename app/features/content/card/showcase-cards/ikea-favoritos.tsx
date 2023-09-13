import { cx } from "class-variance-authority";

import Logo from "../../assets/ikea-logo.svg";
import { type ShowcaseContentCardProps } from "../showcase";

import { Link } from "~/features/ui/link";

type Props = ShowcaseContentCardProps;

export const IkeaFavoritosShowcaseContentCard = ({ href, className }: Props) => {
  return (
    <article className={cx("w-full h-full", className)}>
      <Link href={href} className="w-full h-full">
        <div className="relative isolate w-full h-full flex items-center justify-center bg-[#4E63AF] text-white rounded-md overflow-hidden">
          <div className="absolute -z-10 top-30 inset-x-0 rounded-t-full h-[150%] bg-[#3F508D]" />
          <Logo className="h-30" />
        </div>
      </Link>
    </article>
  );
};
