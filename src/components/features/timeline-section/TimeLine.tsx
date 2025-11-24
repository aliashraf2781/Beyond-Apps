import FolderShape from "./FolderShape";
import { CiSearch } from "react-icons/ci";
import { FaAddressBook, FaRegBookmark } from "react-icons/fa";
import { CgBot } from "react-icons/cg";
import ImageCard from "./ImageCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function TimeLine() {
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
            trigger: text,
            start: "top 80%",
          }
        }
      );
      gsap.fromTo(".timeline-header", {
        x: 40,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".timeline-header",
          start: "top 80%",
        }
      })
      gsap.from(".image-card", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".image-card",
          start: "top 10%",
        }
      });

      const folders = document.querySelectorAll(".folder");

      folders.forEach((folder, index) => {
        gsap.from(folder, {
          y: 60 * (index + 1),
          opacity: 0,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          }
        });
      });
      
    }
  }, []);

  const folders = [
    {
      header: "Admissions",
      description:
        "Join our vibrant community of learners Join our vibrant community of learners  Join our vibrant community of learners  Join our vibrant community of learners.",
      icon: CiSearch,
    },
    {
      header: "Academics",
      description:
        "Join our vibrant community of learners Join our vibrant community of learners  Join our vibrant community of learners  Join our vibrant community of learners.",
      icon: FaAddressBook,
    },
    {
      header: "Research",
      description:
        "Join our vibrant community of learners Join our vibrant community of learners  Join our vibrant community of learners  Join our vibrant community of learners.",
      icon: FaRegBookmark,
    },
    {
      header: "Support Services",
      description:
        "Join our vibrant community of learners Join our vibrant community of learners  Join our vibrant community of learners  Join our vibrant community of learners.",
      icon: CgBot,
    },
  ];

  return (
    <div className="bg-background min-h-screen  relative container timeline py-10">
      <h2 className="text-3xl font-bold mb-4 text-center timeline-header">Explore Our Features</h2>

      <p ref={textRef} className="text-gray-700 max-w-lg text-center mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi
        natus nesciunt porro, optio dolore!
      </p>

      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {folders.map((folder, index) => (
          <FolderShape
            key={index}
            header={folder.header}
            description={folder.description}
            Icon={folder.icon}
          />
        ))}
        <ImageCard />
      </div>
    </div>
  );
}
