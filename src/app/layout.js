import { Prompt, Edu_TAS_Beginner } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// Configure Prompt
const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-prompt",
});

// Configure Edu TAS Beginner
const eduTas = Edu_TAS_Beginner({
  subsets: ["latin"],
  variable: "--font-edu",
});

export const metadata = {
  metadataBase: new URL("https://kenmusic.net"),
  title: {
    default: "Ken Kobayashi | Sound Engineer & Audio Developer",
    template: "%s | Ken Kobayashi",
  },
  description: "Ken Kobayashi is a Sound Engineer and Audio Developer specializing in game audio architecture, C# runtime hooking, and DSP. Bridging the gap between creative sound design and technical implementation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ken Kobayashi | Sound Engineer & Audio Developer",
    description: "Exploring the intersection of sound and code.",
    url: "https://kenmusic.net",
    siteName: "Ken Kobayashi",
    images: [
      {
        url: "/images/photos/og-img.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Kobayashi | Sound Engineer & Audio Developer",
    description: "Exploring the intersection of sound and code.",
    images: ["/images/photos/og-img.webp"],
  },
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({ children }) {
  const navLinkClass = "hover:text-highlight transition-colors";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.kenmusic.net" />
      </head>
      <body 
        className={`${prompt.variable} ${eduTas.variable} antialiased min-h-screen flex flex-col`}
      >

        <header className="border-b py-4 mb-2 border-highlight/20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="logoName text-2xl font-black text-highlight">ken</Link>
          <nav>
            <ul className="flex gap-4 md:gap-12 text-base md:text-lg font-bold">
              <li><Link href="/" className={navLinkClass}>Home</Link></li>
              <li><Link href="/music" className={navLinkClass}>Music</Link></li>
              <li><Link href="/projects" className={navLinkClass}>Projects</Link></li>
              {/* <li><Link href="/about" className={navLinkClass}>About</Link></li>
              <li><Link href="/contact" className={navLinkClass}>Contact</Link></li> */}
              
            </ul>
          </nav>
          </div>
        </header>

        <main className="flex-1 flex flex-col container mx-auto px-4 min-w-0">
          {children}
        </main>

        <footer className="home-hide-footer mt-10 pb-6 border-t border-purple-900/30">
          <div className="container mx-auto px-4">
            {/* grid of 3 horizontal on desktop, vertical column on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-3 items-center pt-8 gap-4">
                  <div className="text-center md:text-left">
                      <Link href="/" className="group inline-block">
                          {/* grouped so you can hover and click on my roles */}
                          <p className="text-white font-bold tracking-tight group-hover:text-highlight transition-colors">Ken Kobayashi</p>
                          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                              Sound Engineer & Audio Developer
                          </p>
                      </Link>
                  </div>

                  <nav className="flex justify-center">
                      <ul className="flex gap-6 text-sm font-bold text-white">
                          <li><Link href="/" className={navLinkClass}>Home</Link></li>
                          <li><Link href="/music" className={navLinkClass}>Music</Link></li>
                          <li><Link href="/projects" className={navLinkClass}>Projects</Link></li>
                          {/* <li><Link href="/about" className={navLinkClass}>About</Link></li>
                          <li><Link href="/contact" className={navLinkClass}>Contact</Link></li> */}
                      </ul>
                  </nav>

                  <div className="flex gap-6 justify-center md:justify-end text-sm font-bold text-gray-400">
                      <a href="https://github.com/kencul" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={navLinkClass}>
                        GitHub
                      </a>
                      <a href="https://www.linkedin.com/in/ken-kobayashi-7b684821b/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={navLinkClass}>
                        LinkedIn
                      </a>
                  </div>
              </div>
              
              <div className="text-center border-t border-gray-900/50 pt-8">
                  <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em] opacity-40">
                      © 2026 • Designed & Built by Ken Kobayashi
                  </p>
              </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
