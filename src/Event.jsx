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

  // Duplicate cards for seamless looping
  const cards = [...items, ...items];

  return (
    <section className="carousel-section">

      <h2 className="section-title">
        {title}
      </h2>

      <div className="coverflow-wrapper">

        <div className="coverflow-track">

          {cards.map((item, index) => (

            <div
              className="coverflow-card"
              key={`${item.id}-${index}`}
            >

              <div className="coverflow-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="coverflow-title">
                {item.title}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
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