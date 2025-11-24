import { Roboto } from "next/font/google";
import Hero from "@/components/features/hero-section/Hero";
import About from "@/components/features/about-section/About";
import TimeLine from "@/components/features/timeline-section/TimeLine";
import TeamSection from "@/components/features/team-section/TeamSection";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${roboto.className} min-h-screen`}
    >
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <TimeLine />
        <TeamSection />
      </main>
    </div>
  );
}
