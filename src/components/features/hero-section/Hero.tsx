import NavbarHero from '../../layout/NavbarHero';
import HeroMockup from './HeroMockup';
import ServicesList from './ServicesList';
import TimeCounter from './TimeCounter';
export default function Hero() {
    return (
        <div className='bg-background h-screen w-full container'>
            {/* navbar component */}
            <NavbarHero />

            {/* landing section */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center'>
                {/* counter component */}
                <div>
                    <TimeCounter />
                </div>

                {/* phone mockup component */}
                <div>
                    <HeroMockup />
                </div>

                {/*  services section component */}
                <div className='hidden lg:block'>
                    <ServicesList />
                </div>
            </div>
        </div>
    )
}
