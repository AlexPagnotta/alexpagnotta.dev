import { format } from "date-fns";
import { enUS } from "date-fns/locale";

/**
 * Format date to be displayed in the post page
 * @param date The date to format
 * @returns The formatted date
 */
export const formatPostDate = (date: string) =>
  format(new Date(date), "dd MMMM yyyy", {
    locale: enUS,
  });
