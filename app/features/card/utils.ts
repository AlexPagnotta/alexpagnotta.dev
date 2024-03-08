import { format, intlFormatDistance, differenceInDays } from "date-fns";

/**
 * Format date to be displayed in content card
 * @param date The date to format
 * @returns The formatted date
 */
export const formatContentCardDate = (date: string) => {
  const parsedDate = new Date(date);

  const daysToNow = Math.abs(differenceInDays(parsedDate, new Date()));

  if (daysToNow < 2) {
    const formattedDate = intlFormatDistance(parsedDate, new Date(), {
      unit: "day",
      locale: "en-US",
    });

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  } else {
    return format(parsedDate, "MMMM yyyy");
  }
};
