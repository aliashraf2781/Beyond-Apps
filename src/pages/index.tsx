import { Roboto } from "next/font/google";
import Hero from "@/components/features/hero-section/Hero";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${roboto.className} min-h-screen`}
    >
      <main>
        <Hero />
      </main>
    </div>
  );
}
