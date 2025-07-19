import React, { useState, useEffect } from 'react';
import './Feedback.css';

const FeedbackCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Add your Google Form URL directly here
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeUmgj-1MZ6Z8aM9e4VVD6nOLtOJp4QaCMLJQk6NiWI6Ra4Ww/viewform?embedded=true";

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
    
    // Add floating effect on scroll
    const handleScroll = () => {
      const card = document.querySelector('.feedback-card');
      if (card) {
        const scrollPosition = window.scrollY;
        card.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`feedback-card ${isExpanded ? 'expanded' : ''} ${isVisible ? 'visible' : ''}`}>
      <div className="card-glow"></div>
      
      <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="header-content">
          <h3 className="card-title">
            <span className="title-text">Share Your Thoughts</span>
            <span className="title-underline"></span>
          </h3>
          <p className="card-subtitle">We value your feedback to enhance our service</p>
        </div>
        <div className="toggle-icon">
          <div className="icon-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="card-body">
        <div className="form-container">
          <iframe 
            src={googleFormUrl} 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            title="Feedback Form"
            className="google-form"
          >
            Loading...
          </iframe>
        </div>
        
        <div className="footer-note">
          <div className="security-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="security-text">All responses are confidential</span>
          <div className="particles">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="particle" style={{
                '--delay': `${i * 0.2}s`,
                '--size': `${Math.random() * 4 + 2}px`,
                '--left': `${Math.random() * 100}%`,
                '--duration': `${Math.random() * 3 + 5}s`
              }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;