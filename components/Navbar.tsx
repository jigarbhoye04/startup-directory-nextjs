import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
   const session = await auth();

   return (
      <div className="flex fixed w-full px-5 py-3 bg-neutral-900 shadow-xs font-work-sans text-white z-40 justify-between items-center">
         <nav className="flex justify-between items-center w-full">
            {/* Logo on the left */}
            <Link href="/">
               <div className="flex items-center space-x-2">
                  <Image
                     className="rounded-sm text-white"
                     src="/logo1.png"
                     alt="logo"
                     width={200}
                     height={80}
                  />
               </div>
            </Link>

            {/* Everything aligned to the right */}
            <div className="flex items-center space-x-5 ml-auto">
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
                        }}
                     >
                        <button type="submit">
                           <span className="max-sm:hidden">Logout</span>
                           <LogOut className="mt-2 size-6 sm:hidden text-red-500" />
                        </button>
                     </form>

                     <Link href={`/user/${session?.id}`}>
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
