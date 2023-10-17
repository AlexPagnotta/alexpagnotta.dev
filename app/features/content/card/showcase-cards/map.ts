import { DuolingoFowlLanguageShowcaseContentCard } from "./duolingo-fowl-language/duolingo-fowl-language";
import { IkeaFavoritosShowcaseContentCard } from "./ikea-favoritos/ikea-favoritos";
import { OverheardShowcaseContentCard } from "./overheard/overheard";

export const showcaseContentCardsMap = {
  overheard: OverheardShowcaseContentCard,
  "ikea-favoritos": IkeaFavoritosShowcaseContentCard,
  "duolingo-fowl-language": DuolingoFowlLanguageShowcaseContentCard,
} as const;

export type ShowcaseContentCardName = keyof typeof showcaseContentCardsMap;
