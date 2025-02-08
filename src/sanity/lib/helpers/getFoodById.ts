import { createClient } from "@sanity/client";

// Create a Sanity client to fetch data from your Sanity CMS
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true, // Use CDN for faster responses (disable if you need real-time updates)
  apiVersion: "2023-01-01",
});

// Function to fetch a food item by its ID
export async function getFoodById(productId: string) {
  const query = `
    *[_type == "food" && _id == $productId][0]{
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
    const food = await sanityClient.fetch(query, { productId });
    return food;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
