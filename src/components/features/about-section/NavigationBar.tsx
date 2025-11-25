import { LuMouse } from "react-icons/lu";

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

interface NavigationBarProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export default function NavigationBar({
  activeIndex,
  onNavigate,
}: NavigationBarProps) {
  return (
    <nav className="absolute top-10 left-8 z-50 flex flex-col gap-8">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onNavigate(index)}
          className={`ps-4 border-s-2 text-sm md:text-md transition-all duration-300 text-left ${activeIndex === index
              ? "text-white font-semibold border-blue-500"
              : "text-gray-400 hover:text-white border-transparent"
            }`}
        >
          {section.label}
        </button>
      ))}
      <div className="hidden md:flex md:justify-center animate-bounce text-white text-lg"><LuMouse /></div>
    </nav>
  );
}
