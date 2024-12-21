import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
import { client } from "./sanity/lib/client";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
   providers: [GitHub],
   callbacks: {
      async signIn({
         user: { name, email, image },
         profile: { id, login, bio },
      }) {
         const existingUser = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
            id: id,
         });

         if (!existingUser) {
            await writeClient.create({
               _type: "author",
               id: id,
               name: name,
               username: login,
               email: email,
               image: image,
               bio: bio || "",
            });
         }

         if (existingUser) {
            return true;
         }
      },
      
      //this allows us to connect github user with a sanity author which can then create a startup
      async jwt({ token, account, profile }) {
         if (account && profile) {
            const user = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
               id: profile?.id,
            });

            token.id = user._id;
         }
         return token;
      },

      //session = we get access to a session and a token and we need to pass profile id from token to session
      async session({session,token}){
        Object.assign(session,{id:token.id});
        return session;
      }
   },
});

//callbacks-this will be called when the user signs in(authenticated)
