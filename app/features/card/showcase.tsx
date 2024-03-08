import { type ShowcaseContentCardName, showcaseContentCardsMap } from "./showcase-cards/map";

export type ShowcaseContentCardProps = {
  index: number;
  title: string;
  category: string;
  href?: string;
  agency?: string;
  animationInitialDelay?: number;
  className?: string;
  isMdUp?: boolean;
};

type Props = {
  name: ShowcaseContentCardName;
} & ShowcaseContentCardProps;

export const ShowcaseContentCard = ({ name, ...rest }: Props) => {
  const Component = showcaseContentCardsMap[name];
  return <Component {...rest} />;
};
