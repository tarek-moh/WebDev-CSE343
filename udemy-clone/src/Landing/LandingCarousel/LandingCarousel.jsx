import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./LandingCarousel.css";
import SlideContent from "./SlideContent.jsx";
import "/src/App.css";

export default function LandingCarousel() {
  // 1. Define the settings object
  const settings = {
    dots: true,        // Show navigation dots
    infinite: true,    // Loop the carousel
    speed: 500,        // Transition speed in milliseconds
    slidesToShow: 1,   // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll when navigating
    autoplay: true,    // Enable automatic sliding
    autoplaySpeed: 5000 // Interval between slides (5 seconds)
  };

  return (
    <div className="landing-carousel">
      {/* 2. Pass the settings to the Slider component */}
      <Slider {...settings}>
        <SlideContent heading="Jump into learning — for less"
                      text="If you’re new to Udemy, we’ve got good news: For a limited time, courses start at just E£259.99 for new learners!" 
                      buttonText="Sign up now" 
                      image="/src/assets/carousel-sketch1.png" />
        <SlideContent heading="Subscribe to the best of Udemy"
                      text="With Personal Plan, you get access to 26,000+ of our top-rated courses in tech, business, and more." 
                      buttonText="Try it now" 
                      image="/src/assets/carousel-sketch2.jpg" />
      </Slider>
    </div>
  );
}

