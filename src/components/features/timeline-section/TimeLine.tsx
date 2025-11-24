import FolderShape from "./FolderShape";
import { CiSearch } from "react-icons/ci";
import { FaAddressBook, FaRegBookmark } from "react-icons/fa";
import { CgBot } from "react-icons/cg";
import ImageCard from "./ImageCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function TimeLine() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    tl.from(".timeline h2", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    tl.from(
      ".timeline p",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );

    tl.from(".image-card", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    return () => tl.kill();
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
      <h2 className="text-3xl font-bold mb-4">Explore Our Features</h2>

      <p className="text-gray-500 max-w-lg mb-10">
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
