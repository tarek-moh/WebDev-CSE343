import React, { useState } from 'react';
import './CourseListing.css';

// Component for the Star Rating Icon
const StarIcon = ({ filled }) => (
  <span 
    className="star-icon" 
    style={{ color: filled ? '#e59819' : '#d1d7dc' }} // Udemy's gold/grey stars
  >
    ★
  </span>
);

// Component for a single course card
const CourseCard = ({ course }) => {
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} filled={true} />);
      } else {
        // Simple implementation: use half star if remaining, otherwise empty
        stars.push(<StarIcon key={i} filled={false} />);
      }
    }
    return (
      <div className="rating-container">
        <span className="rating-number">{rating.toFixed(1)}</span>
        {stars}
        <span className="review-count">({course.reviews.toLocaleString()} ratings)</span>
      </div>
    );
  };

  return (
    <div className="course-card">
      <div className="card-image-wrapper">
        <img 
          src={course.image} 
          alt={course.title} 
          className="card-image"
        />
        {course.badge && (
          <span className="course-badge">
            {course.badge}
          </span>
        )}
        {course.premium && (
          <span className="premium-badge">
            Premium
          </span>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-headline">{course.headline}</p>
        <p className="card-author">{course.author}</p>
        {renderRating(course.rating)}
        <p className="card-price">E£{course.price.toString()}</p>
      </div>
    </div>
  );
};


// Main Component
export default function CourseListing() {
  const [activeTab, setActiveTab] = useState('Microsoft Excel');

  const categories = [
    'Artificial Intelligence (AI)', 'Python', 'Microsoft Excel', 
    'AI Agents & Agentic AI', 'Digital Marketing', 'Amazon AWS'
  ];

  // Mock Data structure for the Microsoft Excel courses
  const courseData = [
    {
      id: 1,
      image: 'https://placehold.co/240x135/1c1d1f/ffffff?text=Excel+Course+1',
      title: 'Microsoft Excel - Excel from Beginner to Advanced',
      headline: 'From critical skills to technical topics.',
      author: 'Kyle Pew',
      rating: 4.7,
      reviews: 514033,
      price: 349.99,
      badge: 'Bestseller',
      category: 'Microsoft Excel'
    },
    {
      id: 2,
      image: 'https://placehold.co/240x135/203239/ffffff?text=Excel+Course+2',
      title: 'MICROSOFT EXCEL: Excel From Basic to Advanced Excel',
      headline: 'A comprehensive guide to Excel formulas and functions.',
      author: 'Office Newb',
      rating: 4.5,
      reviews: 112,
      price: 349.99,
      badge: null,
      category: 'Microsoft Excel'
    },
    {
      id: 3,
      image: 'https://placehold.co/240x135/0f6e1f/ffffff?text=EXCEL+Master',
      title: 'EXCEL: Master Microsoft Excel from Basics to Advanced Excel',
      headline: 'Learn VLOOKUP, Pivot Tables, and Macros.',
      author: 'Start-Tech Academy',
      rating: 4.5,
      reviews: 79,
      price: 349.99,
      badge: 'Hot & New',
      category: 'Microsoft Excel'
    },
    {
      id: 4,
      image: 'https://placehold.co/240x135/f0a435/ffffff?text=Hero+Excel',
      title: 'Zero to Hero in Microsoft Excel: Complete Excel with Copilot',
      headline: 'The complete course for every level.',
      author: 'Start-Tech Academy',
      rating: 4.6,
      reviews: 40965,
      price: 349.99,
      premium: true,
      badge: null,
      category: 'Microsoft Excel'
    }
    // Add more courses for a realistic look
  ];

  return (
    <div className="course-listing-container">
      {/* Header Section */}
      <header className="listing-header">
        <h1 className="main-title">Skills to transform your career and life</h1>
        <p className="main-subtitle">From critical skills to technical topics, Udemy supports your professional development.</p>
      </header>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-button ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Cards Container */}
      <section className="course-cards-row">
        {courseData.map((course) => (
          (course.category === activeTab) && <CourseCard key={course.id} course={course} />
        ))}
        {/* Placeholder for the Next/Prev Carousel Arrow (if this were a slider) */}
        <div className="carousel-arrow-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </section>
      
      {/* Footer Link */}
      <a href="#" className="footer-link">
        Show all {activeTab} courses →
      </a>
    </div>
  );
}