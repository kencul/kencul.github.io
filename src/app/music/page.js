import musicData from '@/data/music.json'; 
import TrackCard from '@/components/TrackCard';

export async function generateMetadata() {
  return {
    title: `Music`,
    description: "A showcase of music by Ken Kobayashi, a collection of electronic and Vocaloid music.",
    alternates: {
      canonical: "/music",
    },
    other: {
      rel: "preconnect",
      url: [
        "https://w.soundcloud.com",
        "https://api-widget.soundcloud.com"
      ],
    },
  }
}

export default function MusicPage() {
    return (
      <div className="py-8">
        {/* Page Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 border-b-2 border-highlight pb-6">
          Music Portfolio
        </h1>
  
        {/* Grid mapping over music JSON data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicData.map((track) => (
            <TrackCard key={track.id} track={track} />
            ))}
        </div>
      </div>
    );
  }
