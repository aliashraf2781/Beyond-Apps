
export default function SectionComponent({ header, description, active }: { header: string, description: string, active?: string }) {
    return (
        <div className="flex justify-start items-end flex-col">
            <div className="text-2xl top-0 left-0  text-start pt-40 absolute bg-foreground z-50 flex flex-col gap-8 justify-start items-start">
                <div className={`pl-4 border-l-2  transition-colors duration-300 ${active == "about" ? "text-white font-semibold border-blue-500" : "text-gray-400 hover:text-white border-transparent"} `}>About</div>
                <div className={`pl-4 border-l-2  transition-colors duration-300 ${active == "our-mission" ? "text-white font-semibold border-blue-500" : "text-gray-400 hover:text-white border-transparent"} `}>Our Mission</div>
                <div className={`pl-4 border-l-2  transition-colors duration-300 ${active == "our-vision" ? "text-white font-semibold border-blue-500" : "text-gray-400 hover:text-white border-transparent"} `}>Our Vision</div>
            </div>
            <section className="space-y-6 top-50 left-0 right-0  pt-40 absolute h-screen bg-foreground container">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">{header}</h2>
                <p className="text-gray-300 max-w-lg leading-relaxed">{description}</p>
            </section>
        </div>
    )
}