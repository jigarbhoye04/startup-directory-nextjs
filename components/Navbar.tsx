import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";
import { ModeToggle } from "./toggle-mode";

const Navbar = async () => {
   const session = await auth();

   return (
      <div className="px-5 py-3 bg-neutral-900 shadow-sm font-work-sans text-white">
         <nav className="flex justify-between items-center">
            <Link href="/">
               <Image className="rounded-lg" src="/logo.png" alt="logo" width={50} height={50} />
            </Link>

            <div className="flex items-center space-x-5">
               {/* <ModeToggle /> */}
               {session && session?.user ? (
                  <>
                     <Link href="/startup/create">
                        <span>Create</span>
                     </Link>
                     <form action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/" });
                        //should be like : await signOut(options?: { redirectTo: "/" });
                        //but idk why its like this (still works so.. :)  )
                     }}>
                        <button type="submit">
                            <span>Logout</span>
                        </button>
                     </form>

                     {/* Dynamically links to user session */}
                     <Link href={`/user/${session?.user?.id}`}>
                        <span>{session?.user?.name}</span>
                     </Link>
                  </>
               ) : (
                  <form
                     action={async () => {
                        "use server";
                        await signIn("github");
                     }}
                  >
                     <button type="submit">
                        <span>Login</span>
                     </button>
                  </form>
               )}
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
