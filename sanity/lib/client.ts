import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  useCdn: false,
  //latest data on refresh immediately
})

//ISR- Incremental Static Regeneration


//if useCdn is set to false, the client will use the API instead of the CDN which is useful for preview mode.
//if you want to use the API in production, you can set useCdn to false and use the preview mode.

//it will cache the data for 5 minutes and then revalidate the data.
