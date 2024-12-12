import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
   console.log("What is this --server or client?");
   return (
      <>
         <h1 className="text-3xl">Welcome to NEXTJS! BOSS</h1>
         <Hello />
      </>
   );
}
