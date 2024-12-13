import Navbar from "../../components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode}>) {
   return (
    <main className="font-work-sans ">
        <Navbar />
        {children}
        {/* temporary */}
        <div className="flex item-center px-5 py-3 bg-neutral-900 shadow-sm font-work-sans text-white">
            <footer>
                <p>© 2021 Pitch Perfect</p>
            </footer>
        </div>
    </main>
   );
}
