// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function ModeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="bg-transparent hover:bg-gray-800 dark:hover:bg-gray-700 transition-all rounded-md"
//         >
//           <Sun className="h-[1.2rem] w-[1.2rem] text-white dark:text-gray-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] text-gray-600 dark:text-gray-200 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         align="end"
//         className="w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-300 dark:border-gray-700"
//       >
//         <DropdownMenuItem
//           onClick={() => setTheme("light")}
//           className="hover:bg-gray-400 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors rounded-sm px-3 py-2"
//         >
//           Light Mode
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           onClick={() => setTheme("dark")}
//           className="hover:bg-gray-400 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors rounded-sm px-3 py-2"
//         >
//           Dark Mode
//         </DropdownMenuItem>
//         {/* <DropdownMenuItem
//           onClick={() => setTheme("system")}
//           className="hover:bg-gray-400 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors rounded-sm px-3 py-2"
//         >
//           System Default
//         </DropdownMenuItem> */}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }



"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="bg-transparent hover:bg-gray-800 dark:hover:bg-gray-700 transition-all rounded-md"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] text-white dark:text-gray-400 ${
          theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
        } transition-all`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] text-gray-600 dark:text-gray-200 ${
          theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        } transition-all`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
