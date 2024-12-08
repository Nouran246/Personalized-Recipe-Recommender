import React from "react";
import cook from './cook.png'
const About=()=>{
return(
    <>
<section className="about-us">
  <div className="about-us-content">
    <div className="text-content">
      <h2>About Us</h2>
      <p>
        Welcome to our cooking website! We aim to bring creativity to your kitchen by providing recipes, tips, and resources to help you make the most of your dishes. Whether you're a beginner or a seasoned chef, we've got something for everyone.
      </p>
      <p>
        Explore new cuisines, learn cooking techniques, and join a community of food enthusiasts who share your passion for delicious meals!
      </p>
    </div>
    <div className="image-container">
      <img src={cook} alt="About us visual" className="about-us-image" />
    </div>
  </div>
</section>

</>
)
}
export default About;