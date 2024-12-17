import React from "react";
import back1 from './back1.jpg';
const Home =()=>{
    return(
     <>
   <div class="screen1">
    <div class="text-container">
        <h1>Wanna Find Out What You Can Make From <span>Dishes?</span></h1>
        <div class="search-container">
            <input type="text" placeholder="Search for a recipe..." class="search-bar"></input>
            <button class="search-button">Let's Begin</button>
        </div>
    </div>
    <img src={back1} alt="An image of cooking" class="background_img" />
</div>

     
     </>   
    )
}
export default Home;