import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const btnClass = "inline-block px-6 py-3 mt-8 text-lg font-bold text-[#292929] bg-[#f0f0f0] rounded-full transition-colors hover:bg-highlight-bold hover:text-white";
  return (
    <>
    {/* dont load the footer on the home page */}
    <style>{`.home-hide-footer { display: none; }`}</style>
    <div className="md:flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
      
      {/* Left text column */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Ken Kobayashi
        </h1>
        <h2 className="text-2xl sm:text-4xl font-light leading-snug text-highlight">
          Sound Engineer & Audio Developer
        </h2>
        <p className="italic mt-2 md:mx-0 text-highlight-light">
          Using technology to push the boundaries of art and technology
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link href="/music" className={btnClass}>
            My Music &rarr;
          </Link>
          <Link href="/projects" className={btnClass}>
            My Projects! &rarr;
          </Link>
        </div>
      </div>

      {/* Right image column */}
      <div className="flex-1 self-stretch relative min-h-75 md:min-h-0 max-h-[40vh] md:max-h-full">
        <div className="relative h-full min-h-75 md:min-h-0">
          <Image 
            src="/images/photos/ken-pro-photo1.webp" 
            alt="Ken Kobayashi"
            fill
            priority
            className="object-contain drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

    </div>
    </>
  );
}