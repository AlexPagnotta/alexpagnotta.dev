import { DuolingoFowlLanguageShowcaseContentCard } from "./duolingo-fowl-language";
import { IkeaFavoritosShowcaseContentCard } from "./ikea-favoritos";
import { OverheardShowcaseContentCard } from "./overheard";

export const showcaseContentCardsMap = {
  overheard: OverheardShowcaseContentCard,
  "ikea-favoritos": IkeaFavoritosShowcaseContentCard,
  "duolingo-fowl-language": DuolingoFowlLanguageShowcaseContentCard,
} as const;

export type ShowcaseContentCardName = keyof typeof showcaseContentCardsMap;
