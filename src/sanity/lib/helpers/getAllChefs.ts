import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if you need fresh data every time
  apiVersion: '2023-01-01', // Update this to the latest version if needed
});

export async function getAllChefs() {
  const query = `
    *[_type == "chef"]{
      name,
      position,
      experience,
      specialty,
      "imageUrl": image.asset->url,
      description,
      available
    }
  `;

  try {
    const chefs = await sanityClient.fetch(query);
    return chefs;
  } catch (error) {
    console.error("Error fetching chefs:", error);
    return [];
  }
}
