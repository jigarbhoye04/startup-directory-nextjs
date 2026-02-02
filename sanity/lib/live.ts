// // Querying with "sanityFetch" will keep content automatically updated
// // Before using it, import and render "<SanityLive />" in your layout, see
// // https://github.com/sanity-io/next-sanity#live-content-api for more information.
// import { defineLive } from "next-sanity";
// import { client } from './client'

// export const { sanityFetch, SanityLive } = defineLive({ 
//   client: client.withConfig({ 
//     // Live content is currently only available on the experimental API
//     // https://www.sanity.io/docs/api-versioning
//     apiVersion: 'vX' 
//   }) 
// });



import "server-only";
import type { QueryParams } from "@sanity/client";
import { client } from "./client";

type SanityFetchParams = {
  query: string;
  params?: QueryParams;
};

export const sanityFetch = async <T>({ query, params }: SanityFetchParams) => {
  const data = params
    ? await client.fetch<T>(query, params)
    : await client.fetch<T>(query);
  return { data };
};

export const SanityLive = () => null;

// The "server-only" pragma tells Vercel to only include this module in the server build and not the client build.