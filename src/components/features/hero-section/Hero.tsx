import NavbarHero from "../../layout/NavbarHero";
import ParallaxText from "./FloatingText";
import HeroMockup from "./HeroMockup";
import ServicesList from "./ServicesList";
import TimeCounter from "./TimeCounter";
export default function Hero() {
  return (
    <div className="bg-background min-h-screen w-full relative hero">
      {/* navbar component */}
      <NavbarHero />

      {/* landing section */}
      <div className="flex h-full justify-between flex-wrap gap-4 items-center container ">
        {/* counter component */}
        <div>
          <TimeCounter />
        </div>

        {/*  services section component */}
        <div className="hidden lg:block">
          <ServicesList />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
        {/* <ParallaxText baseVelocity={-5}>Welcome to UVER</ParallaxText> */}
        <ParallaxText baseVelocity={-5}>
          Welcome to UVER Best University Program
        </ParallaxText>
      </div>
      <HeroMockup />
    </div>
  );
}
