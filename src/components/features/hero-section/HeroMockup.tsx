import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function HeroMockup() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".hero",
        start: "15% 10%",
        end: "30% 30%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    // tl.to(".phone", { top: "50%" });
tl
  .fromTo(".phone", { top: "5%" }, { top: "100%", duration: 1 }, "0.5")
  .fromTo(".phone", { left: "40%" }, { left: "70%", duration: 1 }, ">");
  }, []);

  return (
    <div
      className="phone w-[400px] h-[800px] absolute top-[10%] left-0 phone transition-all duration-500 ease-out overflow-hidden rounded-5xl"
    >
      {/* Phone Frame - sits on top */}
      <div className="w-[400px] z-40 pointer-events-none">
        <img
          src="/assets/phone.png"
          alt="Phone Frame"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
