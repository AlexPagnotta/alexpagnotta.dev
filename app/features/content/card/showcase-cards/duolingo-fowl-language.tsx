import { cx } from "class-variance-authority";

import { type ShowcaseContentCardProps } from "../showcase";

import { ShowcaseContentCardLayout } from "./layout";

import { Image } from "~/features/ui/image";

type Props = ShowcaseContentCardProps;

const coverImageStyles = `
  absolute top-32 left-88 md:left-48 w-[27.5rem] rotate-[-10deg]
  border-[12px] border-[--color-duolingo-fl-card-cover-border]
  shadow-[-2px_-1px_6px_0px_rgba(0,_0,_0,_0.05)]
`;

export const DuolingoFowlLanguageShowcaseContentCard = ({ className, ...rest }: Props) => {
  return (
    <ShowcaseContentCardLayout
      {...rest}
      className={cx("text-[--color-duolingo-fl-card-text]", className)}
      style={{
        background: "var(--color-duolingo-fl-card-bg)",
      }}
    >
      <div className="relative h-176">
        <Image
          src="/content/projects/duolingo-fowl-language/images/card-cover.jpg"
          alt="A screenshot of the Duolingo Fowl Language app"
          width={1080}
          height={629}
          quality={80}
          className={coverImageStyles}
          sizes="300px"
        />
      </div>
    </ShowcaseContentCardLayout>
  );
};
