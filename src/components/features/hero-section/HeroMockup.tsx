import Image from 'next/image'

export default function HeroMockup() {
    return (
        <div>
            <div className='relative w-full h-[500px] lg:h-[600px]'>

                <Image
                    src={"/assets/phone.png"}
                    alt="Hero Mockup"
                    priority
                    fill
                    className='object-contain w-full h-full'
                />
            </div>
        </div>
    )
}
