import fs from "node:fs/promises";

import getImageSize from "image-size";
import { getPlaiceholder } from "plaiceholder";

/**
 * Generate blur placeholder of the image, used for non static images
 * @param imageSrc Src of the image, if from public folder it should contain "./public" prefix
 * @returns Blur placeholder of the image
 */
export const generateBlurPlaceholder = async (imageSrc: string) => {
  const buffer = await fs.readFile(imageSrc);
  const { base64: blurPlaceholder } = await getPlaiceholder(buffer);

  return blurPlaceholder;
};

/**
 * Extracts the width and height of the image
 * @param imageSrc Src of the image, if from public folder it should contain "./public" prefix
 * @returns Width and height of the image
 */
export const extractSizesFromImage = async (imageSrc: string) => {
  const { width, height } = getImageSize(imageSrc);

  return { width, height };
};
