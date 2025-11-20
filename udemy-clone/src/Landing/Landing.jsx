import LandingCarousel from './LandingCarousel/LandingCarousel.jsx';
import CourseListing from './CourseListing/CourseListing.jsx';
import SponsorsSection from './SponsorsSection/SponsorsSection.jsx';
import SkillsComponent from './SkillSection/SkillsComponent.jsx';
import Advertisement from './Advertisement/Advertisement.jsx';

export default function Landing() {
    return (
        <>
            <LandingCarousel />
            <SkillsComponent />
            <Advertisement />
            <CourseListing />
            <SponsorsSection />
        </>
    );
}