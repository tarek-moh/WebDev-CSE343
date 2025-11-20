import React, { useRef, useState, useEffect } from 'react';
import './SkillsComponent.css'; 
import { skillsData } from './data.js'; 
import { FaUserFriends } from 'react-icons/fa';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const SkillsComponent = () => {
  // Create a reference to the scrollable container
  const scrollRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const cardsPerPage = 3; // or calculate based on container width
  const totalPages = Math.ceil(skillsData.length / cardsPerPage);


  // Function to handle scrolling
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Scroll left or right by 320px (card width + gap)
      const scrollAmount = direction === 'left' ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    }
  };

  return (
    <div className="skills-section">
      {/* Left Side: Text */}
      <div className="text-content">
        <h2>Learn essential career and life skills</h2>
        <p>
          Udemy helps you build in-demand skills fast and advance your career in a changing job market.
        </p>
      </div>

      {/* Right Side: Carousel */}
      <div className="carousel-wrapper">
        
        {/* Scrollable Card Container */}
        <div className="cards-container" ref={scrollRef}>
          {skillsData.map((skill) => (
            <div 
              key={skill.id} 
              className="skill-card" 
              style={{ backgroundColor: skill.bgColor }} // Optional: colored background if image fails/loads
            >
              {/* 1. Background Image */}
              <img src={skill.image} alt={skill.title} className="card-image" />

              {/* 2. White Info Box Overlay */}
              <div className="card-info">
                <div className="learner-count">
                  <FaUserFriends />
                  <span>{skill.learners} learners</span>
                </div>
                
                <div className="card-footer">
                  <h3>{skill.title}</h3>
                  <div className="arrow-icon">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="carousel-controls">
          <button className="nav-btn" onClick={() => scroll('left')}>
            <BsChevronLeft />
          </button>
          
          {/* Visual Dots (Static for demo, can be made dynamic) */}
          <div className="pagination-dots">
             <span className="dot active" id='pg1'></span>
             <span className="dot" id='pg2'></span>
          </div>

          <button className="nav-btn" onClick={() => scroll('right')}>
            <BsChevronRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default SkillsComponent;