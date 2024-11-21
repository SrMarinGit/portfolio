import type { ImageMetadata } from "astro";

function getImgFromAssets(image: string) {
  const imagePath: string = `/src/assets/${image}`;

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{jpeg,jpg,png,gif}');
  if (!images[imagePath])
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`
    );
  return images[imagePath]();
}

export default getImgFromAssets;



