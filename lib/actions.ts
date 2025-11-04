"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async (
   state: { error?: string; status: string; id?: string },
   form: FormData,
   pitch: string
) => {
   const session = await auth();
   if (!session) {
      return parseServerActionResponse({
         status: "ERROR",
         error: "Not authenticated",
      });
   }

   // Extract the form data where the pitch is not included
   const { title, description, category, link } = Object.fromEntries(
      Array.from(form).filter(([key]) => key !== "pitch")
   );

   // Create a slug from the title
   const slug = slugify(title as string, { lower: true, strict: true });

   try {
      const startup = {
         title,
         description,
         category,
         image: link,
         slug: {
            _type: slug,
            current: slug,
         },
         author: {
            _type: "reference",
            _ref: session?.id,
         },
         pitch,
      };

      const result = await writeClient.create({ _type: "startup", ...startup });

      return parseServerActionResponse({
         ...result,
         status: "SUCCESS",
         error: "",
      });
   } catch (error) {
      console.error(error);
      return parseServerActionResponse({
         status: "ERROR",
         error: JSON.stringify(error),
      });
   }
};
