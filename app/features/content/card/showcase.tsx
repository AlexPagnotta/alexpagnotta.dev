import { type ShowcaseContentCardName, showcaseContentCardsMap } from "./showcase-cards/map";

export type ShowcaseContentCardProps = {
  href: string;
  className?: string;
};

type Props = {
  name: ShowcaseContentCardName;
} & ShowcaseContentCardProps;

export const ShowcaseContentCard = ({ name, ...rest }: Props) => {
  const Component = showcaseContentCardsMap[name];
  return <Component {...rest} />;
};
