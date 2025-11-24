"use client";
import NavbarHero from "../../layout/NavbarHero";
import ParallaxText from "./FloatingText";
import HeroMockup from "./HeroMockup";
import ServicesList from "./ServicesList";
import TimerSection from "./TimerSection";
export default function Hero() {
  return (
    <>
      {/* navbar component */}
      <div className="w-full bg-background overflow-hidden">
        <NavbarHero />
      </div>

      <div className="bg-background min-h-screen w-full relative z-50 hero pb-14">
        {/* landing section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 container pt-20">
          {/* counter component */}
          <div>
            <TimerSection />
          </div>

          {/* hero mockup component */}
          <div>
            <HeroMockup />
          </div>

          {/*  services section component */}
          <div>
            <ServicesList />
          </div>
        </div>

        {/* floating text component */}
        <div className="overflow-hidden max-w-screen absolute bottom-0 left-0">
          <ParallaxText baseVelocity={5}>
            Welcome to UVER Best University Program
          </ParallaxText>
        </div>
      </div>
    </>
  );
}
