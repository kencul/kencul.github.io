// track card for music page
// takes data from music.json and displays it
import Card from "@/components/ui/card";
import LiteVideo from "@/components/ui/LiteVideo";

export default function TrackCard({ track }) {
    const { title, artist, description, featured, type, source, ytID } = track;

    const styles = {
      card: `
        relative flex flex-col transition-all duration-150 shadow-xl rounded-xl
        ${featured 
          ? "lg:col-span-3 md:col-span-2 p-8 border-2 border-highlight/90 hover:scale-[1.005]" 
          : "hover:border-highlight/50"}
      `,
      title: `font-bold text-white mb-1 ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`,
      artist: "text-lg font-light italic text-highlight mb-1",
      description: "text-gray-300 mb-6",
      mediaWrapper: "my-auto overflow-hidden",
    };
  
    return (
      <Card className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.artist}>{artist}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.mediaWrapper}>
          {type === "audio" && (
            <audio controls className="w-full bg-black rounded-lg p-1 hue-rotate-80 brightness-105 contrast-150">
              <source src={source} type="audio/wav" />
            </audio>
          )}
  
          {type === "youtube" && (
            <LiteVideo className = "aspect-video" id={ytID} title={`${styles.title} Music Video`}/>
            // <div className="aspect-video">
            //   <iframe className="w-full h-full" title={`${styles.title} Music Video`}src={source} allowFullScreen />
            // </div>
          )}
  
          {type === "soundcloud" && (
            <iframe width="100%" height="100%" title={`${styles.title} Soundcloud Player`} loading="lazy" src={`${source}&color=%239950d8&hide_related=true`} />
          )}
        </div>
      </Card>
    );
  }