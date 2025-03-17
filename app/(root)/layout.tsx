import Navbar from "../../components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans" suppressHydrationWarning >
      <Navbar />
      {children}
      <footer className="bg-neutral-900 text-white shadow-xs font-work-sans">
        <div className="container mx-auto px-5 py-8">
          {/* Top Section: Links and Socials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About Section */}
            <div>
              <h3 className="text-lg font-semibold">About</h3>
              <p className="text-sm mt-2 text-gray-400">
                Pitch Perfect is your go-to platform for creating ideas, refining pitches, and turning dreams into reality. Empower your creativity with our tools and resources.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            {/* <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/about" className="hover:text-white">About</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">Services</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">Contact Us</a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white">Terms of Service</a>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Bottom Section: Copyright */}
          <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
            {/* <p>© {new Date().getFullYear()} Pitch Perfect. All rights reserved.</p> */}
            <p>© {new Date().getFullYear()} Pitch Perfect.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
