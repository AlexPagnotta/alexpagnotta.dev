import { awardsLogos, type AwardLogoName } from "./assets/map";

/**
 * Given an award item string, extract the sections of the string
 * @param awardItem The award item string
 * @returns The extracted sections of the award item string
 */
export const extractAwardsItemStringSections = (
  awardItem: string
): {
  initial: string;
  awardName?: AwardLogoName;
  end?: string;
  link?: string;
} => {
  // Get link if present, link is after a " | " delimiter
  const [awardItemString = "", link] = awardItem.split(" | ");

  // Get the name of the award in the curly braces, ex: {Awwwards}
  const nameRegex = /\{[^{}]*\}/;
  const nameRaw = awardItemString.match(nameRegex)?.[0];
  const name = nameRaw?.slice(1, -1);

  // Try to get the other two sections
  const parts = awardItemString.split(nameRegex);

  if (!parts[0]) return { initial: "" };

  const awardName = name && Object.keys(awardsLogos).includes(name) ? (name as AwardLogoName) : undefined;

  return {
    initial: parts[0],
    awardName,
    end: parts[1],
    link,
  };
};
