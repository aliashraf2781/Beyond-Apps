import { useEffect, useRef } from "react";
import gsap from "gsap";
import TimeCounter from "./TimeCounter";

export default function TimerSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const content = text?.innerText;
    if ((text as HTMLDivElement) && content) {
      text.innerHTML = content
        ?.split(" ")
        .map(
          (char) =>
            `<span class="opacity-0">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join(" ");

      gsap.fromTo(
        text.querySelectorAll("span"),
        {
          y: 20,
          opacity: 0,
          stagger: 0.05,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          stagger: 0.05,
        }
      );
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <h2
            ref={textRef}
            className="text-lg font-medium leading-tight max-w-[400px] my-10 relative text-foreground flex flex-wrap gap-1"
          >
            Discover, apply, succeed – UVER makes college search effortless.
            Your future starts right here.
          </h2>
        </div>
        <div className="mt-7">
          <TimeCounter />
        </div>
      </div>
    </div>
  );
}
