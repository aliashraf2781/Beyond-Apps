import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SectionComponent from "./SectionComponent";

export default function About() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "10% 10%",
                end: "bottom 30%",
                scrub: true,
                pin: true,
            },
        });

        tl
            .to(".phone", { top: "170%" })
            .to(".section-2", { opacity: 0 })
            .to(".section-3", { opacity: 1 }, "<")
            .to(".section-3", { opacity: 0 })
            .to(".section-4", { opacity: 1 }, "<")

        gsap.from("h2", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
        gsap.from("h2", {
            duration: 1,
            opacity: 0,
            y: 30,
            ease: "power3.out"
        });
    }, []);
    return (
        <>
            <div className="bg-foreground min-h-screen h-screen w-full relative hero -z-20 about">
                <div className="section-2 z-10">
                    <SectionComponent
                        active="about"
                        header="Coprehensive College Search"
                        description="Explore a wide range of colleges and universities to find the perfect fit for your academic and personal goals."
                    />
                </div>
                <div className="section-3 z-20 opacity-0">
                    <SectionComponent
                        active="our-mission"
                        header="Personalized Advising"
                        description="Get expert guidance and support throughout your college application process with our personalized advising services."
                    />
                </div>
                <div className="z-30 opacity-0 section-4">
                    <SectionComponent
                        active="our-vision"
                        header="Application Tracker"
                        description="Stay organized and on top of your college applications with our easy-to-use application tracker."
                    />
                </div>
            </div>
        </>
    )
}
