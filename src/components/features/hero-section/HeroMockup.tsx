import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

export default function HeroMockup() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(".phone", {
        rotateX: -y * 15,
        rotateY: x * 15,
        transformPerspective: 800,
        duration: 0.4,
      });
    });

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div
      className="
        phone
        transform-3d
        perspective-[1000px]
        transition-all duration-500 ease-out
        overflow-hidden
        rounded-5xl
        z-9999
        relative
      "
    >
      <div className="w-[200px] md:w-[300px] relative pointer-events-none mx-auto">
        {/* Phone Frame */}
        <Image
          src="/assets/phone.png"
          alt="Phone Frame"
          width={300}
          height={600}
          className="object-contain w-full h-full"
        />

        {/* Phone Screen */}
        <div className="absolute top-3 left-2 h-[96%] w-[94%] -z-10 overflow-hidden rounded-3xl">
          <Image
            src="/assets/Placeholder_mockup2.png"
            alt="Phone Screen"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
