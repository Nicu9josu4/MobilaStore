import React from 'react'
import './Slideranim.css'
import HeroSlider, { Slide } from "hero-slider"

import project1 from "./project1.jpg"
import project2 from "./project2.jpg"
import project3 from "./project3.jpg"


const image1 = project1;
const image2 = project2;
const image3 = project3;



const Slideranim = () => {
  return (
    <div className='slideranim'>
      <HeroSlider 
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100%"
      }}
      >
        <Slide 
        background={{
            backgroundImageSrc: image1,
            backgroundAttachment: "fixed",
            backgroundPosition: "center", 
            backgroundSize: "cover"
        }
      }
        /> 

<Slide 
        background={{
            backgroundImageSrc: image2,
            backgroundAttachment: "fixed",
            backgroundPosition: "center", 
            backgroundSize: "cover"
        }}
        /> 

<Slide 
        background={{
            backgroundImageSrc: image3,
            backgroundAttachment: "fixed",
            backgroundPosition: "center", 
            backgroundSize: "cover"
        }}
        /> 
      </HeroSlider>
    </div>
  )
}

export default Slideranim
