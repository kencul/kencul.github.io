// track card for music page
// takes data from music.json and displays it

export default function TrackCard({ track }) {
    const { title, artist, description, featured, type, source } = track;
  
    // 1. Define Tailwind v4 style groups
    const styles = {
      card: `
        relative flex flex-col transition-all duration-150 shadow-xl rounded-xl
        ${featured 
          ? "lg:col-span-3 md:col-span-2 bg-gray-900/40 p-8 border-2 border-highlight shadow-2xl hover:scale-[1.005]" 
          : "bg-gray-900/60 p-6 border border-white/5 hover:border-highlight/25"}
      `,
      title: `font-bold text-white mb-1 ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`,
      artist: "text-lg font-light italic text-highlight mb-1",
      description: "text-gray-300 mb-6 leading-relaxed",
      mediaWrapper: "my-auto overflow-hidden"
    };
  
    return (
      <article className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.artist}>{artist}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.mediaWrapper}>
          {type === "audio" && (
            <audio controls className="w-full bg-black rounded-lg p-1 hue-rotate-[80deg] brightness-105 contrast-150">
              <source src={source} type="audio/wav" />
            </audio>
          )}
  
          {type === "youtube" && (
            <div className="aspect-video">
              <iframe className="w-full h-full" src={source} allowFullScreen />
            </div>
          )}
  
          {type === "soundcloud" && (
            <iframe width="100%" height="100%" src={`${source}&color=%239950d8&hide_related=true`} />
          )}
        </div>
      </article>
    );
  }