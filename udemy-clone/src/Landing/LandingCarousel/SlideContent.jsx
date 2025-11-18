export default function SlideContent({ heading, text, image , buttonText}) {
    // Set the background image directly using inline style
    return (
    <div 
        className="slide-content" 
        style={{ backgroundImage: `url(${image})` }} 
    >
      <div className="carousel-card">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-text">{text}</p>
        <button className="signup-btn">
          {buttonText}
        </button>
      </div>
    </div>
);
}