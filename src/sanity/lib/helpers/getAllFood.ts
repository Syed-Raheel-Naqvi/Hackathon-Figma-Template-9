import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if you need fresh data every time
  apiVersion: '2023-01-01', // Update this as needed
});

export async function getAllFoods() {
  const query = `
    *[_type == "food"]{
      name,
      category,
      price,
      originalPrice,
      tags,
      "imageUrl": image.asset->url,
      description,
      available
    }
  `;

  try {
    const foods = await sanityClient.fetch(query);
    return foods;
  } catch (error) {
    console.error("Error fetching food items:", error);
    return [];
  }
}
