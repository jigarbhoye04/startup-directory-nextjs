import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
   const session = await auth();

   return (
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-neutral-900/90 backdrop-blur">
         <nav className="flex justify-between items-center w-full px-5 py-3 font-work-sans text-white">
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
            <div className="flex items-center space-x-4 ml-auto">
               {session && session?.user ? (
                  <>
                     <Link
                        href="/startup/create"
                        className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium transition hover:bg-white/10"
                     >
                        <span className="max-sm:hidden">Create</span>
                        <BadgePlus className="size-6 sm:hidden" />
                     </Link>
                     <form
                        action={async () => {
                           "use server";
                           await signOut({ redirectTo: "/" });
                        }}
                     >
                        <button
                           type="submit"
                           className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium transition hover:bg-white/10"
                        >
                           <span className="max-sm:hidden">Logout</span>
                           <LogOut className="size-5 sm:hidden text-red-400" />
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
                     <button type="submit" className="login text-sm">
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
