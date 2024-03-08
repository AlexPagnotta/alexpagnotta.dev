import { BallpitContentCard } from "./lab-3d/ballpit/ballpit";
import { DuolingoFowlLanguageShowcaseContentCard } from "./projects/duolingo-fowl-language/duolingo-fowl-language";
import { IkeaFavoritosShowcaseContentCard } from "./projects/ikea-favoritos/ikea-favoritos";
import { OverheardShowcaseContentCard } from "./projects/overheard/overheard";

export const showcaseContentCardsMap = {
  overheard: OverheardShowcaseContentCard,
  "ikea-favoritos": IkeaFavoritosShowcaseContentCard,
  "duolingo-fowl-language": DuolingoFowlLanguageShowcaseContentCard,

  ballpit: BallpitContentCard,
} as const;

export type ShowcaseContentCardName = keyof typeof showcaseContentCardsMap;
