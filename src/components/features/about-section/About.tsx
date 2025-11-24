import { useRef, useState } from "react";
import NavigationBar from "./NavigationBar";
import { useGSAP } from "@gsap/react";
import Section from "./Section";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const sections = [
  {
    id: "about",
    label: "About",
    header: "Comprehensive College Search",
    description:
      "Explore a wide range of colleges and universities to find the perfect fit for your academic and personal goals.",
  },
  {
    id: "our-mission",
    label: "Our Mission",
    header: "Personalized Advising",
    description:
      "Get expert guidance and support throughout your college application process with our personalized advising services.",
  },
  {
    id: "our-vision",
    label: "Our Vision",
    header: "Application Tracker",
    description:
      "Stay organized and on top of your college applications with our easy-to-use application tracker.",
  },
];
export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create scroll-based section switching
    const totalSections = sections.length;

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${(totalSections - 1) * window.innerHeight}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Calculate which section should be active based on scroll progress
        const newIndex = Math.min(
          Math.floor(self.progress * totalSections),
          totalSections - 1
        );
        setActiveIndex(newIndex);
      },
    });

    return () => {
      ScrollTrigger.getById(container)?.kill();
    };
  }, []);

  const handleNavigate = (index: number) => {
    setActiveIndex(index);

    // Scroll to the appropriate position
    const container = containerRef.current;
    if (!container) return;

    const scrollTrigger = ScrollTrigger.getById(container);
    if (scrollTrigger) {
      const progress = index / (sections.length - 1);
      const scrollPosition =
        scrollTrigger.start +
        (scrollTrigger.end - scrollTrigger.start) * progress;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative h-screen bg-slate-900 z-0 about">
      <NavigationBar activeIndex={activeIndex} onNavigate={handleNavigate} />
      {sections.map((section, index) => (
        <Section
          key={section.id}
          section={section}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
}
