import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

export default function HeroMockup() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".hero",
        start: "15% 10%",
        end: "bottom 30%",
        scrub: true,
        pin: true,
      },
    });

    tl
      .fromTo(".phone", { top: "5%" }, { top: "110%", duration: 1 }, "0.5")
      .fromTo(".phone", { left: "40%" }, { left: "70%", duration: 1 }, ">");

    const phone = document.querySelector(".phone");

    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(phone, {
        rotateX: -y * 15,
        rotateY: x * 15,
        transformPerspective: 800,
        // ease: "power3.out",
        duration: 0.4,
      });
    });
  }, []);


  return (
    <div
      className="
        phone 
        transform-3d
        perspective-[1000px]
        hidden lg:flex 
        w-[400px] 
        absolute 
        top-[10%] 
        left-[40%] 
        transition-all duration-500 ease-out 
        overflow-hidden 
        rounded-5xl 
        z-9999
      "
    >
      <div className="w-[300px] relative pointer-events-none z-9999">

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
