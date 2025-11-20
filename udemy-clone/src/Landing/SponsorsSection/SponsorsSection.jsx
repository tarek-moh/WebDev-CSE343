import React, {useState, useEffect} from "react";
import "./SponsorsSection.css";

const imageContext = import.meta.glob('/src/assets/sponsors/*');

export default function SponsorsSection()
{
    const [sponsorsLogos, setSponsorsLogos] = useState([]);
    useEffect(() => {
        const loadLogos = async () => {
            const logos = [];
            try{
                for (const path in imageContext) {
                    const module = await imageContext[path]();
                    logos.push(module.default);
                }
                setSponsorsLogos(logos);
            }
            catch (error) {
                console.error("Error loading sponsor logos:", error);
            }
        };
        loadLogos();
    }, []);
    
    return (
        <div className="sponsors-section">
            <p className="sponsors-text">Trusted by over 17,000 companies and millions of learners around the world</p>
            {sponsorsLogos.length > 0 && (
                <div className="sponsors-logos">
                    {sponsorsLogos.map((logo, index) => (
                        <img 
                            key={index}
                            src={logo}
                            alt={`Sponsor logo ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
