import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({
   searchParams,
}: {
   searchParams: Promise<{ query?: string }>;
}) {
   const query = (await searchParams).query;

   const posts = [
      {
         _createdAt: "2021-01-11T00:00:00Z",
         // _createdAt: new Date().toISOString(),
         views: 55,
         author: { _id: 1, name:"JIGX" },
         _id: 1,
         description: "A platform for connecting with entreprenuers",
         image: "https://images.unsplash.com/photo-1638437447465-033e33537dab?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         category: "Tech",
         title: "Startup Connect",
      },
      {
         _createdAt: "2021-09-01T00:00:00Z",
         views: 55,
         author: { _id: 2 },
         _id: 2,
         description: "A TeslaBot",
         image: "https://cdn.pixabay.com/photo/2022/11/28/21/13/leaf-7623202_1280.jpg",
         category: "Tech",
         title: "TeslaBot",
      },
   ];
   // console.log("What is this --server or client?");
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
                  posts.map((post: StartupCardType, index: number) => (
                     <StartupCard key={post?.id} post={post} />
                  ))
               ) : (
                  <p>No startups found</p>
               )}
            </ul>
         </section>

         {/* `` is called a template string  */}
      </>
   );
}
