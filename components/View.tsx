import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
   const { views: totalViews } = await client
      .withConfig({ useCdn: false })
      .fetch(STARTUP_VIEWS_QUERY, { id });
      //cdn:false for getting latest data from server

      // todo: update when number of views changes

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
