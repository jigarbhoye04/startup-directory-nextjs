import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";

const View = async ({ id }: { id: string }) => {
   const { views: totalViews } = await client
      .withConfig({ useCdn: false })
      .fetch(STARTUP_VIEWS_QUERY, { id });
   //cdn:false for getting latest data from server

   // todo: update when number of views changes(done: see below)
   //patch is used for updates
   //after: is used to update the views after the page is loaded and rest of components are not even updating but only views is changing(that is pre-partial rendering)
   after(
      async () =>
         await writeClient
            .patch(id)
            .set({ views: totalViews + 1 })
            .commit()
   );

   return (
      <div className="view-container">
         <div className="absolute -top-2 -right-2">
            <Ping />
         </div>
         <p className="view-text">
            <span className="font-black">Views: {totalViews}</span>
            {/* Challenge : write a function to check whether a number is singular or plural and apple here. */}
         </p>
      </div>
   );
};

export default View;
