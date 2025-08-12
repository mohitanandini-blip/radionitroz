import { useRef, useEffect, useState } from "react";
import "./Event.css";
import bgVideo from "/assets/videoplayback (1).mp4";
import glamitUp from "/assets/events/rampwalk.jpeg";
import mrn from "/assets/events/mrn.jpg";
import talentX from "/assets/events/talentx.jpeg";
import rhythmicMoment from "/assets/events/Rhythmic moments.jpeg";
import comedyNight from "/assets/events/comedynight.jpeg";
import movieMystic from "/assets/events/moviem.jpeg";
import nexusVerse from "/assets/events/NV.jpg";
import voiceItUp from "/assets/events/Vo.jpg";
import limelight from "/assets/events/rampwalk.jpeg";
import redfmCollab from "/assets/events/REDFM.jpg";
import matkiFod from "/assets/events/MFD.jpg";
import kholeDil from "/assets/events/kholedl.jpeg";
import nds from "/assets/events/nds.jpeg";
import ss from "/assets/events/success_stories.jpeg";
import prank from "/assets/events/prank.jpeg";
import ks from "/assets/events/Ks.jpeg";
import freshers_intro from "/assets/events/freshers_intro.jpeg";
import kj from "/assets/events/kj.jpeg";
import des from "/assets/events/des.jpeg";

const festCards = [
  { id: 1, image: glamitUp, title: "Glamit Up" },
  { id: 2, image: talentX, title: "Talent X" },
  { id: 3, image: rhythmicMoment, title: "Rhythmic Moments" },
  { id: 4, image: comedyNight, title: "Comedy Night" },
  { id: 5, image: movieMystic, title: "Movie Mystic" },
];

const eventCards = [
  { id: 6, image: nexusVerse, title: "Nexus Verse" },
  { id: 7, image: voiceItUp, title: "Voice It Out" },
  { id: 8, image: limelight, title: "Lime Light" },
  { id: 9, image: redfmCollab, title: "RedFM Collab" },
  { id: 10, image: matkiFod, title: "Matki Fod" },
  { id: 11, image: kholeDil, title: "Khole Dil" },
  { id: 12, image: mrn, title: "Meme Ran Tine" },
];

const videoSeriesCards = [
  { id: 13, image: ss, title: "Success Stories" },
  { id: 14, image: prank, title: "Prank Videos" },
  { id: 15, image: ks, title: "Karthick & Hemanika" },
  { id: 16, image: freshers_intro, title: "Freshers' Intro" },
  { id: 17, image: kj, title: "Kasauti Jhanduon ki" },
  { id: 18, image: nds, title: "NIT Durgapur Special" },
  { id: 19, image: des, title: "Dil ki ek diary se" },
];

const Carousel = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const rotationIntervalRef = useRef(null);

  const handleRadioChange = (index) => {
    setActiveIndex(index);
    resetAutoRotation();
  };

  const resetAutoRotation = () => {
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
    }
    rotationIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    if (Math.abs(deltaX) > 50) {
      const direction = deltaX > 0 ? -1 : 1;
      setActiveIndex((prev) => (prev + direction + items.length) % items.length);
      startXRef.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    resetAutoRotation();
  };

  useEffect(() => {
    resetAutoRotation();
    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, [items.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('mousedown', handleMouseDown);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="carousel-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="radio-controls">
          {items.map((_, index) => (
            <label key={index} className="radio-label">
              <input
                type="radio"
                name={`carousel-${title}`}
                checked={activeIndex === index}
                onChange={() => handleRadioChange(index)}
              />
              <span className="radio-custom"></span>
            </label>
          ))}
        </div>
      </div>
      <div className="carousel-container">
        <div 
          className="carousel-wheel" 
          ref={carouselRef}
        >
          {items.map((item, index) => {
            const offset = (index - activeIndex + items.length) % items.length;
            let transform = '';
            let zIndex = 0;
            let opacity = 1;
            
            if (offset === 0) {
              transform = 'translateX(0) scale(1)';
              zIndex = 5;
            } else if (offset === 1 || offset === items.length - 1) {
              const direction = offset === 1 ? 1 : -1;
              transform = `translateX(${direction * 80}%) scale(0.9)`;
              zIndex = 4;
              opacity = 0.8;
            } else if (offset === 2 || offset === items.length - 2) {
              const direction = offset === 2 ? 1 : -1;
              transform = `translateX(${direction * 130}%) scale(0.7)`;
              zIndex = 3;
              opacity = 0.6;
            } else {
              transform = 'translateX(0) scale(0)';
              zIndex = 0;
              opacity = 0;
            }

            return (
              <div
                key={item.id}
                className={`carousel-item ${offset === 0 ? 'active' : ''}`}
                style={{ 
                  transform,
                  zIndex,
                  opacity,
                  transition: 'all 0.5s ease-out'
                }}
                onClick={() => handleRadioChange(index)}
              >
                <img src={item.image} alt={item.title} />
                <div className="carousel-caption">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Event = () => (
  <div className="event-container">
    <h1 className="page-title">Wave Craze</h1>
    <div className="subtitle-video-container">
      <div className="home-text">
        <p className="subtitle">
          Where creativity sparks like wildfire and every heartbeat echoes
          with passion, a celebration like no other emerges at NIT Durgapur —
          Wavecraze! As the curtain rises, Wavecraze unveils a treasure trove
          of surprises, thrilling events, and unforgettable memories.
        </p>
      </div>
      <div className="video-card">
        <div className="responsive-video-wrapper">
          <video
            src={bgVideo}
            autoPlay
            muted
            loop
            controls
            playsInline
            className="event-video"
          />
        </div>
      </div>
    </div>
    <Carousel title="Fest Highlights" items={festCards} />
    <Carousel title="Events" items={eventCards} />
    <Carousel title="Videos & Series" items={videoSeriesCards} />
  </div>
);

export default Event;