import { BallpitContentCard } from "./lab/ballpit/ballpit";
import { CarouselContentCard } from "./lab/carousel/carousel";
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
  carousel: CarouselContentCard,
} as const;

export type ShowcaseContentCardName = keyof typeof showcaseContentCardsMap;
