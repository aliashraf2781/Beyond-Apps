"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function TeamSection() {
  gsap.registerPlugin(ScrollTrigger);


  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const content = text?.innerText;
    if ((text as HTMLDivElement) && content) {
      text.innerHTML = content
        ?.split(" ")
        .map(
          (char) =>
            `<span class="opacity-0">${char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join(" ");

      gsap.fromTo(
        text.querySelectorAll("span"),
        {
          x: -20,
          opacity: 0,
          stagger: 0.05,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".team-title",
            start: "top 80%",
          }
        }
      );

      gsap.from(".team-text", {
        scrollTrigger: {
          trigger: ".team-title",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })
    }
  }, []);

  return (
    <div className="relative py-20 min-h-screen team-section overflow-hidden">
      <div className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out team-bg">
        <Image
          src={"/assets/team.jpg"}
          alt="Graduates"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="absolute top-8 left-8 z-50">
        <div className="border-s-4 border-s-accent ps-4 text font-semibold timeline-label text-white">Team Work</div>
      </div>
      <div className="absolute inset-0 z-10 text-white h-full flex flex-col justify-center items-end p-4 bg-black/40 rounded-lg">
        <div className="md:max-w-1/2 indent-28">
          <h4 ref={textRef} className="team-title indent-5 md:indent-28 text-xl md:text-3xl font-extralight mb-2 leading-12 tracking-wider">
            Integer porttitor congue venenatis. Nulla nec euismod lectus, at pharetra leo. Nulla luctus vestibulum ligula eget tincidunt. Ut dignissim sollicitudin.
          </h4>

          <p className="team-text indent-5 md:indent-28 font-extralight text-xs md:text-sm leading-8 tracking-wider">
            Integer porttitor congue venenatis. Nulla nec euismod lectus, at pharetra leo. Nulla luctus vestibulum ligula eget tincidunt. Ut dignissim sollicitudin. Integer porttitor congue venenatis. Nulla nec euismod lectus, at pharetra leo. Nulla luctus vestibulum ligula eget tincidunt. Ut dignissim sollicitudin. Integer porttitor congue venenatis. Nulla nec euismod lectus, at pharetra leo. Nulla luctus vestibulum ligula eget tincidunt. Ut dignissim sollicitudin.
          </p>
        </div>
      </div>
    </div>
  );
}
