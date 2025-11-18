import LandingCarousel from './LandingCarousel/LandingCarousel.jsx';
import CourseListing from './CourseListing/CourseListing.jsx';
import SponsorsSection from './SponsorsSection/SponsorsSection.jsx';

export default function Landing() {
    return (
        <>
            <LandingCarousel />
            <CourseListing />
            <SponsorsSection />
        </>
    );
}