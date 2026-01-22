import Image from "next/image";
import Link from "next/link";
import {FileText} from 'lucide-react';
import data from "@/data/projects.json";
import Card from "@/components/ui/card";
import { GithubIcon } from "@/components/ui/icons";
import SectionHeading from "@/components/ui/SectionHeading";

export async function generateMetadata() {
  // Find the project data (same logic used in your component)
  const project = data.projects.find(p => p.slug === "video-csound");

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.description,
  };
}

export default function VideoCsoundCaseStudy() {
  const project = data.projects.find(p => p.slug === "video-csound");
  if(!project) {
    return <p>Project not found.</p>;
  }

  // Data Arrays
  const techStack = [
    { label: "Language", val: "Python / Csound" },
    { label: "Libraries", val: "Ultralytics / OpenCV" },
    { label: "Model", val: "YOLO11n / COCO" },
    { label: "Data", val: "YAML / NumPy" },
  ];

  const outcomes = [
    { title: "Marker-less Tangible Interface", desc: "Successfully replaced physical fiducial markers with YOLO11 object detection, enabling household items to act as musical controllers." },
    { title: "Performative Occlusion", desc: "Identified that the act of hiding/revealing objects creates a natural 'mute' gesture, providing intuitive structure for live performance." },
    { title: "Semantic Mapping Pipeline", desc: "Mapped real-time 3D bounding box coordinates to complex synthesis variables, creating a transparent link between motion and sound." },
    { title: "User Friendly Workflow", desc: "Created a modular, template-based Python toolkit that allows other artists and researchers to experiment with data-driven sonification and marker-less audiovisual interaction." }
  ];

  const challenges = [
    {
      prob: "Sonic Monotony",
      desc: "Stationary objects produced undifferentiated drones since audio was mapped strictly to shifting physical coordinates.",
      sol: "Redesigned Csound instruments with internal modulation through Sample-and-Hold based amplitude modulation to create musical interest independent of physical movement."
    },
    {
      prob: "Real-Time Latency",
      desc: "Identified a consistent ~500ms delay between visual events and audio response, detracting from the sense of direct physical interactivity.",
      sol: "Shifting to native Ultralytics video handling to implement 'video stride' (processing every Nth frame) to reduce computational load."
    }
  ];

  const futureWork = [
    { title: "GUI Development", desc: <>Transitioning from a CLI to a desktop application using <span className="text-highlight-light">Tkinter</span> or <span className="text-highlight-light">PySide</span> to make the framework accessible to non-technical musicians.</> },
    { title: "Nuanced Parameter Mapping", desc: "Extracting velocity and acceleration data from the CV model to map physical energy to sonic intensity, rather than just position." },
    { title: "Expanded Applications", desc: "Exploring kinesthetic feedback for physical therapy and spatial audio alerts for industrial safety systems." }
  ];



  return (
    <article className="py-6">
      <header className="mb-8 border-b-2 border-highlight pb-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white tracking-tight">
        {project.title}
      </h1>
      <p className="text-xl text-highlight italic font-light">
        {project.subtitle}
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        {/* Github Link */}
        <Link 
          href={project.github}
          target="_blank"
          className="px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-highlight rounded text-sm transition-all flex items-center gap-2 group"
        >
          <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          <span>Source Code</span>
        </Link>
        
        {/* Thesis Link */}
        <Link 
          href="/projects/video-csound/thesisFinal.pdf" 
          download 
          className="px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-highlight rounded text-sm transition-all flex items-center gap-2 group"
        >
          <FileText size={20} className="text-gray-400 group-hover:text-white transition-colors" />
          <span>Thesis Paper</span>
        </Link>
      </div>
    </header>

      <Card className="w-full p-0 rounded-xl overflow-hidden mb-12 shadow-2xl aspect-video">
        <iframe className="w-full h-full" src={project.videoEmbed} title="VideoCsound" allowFullScreen />
      </Card>

      <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
        <section>
          <SectionHeading>Overview</SectionHeading>
          <div className="space-y-6"> 
            <p>Traditional acoustic instruments offer a natural, symbiotic relationship between physical action and sonic response. In contrast, laptop-based electronic music often lacks this visual expressiveness, making it difficult for an audience to interpret the relationship between a performer's actions and the resulting sound. </p>
            <p><span className="text-highlight-light">VideoCsound</span> is an open-source performance system designed to bridge this gap. Through computer vision, it tracks everyday objects and translates their high-level semantic data into real-time synthesis parameters. </p>
          </div>
        </section>

        <section>
          <SectionHeading>Technical Implementation</SectionHeading>
          <p className="mb-6"><span className="text-highlight-light">
            VideoCsound</span> utilizes a modular Python pipeline to synchronize high-speed object detection with real-time audio synthesis. <span className="text-highlight-light"> OpenCV</span> handles the video stream, while <span className="text-highlight-light">Ultralytics YOLO</span> extracts bounding box coordinates and unique track IDs. </p>
          <p>
            These data points are fed into the <span className="text-highlight-light">Csound Python API (ctcsound)</span>, which modulates synthesis parameters in real-time. Through <span className="text-highlight-light">OpenCV</span>, the processed video is rendered with an overlay of the detected object boundaries, providing the performer with immediate visual feedback of the tracking state.
          </p> 
          
          <Card as="figure" className="my-8 w-fit mx-auto">
            <div className="flex justify-center">
              <Image 
                src="/projects/video-csound/videoCsoundDataFlowInverted.webp" 
                alt="Data Flow Architecture"
                width={911}
                height={209}
              />
            </div>
            <figcaption className="text-center text-sm text-gray-300 mt-6 uppercase tracking-wide font-mono">
              Sequential Data Flow Architecture
            </figcaption>
          </Card>

          <div className="space-y-4 mb-6">

            <p>
              To decouple the CV engine from creative assets, the system employs a <span className="text-highlight-light">template-based project structure</span>. Initializing a performance generates a standardized directory with YAML configurations and boilerplate Csound orchestra (.orc) files. This allows users to define complex object-to-audio mappings, detection thresholds, and bus names in a centralized location without modifying the underlying Python source code. Consolidating project files into a single folder also allows for easy sharing and organization of different setups.
            </p>
          </div> 

          <Card className="grid grid-cols-2 md:grid-cols-4 gap-4 w-fit mx-auto">
            {techStack.map(item => (
              <div key={item.label}>
                <span className="text-highlight font-bold block uppercase mb-1 text-sm">{item.label}</span>
                <span className="text-white text-base">{item.val}</span>
              </div>
            ))}
          </Card>
        </section>

        <section>
          <SectionHeading>Key Outcomes</SectionHeading>
          <div className="grid gap-4">
            {outcomes.map((item, i) => (
              <Card key={i} className="flex items-start gap-6 py-6">
                <span className="text-highlight text-2xl">0{i + 1}</span>
                <div>
                  <h4 className="text-highlight-light font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading>Challenges & Solutions</SectionHeading>
          <div className="grid gap-4">
            {challenges.map((c, i) => (
              <Card key={i}>
                <h3 className="text-highlight font-bold mb-4 flex items-center gap-2">
                  <span className="bg-blue-400/10 p-1 rounded text-xs">PROBLEM</span> {c.prob}
                </h3>
                <p className="text-base text-gray-100 mb-4">{c.desc}</p>
                <div className="pt-4 border-t border-white/5 text-base">
                  <p className="text-highlight-light font-bold mb-1">Solution:</p>
                  <p>{c.sol}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading>Future Work</SectionHeading>
          <ul className="space-y-8 border-l border-white/10 ml-1">
            {futureWork.map((item, i) => (
              <li key={i} className="relative pl-6 before:absolute before:-left-[4.5px] before:top-2 before:size-2 before:rounded-full before:bg-highlight">
                <h3 className="text-highlight font-bold text-lg">{item.title}</h3>
                <p className="text-base">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

