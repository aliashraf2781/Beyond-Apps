// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Test() {

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".section",
//         start: "top 10%",
//       }

//     });

//     gsap.to(".card", {
//         y: 500,          // تحريك على محور X
//         rotation: 360,   // دوران
//         scrollTrigger: {
//           trigger: ".section",
//           start: "top 10%",  // بداية الأنيميشن
//           end: "bottom 20%", // نهاية الأنيميشن
//           scrub: true,       // ده المهم: يخلي الحركة مع السكرول
//           markers: true      // علشان تشوف البداية والنهاية أثناء التجريب
//         }
//       });


//     tl.to(".title", {
//       opacity: 1,
//       y: 0,
//       duration: 0.7,
//       top: "50%"
//     })
//     .to(".subtitle", {
//       opacity: 1,
//       x: 50,
//       duration: 0.7
//     }, "-=0.3")
//     .to(".card", {
//       opacity: 1,
//       scale: 1,
//       stagger: 0.2,
//       duration: 0.7
//     }, "-=0.3");

//   }, []);

//   return (
//     <section className="section min-h-screen h-[300vh] p-20">
//       <h1 className="title opacity-0 translate-y-5 text-4xl font-bold">Hello GSAP</h1>

//       <p className="subtitle opacity-0 -translate-x-5 mt-3 text-lg">
//         Smooth Scroll Animations
//       </p>

//       <div className="grid grid-cols-3 gap-6 mt-16">
//         <div className="card opacity-0 scale-90 p-10 bg-gray-700 text-white rounded-xl">Card 1</div>
//         <div className="card opacity-0 scale-90 p-10 bg-gray-700 text-white rounded-xl">Card 2</div>
//         <div className="card opacity-0 scale-90 p-10 bg-gray-700 text-white rounded-xl">Card 3</div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Test() {
//   useEffect(() => {
//     const sections = document.querySelectorAll(".section");

//     sections.forEach((section, i) => {
//       gsap.fromTo(
//         section,
//         { y: 100, opacity: 0 },       // البداية: من تحت ومخفي
//         {
//           y: 0,
//           opacity: 1,
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//             end: "top 30%",
//             scrub: true,
//             markers: false,            // خليه false بعد التجربة
//           },
//         }
//       );
//     });

//     gsap.utils.toArray(".section").forEach((section, i) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "bottom bottom",
//         end: "+=100%",
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//       });
//     });
//   }, []);

//   return (
//     <div className="container">
//       <section className="section-1 section min-h-screen bg-red-500 flex items-center justify-center text-white text-5xl font-bold">
//         Section 1
//       </section>

//       <section className="section-2 section min-h-screen bg-green-500 flex items-center justify-center text-white text-5xl font-bold">
//         Section 2
//       </section>

//       <section className="section-3 section min-h-screen bg-blue-500 flex items-center justify-center text-white text-5xl font-bold">
//         Section 3
//       </section>
//       <section className="section-1 section min-h-screen bg-red-500 flex items-center justify-center text-white text-5xl font-bold">
//         Section 1
//       </section>

//       <section className="section-2 section min-h-screen bg-green-500 flex items-center justify-center text-white text-5xl font-bold">
//         Section 2
//       </section>

//       <section className="section-3 section min-h-screen bg-blue-500 flex items-center justify-center text-white text-5xl font-bold">
//         Section 3
//       </section>
//     </div>
//   );
// }


// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);


// export default function PullUpSections() {
//     const scrollRef = useRef<HTMLDivElement>(null);
//     useGSAP(() => {
//         const boxes = gsap.utils.toArray(scrollRef.current!.children);

//         boxes.forEach((box) => {
//             gsap.fromTo(box, 
//                 {
//                     rotate: 180,
//                     y: 200,
//                 }, 
//                 {
//                     rotate: 0,
//                     y: boxes.indexOf(box) * -100,
//                     scrollTrigger: {
//                         trigger: box,
//                         start: "bottom bottom",
//                         end: "top top",
//                         scrub: true,
//                         pin: true,
//                     }
//                 }
//             );
//         })
//     }, []);



//     return (
//         <div ref={scrollRef} className="relative h-[200vh] w-full flex  items-center justify-start pt-56 mt-56">
//             <section className="h-[100px] w-[100px]  bg-red-500 flex items-center justify-center text-white font-bold">
//                 Section 1
//             </section>

//             <section className="h-[100px] w-[100px]  bg-green-500 flex items-center justify-center text-white font-bold">
//                 Section 2
//             </section>

//             <section className="h-[100px] w-[100px]  bg-yellow-500 flex items-center justify-center text-white font-bold">
//                 Section 3
//             </section>
//         </div>
//     );
// }
