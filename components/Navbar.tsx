import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";
import { ModeToggle } from "./toggle-mode";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
   const session = await auth();

   return (
      <div className="px-5 py-3 bg-neutral-900 shadow-sm font-work-sans text-white">
         <nav className="flex justify-between items-center">
            <Link href="/">
               <div className="flex items-center space-x-2">
                  <Image
                     className="rounded-sm text-white"
                     src="/logo1.png"
                     alt="logo"
                     width={200}
                     height={80}
                  />
                  {/* <span className="text-2xl">Pitch Perfect</span> */}
               </div>
            </Link>

            <div className="flex items-center space-x-5">
               {/* <ModeToggle /> */}
               {session && session?.user ? (
                  <>
                     <Link href="/startup/create">
                        <span className="max-sm:hidden">Create</span>
                        <BadgePlus className="size-6 sm:hidden" />
                     </Link>
                     <form
                        action={async () => {
                           "use server";
                           await signOut({ redirectTo: "/" });
                           //should be like : await signOut(options?: { redirectTo: "/" });
                           //but idk why its like this (still works so.. :)  )
                        }}
                     >
                        <button type="submit">
                           <span className="max-sm:hidden">Logout</span>
                           <LogOut className="mt-2 size-6 sm:hidden text-red-500" />
                        </button>
                     </form>

                     {/* Dynamically links to user session */}
                     <Link href={`/user/${session?.user?.id}`}>
                        {/* <span>{session?.user?.name}</span> */}
                        <Avatar className="size-10">
                           <AvatarImage
                              src={session?.user?.image}
                              alt={session?.user?.name || "User"}
                           />
                           <AvatarFallback>
                              {session?.user?.name?.charAt(0)}
                           </AvatarFallback>
                        </Avatar>
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
