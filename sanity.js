import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "i9804f9i",
  dataset: "production",
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: "2023-03-08", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client
