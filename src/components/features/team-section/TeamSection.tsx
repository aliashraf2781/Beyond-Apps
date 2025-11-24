"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function TeamSection() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".team-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        // BG Parallax
        tl.fromTo(
            ".team-bg",
            { scale: 1.2, y: 80 },
            { scale: 1, y: 0, duration: 1.5, ease: "power2.out" }
        );

        // Heading reveal
        gsap.from(".team-title", {
            scrollTrigger: {
                trigger: ".team-section",
                start: "top 80%",
            },
            opacity: 0,
            x: 80,
            duration: 1,
            ease: "power3.out",
        });

        // Paragraph reveal (stagger)
        gsap.from(".team-text", {
            scrollTrigger: {
                trigger: ".team-section",
                start: "top 75%",
            },
            opacity: 0,
            x: 40,
            duration: 1.2,
            delay: 0.2,
            ease: "power3.out",
        });

    }, []);

    return (
        <div className="relative container py-20 min-h-screen team-section overflow-hidden">
            <div className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out team-bg">
                <Image
                    src={"/assets/team.jpg"}
                    alt="Graduates"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="absolute inset-0 z-10 text-white h-full flex flex-col justify-center items-end p-4 bg-black/40 rounded-lg">
                <div className="md:max-w-1/2 indent-28">
                    <h4 className="team-title indent-5 md:indent-28 text-xl md:text-3xl font-extralight mb-2 leading-12 tracking-wider">
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
