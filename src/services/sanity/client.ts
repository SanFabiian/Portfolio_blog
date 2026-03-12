// Sanity client placeholder – configure when CMS is set up
// import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

// TODO: Create client when Sanity is configured
// export const client = createClient({ projectId, dataset });
