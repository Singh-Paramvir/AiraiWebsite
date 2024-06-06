import React from "react";
import '../Marquee/MarqueeEffect.css';
import Marquee from 'react-fast-marquee';
import cSharp from '../../../images/Service/marquee/c-sharp.png';
import unity from '../../../images/Service/marquee/unity.png';
import maya from '../../../images/Service/marquee/maya.png';
import blender from '../../../images/Service/marquee/blender.png';
import ps from '../../../images/Service/marquee/photoshop.png';
import ai from '../../../images/Service/marquee/illustrator.png';
import figma from '../../../images/Service/marquee/figma.png';
import react from '../../../images/Service/marquee/react.png';
import node from '../../../images/Service/marquee/node.png';
import flutter from '../../../images/Service/marquee/flutter.png';


function MarqueeEffect(){
    return(
        <section className="Marquee">
          <h1 className="text-center font-lato font-black text-2xl py-3">Technologies we  use</h1>
        <div>
            <Marquee className="marquee-container flex justify-between pb-6" speed={250}>
              <div className="image-wrapper" >
              <img src={cSharp} alt="pics" />
              </div>
              
            <div className="image-wrapper" >
            <img src={maya} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={blender} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={unity} alt="pics" height={70} />
            </div>
            <div className="image-wrapper">
            <img src={ps} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={figma} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={ai} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={react} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={node} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={flutter} alt="pics" height={70}/>
            </div>
            </Marquee>
          </div>
          </section>
    )
}

export default MarqueeEffect;