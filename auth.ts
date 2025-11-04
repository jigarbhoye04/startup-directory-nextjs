import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
import { client } from "./sanity/lib/client";
import { writeClient } from "./sanity/lib/write-client";

// @ts-expect-error - TypeScript incorrectly resolves NextAuth as module namespace instead of default export (next-auth@5.0.0-beta.30 issue)
export const { handlers, auth, signIn, signOut } = NextAuth({
   providers: [GitHub],
   callbacks: {
      async signIn({
         user,
         profile,
      }: {
         user: { name: string; email: string; image: string };
         profile: { id: string; login: string; bio: string };
      }): Promise<boolean> {
         const existingUser = await client
            .withConfig({ useCdn: false })
            .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
               id: profile.id,
            });

         if (!existingUser) {
            await writeClient.create({
               _type: "author",
               id: profile.id,
               name: user.name,
               username: profile.login,
               email: user.email,
               image: user.image,
               bio: profile.bio || "",
            });
         }

         return !!existingUser;
      },

      async jwt({
         token,
         account,
         profile,
      }: {
         token: JWT;
         account?: Record<string, unknown>;
         profile?: { id: string };
      }): Promise<JWT> {
         if (account && profile) {
            const user = await client
               .withConfig({ useCdn: false })
               .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
                  id: profile.id,
               });

            if (!user) {
               console.error(`No user found with GitHub ID: ${profile.id}`);
               return token; // Return the token without modifying it
            }

            token.id = user._id;
         } else {
            console.error("Account or profile is undefined.");
         }
         return token;
      },

      async session({
         session,
         token,
      }: {
         session: Session;
         token: JWT;
      }): Promise<Session> {
         Object.assign(session, { id: token.id });
         return session;
      },
   },
});