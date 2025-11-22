export default function NavbarHero() {
    return (
        <>
            <nav className="flex items-center justify-between p-4">
                <div>
                    <h1 className="text-md md:text-lg lg:text-2xl">UVER</h1>
                </div>
                <div>
                    <button className="text-xs md:text-md lg:text-lg rounded-2xl bg-accent py-2 px-3 text-white">Get Early Access 🎁</button>
                </div>
            </nav>
        </>
    )
}
