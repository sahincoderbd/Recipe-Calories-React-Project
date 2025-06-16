import React from 'react';
import CookingImage from '../assets/cooking.png'
import '../App.css'
const Hero = () => {
    return (
<div className='container mx-auto px-2'>
<div
  className="hero min-h-[400px] lg:min-h-[700px] rounded-2xl"
  style={{
    backgroundImage:
      `url(${CookingImage})`,
  }}
>
  <div className="hero-overlay rounded-2xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-full lg:max-w-2/3">
      <h1 className="mb-5 text-2xl lg:text-4xl font-bold text-accent">Discover an exceptional cooking<br></br> class tailored for you!</h1>
      <p className="mb-5">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+
       coding problems to become an exceptionally well world-class Programmer.
      </p>
      <div className='flex gap-2 lg:gap-4 justify-center'>
      <button className="btn btn-accent  rounded-full">Explore Now</button>
      <button className="btn bg-transparent text-primary rounded-full border-primary">Our Feedback</button>

      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Hero;