import NavbarHero from "../../layout/NavbarHero";
import ParallaxText from "./FloatingText";
import HeroMockup from "./HeroMockup";
import ServicesList from "./ServicesList";
import TimeCounter from "./TimeCounter";
export default function Hero() {
    return (
        <>
            <NavbarHero />
            <div className="bg-background min-h-screen w-full relative hero">
                {/* navbar component */}

                {/* landing section */}
                <div className="flex h-full justify-between flex-wrap gap-4 items-center container py-20 ">
                    {/* counter component */}
                    <div>
                        <TimeCounter />
                    </div>

                    {/*  services section component */}
                    <div>
                        <ServicesList />
                    </div>
                </div>

                {/* floating text component */}
                <div className="overflow-x-hidden  max-w-screen">
                    <ParallaxText baseVelocity={5}>
                        Welcome to UVER Best University Program
                    </ParallaxText>
                </div>

                {/* hero mockup component */}
                <HeroMockup />
            </div>
        </>
    );
}
