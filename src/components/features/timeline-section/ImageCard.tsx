import Image from "next/image";

export default function ImageCard() {
    return (
        <div className="p-6 h-[200px] shadow-lg relative group overflow-hidden rounded-lg image-card">
            <div className=" group absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500 ease-out">
                <Image
                    src={"/assets/graduates.jpeg"}
                    alt="Graduates"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="absolute group inset-0 z-10 text-white h-full flex flex-col justify-end p-4 bg-black/20 rounded-lg">
                <h4 className="text-2xl font-bold mb-2">Graduates</h4>
                <p>Celebrating the success of our alumni.</p>
            </div>
        </div>
    )
}
