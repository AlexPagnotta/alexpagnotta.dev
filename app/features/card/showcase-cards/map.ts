import { BallpitContentCard } from "./lab/ballpit/ballpit";
import { DuolingoFowlLanguageShowcaseContentCard } from "./projects/duolingo-fowl-language/duolingo-fowl-language";
import { IkeaFavoritosShowcaseContentCard } from "./projects/ikea-favoritos/ikea-favoritos";
import { OverheardShowcaseContentCard } from "./projects/overheard/overheard";

export const showcaseContentCardsMap = {
  /* Projects */
  overheard: OverheardShowcaseContentCard,
  "ikea-favoritos": IkeaFavoritosShowcaseContentCard,
  "duolingo-fowl-language": DuolingoFowlLanguageShowcaseContentCard,

  /* Lab */
  ballpit: BallpitContentCard,
} as const;

export type ShowcaseContentCardName = keyof typeof showcaseContentCardsMap;
