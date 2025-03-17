// example: /startup/124
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import {
   PLAYLIST_BY_SLUG_QUERY,
   STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import Image from "next/image";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { Star } from "lucide-react";

const md = markdownit();

// export const experimental_ppr = true;
//ppr - partial pre-rendering
//combine static and dynamic components in same route

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
   const id = (await params).id;

   //this was sequential fetching making two requests one after another
   //but we can make them parallel by using Promise.all


   const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
   // const { select: editorPosts } = await client.fetch(PLAYLIST_BY_SLUG_QUERY, {
   //    slug: "editor-s-picks",
   // });


   //parallel fetching
   // const [post, { select: editorPosts }] = await Promise.all([
   //    client.fetch(STARTUP_BY_ID_QUERY, { id }),
   //    client.fetch(PLAYLIST_BY_SLUG_QUERY, { slug: "editor-s-picks" }),
   // ]);



   const parsedContent = md.render(post?.pitch || "");
   if (!post) return notFound();

   return (
      <>
         <section className="startup_id_container">
            <p className="tag">{formatDate(post?._createdAt)}</p>
            <h1 className="heading">{post.title}</h1>
            <p className="sub-heading max-w-5xl!">{post.description}</p>
         </section>

         <section className="section_container">
            <img
               src={post.image}
               alt="thumbnail"
               className="w-full h-auto rounded-xl"
            />
            <div className="space-y-5 mt-10 max-w-5xl mx-auto">
               <div className="flex-between gap-5">
                  <Link
                     href={`/user/${post.author?._id}`}
                     className="flex gap-2 items-center mb-3"
                  >
                     <Image
                        src={post.author.image} 
                        alt="avatar"
                        width={64}
                        height={64}
                        className="rounded-full drop-shadow-lg"
                     />
                     <div>
                        <p className="text-20-medium">{post.author.name}</p>
                        <p className="text-20-medium text-black-300!">
                           @{post.author.username}
                        </p>
                     </div>
                  </Link>
                  <p className="category-tag">{post.category}</p>
               </div>
               <h3 className="text-30-bold">Pitch Details</h3>
               {/* react normaly escapes any normal html to prevent any XSS attack  */}
               {parsedContent ? (
                  // but when inserting raw html like the parsed markdown, we must have to use this dangerouslyInnerHTML to tell react that content is safe and should be rendered on page.
                  <article
                     className="prose max-w-5xl font-work-sans break-all"
                     //prose = allow tailwind css to change some styles with markdown
                     dangerouslySetInnerHTML={{
                        __html: parsedContent,
                     }}
                  />
               ) : (
                  <p className="no-result">No Details Provided</p>
               )}
            </div>
            <hr className="divider" />

            {/* Editor's Choice Startups Section Below 
            {editorPosts?.length > 0 && (
               <div className="max-w-4xl mx-auto">
                  <p className="text-30-semibold">Editor's Picks</p>
                  <ul className="mt-7 card_grid-sm">
                     {editorPosts.map((post: StartupTypeCard, i: number) => (
                        <StartupCard key={i} post={post} />
                     ))}
                  </ul>
               </div>
            )}
            */}

            <Suspense fallback={<Skeleton className="view-skeleton" />}>
               <View id={id} />
            </Suspense>
         </section>
      </>
   );
};

export default Page;
