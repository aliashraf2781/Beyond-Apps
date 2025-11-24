import Image from "next/image";
import ImageCard from "../timeline-section/ImageCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function GallerySection() {
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
            trigger: ".gallery-text",
            start: "top 80%",
          }
        }
      );

    }
  }, []);
  return (
    <>
      <h2 ref={textRef} className="text-2xl w-fit font-bold max-w-[600px] text-center team-text mt-20 gallery-text mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi natus nesciunt porro, optio dolore!
      </h2>
      <div
        className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      md:grid-rows-3
      lg:grid-rows-2
      gap-5
      container
      my-20
      "
      >
        <div className="
        md:col-span-2 md:row-span-1
        lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3
        ">
          <div className="md:h-[400px] lg:h-[650px]">
            <ImageCard />
          </div>
        </div>

        {/* div2 */}
        <div className="bg-gray-300 rounded-4xl">
          <div className="h-full w-full overflow-hidden relative min-h-[300px]">
            <div className="group absolute inset-0 h-full w-full hover:scale-105 transition-transform duration-500 ease-out">
              <Image
                src={"/assets/appphoto.webp"}
                alt="Graduates"
                fill
                className="object-contain rounded-2xl translate-y-30"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 rounded-4xl">
          <div className="h-full w-full overflow-hidden relative min-h-[300px]">
            <div className="group absolute inset-0 h-full w-full hover:scale-105 transition-transform duration-500 ease-out">
              <Image
                src={"/assets/appphoto.webp"}
                alt="Graduates"
                fill
                className="object-contain rounded-2xl translate-y-30"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 rounded-4xl">
          <div className="h-full w-full overflow-hidden relative min-h-[300px]">
            <div className="group absolute inset-0 h-full w-full hover:scale-105 transition-transform duration-500 ease-out">
              <Image
                src={"/assets/appphoto.webp"}
                alt="Graduates"
                fill
                className="object-contain rounded-2xl translate-y-30"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 rounded-4xl">
          <div className="h-full w-full overflow-hidden relative min-h-[300px]">
            <div className="group absolute inset-0 h-full w-full hover:scale-105 transition-transform duration-500 ease-out">
              <Image
                src={"/assets/appphoto.webp"}
                alt="Graduates"
                fill
                className="object-contain rounded-2xl translate-y-30"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}