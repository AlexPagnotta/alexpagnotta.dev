import { IkeaShowcaseContentCard } from "./ikea";
import { OverheardShowcaseContentCard } from "./overheard";

export const showcaseContentCardsMap = {
  overheard: OverheardShowcaseContentCard,
  ikea: IkeaShowcaseContentCard,
} as const;

export type ShowcaseContentCardName = keyof typeof showcaseContentCardsMap;
