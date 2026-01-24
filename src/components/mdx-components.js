import Image from "next/image";
import Card from "@/components/ui/card";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export const mdxComponents = {
  h2: (props) => <SectionHeading className="mt-12" {...props} />,
  p: (props) => <p className="text-gray-100 leading-relaxed text-lg mb-6" {...props} />,
  
  // Custom Components
  ProjectImage: ({ src, alt, caption, width }) => (
    <Card as="figure" className="my-8 w-fit mx-auto p-4">
        <div className="flex flex-col items-center">
            <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={500}
            className="h-auto"
            />
            <figcaption className="text-center text-sm text-gray-300 mt-4 uppercase tracking-wide italic">
                {caption}
            </figcaption>
        </div>
    </Card>
  ),

  TechStack: ({ items }) => (
    <Card className="grid grid-cols-2 md:grid-cols-4 gap-4 w-fit mx-auto my-8">
      {items.map(item => (
        <div key={item.label}>
          <span className="text-highlight font-bold block uppercase mb-2 text-sm">{item.label}</span>
          <span className="text-white text-base">{item.val}</span>
        </div>
      ))}
    </Card>
  ),

  ChallengeCard: ({ items }) => (
    <div className="grid gap-4">
        {items.map((item, i) => (
            <Card key={i}>
            <h3 className="text-highlight font-bold mb-4 flex items-center gap-2 text-lg">
                <span className="bg-blue-400/10 p-1 rounded text-xs uppercase">Problem</span> {item.prob}
            </h3>
            <p className="text-base mb-4">{item.desc}</p>
            <div className="pt-4 border-t border-white/5 text-base">
                <p className="text-highlight-light font-bold mb-1">Solution:</p>
                <p>{item.sol}</p>
            </div>
            </Card>
        ))}
    </div>
  ),

    OutcomeList: ({ items }) => (
    <div className="grid gap-4 w-fit mx-auto">
      {items.map((item, i) => (
        <Card key={i} className="flex items-start gap-6 py-6 ">
          {/* automatic numbering based on index */}
          <span className="text-highlight text-2xl">
            {(i + 1).toString().padStart(2, '0')}
          </span>
          <div>
            <h4 className="text-highlight-light font-bold text-lg mb-1">
              {item.title}
            </h4>
            <p className="text-sm">
              {item.desc}
            </p>
          </div>
        </Card>
      ))}
    </div>
  ),

  FutureWork: ({ items }) => (
      <ul className="space-y-8 border-l border-white/10 ml-1">
      {items.map((item, i) => (
          <li key={i} className="relative pl-6 before:absolute before:-left-[4.5px] before:top-2 before:size-2 before:rounded-full before:bg-highlight">
          <h3 className="text-highlight font-bold text-lg">{item.title}</h3>
          <p className="text-base">{item.desc}</p>
          </li>
      ))}
      </ul>
  ),

  TwoSmCards: ({ items }) => (
      <div className="flex justify-center gap-8 my-4">

      {items.map((item, i) => (
          <Card key={i} className="space-y-4 max-w-sm">
              <h3 className="text-xl font-semibold text-purple-400">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
          </Card>
      ))}
      </div>
  ),

  URL: ({text, url}) => (
    <Link 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-highlight hover:text-highlight-light underline underline-offset-4 transition-colors"
    >
      {text} 
    </Link>
  ),

  H: ({ children }) => (
    <span className="text-highlight-light">{children}</span>
  ),

  code: ({ children }) => (
    <code className="
      relative 
      rounded 
      bg-[#2a2a2a]
      px-[0.3rem] 
      py-[0.1rem] 
      text-highlight-light
      border 
      border-white/10 
    ">
      {children}
    </code>
  ),
  // ol: ({ children }) => (
  //     <ol className="
  //     list-decimal 
  //     list-inside
  //     marker:text-highlight 
  //     marker:text-3xl 
  //     marker:font-extrabold">
  //     {children}
  //   </ol>
  // ),
  // // Styles the <ul> tag
  // ul: ({ children }) => (
  //   <ul className="list-disc list-inside text-highlight-light">
  //     {children}
  //   </ul>
  // ),
  // // Styles the <li> tag
  // li: ({ children }) => (
  //   <li className="text-gray-100 leading-relaxed text-xl mb-4 ">
  //     {children}
  //   </li>
  // ),
};