// import { client } from "@/sanity/lib/client";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
import { STARTUPS_QUERIY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
   searchParams,
}: {
   searchParams: Promise<{ query?: string }>;
}) {
   const query = (await searchParams).query;
   // const posts = await client.fetch(STARTUPS_QUERIY);
   const { data: posts } = await sanityFetch({query: STARTUPS_QUERIY});
   //this is a promise, so we need to await it to get the data immediately
   //revalidates data whenever the data changes

   return (
      <> 
         {/* Hero Section */}
         <section className="pink_container">
            <h1 className="heading">
               Pitch your startup! <br /> Connect with entreprenuers
            </h1>

            <p className="sub-heading !max-w-3xl">
               Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
               Competitions.
            </p>

            <SearchForm query={query} />
         </section>

         {/* Startup Section */}

         <section className="section_container">
            <p className="text-30-semibold">
               {query ? `Search results for "${query}"` : "All Startups"}
            </p>

            <ul className="mt-7 card_grid">
               {/* map posts */}
               {posts?.length > 0 ? (
                  posts.map((post: StartupTypeCard, index: number) => (
                     <StartupCard key={post?._id} post={post} />
                  ))
               ) : (
                  <p>No startups found</p>
               )}
            </ul>
         </section>
         <SanityLive />
         {/* this will keep the content updated */}

         {/* `` is called a template string  */}
      </>
   );
}
