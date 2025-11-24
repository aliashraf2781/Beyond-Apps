import gsap from "gsap";
import { useEffect, useRef } from "react";

interface SectionProps {
  section: {
    id: string;
    label: string;
    header: string;
    description: string;
  };
  isActive: boolean;
}

export default function Section({ section, isActive }: SectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !contentRef.current) return;

    const content = contentRef.current;

    gsap.fromTo(
      content.children,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, [isActive]);

  return (
    <div
      className={`absolute z-40 inset-0  flex items-center justify-center transition-opacity duration-500 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={contentRef}
        className="container mx-auto px-8 max-w-4xl space-y-6"
      >
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
          {section.header}
        </h2>
        <p className="text-gray-300 md:text-lg max-w-2xl leading-relaxed">
          {section.description}
        </p>
      </div>
    </div>
  );
}
